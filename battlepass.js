let scrollInterval;

document.getElementById('scroll-left').onmouseenter = function () {
  scrollInterval = setInterval(function () {
    document.getElementById('scroll-container').scrollBy({
      top: 0,
      left: -200,  // Adjust speed by changing this value
      behavior: 'smooth'
    });
  }, 25);  // Adjust speed by changing this value
};

document.getElementById('scroll-left').onmouseleave = function () {
  clearInterval(scrollInterval);
};

document.getElementById('scroll-right').onmouseenter = function () {
  scrollInterval = setInterval(function () {
    document.getElementById('scroll-container').scrollBy({
      top: 0,
      left: 200,  // Adjust speed by changing this value
      behavior: 'smooth'
    });
  }, 25);  // Adjust speed by changing this value
};

document.getElementById('scroll-right').onmouseleave = function () {
  clearInterval(scrollInterval);
};
