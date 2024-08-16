document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target elements for animation
    const iitkgpArea = document.querySelector('.iitkgp_area');
    const class12Area = document.querySelector('.class_12_area');
    const class10Area = document.querySelector('.class_10_area');

    // Start observing the elements
    if (iitkgpArea) observer.observe(iitkgpArea);
    if (class12Area) observer.observe(class12Area);
    if (class10Area) observer.observe(class10Area);
});


document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box1, .box2, .box3');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    boxes.forEach(box => {
        observer.observe(box);
    });
});

function openImage(imageUrl) {
  window.open(imageUrl, '_blank');
}
