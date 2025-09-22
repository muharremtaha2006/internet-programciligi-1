// Sayfa yüklendiğinde çalışacak bir fonksiyon oluşturuyoruz
window.onload = function() {
    // Butonun üzerine tıklama olayını dinliyoruz
    const alertButton = document.getElementById('alertButton');

    alertButton.addEventListener('click', function() {
        // Butona tıklandığında gösterilecek uyarıyı yazıyoruz
        alert('Butona tıkladınız! Hoş geldiniz!');
    });
}
