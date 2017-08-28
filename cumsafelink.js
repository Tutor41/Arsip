var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}
var encode=document.getElementById('encode'),decode=document.getElementById('decode'),output=document.getElementById('output'),input=document.getElementById('input');var User_ID="";var protected_links="";var a_to_va=0;var a_to_vb=0;var a_to_vc="";function auto_safelink(){auto_safeconvert();}
function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=""&&!protected_links.match(a_to_vd)){protected_links+=", "+ a_to_vd;}else if(protected_links=="")
{protected_links=a_to_vd;}
var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName("a");a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi="";for(var i=0;i<a_to_va;i++)
{a_to_vh=false;j=0;while(a_to_vh==false&&j<a_to_vg)
{a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match("http"))
{a_to_vh=true;}
j++;}
if(a_to_vh==false)
{var encryptedUrl=Base64.encode(a_to_vi);a_to_ve[i].href="http://www.safelink.ga/p/generate.html?url="+ encryptedUrl;a_to_ve[i].rel="nofollow";a_to_vb++;a_to_vc+=i+":::"+ a_to_ve[i].href+"\n";}}
var a_to_vj=document.getElementById("anonyminized");var a_to_vk=document.getElementById("found_links");if(a_to_vj)
{a_to_vj.innerHTML+=a_to_vb;}
if(a_to_vk)
{a_to_vk.innerHTML+=a_to_va;}}
function a_to_fa()
{var a_to_vf=new Array();protected_links=protected_links.replace(" ","");a_to_vf=protected_links.split(",");return a_to_vf;}

- Setelah itu upload file safelink.js nya tadi ke Github. Cara Upload File JavaScript di GitHub



 
- Setelah selesai di upload silakan copy url hasil upload nya tadi dan silakan kembali ke Laman blog yang sudah kita buat tadi silakan edit. Ganti url https://cdn.rawgit.com/dedi96/safelink/813ce72f/safelinkga.js dengan url hasil upload.an di ghitub tadi, dan begitu juga http://www.safelink.ga/p/generate.html ganti dengan url Laman statis yang sudah kita buat sebelumnya. Setelah itu Perbarui.

- Kemudian kita edit Template blog, masuk pada menu Tema / Template > Edit HTML. Cari url https://cdn.rawgit.com/dedi96/safelink/813ce72f/safelinkga.js dan http://www.safelink.ga/p/generate.html ganti dengan masing" url yang sudah kita buat tadi sebelumnya, masih sama seperti diatas. Dan begitu juga dengan url lainnya. Setelah itu Simpan Template.

- Disini blog Safelink Corverter nya sudah bisa kita gunakan, untuk supaya blog Utama kita bisa redirect link masukkan script dibawah ini tepat di atas code </body>. Terus simpan.

<script src='https://cdn.rawgit.com/dedi96/safelink/813ce72f/safelinkga.js' type='text/javascript'/>
<script type='text/javascript'>
protected_links = &quot;domain.com,blogspot.com,blogger.com,linkedin.com,facebook.com,twitter.com,google.com,feedburner.com&quot;;
auto_safelink();
</script>

- Selesai, blog Safelink Converter nya sudah jadi silakan sobat test klik link download yang ada diblog Utama. maka akan dibawa ke blog safelink converter pada Laman Generate yang sudah kita buat tadi.

Baca Juga : Cara Membuat Blog Safelink Converter Random Artikel 100% Work

Keterangan :
- Gunakan Ctl + F untuk mencari code lebih cepat
- Ganti nama-nama web / blog yang ada di bagian Protected_Link . (gunanya supanya nama web / blog yang kita tulis tidak akan ke redirect ke blog safelink).
- Tulisan KODE IKLAN DISINI silakan taruh iklan Adsense nya disitu
- Jika masih kurang paham bisa ditanyakan .

Jika sobat kurang tau dan mau instant langsung jadi bisa menghubungi saya, tapi ntar ada anunya buat beli rokok :D . wkwkwk...

Sekian artikel dari saya tentang Cara Membuat Blog Safelink Converter Work 100%, semoga bermanfaat untuk sobat-sobat semua.
Jika artikel ini bermanfaat bagi sobat tolong support dengan donasi klik iklan yang ada di blog ini.
Terimakasih...
Wassalamualaikum...

 
 Short URL  Google  Facebook  Twitter 
Blogging Tutorial

Cari artikel di blog ini...
Artikel Terkait


Download Template Blog Simplify 2 v4 License Premium

Cara Membuat Domain Gratis dan Cara Memasang Domain ke Blogspot

Cara Membuat Akun Google / Gmail Tanpa Verifikasi No HP

Cara Menambahkan Watermark Pada Gambar atau Foto Dengan Mudah

Cara Merubah Warna Scroll Pada Blog

Cara Mendaftarkan Website atau Blog ke Google Webmaster Tool
 Dedi Islafuddin
Dedi Islafuddin 
Aku mung wong biasa seng ora iso opo-opo neng pengen iso, jen koyok kanca-kancane.

Cara Upgrade Kartu TRI 3G ke 4G Dengan Mudah dilakukan Sendiri
Cara Cepat Supaya di Terima Google Adsense
265 komentar     1 – 200 of 265   Newer›   Newest»
avatar
Balas
Aris Wahyu delete 22 March 2017 at 20:29
Makasih banyak gan, setelah sana sini kaga ada yg bener akhirnya disini bisa juga.
avatar
Balas
Dedi Islafuddin  delete 22 March 2017 at 21:27
iya sama-sama bosku.  mantav..
avatar
Balas
KNURD STORE delete 28 March 2017 at 19:37
udah ga work kamvret..
avatar
Balas
Dedi Islafuddin  delete 28 March 2017 at 21:38
ga work gimana maksdunya ?? ane masih work ini bos. coba diteliti dengan jelas artikel diatas.
avatar
Balas
Ersa Azis Mansyur delete 31 March 2017 at 13:54
Gan kalo safelink gratis yang di Adbli.com gimana yaa??
boleh minta tutorialnya ngga?
avatar
Balas
Dedi Islafuddin  delete 31 March 2017 at 16:49
Wah kurang tau ane om 
avatar
Balas
Mas Yogick delete 6 April 2017 at 10:29
kak punya gue udah jadi tapi linknya gk nyala
avatar
Balas
Mas Yogick delete 6 April 2017 at 10:33
http://lowurls.blogspot.com

itu punya gue om, tapi safelink nya gk bisa
avatar
Balas
Dedi Islafuddin  delete 6 April 2017 at 17:04
Gak bisanya gimana ?? Mungkin slah dlm penerapan nya bos.
avatar
Balas
Mas Yogick delete 6 April 2017 at 18:21
coba aja om punya gue
avatar
Balas
Dedi Islafuddin  delete 7 April 2017 at 13:58
Salah penerapan script js nya kayaknya
avatar
Balas
Dedi Islafuddin  delete 7 April 2017 at 13:58
Salah penerapan script js nya kayaknya
avatar
Balas
Chiky- Games delete 9 April 2017 at 00:04
ka saya sudah work 1000% tapi saya pengen seperti kaka, jadi sambil menunggu link datang disitu da bacaan "klik link di bawah" dan ada iklan nya juga, tolong kasih tahu caranya ka?
avatar
Balas
Dedi Islafuddin  delete 9 April 2017 at 00:31
tinggal taruh script iklannya dan tambahi tulisan di atas tulisan "Visit Link"
avatar
Balas
Semangat 27 delete 9 April 2017 at 07:09
gan kenapa pas visit link marah eror 404
avatar
Balas
Dedi Islafuddin  delete 9 April 2017 at 07:14
pasti salah dalam penerapan scriptnya, coba dibaca dengan teliti bos
avatar
Balas
Semangat 27 delete 9 April 2017 at 07:35
script yg mana? udah ane ulang berkali-kali 
avatar
Balas
Dedi Islafuddin  delete 9 April 2017 at 10:49
pake blogspot.com apa domain tld ?
script didalam template nya mungkin
avatar
Balas
Fikri Muzakky delete 10 April 2017 at 04:26
Punya ane udah jadi,,tapi pas ane pencet visit link kok ngak keurl tujuan ya?? Malah error,, gmana min?
avatar
Balas
Dedi Islafuddin  delete 10 April 2017 at 07:19
coba gunakan domain tld aja, soalnya kalau blogspot.com harus mengunjungi 2 kali baru bisa kayaknya.
avatar
Balas
Muhammad Nuriyanto delete 27 May 2017 at 03:00
Min, tolong jelasin secara detail dong cara gunakan domain blogspot.com untuk safelink.. ane udah coba tapi masalahnya sama kayak mas fikri, error min :/ mohon pencerahannya 
avatar
Balas
Dedi Islafuddin  delete 27 May 2017 at 05:43
errornya itu kayak gimana ??
avatar
Balas
Dedi Islafuddin  delete 27 May 2017 at 05:43
errornya itu kayak gimana ??
avatar
Balas
Muhammad Nuriyanto delete 27 May 2017 at 12:46
udah pasang link di blog utama dan safelink juga udah work. tapi tombol visit link di safelink tidak bisa ditekan min. harusnya kan bisa masuk ke zippyshare...
avatar
Balas
Dedi Islafuddin  delete 27 May 2017 at 12:56
salah dalam menerapkan scriptnya mungkin
avatar
Balas
Muhammad Nuriyanto delete 27 May 2017 at 13:08
sudah bener deh perasaan.. ane pakai domain .blogspot.com min, min bilang kalau domain blogspot.com harus ngunjungi 2x baru bisa.. gk bisa sama sekali visit link nya
avatar
Balas
Dedi Islafuddin  delete 27 May 2017 at 18:19
Coba minta link blognya
avatar
Balas
Muhammad Nuriyanto delete 27 May 2017 at 21:56
Ini min, masih blog percobaan sih bukan yang asli. Tolong cariin error nya dimana min...

http://muhammadnuriyanto.blogspot.co.id/2016/10/download-indopreter-pro-translator-30.html
avatar
Balas
Dedi Islafuddin  delete 28 May 2017 at 10:58
udah saya revisi postingan diatas boss..
Jadi gunakan url blog safelink https:// jangan http:// jika itu domain munggunakan blogspot.com
avatar
Balas
Muhammad Nuriyanto delete 28 May 2017 at 14:54
Wah mantab min sudah work... Thanks min atas bantuannya 
avatar
Balas
Dedi Islafuddin  delete 29 May 2017 at 00:10
iya sama" om 
avatar
Balas
Imam Darmawan delete 24 April 2017 at 21:48
Siip gan bookmark dulu👍
avatar
Balas
Dedi Islafuddin  delete 24 April 2017 at 22:42
Siap 👍
avatar
Balas
Admin delete 25 April 2017 at 06:52
bang apa ini sudah bisa di gunakan?

~~> http://www.euesafelink.ml/ <~~

Ask for you bro....
avatar
Balas
Admin delete 25 April 2017 at 06:57
owhh iya bang sekalian ane mau tanya... maksud yang di protected_Link itu gmn bang? ane gagal paham.. 
avatar
Balas
Dedi Islafuddin  delete 25 April 2017 at 08:47
link yang ada di dalam protected itu tidak akan di lewati safelink kita.
avatar
Balas
Dedi Islafuddin  delete 25 April 2017 at 08:45
blm bisa itu om, alamat link generate nya not found
avatar
Balas
Chiky- Games delete 29 April 2017 at 23:49
min gimana punya saya pernah berhasil tapi jadi OPSS 404 laman tidak ditemukan, tolong bantu, dan mohon diperjelas lagi tutorialnya kalau bisa bikin videonya
avatar
Balas
Dedi Islafuddin  delete 30 April 2017 at 03:11
Itu sudah jelas om. mungkin salah dalam penerapan scriptnya.
avatar
Balas
Silver Trident delete 13 May 2017 at 18:01
gan minta pencerahannya saya sudah bisa visit link tapi saat visit safelinknya malah menuju url yg seperti ini https://stsafelink.blogspot.com/p/%E6%9B%A9%E3%BF%AC%E6%86%9FzX%E7%91%B9h%E2%8A%A8%E5%8A%A6%EE%9F%A0zw%EB%AA%97%E1%B6%A9@

link asli safelink https://stsafelink.blogspot.com/

minta pencerahannya gan 
terimakasih
avatar
Balas
Dedi Islafuddin  delete 14 May 2017 at 01:42
Ikuti tutorial di atas dengan teliti om pasti bisa. Ane coba buka di android situs om itu masih ada kode M=1 dibelakang url link safelinknya
avatar
Balas
Silver Trident delete 14 May 2017 at 19:12
teatp saja mas saya sudah coba berulang ulang hasilnya masih sama

mohon bantuannya
avatar
Balas
Silver Trident delete 14 May 2017 at 19:18
semuanya termasuk html generate dan cdn sudah semua ganti sama yg hasil uplaodan saya tetapi ttp saja masih seperti semula Error 404
avatar
Balas
Dedi Islafuddin  delete 15 May 2017 at 11:20
url blog tidak ditemukan om, udah dihapus.
coba pakai domain tld aja jangan blogspot
avatar
Balas
inject ssh delete 13 May 2017 at 22:58
mantap dan work
kalo 404 coba di lihat lagi di posting pada blog safelink nya nya
https://cdn.rawgit.com/dedi96/safelink/813ce72f/safelinkga.js
http://www.safelink.ga/p/generate.html
ganti dengan url masing2
semoga membantu
avatar
Balas
Dedi Islafuddin  delete 14 May 2017 at 01:38
Yup harus teliti emang booss 
avatar
Balas
Fikri Muzakky delete 14 May 2017 at 17:37
This comment has been removed by the author.
avatar
Balas
Fikri Muzakky delete 14 May 2017 at 17:40
Alhamdullilah udah bisa mas,, tinggal pasang iklan aja hehe.. Makasih om tutornya.
avatar
Balas
Dedi Islafuddin  delete 15 May 2017 at 11:12
mantabs booss 
avatar
Balas
hacanimedream blogspot delete 15 May 2017 at 09:38
gan kok iklan yang ane pasang di blog ikut ke safelink?
avatar
Balas
Dedi Islafuddin  delete 15 May 2017 at 11:13
ikut gmna maksudnya ??
yang di blog safelink di kasih iklan gak ?
avatar
Balas
Muhamad Ghufron delete 19 May 2017 at 06:18
mas , cara ilangin auto redirect ke https gmna ya ? pake .blogspot url nya jadi gak bisa mas kalo redirect auto ke https , pdhal di setingan sudah tidak aktif , kali aja di template di setting auto https untuk blogspot , thanks
avatar
Balas
Dedi Islafuddin  delete 19 May 2017 at 09:33
Di template nya coba diganti http bagian generate kayaknya.
Mungkin pas di script .js salah nulis link blognya https
avatar
Balas
DC delete 20 May 2017 at 03:19
mas semua sudah works kecuali visit link download nya gak bisa ke klik. ( sudah pada page safe-link )
kira kira yang kurang / salah apanya ya mas
mohon pencerahannya mas
avatar
Balas
Dedi Islafuddin  delete 20 May 2017 at 15:13
script .js nya udah benar nggak ??
pake blogspot ?
avatar
Balas
Muhamad Ghufron delete 21 May 2017 at 00:16
gak mas , kynya di template nya auto mas coba ini punya ane baru di pasang template nya saja , http://safelinkings.blogspot.com
avatar
Balas
Dedi Islafuddin  delete 21 May 2017 at 10:49
mantabss..
avatar
Balas
DC delete 21 May 2017 at 15:53
iya mas saya pakai blogspot.
jika berkenan ini hasil dari sebuah link download blog utama

https://datacorel-download.blogspot.com/p/downloads.html?url=aHR0cDovL2FkZi5seS8xU2czSTM=

(dihapus saja koment ini stelah mas lihat contoh )
tapi klik visitnya gak bisa ke klik.

trus yang belum paham gini jg mas,,
jika udah work apa link safelink sudah otomatis semua link download diblog utama ?? atau harus di convert satusatu mas,,

mohon maaf mas jika berkenan mohon pencerahannya )

avatar
Balas
Dedi Islafuddin  delete 22 May 2017 at 09:05
secara otomatis diblog utama akan meredirect ke blog safelink tanpa harus mengconvert satu persatu om.
avatar
Balas
DC delete 22 May 2017 at 14:47
baik terima kasih banyak om,
sementara sudah work kesalahan saya karena upload js di yourjavascrift, ketika mencoba upload di github sudah works walau belum sempurna yakni protected_links otomatisnya belum berjalan dengan baik, tapi sudah sangat membantu.

Thanks banyak banyak 
avatar
Balas
Dedi Islafuddin  delete 22 May 2017 at 15:38
iya sama-sama bosku  
yang dibagian protected_link itu jika sobat nulis link web/blog maka dia tidak akan keredirect ke blog safelink.
avatar
Balas
DC delete 23 May 2017 at 20:11
saya ganti ke Domain TLD 100% Works mas..
terima kasih sangat 

satu lagi mas,, untuk protect link sub domain caranya gimana ya mas,, misal drive.google.com
avatar
Balas
DC delete 23 May 2017 at 20:29
eh salah mas... maksudnya biar gak ke protect
agar link ke drive.google nya singgah dulu ke page safelinknya
avatar
Balas
Dedi Islafuddin  delete 24 May 2017 at 01:04
google.com gk udah ditulis di protected link om
avatar
Balas
DC delete 24 May 2017 at 14:41
Works 100% !!!!
Terima Kasih banyak Mas 
avatar
Balas
Dedi Islafuddin  delete 25 May 2017 at 10:04
iya sama" om  
avatar
Balas
Aan Na-ank delete 25 May 2017 at 17:31
This comment has been removed by the author.
avatar
Balas
Android Gunner delete 25 May 2017 at 18:16
Tambahan dari saya.
Bagi yang upload File nya ke Google Drive, biar bisa direck ke safelink nya.
pada bagian "protected_links" hapus yang "google.com"
avatar
Balas
Dedi Islafuddin  delete 25 May 2017 at 23:31
iya benar sekali booss.. 
avatar
Balas
Dzulfi Bloggers delete 27 May 2017 at 01:29
Thanks ya gan 100% work, udah kemana mana dicari pada gak bisa disini rupanya bisanya hehe
avatar
Balas
Dedi Islafuddin  delete 27 May 2017 at 05:44
Mantab boos 
avatar
Balas
Sumber Rizky delete 27 May 2017 at 05:11
not work
avatar
Balas
Dedi Islafuddin  delete 27 May 2017 at 05:45
Semua butuh proses boss dan juga harus teliti
avatar
Balas
Rsi Lucky delete 27 May 2017 at 17:08
pas enkripsi nya gagal jadi kosong
avatar
Balas
Dedi Islafuddin  delete 28 May 2017 at 11:02
jika menggunakan domain blogspot.com maka url blog safelink ganti ke https:// semua jangan pakai http://
avatar
Balas
Sumber Rizky delete 28 May 2017 at 03:08
ngaco...
avatar
Balas
Rsi Lucky delete 30 May 2017 at 22:45
udah berhasil gan,saran situs iklan gan yang gede bukan popunder
avatar
Balas
Dedi Islafuddin  delete 31 May 2017 at 01:35
Siip...  
Kurang tau ane om 
avatar
Balas
Silver Trident delete 1 June 2017 at 00:10
akhirnya berhasil gan...
ternayta pake domain TLD work 
dulu pake blogspot gagal 
http://www.st-safelink.tk/

Terima kasih gan !
avatar
Balas
Dedi Islafuddin  delete 1 June 2017 at 00:39
Iya sama" om 
Untuk yg pake blogspot udah ane revisi lagi 
avatar
Balas
Roby Hermawan delete 4 June 2017 at 18:12
Mkasih banget gan tutor nya, sangat bermanfaat 
avatar
Balas
Dedi Islafuddin  delete 5 June 2017 at 00:19
Iya sama" om 
avatar
Balas
Uchiha Yahia delete 5 June 2017 at 07:33
Gan, kenapa pas klik visit link gk mau pindah url. Ane udah baca komen2 diatas sama artikelnya bolak-balik masih belum paham.
avatar
Balas
Dedi Islafuddin  delete 5 June 2017 at 23:30
coba baca dengan teliti lagi postingan diatas om
avatar
Balas
admin delete 7 June 2017 at 00:22
terimakasih mas akhirnya bisa juga 
hmm ngomongngomong cara pasang iklan di bawah visit link gimana yah mas ???

http://www.nime.cf/p/blog-page_6.html
avatar
Balas
Dedi Islafuddin  delete 7 June 2017 at 00:52
Oh mantabs..   
Iklannya taruh di situ. Coba utek" sendiri 
avatar
Balas
Roby Hermawan delete 7 June 2017 at 04:05
Mas, kenapa ya gak semua link bisa kedirect.. Itu kenapa ya? 
Dan juga satunya blog saya gk terhubung ke safelino itu kenapa juga ya, padahal sudah benar.. Blog nya sudah jadi, tapi tinggal masalah terhubung ke blog utamanya enggk mas.. 
Plis jawab
avatar
Balas
Dedi Islafuddin  delete 7 June 2017 at 23:20
pada protected_link hapus link yang tidak ingin keredirect
dan sriptnya taruh diatas kode /body di edit template pada blog utama
avatar
Balas
Dimas Nafik delete 9 June 2017 at 06:28
mas kok ditempat saya visit link enggak mau ya ? padahal saya udah ikutin step by step dengan baik dan bener . Http sudah saya ganti ke https juga , ini masih pakek blogspot.com . Mohon bantuannya secepatnya mas
avatar
Balas
Dimas Nafik delete 9 June 2017 at 06:44
Oh sudah saya atasi sendiri mas , sedikit info buat temen temen yg pakek blogspot.com , dan mengalami problem bagian visit link tidak mau . Cara mengatasinya adalah cek pada edit html template kemudian ctrl+f cari http: kalo ketemunya yg link generate safelink maka tambahin menjadi https: , tapi kalo tidak ketemu dan hanya link kompi maka biarkan saja . Step selanjutnya adalah pergi ke laman generate yang sudah dibuat tadi , cek apakah ada http: jika ada silahkan tambahkan menjadi https: . Ini terjadi pada saya , Terima kasih kene ono salam . Semoga membantu teman teman
avatar
Balas
Dedi Islafuddin  delete 9 June 2017 at 10:22
iya selumnya udah saya jelasin om, jika pake blogspot.com semua link ganti https.

iya sama", sukses selalu 
avatar
Balas
Dimas Nafik delete 10 June 2017 at 15:22
This comment has been removed by the author.
avatar
Balas
Gudang Firmware delete 10 June 2017 at 01:57
Apa Yang Salah Dengan Ini..? https://safelinkblogg.blogspot.com/
avatar
Balas
Dedi Islafuddin  delete 10 June 2017 at 05:09
Udah ngikutin tutor diatas. Coba diteliti lagi om.
avatar
Balas
DzulfiSafelink delete 11 June 2017 at 09:39
bang auto safelink ke blog utamanya kok gak bisa gan
avatar
Balas
Dedi Islafuddin  delete 11 June 2017 at 17:30
scriptnya udah ditaruh diatas kode /head
dan link script .js nya sesuai yang udah dibuat sebelumnya
avatar
Balas
DzulfiSafelink delete 11 June 2017 at 20:24
ditaruh diatas kode /head bukan kode /body
avatar
Balas
Dedi Islafuddin  delete 12 June 2017 at 00:12
Eh iya diatas kode /body
avatar
Balas
INDRAMAYU - CHEAT delete 14 June 2017 at 15:13
Masalah Erornya Di Kode Pemanggil Blog Utama,, Kayanya G Suport Pakai Domain Blogspot Nih Harus TLD
avatar
Balas
Muhammad Dewantara delete 14 June 2017 at 20:52
KODE 
< script src='https://cdn.rawgit.com/dedi96/safelink/813ce72f/safelinkga.js' type='text/javascript'/>
< script type='text/javascript' >
protected_links = "domain.com,blogspot.com,blogger.com,linkedin.com,facebook.com,twitter.com,google.com,feedburner.com";
auto_safelink();
< /script >

DITARUHNYA DI ATAS /BODY APA /HEAD ?
avatar
Balas
Dedi Islafuddin  delete 15 June 2017 at 00:26
Diatas Kode /body
avatar
Balas
Awi Jaya delete 16 June 2017 at 15:24
cara menghilangkan How To Use itu gimana y Bos?
avatar
Balas
Dedi Islafuddin  delete 17 June 2017 at 01:55
coba di edit dibagian template html cari codenya dan hapus
avatar
Balas
fendi waloyo delete 18 June 2017 at 22:21
Kalo cranya menghapus base64-nya (menggunakan link yg asli), lalu hitungan mundurnya dihilangkan gmana ya? Minta script NY donk min 
avatar
Balas
Dedi Islafuddin  delete 19 June 2017 at 18:29
Untuk hilangin base64-nya gk tau ane om. Untuk hilangin hitungan waktu mundur edit dibagian html template
avatar
Balas
bebe jozz delete 20 June 2017 at 21:25
punya ane gak bisa visit, padahal sudah ganti https semua, apa yang salah ya cek dong https://mas-bebeb.blogspot.com/
avatar
Balas
Dedi Islafuddin  delete 21 June 2017 at 03:02
Coba diteliti lagi om. 
Mungkin script.js nya
avatar
Balas
bebe jozz delete 21 June 2017 at 06:43
sudah teliti semua om, tak buat domain TLD juga gak work, pas visit link error 404, coba cek tak ubah domain bebejozz.tk
avatar
Balas
Lexiie Casanova delete 21 June 2017 at 22:04
kode pemanggil untuk blog utama 
gak work
avatar
Balas
Dedi Islafuddin  delete 26 June 2017 at 06:47
work om, udh benar naruh scriptnya
avatar
Balas
Lexiie Casanova delete 26 June 2017 at 10:35
sudah naruh di atas kode /body ga bisa
di bawah widget postingan juga ga bisa
setiap klik ga mau ke safelink langsung ke link target
avatar
Balas
Dedi Islafuddin  delete 26 June 2017 at 16:07
Script.js nya mungkin yg bermasalah
avatar
Balas
tri setyo hari pranoto delete 22 June 2017 at 15:32
cara menghilangkan iklan popup bawaan gimana ya
avatar
Balas
Dedi Islafuddin  delete 26 June 2017 at 06:49
kyaknya gk ada iklan popup nya
avatar
Balas
bebe jozz delete 23 June 2017 at 05:48
Fix om, dah beres dah work, masukan buat yang lain, yang visit link 404 coba cek lagi di laman generate punya ane tak utak atik yang bermasalah disitu dan beres ,, thx om 
avatar
Balas
Dedi Islafuddin  delete 26 June 2017 at 06:54
joozzz,, mantabs om. iya sama" 
avatar
Balas
DuwiNur BIMASAKTI delete 4 July 2017 at 13:27
yang di utak atik yg mana mas .. . . please HELP
avatar
Balas
Muhammad Faisal delete 29 June 2017 at 17:31
om kok ini safelink saya gk muncul ya pas dilihat dari hp ???
avatar
Balas
Dedi Islafuddin  delete 30 June 2017 at 06:57
gk munculnya gmna om ?
avatar
Balas
Shici Kun delete 4 July 2017 at 13:04
Makasih gan, work 1000%!!
avatar
Balas
Dedi Islafuddin  delete 4 July 2017 at 14:52
Mantap om 
avatar
Balas
DuwiNur BIMASAKTI delete 4 July 2017 at 13:30
omsz admin @Dedi Islafuddin
http://www.safelink.ga/p/generate.html sudah ndak work . . hasilnya sama dengan yang lain .. broken saat bisa VISIT url 

coba omsz cek . . mungkn ada SCRIPT yang salah taruh
avatar
Balas
Dedi Islafuddin  delete 4 July 2017 at 14:56
Work masih. Kan bukan link itu saja nantinya akan ada tambahan lg engkripsi.
avatar
Balas
Dakol Ricardo delete 7 July 2017 at 16:45
ane udah nyoba tutornya 4kali pak hasilnya tetep sama, ketika mau shortlink malah hasilnya blank.
mohon direview pak lewatinbro.blogspotdotcom
Trims
avatar
Balas
Dedi Islafuddin  delete 7 July 2017 at 19:14
semua link gunakan https depannya jika pake blogspot om.
ane review kok blog tidak ditemukan.
avatar
Balas
Tips kesehatan delete 8 July 2017 at 06:44
kalau mau naruh iklan di bawah visit link gimana bang ?
makasih sebelumnya
avatar
Balas
Dedi Islafuddin  delete 8 July 2017 at 22:09
taruh saja kode iklannya dibawah kode visit link
avatar
Balas
Tips kesehatan delete 8 July 2017 at 22:45
tapi pas taroh di bawah visit link iklannya gak muncul di bawah visit link
avatar
Balas
Dedi Islafuddin  delete 9 July 2017 at 00:43
lha munculnya dimana ?
avatar
Balas
ILhamErlian delete 9 July 2017 at 18:52
bang kok di saya 404 notfound ya nih bang linknya tolong dicek yaa ,,, https://ilhamlinks.blogspot.com
avatar
Balas
Dedi Islafuddin  delete 9 July 2017 at 23:15
usahakan semua link menggunakan https jika pake domain blogspot.
udah ane cek bisa kok.
avatar
Balas
alok software delete 10 July 2017 at 08:31
work masbro thanks ya
avatar
Balas
alok software delete 10 July 2017 at 08:53
btw kok saya pas step terakhir yang suruh naroh kode js di blog utama di tata letak html , kok pas saya coba klik link download di postingan di blog utama kok gak work ya? tetep link downloadnya . safelink sih work aja .
apa kudu nunggu beberapa waktu biar bisa work?
avatar
Balas
Dedi Islafuddin  delete 11 July 2017 at 06:27
yang di bagian link protected di tulis nggak link downloadnya
atau salah dalam penerapannya.
avatar
Balas
alok software delete 11 July 2017 at 17:41
udah om , kok link ane ga terkonvert2 gt lho , jadi ane manual (generate langsung ke blog safelinknya bukan otomatis)
avatar
Balas
Dedi Islafuddin  delete 11 July 2017 at 22:04
naruhnya udah benar ?
coba ditaruh gonta ganti naruhnya di bawah kode (/head) atau dibawah kode (head) siapa tau work.
avatar
Balas
alok software delete 11 July 2017 at 22:29
siap saya coba dulu gan
avatar
Balas
Mas Riyan delete 10 July 2017 at 20:43
mas punya saya kan waktu mau klik link yang asalnya https://tuapensil.blogspot.co.id/p/generate.html?url=aHR0cDovL3VwZmlsZS5tb2JpL3FEMkF6WG9xVGtT bila tidak berkenan hapus saja. 

setelah itu malah berubah menjadi https://tuapensil.blogspot.co.id/p/generate.html apakah ada yang salah?

saya sudah menuruti tutorial seperti diatas tapi malah error mulu?
avatar
Balas
Dedi Islafuddin  delete 11 July 2017 at 06:29
coa diteliti lagi om, gunakan semua link menggunakan https jangan http. dan dibgian pengaturan blog pakai https
avatar
Balas
Muhammad Yusuf delete 11 July 2017 at 21:42
gue bookmark dulu gan. ntar balik lagi
avatar
Balas
Dedi Islafuddin  delete 11 July 2017 at 22:05
oke siap booss 
avatar
Balas
Luthfi Athorique delete 14 July 2017 at 02:10
Gak bisa gan, pas di klik VISIT LINK gk perngaruh apa2
http://link.luthfi28.com/
avatar
Balas
Dedi Islafuddin  delete 15 July 2017 at 02:21
Coba cek dan diteliti lagi om. Kalau kayak tutorial pasti bisa kok
avatar
Balas
Mas Jae delete 14 July 2017 at 23:40
Minta saran Ukuran Iklan Ads nya yang punya mas berapa..??
avatar
Balas
Dedi Islafuddin  delete 15 July 2017 at 02:22
Iklan yang bagian mana om??
avatar
Balas
Putri Diana delete 15 July 2017 at 03:25
Informasi yang sangat bermanfaat, work mas tp harus domain tld disaya baru bisa hehe .. saya mau nanya kalau mau naruh iklan pop under kaya popc*sh pr*pellerads itu gimana mas ?
ini bukti masih work 100% http://www.dlnih.ml nanti linknya hapus aja mas yang penting jawab pertanyaan saya ya hehehe sekali lagi terima kasih
avatar
Balas
Dedi Islafuddin  delete 15 July 2017 at 07:45
Di halaman statis, atau bisa di template html. Dicoba aja 
avatar
Balas
Putri Diana delete 15 July 2017 at 08:06
Tutor yang safelink v3 yang bisa gonta ganti postingan belum ada ya mas disini ??
avatar
Balas
Dedi Islafuddin  delete 15 July 2017 at 08:36
iya blm ada om 
avatar
Balas
rahmat hidayat delete 15 July 2017 at 16:15
KAMPRETTTT..... SETELAH SATU KALI GAGAL , ANE COBA LAGI UNTUK MENYUSUN HURUF HURUF ALIEN AKHIRNYA SUKSES 100% GAN....

THANKS YAHHH....

Tambahan buat yang belum bisa....
kalo link 404 not found coba edit pada templatenya.... pake tutor dari mas dedi di atas 

klo udah berhasil keredirect tapi button link gak bisa di pencet... maka kesalahan ada pada script JS yng sobat upload ke github....


moga sukses semuanya.... dan tentunya tinggalkan yang namanya short link sampah yang bayarannya dikit... 

buat agan DEDI ISLAFUDIN thank bgt... sesuai harapan dan tutornya NTAVVVVVVVV....
avatar
Balas
Dedi Islafuddin  delete 15 July 2017 at 22:36
Mantav booss 
avatar
Balas
rahmat hidayat delete 15 July 2017 at 16:17
domain cepot ama tld ama aja 100% work
avatar
Balas
Mas Jae delete 15 July 2017 at 20:25
Ukuran Iklan yang di pasang di Blog Safelink nya ukuran berapa..??

apa ukuran responsif yang digunakan agan
avatar
Balas
Dedi Islafuddin  delete 15 July 2017 at 22:38
Iya ukuran yang responsive ane gunakan om.
avatar
Balas
Muhamad Ristiyanto delete 16 July 2017 at 15:07
kok punya saya malah muncul tulisan mandarin ya 404 not found ,padahal sudah teliti
avatar
Balas
Muhamad Ristiyanto delete 16 July 2017 at 15:25
oiyo sudah bisa redirect sih gan ,tapi blum bisa generate link ,gimana ya
avatar
Balas
Dedi Islafuddin  delete 17 July 2017 at 01:19
codenya taruh diblog utama om
avatar
Balas
Pawit Turyadi delete 16 July 2017 at 22:23
sudah bisa nih mas makasih banyak btw cara bbiar button copy to clipboadnya bisa gimana ,,, kurangnya disitu aja mas
avatar
Balas
Dedi Islafuddin  delete 17 July 2017 at 01:20
untuk yang itu belum tau fixnya om 
avatar
Balas
Dakol Ricardo delete 19 July 2017 at 12:11
sama seperti percobaan sebelumnya pak, masih gagal
mohon di review pak
blogskipid.blogspot dot com
avatar
Balas
Dedi Islafuddin  delete 21 July 2017 at 08:29
coba dibaca dengan teliti om, kalau diamati dengan benar pasti bisa kok
avatar
Balas
Pawit Turyadi delete 20 July 2017 at 07:37
juga ada error kalo ke link malah error jadi tulisan mandarin
avatar
Balas
Dedi Islafuddin  delete 21 July 2017 at 08:30
script js nya coba diteliti, gunakan semua link menggunakan https:// jika menggunakan blogspot.
avatar
Balas
Monaka Teknologi delete 22 July 2017 at 09:01
bang amank gak pke safelink tkut ke banned adsense nya
avatar
Balas
Dedi Islafuddin  delete 22 July 2017 at 23:24
aman om, asal tidak melanggar TOS google adsense
avatar
Balas
Unknown delete 24 July 2017 at 12:37
Thanks bang  Akhirnya gua bisa buat blog safelink thanks sekali lagi 
avatar
Balas
Dedi Islafuddin  delete 24 July 2017 at 18:47
iya sama" om, mantabss.. 
avatar
Balas
Daffa Marsal delete 25 July 2017 at 21:07
Bang coba cek www.marsalsafelink.blogspot.com kenapa gk muncul dah pas di generate? Padahal tdi masih muncul
avatar
Balas
Dedi Islafuddin  delete 26 July 2017 at 16:48
ane buka alamat blognya berubah malah, coba agan baca dengan teleti. semoga berhasil 
avatar
Balas
Han Farhan delete 26 July 2017 at 14:37
mantap gan ini postingan yg ane cari" work (Y) tinggal pasang iklan (Y) syarat teliti aja saat mengganti link jangan sampai terlewatkan .. makasih min salam sukses http://hanfarhangarage.blogspot.co.id/
avatar
Balas
Han Farhan delete 26 July 2017 at 15:23
This comment has been removed by the author.
avatar
Balas
Dedi Islafuddin  delete 26 July 2017 at 16:49
oke siap mantabss booss 
avatar
Balas
Shisui delete 27 July 2017 at 09:18
punya gw gak bs bs bos..
chieflink.blogspot.com
salah apanya ya result gak muncul
avatar
Balas
Dedi Islafuddin  delete 28 July 2017 at 19:36
pake domain tld apa blogspot itu ?
avatar
Balas
AndroidCrack21 delete 27 July 2017 at 16:12
Gan menurut agan blog saya kurang apanya ya biar bisa dapet iklan adsense http://androidcrack21.blogspot.com mohon pencerahan'nya Min
avatar
Balas
Dedi Islafuddin  delete 28 July 2017 at 19:40
mungkin kontennya kurang jooss.. 
dan harus ada kelengkapan blog seperti, about, privacy policy, contact, tos, dll
avatar
Balas
zidan atha delete 27 July 2017 at 18:06
result ga muncul gan ? http://www.safelinkea.ga/
avatar
Balas
zidan atha delete 27 July 2017 at 18:47
pas digenerate ga muncul /
avatar
Balas
zidan atha delete 27 July 2017 at 20:59
sudah bisa gan ...trimaksih :v
avatar
Balas
Dedi Islafuddin  delete 28 July 2017 at 19:43
joooss om 
avatar
Balas
Ricki Kurniawan delete 28 July 2017 at 05:49
Mohon Bantuannya Mas.
Saya sudah ikuti step by step.
Dan semua work, tapi ada masalah saat convert link.

Blogsafelink= safelink.guruhebat.xyz
Url Tujuan= www.kurniaricki.com

Setelah convert dan tekan tombol "Visit Link"
Bukannya menuju www.kurniaricki.com malah menuju ke safelink.guruhebat.xyz/p/www.kurniaricki.com

Dimana salahnya ya mas? Thanks.
Mohon bantuannya.
Salam Blogger.
avatar
Balas
Dedi Islafuddin  delete 28 July 2017 at 19:47
kesalahan pada template nya pak, coba dibaca tutor diatas dengan teliti saat ngedit
avatar
Balas
Dedi Islafuddin  delete 28 July 2017 at 19:50
sebenarnya sudah bisa pak, tapi saat corvert depannya kasih http:// atau https://
avatar
Balas
Ricki Kurniawan delete 29 July 2017 at 11:23
Oke Mas.
Berarti saya lupa kasih http://

Sudah saya coba, terima kasih.
Tutorial Mas Dedi Work 100%.
avatar
Balas
Dedi Islafuddin  delete 31 July 2017 at 20:11
nah sipp 
avatar
Balas
Guru Hebat delete 29 July 2017 at 06:56
Mohon maaf Mas Dedi.
Saya praktekkan pakai punya mas Dedi.
Hasilnya juga sama.

Saya convert link di www.safelink.ga
Hasilnya: http://www.safelink.ga/p/generate.html?url=d3d3Lmd1cnVoZWJhdC54eXo=

Setelah klik "Visit Link"
Bukannya menuju ke www.guruhebat.xyz malah dibawa ke http://www.safelink.ga/p/www.guruhebat.xyz


Dengan demikian, sepertinya langkah-langkah saya sudah tepat. Tapi barangkali memang ada kesalahan.
Sebab di Demo punya mas Dedi juga sudah gak work.
avatar
Balas
Shisui delete 29 July 2017 at 02:30
ni gimana bos..



protected_links = "domain.com,blogspot.com,blogger.com,linkedin.com,facebook.com,twitter.com,google.com,feedburner.com";
auto_safelink();

udh gw masukin di blog utama...
tapi kok link downloadnya masih aja sama..
apa kagak otomati?
avatar
Balas
Dedi Islafuddin  delete 29 July 2017 at 06:40
sama gimana maksudnya om ?
avatar
Balas
Admin Setempat delete 29 July 2017 at 03:34
mohon pencerahanya min? kok pas di convert link gk muncul? solusinya dong min... coba di test sekaligus di koreksi kesalahan saya dmn yak...?
www.safelinkmu.ga/ or www.safelinkmu.ga/p/generate.html
avatar
Balas
Dedi Islafuddin  delete 29 July 2017 at 06:44
pada bagian script js nya dan di bagian html templatenya coba cek dengan teliti om
avatar
Balas
Shisui delete 29 July 2017 at 07:04
link downloadnya gak lewat safelink dlu bos..jdi biasa aja gak ngaruh tuh gmn ya...
pdhal udh bisa safelinknya nextcus.blogspot.com
avatar
Balas
Dedi Islafuddin  delete 31 July 2017 at 20:05
yang script ini udah ditaruh di bawah kode </body>

<script src='https://cdn.rawgit.com/dedi96/safelink/813ce72f/safelinkga.js' type='text/javascript'/>
<script type='text/javascript'>
protected_links = &quot;domain.com,blogspot.com,blogger.com,linkedin.com,facebook.com,twitter.com,google.com,feedburner.com&quot;;
auto_safelink();
</script>
avatar
Balas
Ricki Kurniawan delete 29 July 2017 at 10:14
Balas
Guru Hebat 
Mohon maaf Mas Dedi.
Saya praktekkan pakai punya mas Dedi.
Hasilnya juga sama.

Saya convert link di www.safelink.ga
Hasilnya: http://www.safelink.ga/p/generate.html?url=d3d3Lmd1cnVoZWJhdC54eXo=

Setelah klik "Visit Link"
Bukannya menuju ke www.guruhebat.xyz malah dibawa ke http://www.safelink.ga/p/www.guruhebat.xyz


Dengan demikian, sepertinya langkah-langkah saya sudah tepat. Tapi barangkali memang ada kesalahan.
Sebab di Demo punya mas Dedi juga sudah gak work.
avatar
Balas
Shisui delete 29 July 2017 at 10:36
ITUMAH ENTE YG SALAH PAKNYA HTTP BKN WWW
avatar
Balas
Dedi Islafuddin  delete 31 July 2017 at 20:09
nah betul kalau mau konvert gunakan tambahan http:// atau https://

menurut saya konvert manual itu gk penting pak.
yanh penting kode script di blog utama bisa redirect ke blog safelink nya.
avatar
Balas
Dedi Islafuddin  delete 31 July 2017 at 20:09
nah betul kalau mau konvert gunakan tambahan http:// atau https://

menurut saya konvert manual itu gk penting pak.
yanh penting kode script di blog utama bisa redirect ke blog safelink nya.
avatar
Balas
Babe Sangar delete 29 July 2017 at 11:23
apa bisa menggunakan tema sndiri sob ?
dan cara mengubah ny gmn ?
avatar
Balas
Dedi Islafuddin  delete 31 July 2017 at 20:12
bisa om , asal bisa menerapkan sendiri 
avatar
Balas
Batu Lepang delete 29 July 2017 at 22:10
bang, kok generate link secara manualnya gak berfungsi ya? hasilnya kosong di bagian result nya
avatar
Balas
Dedi Islafuddin  delete 31 July 2017 at 20:13
coba cek bagian html template di teliti lagi dan script js nya
baca dengan teliti tutor diatas om 
    1 – 200 of 265   Newer›   Newest»
Gunakan kata-kata yang bijak saat berkomentar ya sob.
Emoticon

 
 
Cari artikel...
 
PopularLabel
 Daftar Bug Operator AXIS dan XL Terbaru Work 0p0k
Daftar Bug Operator AXIS dan XL Terbaru Work 0p0k
 Download Microsoft NET Framework Terbaru 4.7 Offline Installer
Download Microsoft NET Framework Terbaru 4.7 Offline Installer
 Tutorial Cara Memasang Iklan Google Adsense di Blog Sendiri Dengan Mudah
Tutorial Cara Memasang Iklan Google Adsense di Blog Sendiri Dengan Mudah
 Download Logo Peringatan HUT RI Ke- 71 Tahun 2016
Download Logo Peringatan HUT RI Ke- 71 Tahun 2016
 Compress / Memperkecil Ukuran Video Tanpa Mengurangi Kualitas (HandBrake)
Compress / Memperkecil Ukuran Video Tanpa Mengurangi Kualitas (HandBrake)

 
Fanspage

Komentar Terbaru
Dedi IslafuddinDedi Islafuddin
yup benar om :D
Dedi IslafuddinDedi Islafuddin
pengalihan gimana maksudnya om ?
3Setyo3Setyo
domain .ga nya dapet dari mana gan...? Freenom...?
rahma auliyarahma auliya
terimakasih atas informasinya, jangan lupa kunjungi kami di …
Zero TechnologyZero Technology
Mohon bantuanya mas, instruksi diatas sudah saya penuhi semu…
Artikel Terbaru
Cara Membuat Akun Google / Gmail Tanpa Verifikasi No HP

Aug-27 - 2017 | No Comments
Cara Memasang Iklan Adsense Di Sebelah Paragraf Postingan Blog

Aug-27 - 2017 | No Comments
Cara Merekam Aktivitas Layar Komputer / Laptop ( Screen Recorder )

Aug-25 - 2017 | 1 Comment
Template Blogger BMAG - Magazine Full Responsive (Premium)

Aug-25 - 2017 | No Comments
Download Microsoft NET Framework Terbaru 4.7 Offline Installer

Aug-22 - 2017 | No Comments
Blog Teman Lainnya
www.confignet.tk
mbahhanif.site
 