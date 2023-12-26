//===============✨Créditos✨================//
// Base com travas e vários comandos atualizada 2023
// Base feita totalmente por miiiiiiiii venom
// Caso for fazer seu bot deixe meus créditos
// E se for postar em algun lugar tbm?!!!
// Não retire os créditos ou vc vai perder o dedo 😩
// Canal: https://youtube.com/@VenomModss
// WhatsApp: wa.me/559784388524
//===============✨Créditos✨================//
require('./configuração')
var { WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@Venom/baileys')
var fs = require('fs')
var util = require('util')
var chalk = require('chalk')
var os = require('os')
var axios = require('axios')
var ffmpeg = require('fluent-ffmpeg')
var moment = require('moment-timezone')
var matemática = require('mathjs')
var { color, bgcolor } = require('./dados/lib/color')
var { exec, spawn, execSync } = require("child_process")
var { venomtxt4, venomtxt5 } = require('./dados/travas/travas.js')
var { ngazap } = require('./dados/travas/ngazap')
var { venomtxt1 } = require('./dados/travas/venomtxt2')
var { venomtxt2 } = require('./dados/travas/venomtxt2')
var { venomtxt3 } = require('./dados/travas/venomtxt3')
var { venomtxt6 } = require('./dados/travas/venomtxt6.js')
var { venomiphone } = require('./dados/travas/venomiphone')
var { venomiphone1 } = require('./dados/travas/venomiphone1')
var { venomiphone2 } = require('./dados/travas/venomiphone2')
var { venomiphone3 } = require('./dados/travas/venomiphone3')
var { venomiphone4 } = require('./dados/travas/venomiphone4')
var { venomiphone5 } = require('./dados/travas/venomiphone5')
var { venomiphone6 } = require('./dados/travas/venomiphone6')
var { carrinho } = require('./dados/travas/carrinho')
var { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./dados/lib/myfunc')
var { menu } = require('./dados/menu/menu.js')
//===============🕸️by Venom Mods🕸️================//

module.exports = venom = async (venom, mek, chatUpdate, store) => {
 try {
var body = (mek.mtype === 'conversation') ? mek.message.conversation : (mek.mtype == 'imageMessage') ? mek.message.imageMessage.caption : (mek.mtype == 'videoMessage') ? mek.message.videoMessage.caption : (mek.mtype == 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (mek.mtype == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : (mek.mtype == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (mek.mtype == 'templateButtonReplyMessage') ? mek.message.templateButtonReplyMessage.selectedId : (mek.mtype === 'messageContextInfo') ? (mek.message.buttonsResponseMessage?.selectedButtonId || mek.message.listResponseMessage?.singleSelectReply.selectedRowId || mek.text) : ''
var budy = (typeof mek.text == 'string' ? mek.text : '')
var prefixo = prefixos ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : pefixos ?? global.prefixo
var chath = (mek.mtype === 'conversation' && mek.message.conversation) ? mek.message.conversation : (mek.mtype == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (mek.mtype == 'documentMessage') && mek.message.documentMessage.caption ? mek.message.documentMessage.caption : (mek.mtype == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (mek.mtype == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (mek.mtype == 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (mek.mtype == 'templateButtonReplyMessage') && mek.message.templateButtonReplyMessage.selectedId ? mek.message.templateButtonReplyMessage.selectedId : (mek.mtype == "listResponseMessage") ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (mek.mtype == "messageContextInfo") ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
var isCmd = body.startsWith(prefixo)
var comando = body.replace(prefixo, '').trim().split(/ +/).shift().toLowerCase()//Kalau mau Single prefix Lu ganti pake ini = var comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var pushname = mek.pushName || "Sem Nome"
var nome = mek.pushName || "Sem Nome"
var numerodobot = await venom.decodeJid(venom.user.id)
var isDono = [numerodobot, ...dono].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(mek.sender)
var text = q = args.join(" ")
var { type, quotedMsg, mentioned, now, fromMe } = mek
var quoted = mek.quoted ? mek.quoted : mek
var mime = (quoted.msg || quoted).mimetype || ''
var isMedia = /image|video|sticker|audio/.test(mime)
var from = mek.key.remoteJid
var groupMetadata = mek.isGroup ? await venom.groupMetadata(from).catch(e => {}) : ''
var sender = mek.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
var grupoNome = mek.isGroup ? groupMetadata.subject : ''
var membros = mek.isGroup ? await groupMetadata.participants : ''
var administrador = mek.isGroup ? await getGroupAdmins(membros) : ''
var isBotAdmins = mek.isGroup ? administrador.includes(numerodobot) : false
var isAdmins = mek.isGroup ? administrador.includes(mek.sender) : false
var AntiLink = mek.isGroup ? antilink.includes(from) : false 
var content = JSON.stringify(mek.message)
var isAntiRacismo = mek.isGroup ? salvarantipalavrao.includes(from) : false
var numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"        
var mentionByReply = mek.mtype == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
var mentionByTag = mek.mtype == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
var Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
var isImage = (type == 'imageMessage')
var isVideo = (type == 'videoMessage')
var isDocu = (type == 'documentMessage')
var isSticker = (type == 'stickerMessage')
var qtod = mek.quoted? "true":"false"
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
var isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
var qmsg = (quoted.msg || quoted)
var info = mek;
var mek = mek;
var msg = mek;

// hora e data
var hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

var data = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
//===============🕸️by Venom Mods🕸️================//}
try {
perfil = await venom.profilePictureUrl(mek.sender, 'image')
} catch (err) {
perfil = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
fotouser = await getBuffer(perfil)
var responder = (teks) => {
return venom.sendMessage(from, {
    text: teks
   },{ quoted: mek })
  
}

// lista aleatória
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

var documento = [venomdoc1,venomdoc2,venomdoc3,venomdoc4,venomdoc5,venomdoc6]
var venomdocs = pickRandom(documento)
//===============*by Venom Mods*================//
if (!venom.public) {
if (!mek.key.fromMe) return
}
        if (mek.message) 
            {           
            console.log(
            chalk.black(chalk.bgRed('\n\n[ NOVA MENSAGEM ]')) + '\n\n',
            chalk.bgWhite(mek.isGroup ? 'Em Grupo :' + grupoNome: 'No Privado :' + mek.sender.replace(/[^0-9]/g, '') ) + '\n\n',
            chalk.bgWhite('Nome:'), chalk.bgWhite(nome) + '\n\n',        
            chalk.bgWhite('Data:'), chalk.bgWhite(chalk.bgWhite(data)) + '\n\n',
            chalk.bgWhite('Msg:'), chalk.bgWhite(chalk.bgWhite(budy || mek.mtype)) + '\n\n',
            chalk.bgWhite('Hora:'), chalk.bgWhite(chalk.bgWhite(hora)) + '\n\n',
            chalk.bgWhite('Tipo:'), chalk.bgWhite(chalk.bgWhite(mek.mtype)) + '\n\n',                            
            chalk.black(chalk.bgRed('[ VENOM BASE V4 ]')) + '\n\n'
            )
            }
//===============🕸️by Venom Mods🕸️================// 

// AntiLink
if (AntiLink) {
linkdonossogrupo = await venom.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkdonossogrupo}`)) {
VenomEnviarDoc2023(`「 Link Detectado 」\n\nVoce enviou um link só não irei te remover porque este link e do nosso grupo!!`)
} else if (isUrl(mek.text)) {
elespodem = `「 Link Detectado 」\n\nAdms podem enviar qualquer tipo de link!`
if (isAdmins) return VenomEnviarDoc2023(elespodem)
if (!isBotAdmins) return VenomEnviarDoc2023(elespodem)
if (isDono) return VenomEnviarDoc2023(elespodem)
usuário = mek.sender
await venom.groupParticipantsUpdate(from, [usuário], 'remove').then((res) => VenomEnviarDoc2023(jsonformat(res))).catch((err) => VenomEnviarDoc2023(jsonformat(err)))
venom.sendMessage(from, {text:`「 Link Detectado 」\n\n@${usuário.split("@")[0]} Foi removido por posta links sem autorização!`, contextInfo:{mentionedJid:[kice]}}, {quoted: mek})
} else {
}
}
let list = []
for (let i of dono) {
list.push({
displayName: await venom.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await venom.getName(i + '@s.whatsapp.net')}\n
FN:${await venom.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:inodsanjaya1998@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://linktr.ee/sheseescheese\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

try {
ppuser = await venom.profilePictureUrl(mek.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

var RespostaEnviado = (hehe) => {
return venom.sendMessage(from, {
text: 'Enviado com sucesso'
},{quoted: mek}
)}

function _0x963e(_0x10562c,_0x2ac941){var _0xe348b9=_0xe348();return _0x963e=function(_0x963e4,_0x1e0056){_0x963e4=_0x963e4-0x75;var _0x2519b0=_0xe348b9[_0x963e4];return _0x2519b0;},_0x963e(_0x10562c,_0x2ac941);}function _0xe348(){var _0x2ef839=['94412JLCGLl','4YAjsKa','774304fXHUHb','1904441XMIqBt','18CgBiIo','863260FDUNLO','494724HaeIvK','6235JJdeyD','829494TgyFeR','55rEszpK'];_0xe348=function(){return _0x2ef839;};return _0xe348();}(function(_0x5d1bf8,_0x2d550e){var _0x164bc0=_0x963e,_0x5b7f2d=_0x5d1bf8();while(!![]){try{var _0x1717d9=parseInt(_0x164bc0(0x7b))/0x1+parseInt(_0x164bc0(0x75))/0x2*(-parseInt(_0x164bc0(0x7a))/0x3)+-parseInt(_0x164bc0(0x7e))/0x4*(-parseInt(_0x164bc0(0x7d))/0x5)+-parseInt(_0x164bc0(0x7c))/0x6+parseInt(_0x164bc0(0x77))/0x7+parseInt(_0x164bc0(0x76))/0x8*(parseInt(_0x164bc0(0x78))/0x9)+-parseInt(_0x164bc0(0x79))/0xa;if(_0x1717d9===_0x2d550e)break;else _0x5b7f2d['push'](_0x5b7f2d['shift']());}catch(_0x1ab851){_0x5b7f2d['push'](_0x5b7f2d['shift']());}}}(_0xe348,0x2b3dc));var VenomEnviarDoc2023=_0x1e70de=>{venom['sendMessage'](from,{'document':thumbmenu,'mimetype':venomdocs,'fileName':nomedobot,'caption':_0x1e70de,'contextInfo':{'externalAdReply':{'title':nomedobot,'body':nomedodono,'reviewType':'PHOTO','thumbnail':thumbmenu,'sourceUrl':sourceUrlDono,'mediaType':0x2}}},{'quoted':mek});};
(function(_0x349b26,_0x449483){var _0x47251a=_0x5887,_0x5950b6=_0x349b26();while(!![]){try{var _0x594d22=parseInt(_0x47251a(0x115))/0x1*(-parseInt(_0x47251a(0x118))/0x2)+-parseInt(_0x47251a(0x113))/0x3+parseInt(_0x47251a(0x110))/0x4*(-parseInt(_0x47251a(0x111))/0x5)+parseInt(_0x47251a(0x10e))/0x6+parseInt(_0x47251a(0x116))/0x7+-parseInt(_0x47251a(0x114))/0x8+parseInt(_0x47251a(0x10f))/0x9;if(_0x594d22===_0x449483)break;else _0x5950b6['push'](_0x5950b6['shift']());}catch(_0x383387){_0x5950b6['push'](_0x5950b6['shift']());}}}(_0x3fb9,0x1ef70));function _0x3fb9(){var _0xa51b0a=['2LjIjOY','1227426YwuKcc','3938589PxJviM','1900vmAlQq','1945LCEPgM','sendMessage','143157nwCIgL','1751352fvJjaz','165287UDUwUs','709380ftRbHI','PHOTO'];_0x3fb9=function(){return _0xa51b0a;};return _0x3fb9();}function _0x5887(_0x164070,_0x21c1ab){var _0x3fb92d=_0x3fb9();return _0x5887=function(_0x588708,_0x1c7c9a){_0x588708=_0x588708-0x10e;var _0x5e399b=_0x3fb92d[_0x588708];return _0x5e399b;},_0x5887(_0x164070,_0x21c1ab);}var VenomEnviarFoto2023=_0x8aa17a=>{var _0x55658c=_0x5887;venom[_0x55658c(0x112)](from,{'image':thumbmenu,'caption':_0x8aa17a,'contextInfo':{'externalAdReply':{'title':nomedobot,'body':nomedodono,'reviewType':_0x55658c(0x117),'thumbnail':thumbmenu,'sourceUrl':sourceUrlDono,'mediaType':0x2}}},{'quoted':mek});};
//===============🕸️by Venom Mods🕸️================//


switch(comando) {

//case de exemplos
case 'audio-mp3':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
venom.sendMessage(from, {
audio: fs.readFileSync('./dados/audio/venom.mp3'),
mimetype: 'audio/mp4'
},
{quoted: mek
})
break
case 'nota-devoz':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
venom.sendMessage(from, {
audio: fs.readFileSync('./dados/audio/venom.mp3'),
mimetype: 'audio/mp4',
ptt: true
},
{quoted: mek
})
break
case 'imagem':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
venom.sendMessage(from, {
image: fs.readFileSync('./dados/imagem/venombase.jpg')
},
{quoted: mek
})
break
case 'imagem-legenda':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
venom.sendMessage(from, {
image: fs.readFileSync('./dados/imagem/venombase.jpg'),
caption: 'Legenda da imagem aqui!'
},
{quoted: mek
})
break
case 'video':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
venom.sendMessage(from, {
video: fs.readFileSync('./dados/video/venombase.mp4'),
mimetype: 'video/mp4'
},
{quoted: mek
})
break
case 'gif':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
venom.sendMessage(from,
{video: fs.readFileSync('./dados/video/venom.mp4'),
gifPlayback: true},
{quoted: mek})
break
case 'gif-legenda':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
venom.sendMessage(from,
{video: fs.readFileSync('./dados/video/venom.mp4'),
caption: 'Legenda do gif aqui!',
gifPlayback: true},
{quoted: mek})
break
case 'enquete':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
venom.relayMessage(from, 
{ pollCreationMessage: {
name: "Venom Mods?",
options: [
{ "optionName": 'Sim' },
{ "optionName": 'claro' },
{ "optionName": 'Não'}],
selectableOptionsCount: 3
}, messageContextInfo: {
messageSecret: "QEwFogrlUlBtJgIiRuBYBjXD7VZwmpu/8rGXYb2MuaA="}
},{quoted: mek})
break
case 'video-legenda':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
venom.sendMessage(from, {
video: fs.readFileSync('./dados/audio/venombase.mp4'),
mimetype: 'video/mp4',
caption: 'Legenda do video aqui!'
},
{quoted: mek
})
break
case 'localização':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
venom.sendMessage(from, {
location: {
logintude: -16272.88722,
latitude: -77555.8655,
name: nomedobot
}},
{quoted: mek
})
break
case 'documento':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
venom.sendMessage(from, {
document: fs.readFileSync('./dados/imagem/venombase.jpg'),
mimetype: 'application/zip',
fileName: 'Nome do documento aqui!'
},
{quoted: mek
})
break
case 'figurinha': 
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
venom.sendMessage(from, {
sticker: fs.readFileSync('./dados/figurinhas/venom.webp')
},
{quoted: mek
})
break
case 'reagir':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
venom.sendMessage(from, {
react: { text: reação, key: mek.key
}
})              
break
//===============🕸️by Venom Mods🕸️================//
//case menu
case 'menu': 
venom.sendMessage(from,
{video: fs.readFileSync('./dados/video/venom.mp4'),
caption: menu(nomedobot, prefixo, nome, hora, data),
gifPlayback: true},
{quoted: mek})
break
// cases de travas by venom
case 'trava1': 
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
VenomEnviarDoc2023(`🤬By Venom Mods🤬 ${venomiphone}`)
break
case 'trava2':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
VenomEnviarDoc2023(`🤬By Venom Mods🤬 ${venomiphone1}`) 
break
case 'trava3':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
VenomEnviarDoc2023(`🤬By Venom Mods🤬 ${venomiphone2}`) 
break
case 'trava4':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
VenomEnviarDoc2023(`🤬By Venom Mods🤬 ${venomiphone3}`) 
break
case 'trava5':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
VenomEnviarDoc2023(`🤬By Venom Mods🤬 ${venomiphone4}`) 
break
case 'trava6':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
VenomEnviarDoc2023(`🤬By Venom Mods🤬 ${venomiphone5}`) 
break
case 'trava7':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
VenomEnviarDoc2023(`🤬By Venom Mods🤬 ${venomiphone6}`) 
break
case 'trava8':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
VenomEnviarDoc2023(`🤬By Venom Mods🤬 ${venomtxt1}`) 
break
case 'trava9':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
VenomEnviarDoc2023(`🤬By Venom Mods🤬 ${venomtxt2}`)
break
case 'trava10':
VenomEnviarDoc2023(`🤬By Venom Mods🤬 ${venomtxt3}`)
break
case 'trava11':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
VenomEnviarDoc2023(`🤬By Venom Mods🤬 ${venomtxt4}`)
break
case 'trava12':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
VenomEnviarDoc2023(`🤬By Venom Mods🤬 ${venomtxt5}`)
break
case 'trava13': 
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
VenomEnviarDoc2023(`🤬By Venom Mods🤬 ${venomtxt6}`)
break
//===============🕸️by Venom Mods🕸️================//
//case de fazer figurinha
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) return VenomEnviarDoc2023(`Marque uma imagem ou vídeo com o comando  ${prefixo + comando}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await venom.enviarImageAsSticker(from, media, msg, { packname: global.packnome, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return VenomEnviarDoc2023('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await venom.enviarVideoAsSticker(from, media, msg, { packname: global.packnome, author: global.author })
await fs.unlinkSync(encmedia)
} else {
return VenomEnviarDoc2023(`Envie fotos/Videos com a legenda ${prefixo + comando}\n Duração do video somente 1-9 segundos`)
}
}
break
//===============🕸️by Venom Mods🕸️================//
case 'smeme':
if (!text) return VenomEnviarDoc2023( `Marque uma imagem com o comando ${prefixo + comando} Venom|Base`)
if (/image/.test(mime)) {
RespostaEnviado();
mee = await venom.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
venom.enviarImageAsSticker(mek.chat, kaytid, msg, { packname: global.packname, author: global.author })
}
break
//===============🕸️by Venom Mods🕸️================//
case 'toimage': case 'toimg': {
if (!quoted) return VenomEnviarDoc2023(`Marque uma figurinha com o comando ${prefixo + comando}`)
if (!/webp/.test(mime)) return VenomEnviarDoc2023(`Marque uma figurinha com o comando ${prefixo + comando}`)
let media = await venom.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
venom.sendMessage(from, { image: buffer }, { quoted: mek })
fs.unlinkSync(ran)
})
}
break
//===============🕸️by Venom Mods🕸️================//
case 'clonarperfil': {
if (!isDono) return VenomEnviarDoc2023(resposta.dono)
if (qtod === "true") {
try {
pporg = await venom.profilePictureUrl(mek.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
venom.sendMessage(from, { image : { url : pporg }, caption:`Done` }, { quoted: mek })
} else if (qtod === "false") {
try {
pporgs = await venom.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
venom.sendMessage(from, { image : { url : pporgs }, caption:`Aqui esta` }, { quoted: mek })
}
}
break
//===============🕸️by Venom Mods🕸️================//
case 'smeme':
case 'delete': case 'deletar': {
if (!isDono) return VenomEnviarDoc2023(resposta.dono)
if (!mek.quoted) throw false
let { chat, fromMe, id, isBaileys } = mek.quoted
if (!isBaileys) return VenomEnviarDoc2023('*Só posso apagar minhas mensagens!!*')
venom.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: mek.quoted.id, participant: mek.quoted.sender } })
}
break
case 'linkgroup': case 'linkdogrupo': {
if (!mek.isGroup) return VenomEnviarDoc2023(resposta.grupo)
if (!isBotAdmins) return VenomEnviarDoc2023(resposta.botadm)
let linkdogrupo = await venom.groupInviteCode(from)
venom.sendText(from, `Link do grupo : ${groupMetadata.subject}\n\nhttps://chat.whatsapp.com/${linkdogrupo}\n`, msg, { detectLink: true })
}
break
//===============🕸️by Venom Mods🕸️================//
case 'revogarlink':
case 'resentarlink':
if (!isDono) return VenomEnviarDoc2023(resposta.dono)
if (!mek.isGroup) return VenomEnviarDoc2023(resposta.grupo)
if (!isBotAdmins) return VenomEnviarDoc2023(resposta.botadm)
venom.groupRevokeInvite(from)
break
//===============🕸️by Venom Mods🕸️================//
case 'marcar': 
case 'marcartodos': {
if (!isDono) return VenomEnviarDoc2023(resposta.dono)
if (!mek.isGroup) return VenomEnviarDoc2023(resposta.grupo)
let teks = `══✪〘 *👥* 〙✪══
 ➲ *Aviso : ${q ? q : ''}*\n\n`
for (let mem of membros) {
teks += `@${mem.id.split('@')[0]}\n`
}
venom.sendMessage(from, { text: teks, mentions: membros.map(a => a.id) }, { quoted: mek })
}
break
//===============🕸️by Venom Mods🕸️================//
case 'hidetag': {
if (!isDono) return VenomEnviarDoc2023(resposta.dono)
if (!mek.isGroup) return VenomEnviarDoc2023(resposta.grupo)
venom.sendMessage(from, { text : q ? q : '' , mentions: membros.map(a => a.id)}, { quoted: mek })
}
break
//===============🕸️by Venom Mods🕸️================//
       case 'group': case 'grupo': {       
       
if (!mek.isGroup) return VenomEnviarDoc2023(resposta.grupo)
if (!isAdmins) return VenomEnviarDoc2023(resposta.adm)
if (args[0] === 'fechar'){
    await venom.groupSettingUpdate(from, 'announcement').then((res) => VenomEnviarDoc2023(`Grupo fechado cok sucesso`)).catch((err) => VenomEnviarDoc2023(jsonformat(err)))
} else if (args[0] === 'abrir'){
    await venom.groupSettingUpdate(from, 'not_announcement').then((res) => VenomEnviarDoc2023(`Grupo aberto com sucesso`)).catch((err) => VenomEnviarDoc2023(jsonformat(err)))
} else {
venom.sendMessage(mek.chat, { text: `
 Configuração do grupo
 
Como fechar: ${prefixo}grupo fechar 

Como abrir: ${prefixo}grupo abrir

`},{ quoted: mek })
     }
    }
    break
//===============🕸️by Venom Mods🕸️================//
    case 'entrar': {
    if (!isDono) return VenomEnviarDoc2023(resposta.dono)
if (!text) return VenomEnviarDoc2023('Digite o comnado e o link ao lado')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return VenomEnviarDoc203e( 'Link Invalido')
VenomEnviarDoc2023('Em breve estarei no grupo')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await venom.groupAcceptInvite(result)
VenomEnviarDoc2023('*Pronto ja devo está no grupo verifique✔️*')
    }
    break
//===============🕸️by Venom Mods🕸️================//
case 'bloquear': {
if (!isDono) return VenomEnviarDoc2023(resposta.dono)
let users = mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.quoted ? mek.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await venom.updateBlockStatus(users, 'block')
}
break
//===============🕸️by Venom Mods🕸️================//
case 'desbloquear': {
if (!isDono) return VenomEnviarDoc2023(resposta.dono)
let users = mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.quoted ? mek.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await venom.updateBlockStatus(users, 'unblock')
}
break
//===============🕸️by Venom Mods🕸️================//
case 'nomegp': case 'setnomegp': {
if (!mek.isGroup) return VenomEnviarDoc2023(resposta.grupo)
if (!isBotAdmins) return VenomEnviarDoc2023(resposta.botadm)
if (!isAdmins) return VenomEnviarDoc2023(resposta.adm)
if (!text) return VenomEnviarDoc2023('*Digite o novo nome ao lado do comando*')
var nomedogrupo = text;
await venom.groupUpdateSubject(from, nomedogrupo)
}
break
//===============🕸️by Venom Mods🕸️================//
case 'descrição':
case 'descrição':
case 'setdesc':
case 'setdescricao':
case 'setdescrição':
if (!mek.isGroup) return VenomEnviarDoc2023(resposta.grupo)
if (!isBotAdmins) return VenomEnviarDoc2023(resposta.botadm)
if (!isAdmins) return VenomEnviarDoc2023(resposta.adm)
if (!text) VenomEnviarDoc2023('*Digite a nova descrição ao lado do comando*')
var novadescrição = text;
await venom.groupUpdateDescription(from, novadescrição)
break
//===============🕸️by Venom Mods🕸️================//
case 'visuunica': {
if (!isDono) return VenomEnviarDoc2023(resposta.dono)
if (!mek.quoted) return VenomEnviarDoc2023(`Marque uma foto ou video com o comando ${prefixo}visuunica`)
if (/image/.test(mime)) {
anu = await venom.downloadAndSaveMediaMessage(quoted)
venom.sendMessage(from, {image: {url: anu},viewOnce : true},{quoted: mek })
} else if (/video/.test(mime)) {
anu = await venom.downloadAndSaveMediaMessage(quoted)
venom.sendMessage(from, {video: {url: anu},viewOnce : true},{quoted: mek })
}
}
break
//===============🕸️by Venom Mods🕸️================//
case 'ban': {
if (!mek.isGroup) return VenomEnviarDoc2023(resposta.grupo)
if (!isBotAdmins) return VenomEnviarDoc2023(resposta.botadm)
if (!isAdmins) return VenomEnviarDoc2023(resposta.adm)
let users = mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.quoted ? mek.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await venom.groupParticipantsUpdate(from, [users], 'remove')
}
break
//===============🕸️by Venom Mods🕸️================//
case 'add': {
if (!mek.isGroup) return VenomEnviarDoc2023(resposta.grupo)
if (!isBotAdmins) return VenomEnviarDoc2023(resposta.botadm)
if (!isAdmins) return VenomEnviarDoc2023(resposta.adm)
let users = mek.quoted ? mek.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await venom.groupParticipantsUpdate(from, [users], 'add')
}
break
//===============🕸️by Venom Mods🕸️================//
case 'promover': {

if (!mek.isGroup) return VenomEnviarDoc2023(resposta.grupo)
if (!isBotAdmins) return VenomEnviarDoc2023(resposta.botadm)
if (!isAdmins) return VenomEnviarDoc2023(resposta.adm)
let users = mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.quoted ? mek.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await venom.groupParticipantsUpdate(from, [users], 'promote')
}
break
//===============🕸️by Venom Mods🕸️================//
case 'rabaixar': {
if (!mek.isGroup) return VenomEnviarDoc2023(resposta.grupo)
if (!isBotAdmins) return VenomEnviarDoc2023(resposta.botadm)
if (!isAdmins) return VenomEnviarDoc2023(resposta.adm)
let users = mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.quoted ? mek.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await venom.groupParticipantsUpdate(from, [users], 'demote')
}
break
//===============🕸️by Venom Mods🕸️================//
case 'publico': {
if (!isDono) return VenomEnviarDoc2023(resposta.dono)
venom.public = true
VenomEnviarDoc2023('*Modo público ativaro todos podem usar o bot!*')
}
break
//===============🕸️by Venom Mods🕸️================//
case 'privado': {
if (!isDono) return VenomEnviarDoc2023(resposta.dono)
venom.public = false
VenomEnviarDoc2023('*Modo privado ativado somente meu criador pode usar meus comando!*')
}
break
//===============🕸️by Venom Mods🕸️================//
case 'antilink': {
if (!isDono) return VenomEnviarDoc2023(resposta.dono)
if (!mek.isGroup) return VenomEnviarDoc2023(resposta.grupo)
if (!isBotAdmins) return VenomEnviarDoc2023(resposta.botadm)
if (!isAdmins) return VenomEnviarDoc2023(resposta.adm)
if (args.length < 1) return VenomEnviarDoc2023(` Configuração de antilink\n\nComo ativar: ${prefixo}antilink on\n\nComo desativar: ${prefixo}antilink off`)
if (args[0] === "on") {
if (AntiLink) return VenomEnviarDoc2023('Ja esta ativado!!!')
antilink.push(from)
VenomEnviarDoc2023('Antilink ativado com sucesso✔️')
} else if (args[0] === "off") {
if (!AntiLink) return VenomEnviarDoc2023('Ja esta desativado!!!')
let off = antilink.indexOf(from)
antilink.splice(off, 1)
VenomEnviarDoc2023('Anti link desativado com sucesso⭕')
} else {
VenomEnviarDoc2023('Use on pra ativar off ora desativar')
}
}
break
//===============🕸️by Venom Mods🕸️================//
case 'antipalavrao': 
case 'antiracismo': {
if (!isDono) return VenomEnviarDoc2023(resposta.dono)
if (!mek.isGroup) return VenomEnviarDoc2023('khusus group')
if (args[0] === "on") {
if (isAntiRacismo) return VenomEnviarDoc2023('Ja esta ativado!')
salvarantipalavrao.push(from)
var groupe = await venom.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
venom.sendMessage(from, {text: `${comando} ativado com sucesso ✔️`, contextInfo: { mentionedJid : mems }}, {quoted: mek})
} else if (args[0] === "off") {
if (!isAntiRacismo) return VenomEnviarDoc2023('Ja está desativado!')
let off = salvarantipalavrao.indexOf(from)
salvarantipalavrao.splice(off, 1)
VenomEnviarDoc2023(`${comando} desativado com sucesso ⭕`)
} else {
venom.sendMessage(mek.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Antitoxic on
Antitoxic off`}, { quoted: mek }) 
}
}
break
//===============🕸️by Venom Mods🕸️================//
case 'catalogo': {
if (!isDono) return VenomEnviarDoc2023(resposta.dono)
var messa = await prepareWAMessageMedia({ image: thumbvenom }, { upload: venom.waUploadToServer })
var catalog = generateWAMessageFromContent(mek.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"title": `🕸️By Venom Mods🕸️\n${venomtxt6}`,
"description": `🕸️By Venom Mods🕸️\n${venomtxt6}`,
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"url": "Wa.me/559784388524"
},
"businessOwnerJid": "559784388524@s.whatsapp.net",
}
}), { userJid: mek.chat, quoted: mek })
venom.relayMessage(mek.chat, catalog.message, { messageId: catalog.key.id })
}
break
//===============🕸️by Venom Mods🕸️================//
case 'calcular': {
if (args.length < 1) return VenomEnviarDoc2023(`*Exemplo :*\n${prefixo + comando} 2 + 2`)
let qsd = args.join(" ")
if (typeof matemática.evaluate(qsd) !== 'number') {
VenomEnviarDoc2023('Error')
} else {
VenomEnviarDoc2023(`\`\`\`「 Calculadora 」\`\`\`\n\n*•> Expressão :* ${qsd}\n*•> Resultado :* ${matemática.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
//===============🕸️by Venom Mods🕸️================//
case 'loc':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
var locationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": 1092929,
"degreesLongitude": 18299292,
"name": "🕸️𝐕𝐞𝐧𝐨𝐦 𝐌𝐨𝐝𝐬",
}
}), { userJid: from, quoted: mek}) 
venom.relayMessage(from, locationMessage.message, { messageId: locationMessage.key.id })
break
case 'webpag':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
var extendedTextMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"extendedTextMessage": {
"text": `🕸️𝐕𝐞𝐧𝐨𝐦 𝐌𝐨𝐝𝐬\n${venomtxt6}`,
"description": "🕸️𝐕𝐞𝐧𝐨𝐦 𝐌𝐨𝐝𝐬",
"title": "Rumo aos 5k🥺",
"previewType": "NONE",
"jpegThumbnail": fs.readFileSync('./dados/imagem/venombase.jpg'),
}
}), { userJid: from, quoted: mek })
venom.relayMessage(from, extendedTextMessage.message, { messageId: extendedTextMessage.key.id })
break
case 'convite':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./dados/imagem/venombase.jpg') }, { upload: venom.waUploadToServer })
var groupInviteMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "120363034719882460@g.us",
"inviteCode": "k312jC1cm2A1fC0P",
"inviteExpiration": " ",
"groupName": `🕸️𝐕𝐞𝐧𝐨𝐦 𝐌𝐨𝐝𝐬🕸️${carrinho}`,
"caption": `🕸️𝐕𝐞𝐧𝐨𝐦 𝐌𝐨𝐝𝐬🕸️`
}
}), { userJid: from, quoted: mek})
venom.relayMessage(from, groupInviteMessage.message, { messageId: groupInviteMessage.key.id })
break
case 'vcard':
if(!isDono) return VenomEnviarDoc2023(resposta.dono)
var contactMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"contactMessage": {
"displayName": "🕸️𝐕𝐞𝐧𝐨𝐦 𝐌𝐨𝐝𝐬🕸️",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;🕸️𝐕𝐞𝐧𝐨𝐦 𝐌𝐨𝐝𝐬🕸️;\nFN:🕸️𝐕𝐞𝐧𝐨𝐦 𝐌𝐨𝐝𝐬🕸️\nitem1.TEL:559784388524\nitem1.X-ABLabel:Celular\nEND:VCARD"
}}), { userJid: from, quoted: mek})
venom.relayMessage(from, contactMessage.message, { messageId: contactMessage.key.id })
break
case 'carrinho': { 
if (!isDono) return VenomEnviarDoc2023(resposta.dono)
{
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 9999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `🕸️By Venom Mods🕸️`,
"orderTitle": `🕸️By Venom Mods🕸️\n${venomtxt6}`,
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted: mek })
venom.relayMessage(from, order.message, { messageId: order.key.id })
}
}
break
//===============🕸️by Venom Mods🕸️================//
case 'enviar-loc': {
if (!isDono) return VenomEnviarDoc2023(resposta.dono)
if (!q) return VenomEnviarDoc2023(`Exemplo de como usar!\n ${prefixo+comando} número\n ${prefixo+comando} 5597xxxxx`)
numeroalvoloc = q + '@s.whatsapp.net'
var liveLocation = generateWAMessageFromContent(numeroalvoloc, proto.Message.fromObject({
"locationMessage": {
"Latitude": -6.9367014,
"Longitude": 107.7228574,
"name": `🕸️By Venom Mods`,
}
}), { userJid: numeroalvoloc})
venom.relayMessage(numeroalvoloc, liveLocation.message, { messageId: liveLocation.key.id })
}
break
//===============🕸️by Venom Mods🕸️================//
default:
//anti racismo e anti palavrão

if (isAntiRacismo && budy2.includes('sexo') || budy2.includes('gay') || budy2.includes('preto') || budy2.includes('feio') || budy2.includes('puta') || budy2.includes('lixo') || budy2.includes('viado') || budy2.includes('corno') || budy2.includes('burro') || budy2.includes('fds') || budy2.includes('porra') || budy2.includes('sua mãe') || budy2.includes('seu pai') || budy2.includes('gostosa') || budy2.includes('gostoso')) {
if (!mek.isGroup) return 
if (!isBotAdmins) return 
if (isAdmins) return VenomEnviarDoc2023('Adm pode falar palavrão e fazer racismo hehhehe')
textoAntiRacismo = `Adeus ${pushname} não aceitamos racismos e palavrão neste grupo!!`
VenomEnviarDoc2023(textoAntiRacismo)
await sleep(1600)
if(!JSON.stringify(membros).includes(sender)) return  
venom.groupParticipantsUpdate(from, [sender], 'remove')
}
}
} catch (err) {
console.log(util.format(err))}}

//===============✨Créditos✨================//
// Base com travas e vários comandos atualizada 2023
// Base feita totalmente por miiiiiiiii
// Caso for fazer seu bit deixe meus créditos
// E se for postar em algun lugar tbm?!!!
// Não retire os créditos ou vc vai perder o dedo 😩
// Canal: https://youtube.com/@VenomModss
// WhatsApp: wa.me/559784388524
//===============✨Créditos✨================//