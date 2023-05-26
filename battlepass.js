// Get all levels into an array
let levels = Array.from(document.getElementsByClassName('level'));
let currentDisplayIndex = 0;

// Hide all levels initially
levels.forEach(level => level.style.display = 'none');

// Show initial three levels
for(let i = 0; i < 3; i++) {
    levels[i].style.display = 'flex';
}

// Scroll left function
document.getElementById('scroll-left').addEventListener('click', function() {
    if(currentDisplayIndex > 0) {
        levels[currentDisplayIndex + 2].style.display = 'none';
        currentDisplayIndex--;
        levels[currentDisplayIndex].style.display = 'flex';
    }
});

// Scroll right function
document.getElementById('scroll-right').addEventListener('click', function() {
    if(currentDisplayIndex < levels.length - 3) {
        levels[currentDisplayIndex].style.display = 'none';
        currentDisplayIndex++;
        levels[currentDisplayIndex + 2].style.display = 'flex';
    }
});
