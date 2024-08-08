document.getElementById('togglePor').addEventListener('click', function() {
    var section = document.getElementById('porSection');
    section.style.display = (section.style.display === 'block') ? 'none' : 'block';
});

document.getElementById('toggleConference').addEventListener('click', function() {
    var section = document.getElementById('conferenceSection');
    section.style.display = (section.style.display === 'block') ? 'none' : 'block';
});

document.getElementById('toggleInternships').addEventListener('click', function() {
    var section = document.getElementById('internshipSection');
    section.style.display = (section.style.display === 'block') ? 'none' : 'block';
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll('.toggle-buttons button');
    const sections = document.querySelectorAll('.section');

    toggleButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const section = sections[index];

            if (section.classList.contains('visible')) {
                section.style.maxHeight = 0;
                setTimeout(() => {
                    section.classList.remove('visible');
                }, 500); // Duration must match the animation duration in CSS
            } else {
                section.classList.add('visible');
                section.style.maxHeight = section.scrollHeight + "px";
            }
        });
    });
});
