// خاص بزر "اقرأ المزيد" في قسم "من نحن"، وإظهار التفاصيل الإضافية
function initAbout() {
    const aboutReadMoreBtn = document.getElementById('about-read-more');
    const aboutMoreContent = document.getElementById('about-more');
    
    if (aboutReadMoreBtn && aboutMoreContent) {
        aboutReadMoreBtn.addEventListener('click', function() {
            aboutMoreContent.classList.toggle('expanded');
            
            const icon = this.querySelector('i');
            const span = this.querySelector('span');
            const currentLang = document.documentElement.getAttribute('lang') || 'en';
            
            if (aboutMoreContent.classList.contains('expanded')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
                span.textContent = currentLang === 'ar' ? 'اقرأ أقل' : 'Read Less';
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
                span.textContent = currentLang === 'ar' ? 'اقرأ المزيد' : 'Read More';
            }
        });
    }
}