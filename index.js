const soap = require('soap');
const express = require('express');
const app = express();

app.get('/', async (req, res) => {
	if (!req.query.text) return res.status(400).json({ error: 'Bad Request' });
	const client = await soap.createClientAsync('https://www.yodaspeak.co.uk/webservice/yodatalk.php?wsdl');
	const response = await client.yodaTalkAsync({ inputText: req.query.text });
	return res.status(200).json({ response: response.return });
});

app.listen(process.env.PORT);
