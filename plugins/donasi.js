let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*────────「 DONATE 」 ────────*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
├ PULSA : 088239928939
├ DANA : 
└────
`.trim(), 'Donasi bg Biar Bot Nya on 24Jam', 'SEWA', '.sewa')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
