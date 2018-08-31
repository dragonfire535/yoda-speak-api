require('dotenv').config();
const soap = require('soap');
const polka = require('polka');
const send = require('@polka/send-type');
const app = polka();
const { version } = require('./package');
const { ACCESS_TOKENS, PORT } = process.env;
const tokens = ACCESS_TOKENS.split(',');

app.get('/', (req, res) => send(res, 200, { version }));

app.get('/speak', async (req, res) => {
	if (!req.query.token) return send(res, 400, { version, error: 'The parameter "token" is required.' });
	if (!tokens.includes(req.query.token)) return send(res, 401, { version, error: 'Invalid token.' });
	if (!req.query.text) return send(res, 400, { version, error: 'The parameter "text" is required.' });
	try {
		const client = await soap.createClientAsync('https://www.yodaspeak.co.uk/webservice/yodatalk.php?wsdl');
		const response = await client.yodaTalkAsync({ inputText: req.query.text });
		return send(res, 200, { version, response: response[0].return });
	} catch (err) {
		return send(res, 500, { version, error: err.message });
	}
});

app.listen(PORT);
