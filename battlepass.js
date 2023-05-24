document.getElementById('scroll-left').onclick = function () {
    document.getElementById('scroll-container').scrollBy({
      top: 0,
      left: -document.querySelector('.level').offsetWidth,
      behavior: 'smooth'
    });
  };
  
  document.getElementById('scroll-right').onclick = function () {
    document.getElementById('scroll-container').scrollBy({
      top: 0,
      left: document.querySelector('.level').offsetWidth,
      behavior: 'smooth'
    });
  };
  