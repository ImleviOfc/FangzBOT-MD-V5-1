let handler  = async (m, { conn, usedPrefix }) => { 
	conn.sendButton(m.chat, `Halo Kak👋\nsaya adalah VEN-BOT, VEN-BOT adalah Sebuah Bot yang bisa membantumu di grup ini, klik tombol dibawah ini jika kamu ingin menggunakan bot!`.trim(), `${wm3}`, ['📮Menu', '.menu'], m)
	}

handler.command = /^(salken)$/i

export default handler 

let wm = global.botwm


//PERCOBAAN
