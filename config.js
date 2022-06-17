

const fs = require('fs')
const chalk = require('chalk')

// Other
let gg = process.env.MODS
if (!gg) {
	gg = "919609900020"
}
global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "none"
global.port = process.env.PORT || 8080
global.packname = process.env.PACKNAME || "by Arus",
global.prefix= process.env.PREFIX || "-",
global.author = process.env.AUTHOR || "ZEROTWO",
global.sessionName = 'arus',
global.name = process.env.NAME || "ZeroTwo",
global.owner = ['923087880256']
global.thumb = fs.readFileSync('./src/info.jpeg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
