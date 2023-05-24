document.getElementById('scroll-left').onmouseenter = function () {
    document.getElementById('scroll-container').scrollBy({
      top: 0,
      left: -document.querySelector('.level').offsetWidth,
      behavior: 'smooth'
    });
  };
  
  document.getElementById('scroll-right').onmouseenter = function () {
    document.getElementById('scroll-container').scrollBy({
      top: 0,
      left: document.querySelector('.level').offsetWidth,
      behavior: 'smooth'
    });
  };
  