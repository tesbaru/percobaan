global.d = new Date()
global.calender = d.toLocaleDateString('id')

global.prefix = "." // command prefix
global.ownNumb = "6287776737992" // bot owner // owner name
global.ownName = "DEAN" // isi nama kalian
global.ownSc = `Kyeruu-Botz` //ini gausah di ubah

// GLOBAL MESS - Gausah Di apa²in Tar Eror
global.mess = {
     delay: '3000', // Set Jeda Atur Di sini 1000 = 1 detik
     owner: 'lu siapa?\n*GAUSAH SO ASIK*',
     group: "khusus di dalam group",
     inf: "𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗦𝗜 ⚠️\n› sc ini di recode oleh OcongBotz\n› jangan lupa subs yt saya\n› happfun your day\n\n𝗥𝗨𝗟𝗘𝗦 𝗣𝗨𝗦𝗛 ‼️\n› minimal push 1 GC isinya 2k member\n  kalo mau di ubah di cofig.js\n› untuk fitur push yg gada set jeda nya\n  gua setting standard [ 3000 ] kalo mau\n  di ubah tinggal cek di file config.js\n\n\n*LINK group :*\n\https://chat.whatsapp.com/B5iz33KE0HYGHPjtycF4Ji\n\n*OM-Botz  :*\n\nwa.me/6281254835351"
}
// BATAS GLOBAL MESS
global.thumb = require('fs').readFileSync("./image/thumb.png")
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log(__filename+' updated!')
	delete require.cache[file]
	require(file)
})

// BASE SCRIPT BY FOXhost
// NO ENC BISA BUY 
// NO RECONNECT
// TX TO Alpha05 
// MODULE BAILEYS WHISKEY

// OWNER
// wa.me/6281254835351