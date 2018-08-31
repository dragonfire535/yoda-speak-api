# Yoda Speak API
[![Build Status](https://travis-ci.org/dragonfire535/yoda-speak-api.svg?branch=master)](https://travis-ci.org/dragonfire535/yoda-speak-api)
[![Discord Server](https://discordapp.com/api/guilds/252317073814978561/embed.png)](https://discord.gg/sbMe32W)
[![Donate on Patreon](https://img.shields.io/badge/patreon-donate-orange.svg)](https://www.patreon.com/dragonfire535)
[![Donate on PayPal](https://img.shields.io/badge/paypal-donate-blue.svg)](https://www.paypal.me/dragonfire535)

The Yoda Speak API is an API for converting text into Yoda Speak. It uses the
[Yoda-Speak Generator](http://yodaspeak.co.uk/) API.

## Basic Usage
`GET /speak` - Convert text to Yoda Speak.

Params:
- `token` - A token, must be one of the ones defined in your `process.env`.
- `text` - The text to convert.

Response:
```json
{
	"version": "<version>",
	"response": "<converted text>"
}
```
