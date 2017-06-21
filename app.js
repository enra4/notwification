const settings = require('./settings.json')
const request = require('request')
const splush = require('splush')(settings.splushKey)

let oldStreamIDs = []
setInterval(() => {
	for (let channel of settings.channels) {
		let url = `https://api.twitch.tv/kraken/streams/${channel}?client_id=${settings.twitchKey}`
		request(url, (error, response, body) => {
			if (!error && body) {
				try {
					body = JSON.parse(body)
					if (body.stream) {
						if (oldStreamIDs.indexOf(body.stream._id) === -1) {
							splush.push(`${channel} is live on twitch!`)
							oldStreamIDs.push(body.stream._id)
						}
					}
				} catch (e) {
					console.log(e)
				}
			}
		})
	}
}, 1000 * 15) // check every 15 sec
