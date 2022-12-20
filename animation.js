window.onload = function() {
    var credits = document.querySelector('main');
    credits.style.opacity = 0;
    credits.style.transition = 'opacity 2s';
    setTimeout(function() {
      credits.style.opacity = 1;
    }, 500);
  }
  