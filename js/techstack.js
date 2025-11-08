// خاص بالحركة أو السلايدر (Logo Slider / Tech Grid Animation) في قسم Tech Stack
function initTechStack() {
    const techItems = document.querySelectorAll('.tech-item');

    // تأثير الهوفر
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // السلايدر اللانهائي السلس
    const techSlider = document.querySelector('.tech-slider');
    if (techSlider) {
        const sliderContent = techSlider.innerHTML;

        // نكرر المحتوى مرتين عشان يكون عندنا 3 نسخ متتالية للتمرير السلس
        techSlider.innerHTML = sliderContent + sliderContent + sliderContent;

        let position = 0;
        const speed = 0.5; // السرعة (كلما قلّ الرقم تبطأت الحركة)
        let animationFrame;

        function animate() {
            position -= speed;

            // عرض الجزء الأصلي من المحتوى فقط (ثلث الإجمالي)
            const sliderWidth = techSlider.scrollWidth / 3;

            // لو عدّى العرض الأصلي، نرجع للبداية بدون أي فاصل
            if (Math.abs(position) >= sliderWidth) {
                position = 0;
            }

            techSlider.style.transform = `translateX(${position}px)`;
            animationFrame = requestAnimationFrame(animate);
        }

        // نبدأ الأنيميشن
        animate();

        // نوقفه وقت الهوفر
        techSlider.addEventListener('mouseenter', function() {
            cancelAnimationFrame(animationFrame);
        });

        // ونرجعه لما يسيب الماوس
        techSlider.addEventListener('mouseleave', function() {
            animate();
        });

        // تحسين الأداء
        techSlider.style.willChange = 'transform';
    }
}
