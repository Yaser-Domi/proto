// القائمة المتحركة للشاشات الصغيرة
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav');
        
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.innerHTML = nav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // إغلاق القائمة عند النقر على رابط
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // إظهار/إخفاء زر العودة للأعلى
        const goTop = document.querySelector('.go-top');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                goTop.classList.add('active');
            } else {
                goTop.classList.remove('active');
            }
        });
        
        // تأثيرات الحركة عند التمرير
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.about-text, .about-image, .portfolio-item, .service-card, .contact-card, .contact-form, .testimonial-slide');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        
        // تعيين الخصائص الأولية للعناصر
        document.querySelectorAll('.about-text, .about-image, .portfolio-item, .service-card, .contact-card, .contact-form, .testimonial-slide').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
        
        // عرض شريط المهارات عند التمرير
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const animateSkills = () => {
            skillBars.forEach(bar => {
                const barPosition = bar.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (barPosition < screenPosition) {
                    bar.style.width = bar.parentElement.previousElementSibling.lastElementChild.textContent;
                }
            });
        };
        
        window.addEventListener('scroll', animateSkills);
        window.addEventListener('load', animateSkills);
        
        // شرائح التعليقات
        let currentSlide = 0;
        const slides = document.querySelectorAll('.testimonial-slide');
        
        function showSlide(n) {
            slides.forEach(slide => {
                slide.style.display = 'none';
                slide.style.opacity = '0';
                slide.style.transform = 'translateY(20px)';
            });
            
            currentSlide = (n + slides.length) % slides.length;
            
            slides[currentSlide].style.display = 'block';
            setTimeout(() => {
                slides[currentSlide].style.opacity = '1';
                slides[currentSlide].style.transform = 'translateY(0)';
            }, 50);
        }
        
        function nextSlide() {
            showSlide(currentSlide + 1);
        }
        
        // عرض الشريحة الأولى عند التحميل
        showSlide(0);
        
        // تغيير الشرائح تلقائيًا كل 5 ثوانٍ
        setInterval(nextSlide, 5000);