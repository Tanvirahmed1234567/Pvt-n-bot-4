const fs = require("fs");
module.exports = {
  config:{
	name: "npx3",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
  const NAYAN = ['https://i.imgur.com/owM5hQ2.mp4','https://i.imgur.com/vcVDlHq.mp4','https://i.imgur.com/HvRllf7.mp4','https://i.imgur.com/tUsrdvo.mp4','https://i.imgur.com/wGDiT1b.mp4','https://i.imgur.com/yddLar3.mp4']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("🥰")==0 || body.indexOf("🤩")==0 || body.indexOf("😍")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "-♦𝗕Ø𝗦𝗦 𝗧𝗔𝗡𝗩𝗜𝗥♦-\n🔰___তুমি আমার প্রেম নও তুমি আমার মায়া জড়ানো ভালোবাসা_//-🌸🖤___🔰",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
