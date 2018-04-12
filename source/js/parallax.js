window.addEventListener('load', function() {
  const stage2 = window.document.querySelector('#stage-2'),
    stage3 = window.document.querySelector('#stage-3'),
    stage4 = window.document.querySelector('#stage-4');

  const detectDeviceType = function () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      ? 'Mobile'
      : 'Desktop';
  };

  const getScrollPosition = function (el = window) {
    return {
      x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
      y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
    }
  };

  const background_image_parallax = function (object, multiplier) {
    multiplier = typeof multiplier !== 'undefined' ? multiplier : 1;
    multiplier = 1 / multiplier;

    const positionY = multiplier * -getScrollPosition().y + 'px';
    if (object !== undefined){
      object.style.backgroundPositionY = positionY;
    }
  };

  if (detectDeviceType() === 'Desktop') {
    window.addEventListener('scroll', function () {
      requestAnimationFrame(function () {
        background_image_parallax(stage2, 2);
        background_image_parallax(stage3, 3);
        background_image_parallax(stage4, 4);
      });
    })
  }
});

