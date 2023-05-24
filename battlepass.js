document.getElementById('scroll-left').onmousedown = function () {
    document.getElementById('scroll-container').scrollBy({
      top: 0,
      left: -document.querySelector('.level').offsetWidth,
      behavior: 'smooth'
    });
  };
  
  document.getElementById('scroll-right').onmousedown = function () {
    document.getElementById('scroll-container').scrollBy({
      top: 0,
      left: document.querySelector('.level').offsetWidth,
      behavior: 'smooth'
    });
  };
  