const soap = require('soap');
const express = require('express');
const app = express();
const { ACCESS_TOKEN } = process.env;

app.get('/', async (req, res) => {
	if (!req.query.text) return res.status(400).json({ error: 'The parameter "text" is required.' });
	if (!req.query.token) return res.status(400).json({ error: 'The parameter "token" is required.' });
	if (req.query.token !== ACCESS_TOKEN) return res.status(401).json({ error: 'Invalid token.' });
	const client = await soap.createClientAsync('https://www.yodaspeak.co.uk/webservice/yodatalk.php?wsdl');
	const response = await client.yodaTalkAsync({ inputText: req.query.text });
	return res.status(200).json({ response: response.return });
});

app.listen(process.env.PORT);
