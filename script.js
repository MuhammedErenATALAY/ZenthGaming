let current = 0;
const slides = document.querySelectorAll('.slide');

function show(index) {
    if (slides.length === 0) return;
    
    // Tüm slaytları gizle
    slides.forEach(s => s.classList.remove('active'));
    
    // Başa veya sona sarma mantığı
    current = (index + slides.length) % slides.length;
    
    // Aktif olanı göster
    slides[current].classList.add('active');
}

function changeSlide(n) {
    show(current + n);
}

// 5 saniyede bir otomatik değiştir
setInterval(() => {
    changeSlide(1);
}, 5000);