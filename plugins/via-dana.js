let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} DANA ${htka}

Hay👋‹, ingin Donasi?

💌 *Pembayaran*
💳 Via: Dana 
📞 Nomor: 085172446692
👤 A/n: Levi Xhiao
📝 Mitra: VEN-BOT
💰 Metode pembayaran: Online ( ~Cod~ )


®KLIK *SUDAH BAYAR* JIKA SUDAH TRANSFER 
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'QRIS', url: 'Menyusul'}},
    {index: 4, quickReplyButton: {displayText: 'Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['dana']
handler.tags = ['info']
handler.command = /^(donasidana)$/i
handler.private = true

export default handler
