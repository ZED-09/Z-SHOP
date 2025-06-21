        // Inisialisasi variabel
        const slides = document.querySelector('.slides');
        const slideElements = document.querySelectorAll('.slide');
        let currentIndex = 0;
        const totalSlides = slideElements.length;
        // Fungsi untuk perpindahan slide
        function goToSlide(index) {
        // Mengatur indeks agar tidak melebihi jumlah slide
        if (index < 0) {
        index = totalSlides - 1;
        } else if (index >= totalSlides) {
        index = 0;
        }
        // Menggeser slide
        slides.style.transform = `translateX(-${index * 25}%)`;
        // Memperbarui indeks saat ini
        currentIndex = index;
        }
        setInterval(() => {
        goToSlide(currentIndex + 1);
        }, 3500)