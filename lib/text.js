const moment = require('moment-timezone'); 
const listmenu = (prefix) => {
	let p = 0
	return ` *WHATSAPP-BOT*

*GROUP ONLY*
*${p+=1}.* ${prefix}group _open|close_
*${p+=1}.* ${prefix}antilink _on|off_
*${p+=1}.* ${prefix}antitagall _on|off_
*${p+=1}.* ${prefix}welcome _on|off_
*${p+=1}.* ${prefix}leave _on|off_
*${p+=1}.* ${prefix}setgroupicon _replyImage_
*${p+=1}.* ${prefix}setgroupname _text_
*${p+=1}.* ${prefix}setgroupdesc _text_
*${p+=1}.* ${prefix}hidetag _text_
*${p+=1}.* ${prefix}promote _@tag_
*${p+=1}.* ${prefix}demote _@tag_
*${p+=1}.* ${prefix}kick _@tag_
*${p+=1}.* ${prefix}add _number_
*${p+=1}.* ${prefix}getpp _@tag_
*${p+=1}.* ${prefix}tagall
*${p+=1}.* ${prefix}linkgroup
*${p+=1}.* ${prefix}revoke
*${p+=1}.* ${prefix}leave

*DOWNLOADER* 
*${p+=1}.* ${prefix}play _query_
*${p+=1}.* ${prefix}playvid _query_
*${p+=1}.* ${prefix}youtubedl _query_
*${p+=1}.* ${prefix}ytmp3 _link_
*${p+=1}.* ${prefix}ytmp4 _link_
*${p+=1}.* ${prefix}igstory _username_
*${p+=1}.* ${prefix}ig _link_
*${p+=1}.* ${prefix}tiktok _link_
*${p+=1}.* ${prefix}joox _song_


*STICKER*
*${p+=1}.* ${prefix}stickerwm _pack|author_
*${p+=1}.* ${prefix}takestick _pack|author_
*${p+=1}.* ${prefix}toimg _replySticker_
*${p+=1}.* ${prefix}togif _replySticker_
*${p+=1}.* ${prefix}semoji _emoji_
*${p+=1}.* ${prefix}stickerfire
*${p+=1}.* ${prefix}stickernobg
*${p+=1}.* ${prefix}stickergif
*${p+=1}.* ${prefix}sticker

*EDUCATION*
*${p+=1}.* ${prefix}nulis _text_
*${p+=1}.* ${prefix}brainly _query_
*${p+=1}.* ${prefix}kbbi _query_
*${p+=1}.* ${prefix}wiki _query_

*SEARCHING*
*${p+=1}.* ${prefix}playstore _apk_
*${p+=1}.* ${prefix}happymod _apk_
*${p+=1}.* ${prefix}iguser _username_
*${p+=1}.* ${prefix}igstalk _username_
*${p+=1}.* ${prefix}ytsearch _query_
*${p+=1}.* ${prefix}ytplaylist _query_
*${p+=1}.* ${prefix}ytchannel _channel_
*${p+=1}.* ${prefix}shoope _product_
*${p+=1}.* ${prefix}spotify _song_
*${p+=1}.* ${prefix}gsmarena _hp_
*${p+=1}.* ${prefix}searchmusic _replyAudio_
*${p+=1}.* ${prefix}wallpaper _query_
*${p+=1}.* ${prefix}pinterest _query_
*${p+=1}.* ${prefix}googleimage _query_
*${p+=1}.* ${prefix}jagokata _kata_

*PRIMBON*
*${p+=1}.* ${prefix}jodoh _kamu|dia_
*${p+=1}.* ${prefix}artinama _nama_
*${p+=1}.* ${prefix}artimimpi _mimpi_

*RANDOM*
*${p+=1}.* ${prefix}fml
*${p+=1}.* ${prefix}randomquran
*${p+=1}.* ${prefix}meme
*${p+=1}.* ${prefix}darkjoke
*${p+=1}.* ${prefix}pantun
*${p+=1}.* ${prefix}nickepep
*${p+=1}.* ${prefix}quotes
*${p+=1}.* ${prefix}estetikpic

*TEXTMAKER*
*${p+=1}.* ${prefix}wolflogo _text1|text2_
*${p+=1}.* ${prefix}logoaveng _text1|text2_
*${p+=1}.* ${prefix}phlogo _text1|text2_
*${p+=1}.* ${prefix}marvellogo _text1|text2_
*${p+=1}.* ${prefix}gtext _text1|text2_
*${p+=1}.* ${prefix}pubglogo _text1|text2_
*${p+=1}.* ${prefix}snowwrite _text1|text2_
*${p+=1}.* ${prefix}watercolour _text1|text2_
*${p+=1}.* ${prefix}harta _text_
*${p+=1}.* ${prefix}thundertext _text_
*${p+=1}.* ${prefix}flametext _text_
*${p+=1}.* ${prefix}glowtext _text_
*${p+=1}.* ${prefix}smoketext _text_
*${p+=1}.* ${prefix}lithgtext _text_
*${p+=1}.* ${prefix}flowertext _text_
*${p+=1}.* ${prefix}bneon _text_
*${p+=1}.* ${prefix}matrix _text_
*${p+=1}.* ${prefix}breakwall _text_
*${p+=1}.* ${prefix}gneon _text_
*${p+=1}.* ${prefix}dropwater _text_
*${p+=1}.* ${prefix}tfire _text_
*${p+=1}.* ${prefix}sandw _text_
*${p+=1}.* ${prefix}epep _text_
*${p+=1}.* ${prefix}gplaybutton _text_
*${p+=1}.* ${prefix}splaybutton _text_
*${p+=1}.* ${prefix}text3dbox _text_
*${p+=1}.* ${prefix}text3d _text_
*${p+=1}.* ${prefix}logobp _text_
*${p+=1}.* ${prefix}leavest _text_
*${p+=1}.* ${prefix}tlight _text_
*${p+=1}.* ${prefix}naruto _text_
*${p+=1}.* ${prefix}crosslogo _text_
*${p+=1}.* ${prefix}cslogo _text_
*${p+=1}.* ${prefix}crismes _text_

*IMAGEMAKER*
*${p+=1}.* ${prefix}missing _text1|text2|text3|@tag_
*${p+=1}.* ${prefix}calender _replyImage / @tag_
*${p+=1}.* ${prefix}drawing _replyImage / @tag_
*${p+=1}.* ${prefix}sketch _replyImage / @tag_

*OTHER*
*${p+=1}.* ${prefix}tomp3 _replyVideo_
*${p+=1}.* ${prefix}removebg _replyImage / @tag_
*${p+=1}.* ${prefix}qrencode _text_
*${p+=1}.* ${prefix}barcode _text_
*${p+=1}.* ${prefix}jadwalsholat _daerah_
*${p+=1}.* ${prefix}jadwaltv _channel_
*${p+=1}.* ${prefix}tebakgambar

*INFO*
*${p+=1}.* ${prefix}stickermenu
*${p+=1}.* ${prefix}owner
*${p+=1}.* ${prefix}limit
*${p+=1}.* ${prefix}info
*${p+=1}.* ${prefix}listvn

*OWNER*
*${p+=1}.* ${prefix}setpp _replyImage_
*${p+=1}.* ${prefix}eval _text_
*${p+=1}.* ${prefix}term _code_
*${p+=1}.* ${prefix}block _@tag_
*${p+=1}.* ${prefix}unblock _@tag_
*${p+=1}.* ${prefix}join _link_
*${p+=1}.* ${prefix}bc _text_
*${p+=1}.* ${prefix}addvn _replyAudio/vn_
*${p+=1}.* ${prefix}delvn _name_
*${p+=1}.* ${prefix}premium add _@tag_
*${p+=1}.* ${prefix}premium del _@tag_
*${p+=1}.* ${prefix}premium list
*${p+=1}.* ${prefix}clearall
*${p+=1}.* ${prefix}resetlimit
`
}

const gmenu = (prefix) => {
	let p = 0
	return `*GROUP ONLY*
*${p+=1}.* ${prefix}group _open|close_
*${p+=1}.* ${prefix}antilink _on|off_
*${p+=1}.* ${prefix}antitagall _on|off_
*${p+=1}.* ${prefix}welcome _on|off_
*${p+=1}.* ${prefix}leave _on|off_
*${p+=1}.* ${prefix}setgroupicon _replyImage_
*${p+=1}.* ${prefix}setgroupname _text_
*${p+=1}.* ${prefix}setgroupdesc _text_
*${p+=1}.* ${prefix}hidetag _text_
*${p+=1}.* ${prefix}promote _@tag_
*${p+=1}.* ${prefix}demote _@tag_
*${p+=1}.* ${prefix}kick _@tag_
*${p+=1}.* ${prefix}add _number_
*${p+=1}.* ${prefix}getpp _@tag_
*${p+=1}.* ${prefix}tagall
*${p+=1}.* ${prefix}linkgroup
*${p+=1}.* ${prefix}revoke
*${p+=1}.* ${prefix}leave`
}

const dwmenu = (prefix) => {
	let p = 0
	return `*DOWNLOADER* 
*${p+=1}.* ${prefix}play _query_
*${p+=1}.* ${prefix}playvid _query_
*${p+=1}.* ${prefix}youtubedl _query_
*${p+=1}.* ${prefix}ytmp3 _link_
*${p+=1}.* ${prefix}ytmp4 _link_
*${p+=1}.* ${prefix}igstory _username_
*${p+=1}.* ${prefix}ig _link_
*${p+=1}.* ${prefix}tiktok _link_
*${p+=1}.* ${prefix}joox _song_`
}

const smenu = (prefix) => {
	let p = 0
	return `*STICKER*
*${p+=1}.* ${prefix}stickerwm _pack|author_
*${p+=1}.* ${prefix}takestick _pack|author_
*${p+=1}.* ${prefix}toimg _replySticker_
*${p+=1}.* ${prefix}togif _replySticker_
*${p+=1}.* ${prefix}semoji _emoji_
*${p+=1}.* ${prefix}stickerfire
*${p+=1}.* ${prefix}stickernobg
*${p+=1}.* ${prefix}stickergif
*${p+=1}.* ${prefix}sticker`
}

const emenu = (prefix) => {
	let p = 0
	return `*EDUCATION*
*${p+=1}.* ${prefix}nulis _text_
*${p+=1}.* ${prefix}brainly _query_
*${p+=1}.* ${prefix}kbbi _query_
*${p+=1}.* ${prefix}wiki _query_`
}

const ffid = (prefix) => {
	let p = 0
	return `*FREE FIRE VIA ID*

*⫿⸙᩠ 5💎 : 831*
*⫿⸙᩠ 20💎 : 2.770*
*⫿⸙᩠ 50💎 : 6.648*
*⫿⸙᩠ 70💎 : 9.141*
*⫿⸙᩠ 100💎 : 13.296*
*⫿⸙᩠ 140💎 : 18.282*
*⫿⸙᩠ 210💎 : 27.423*
*⫿⸙᩠ 280💎 : 36.564*
*⫿⸙᩠ 355💎 : 45.705*
*⫿⸙᩠ 425💎 : 54.846*
*⫿⸙᩠ 500💎 : 64.818*
*⫿⸙᩠ 720💎 : 91.410*
*⫿⸙᩠ 1000💎 : 127.974*
*⫿⸙᩠ 1075💎 : 137.115*
*⫿⸙᩠ 1440💎 : 182.820*
*⫿⸙᩠ 2000💎 : 249.300*

*❀ꦿ Member Mingguan : 27.700*
*❀ꦿ Member Bulanan : 110.800*

NOMINAL LAIN TANYA ADMIN`
}

const ffvilog = (prefix) => {
	let p = 0
	return `*DROP DM FF VILOG R 12.500*
_Proses 1-30 Menit Sesuai Antrian_

100💎 ( 1$ ) : 12.500
200💎 ( 2$ ) : 25.000
310💎 ( 3$ ) : 37.500
520💎 ( 5$ ) : 62.500
830💎 ( 8$ ) : 100.000
1060💎 ( 10$ ) : 125.000
1370💎 ( 13$ ) : 162.500
1580💎 ( 15$ ) : 187.500
2180💎 ( 20$ ) : 250.000
2700💎 ( 25$ ) : 312.500
5600💎 ( 50$ ) : 625.000

M.M ( 2$ ) : 25.000
M.B ( 8$ ) : 100.000
➖➖➖➖➖➖➖
*NOTE :*
- Log in fb/vk/google
- Log google minim 5$
- Memerlupan email dan sandi
- FB wajib authen, kalau ngga authen terus terkena sesi, maka tanggung sendiri
- Proses 10 - 30 menit atau bisa lebih dari itu, tergantung antrian iyh
- Ga mau antri ga usah order!
- Akun tidak boleh dimainkan
- Nominal lain tinggal dijumlahkan
- membeli = berarti setuju`
}

const gopay = (prefix) => {
	let p = 0
	return `https://i.postimg.cc/tgJsK19G/20210908-232956.jpg

KLIK LINK DI ATAS UNTUK MENAMPILKAN QR GOPAY!!`
	}
	
const vipul = (prefix) => {
	let p = 0
	return `*LIST DM FF VIPUL VIA ID*
_Proses 1-10 Menit_

70💎 = 15,000
120💎 = 20,000
140💎 = 25,000
210💎 = 35,000
280💎 = 50.000
355💎 = 60,000
500💎 = 85,000
720💎 = 120,000
1000💎 = 165,000
1075💎 = 175,000
2000💎 = 320.000

MM = 35,000
MB = 145,000`
}

const mlid = (prefix) => {
	let p = 0
   return `*MOBILE LEGENDS*
   
86 ðŸ’Ž = 18.700
172 ðŸ’Ž = 37.200
257 ðŸ’Ž = 56.900
344 ðŸ’Ž = 74.000
429 ðŸ’Ž = 93.100
514 ðŸ’Ž = 112.900
706 ðŸ’Ž = 148.200
878 ðŸ’Ž = 184.900
1050 ðŸ’Ž = 221.900
1412 ðŸ’Ž = 295.900
2195 ðŸ’Ž = 439.075
2901 ðŸ’Ž = 586.250
3688 ðŸ’Ž = 729.100
4394 ðŸ’Ž = 877.200
5532 ðŸ’Ž = 1.095.900
6238 ðŸ’Ž = 1.242.100
7727 ðŸ’Ž = 1.533.000
9288 ðŸ’Ž = 1.824.000
12976 ðŸ’Ž = 2.552.300
18576 ðŸ’Ž = 3.647.260

Starlight Member = 123.900
Twilight Pass = 123.900`
}

const pubgid = (prefix) => {
	let p = 0
	return `*PUBG SERVER INDO

${p+=1} > 16 UC = Rp 2.900
${p+=1} > 26 UC = Rp 4.700
${p+=1} > 53 UC = Rp 9.200
${p+=1} > 105 UC = Rp 18.200
${p+=1} > 131 UC = Rp 22.200
${p+=1} > 263 UC = Rp 45.200
${p+=1} > 530 UC = Rp 88.200
${p+=1} > 825 UC = Rp 132.200
${p+=1} > 1.100 UC = Rp 177.200`
}

const srcmenu = (prefix) => {
	let p = 0
	return `*SEARCHING*
*${p+=1}.* ${prefix}playstore _apk_
*${p+=1}.* ${prefix}happymod _apk_
*${p+=1}.* ${prefix}iguser _username_
*${p+=1}.* ${prefix}igstalk _username_
*${p+=1}.* ${prefix}ytsearch _query_
*${p+=1}.* ${prefix}ytplaylist _query_
*${p+=1}.* ${prefix}ytchannel _channel_
*${p+=1}.* ${prefix}shoope _product_
*${p+=1}.* ${prefix}spotify _song_
*${p+=1}.* ${prefix}gsmarena _hp_
*${p+=1}.* ${prefix}searchmusic _replyAudio_
*${p+=1}.* ${prefix}wallpaper _query_
*${p+=1}.* ${prefix}pinterest _query_
*${p+=1}.* ${prefix}googleimage _query_
*${p+=1}.* ${prefix}jagokata _kata_`
}

const pmenu = (prefix) => {
	let p = 0
	return `*PRIMBON*
*${p+=1}.* ${prefix}jodoh _kamu|dia_
*${p+=1}.* ${prefix}artinama _nama_
*${p+=1}.* ${prefix}artimimpi _mimpi_`
}

const ovo = (prefix) => {
	let p = 0
	return `OVO : 082190819939\nA/N : MO******`
}

const dana = (prefix) => {
	let p = 0
	return `DANA : 082190819939\nA/N : Muh*****`
}

const pulsa = (prefix) => {
	let p = 0
	return `PULSA : 082190819939 ( TSELL )`
}

const rnmenu = (prefix) => {
	let p = 0
	return `*RANDOM*
*${p+=1}.* ${prefix}fml
*${p+=1}.* ${prefix}randomquran
*${p+=1}.* ${prefix}meme
*${p+=1}.* ${prefix}darkjoke
*${p+=1}.* ${prefix}pantun
*${p+=1}.* ${prefix}nickepep
*${p+=1}.* ${prefix}quotes
*${p+=1}.* ${prefix}estetikpic`
}

const txmaker = (prefix) => {
	let p = 0
	return `*TEXTMAKER*
*${p+=1}.* ${prefix}wolflogo _text1|text2_
*${p+=1}.* ${prefix}logoaveng _text1|text2_
*${p+=1}.* ${prefix}phlogo _text1|text2_
*${p+=1}.* ${prefix}marvellogo _text1|text2_
*${p+=1}.* ${prefix}gtext _text1|text2_
*${p+=1}.* ${prefix}pubglogo _text1|text2_
*${p+=1}.* ${prefix}snowwrite _text1|text2_
*${p+=1}.* ${prefix}watercolour _text1|text2_
*${p+=1}.* ${prefix}harta _text_
*${p+=1}.* ${prefix}thundertext _text_
*${p+=1}.* ${prefix}flametext _text_
*${p+=1}.* ${prefix}glowtext _text_
*${p+=1}.* ${prefix}smoketext _text_
*${p+=1}.* ${prefix}lithgtext _text_
*${p+=1}.* ${prefix}flowertext _text_
*${p+=1}.* ${prefix}bneon _text_
*${p+=1}.* ${prefix}matrix _text_
*${p+=1}.* ${prefix}breakwall _text_
*${p+=1}.* ${prefix}gneon _text_
*${p+=1}.* ${prefix}dropwater _text_
*${p+=1}.* ${prefix}tfire _text_
*${p+=1}.* ${prefix}sandw _text_
*${p+=1}.* ${prefix}epep _text_
*${p+=1}.* ${prefix}gplaybutton _text_
*${p+=1}.* ${prefix}splaybutton _text_
*${p+=1}.* ${prefix}text3dbox _text_
*${p+=1}.* ${prefix}text3d _text_
*${p+=1}.* ${prefix}logobp _text_
*${p+=1}.* ${prefix}leavest _text_
*${p+=1}.* ${prefix}tlight _text_
*${p+=1}.* ${prefix}naruto _text_
*${p+=1}.* ${prefix}crosslogo _text_
*${p+=1}.* ${prefix}cslogo _text_
*${p+=1}.* ${prefix}crismes _text_`
}

const imgmaker = (prefix) => {
	let p = 0
	return `*IMAGEMAKER*
*${p+=1}.* ${prefix}missing _text1|text2|text3|@tag_
*${p+=1}.* ${prefix}calender _replyImage / @tag_
*${p+=1}.* ${prefix}drawing _replyImage / @tag_
*${p+=1}.* ${prefix}sketch _replyImage / @tag_`
}

const othmenu = (prefix) => {
	let p = 0
	return `*OTHER*
*${p+=1}.* ${prefix}tomp3 _replyVideo_
*${p+=1}.* ${prefix}removebg _replyImage / @tag_
*${p+=1}.* ${prefix}qrencode _text_
*${p+=1}.* ${prefix}barcode _text_
*${p+=1}.* ${prefix}jadwalsholat _daerah_
*${p+=1}.* ${prefix}jadwaltv _channel_
*${p+=1}.* ${prefix}tebakgambar`
}

const info = (prefix) => {
	let p = 0
	return `*INFO*
*${p+=1}.* ${prefix}stickermenu
*${p+=1}.* ${prefix}owner
*${p+=1}.* ${prefix}limit
*${p+=1}.* ${prefix}info
*${p+=1}.* ${prefix}listvn`
}

const ownerm = (prefix) => {
	let p = 0
	return `*OWNER*
*${p+=1}.* ${prefix}setpp _replyImage_
*${p+=1}.* ${prefix}eval _text_
*${p+=1}.* ${prefix}term _code_
*${p+=1}.* ${prefix}block _@tag_
*${p+=1}.* ${prefix}unblock _@tag_
*${p+=1}.* ${prefix}join _link_
*${p+=1}.* ${prefix}bc _text_
*${p+=1}.* ${prefix}addvn _replyAudio/vn_
*${p+=1}.* ${prefix}delvn _name_
*${p+=1}.* ${prefix}premium add _@tag_
*${p+=1}.* ${prefix}premium del _@tag_
*${p+=1}.* ${prefix}premium list
*${p+=1}.* ${prefix}clearall
*${p+=1}.* ${prefix}resetlimit`
}

const ingfo = `
__________________________________
*Notes :*
*- Jangan Pernah Menelpon Bot Dan Owner Jika Menelpon Akan di block Otomatis dan TIdak ada Kata Unblock â€¼ï¸*
*- Jika Menemukan Bug, Error, Saran Fitur Harap Segera Lapor Ke Owner*
*- Bot Ini masih dalam Tahap pengembangan baru bikin:v*
*- Prefix bisa di set sesuai keinginan sendiri*
*- Bot Ini Dilengkapi Anti Spam, anda bisa menggunakan command berikutnya setelah prosess sebelumnya berakhir*
			
*Group : Coming soon*
__________________________________
*ðŸ”– || IG*
@haikal.store
*FOLLOW YA KAK^_^*

`


const mess = {
             wait: 'Tunggu sebentar yaa',
			 group: 'this command can only be used in groups!',
			 admin: 'only be used by admin!',
			 botAdmin: 'this command can only be used if the bot is an admin groups',
			 limit: 'Limit penggunaan anda sudah habis, \n\nNote: limit akan direset setiap 00.00',
			 ownerOnly: 'This command is only for the owner!'
}

module.exports = {
	listmenu,
	gmenu,
	dwmenu,
	smenu,
	emenu,
	srcmenu,
	pmenu,
	rnmenu,
	txmaker,
	imgmaker,
	othmenu,
	info,
	ownerm,
	ingfo,
	mess,
	pubgid,
	mlid,
	ffid,
	ffvilog,
        ovo,
        dana,
        pulsa,
        vipul,
        gopay
}
