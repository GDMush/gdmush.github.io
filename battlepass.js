document.getElementById('scroll-left').addEventListener('click', function() {
    document.getElementById('scroll-container').scrollBy({
      top: 0,
      left: -200, // Change this to control the scroll distance
      behavior: 'smooth' // Smooth scrolling
    });
  });
  
  document.getElementById('scroll-right').addEventListener('click', function() {
    document.getElementById('scroll-container').scrollBy({
      top: 0,
      left: 200, // Change this to control the scroll distance
      behavior: 'smooth' // Smooth scrolling
    });
  });
  