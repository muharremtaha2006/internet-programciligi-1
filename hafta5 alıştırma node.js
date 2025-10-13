/*hello_world = "hello world"
console.log(hello_world);
let maas = 3000;
var maas2 = 5000;
console.log(maas);
console.log(maas2);
var urunAdi = "Iphone 17";
var urunFiyat = "100"
console.log(typeof urunAdi);
console.log(Number(urunFiyat));
console.log(typeof parseInt(urunFiyat));
let sayi1 = "10";
let sayi2 = "20";
console.log(Number(sayi1) + parseInt(sayi2));

for (let i = 10; i >= 0; i--) {
    console.log("sayi guncel ", i);
}

var isim = "isim";
var soyisim = "soyisim";

console.log(isim, soyisim);*/



let ogrenciAdi = "Ahmet";
let ogrenciSoyadi = "Yaşar";
let ogrenciDogumTarihi = 2015;

let not1 = 80, not2 = 90, not3 = 70;

let notlar = [not1, not2, not3];


let ogrenciOrtalama = (not1 + not2 + not3) / 3;

let basariliMi = ogrenciOrtalama > 50;

let suankiyil = new Date().getFullYear();

let ogrYas = suankiyil - ogrenciDogumTarihi;



console.log("Öğrenci Adı: " + ogrenciAdi);
console.log("Öğrenci Soyadı: " + ogrenciSoyadi);
console.log("Öğrenci Yaşı: " + ogrYas);
console.log("Öğrenci Ortalama Notu: " + ogrenciOrtalama);
console.log("Öğrenci Başarılı mı?: " + (basariliMi ? "Evet" : "Hayır"));
console.log("Notlar Büyükten Küçüğe: " + notlar);
console.log()

let sayi1 = 10;
let sayi2 = 5;

let islem = 2;

switch (islem) {
    case 1:
        console.log("Toplama Sonucu: " + (sayi1 + sayi2));
        break;
    case 2:
        console.log("Çıkarma Sonucu: " + (sayi1 - sayi2));
        break;
    case 3:
        console.log("Çarpma Sonucu: " + (sayi1 * sayi2));
        break;
    case 4:
        if (sayi2 !== 0) {
            console.log("Bölme Sonucu: " + (sayi1 / sayi2));
        } else {
            console.log("Hata: Sıfıra bölme yapılamaz.");
        }
        break;
    default:
        console.log("Geçersiz işlem.");
}
