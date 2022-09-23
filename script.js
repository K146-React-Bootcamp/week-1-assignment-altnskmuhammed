/*
Cookie lerin yapısı:
1-cookie adı
2-cookie değeri
3-cookie'nin yaşam süresi
4- path


Cookie adı = Cokie değeri ; Cookie'nin yaşam süresi ; path 

*/

document.cookie = "username=Muhammed Altunışık"; // username cookie adı Muhammed Altunışık Cookie değeridir

document.cookie =
  "username=Muhammed Altunışık ; express = Mon, 25 Nov 2022 12:30:00 UTC"; // tarih değeri de verilebilir olusturdugumuz cookie belirtilen tarihte tarayıcının hafızasından silinit

document.cookie =
  "username=Muhammed Altunışık ; express = Mon, 25 Nov 2022 12:30:00 UTC ; path =/"; // dosya yolu da belirtilebilir bu genelde web sitesi adresi olur

function setCookie(cname, cvalue, exdays) {
  //cookie ayarlamak için bir fonksiyon
  const d = new Date(); // bugunun tarihini almamızı saglar
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000); // d.getTime fonksiyonu ile bugunun zamanını almamızı saglar exdays*24.... bu zamana 24 saat ekler d.set ile cookinin yasam suresini 24 saat olarak ayarlarız
  let expires = "expires=" + d.toUTCString(); //  expres değişkenimize utc olarak 24 saatimizi ekleriz
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; // Ve cookie miz set edildi..
}

setCookie("username", "Ahmet Altunışık", 1);

function getCookie(name) {
  const value = `; ${document.cookie}`; //Çerezlerin aşağıdaki şekilde saklandığını göz önünde bulundurarak:
  const parts = value.split(`; ${name}=`); // "{name}={value}; {name}={value}; ...";
  if (parts.length === 2) return parts.pop().split(";").shift(); // Belirli bir çerez değerini almak için, "; {name}="'den sonra ve sonraki ";"'den önce gelen dizeyi almamız yeterlidir. Herhangi bir işlem yapmadan önce, çerez dizesinin başına "; " koyarız, böylece ilki de dahil olmak üzere her çerez adı "; " ve "=" ile çevrelenir:
}

let x = getCookie("username");

document.getElementById("yazdır").innerHTML = x;

// SessionStorage

sessionStorage.setItem("lastName", "Ayu"); // lastName key degerine atama yapılır

let lastName = sessionStorage.getItem("lastName"); // deger sesionStorage den alınır

document.getElementById("yazdır").innerHTML = lastName; // sesionStorage tek oturumluk cerezdır tarih eklenmesini istitorsak localStorage kullanılır
