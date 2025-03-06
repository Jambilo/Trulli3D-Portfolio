document.addEventListener("DOMContentLoaded", () => {
    $('.carousel').on('touchstart', function(event){
        const xClick = event.originalEvent.touches[0].pageX;
        $(this).one('touchmove', function(event){
            const xMove = event.originalEvent.touches[0].pageX;
            const sensitivityInPx = 10;
    
            if( Math.floor(xClick - xMove) > sensitivityInPx ){
                $(this).carousel('next');
            }
            else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
                $(this).carousel('prev');
            }
        });
        $(this).on('touchend', function(){
            $(this).off('touchmove');
        });
    });
    
    $('.carousel').carousel({
        interval: 3000,
        wrap: true
      })

    // landing page ----------------------------------------------------------------------------------------------------------------------
    const landingTl = gsap.timeline({ paused: true });
    landingTl.from("#start-text", {duration: 1, opacity: 0, y: -40});
    landingTl.from("#start-button", {duration: 0.5, opacity: 0, y: 40});
    // Intersection Observer for landing section
    const landingOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of landing section is visible
    };

    const landingObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelector('#start').classList.add('visible');
                setTimeout(() => {
                    landingTl.play(); // Play GSAP animation when feature section is visible
                }, 200);
            } else {
                document.querySelector('#start').classList.remove('visible');
                //landingTl.reverse(); // Reverse GSAP animation when landing section is not visible
            }
        });
    }, landingOptions);

    const landingSection = document.querySelector('#start');
    landingObserver.observe(landingSection);
    // -----------------------------------------------------------------------------------------------------------------------------------

// filaments on feature section -----------------------------------------------------------------------------------------------------------------------------------
    const featureTl = gsap.timeline({ paused: true });
    featureTl.from("#filament1", { duration: 0.5, opacity: 0, x: 5000 });
    featureTl.from("#filament2", { duration: 0.5, opacity: 0, x: 5000 }, "-=0.3");
    featureTl.from("#filament3", { duration: 0.5, opacity: 0, x: 5000 }, "-=0.3");
    featureTl.from("#filament4", { duration: 0.5, opacity: 0, x: 5000 }, "-=0.3");
    featureTl.from("#filament5", { duration: 0.5, opacity: 0, x: 5000 }, "-=0.3");

    const featureOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of feature section is visible
    };

    const featureObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelector('#filaments').classList.add('visible');
                setTimeout(() => {
                    featureTl.play(); // Play GSAP animation when feature section is visible
                }, 100);
            } else {
                document.querySelector('#filaments').classList.remove('visible');
                //featureTl.reverse(); // Reverse GSAP animation when feature section is not visible
            }
        });
    }, featureOptions);

    const featureSection = document.querySelector('#filaments');
    featureObserver.observe(featureSection);
    // -----------------------------------------------------------------------------------------------------------------------------------
    
});

function openEmailClient() {
        window.location.href = 'mailto:info@trulli3d.ch';
    }


function toggleDropDown(){
    document.getElementById("dropDown").classList.toggle("active");
    if ($('#dropDown.active').length > 0) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#dropDown").offset().top
        }, 400);
    }
}

