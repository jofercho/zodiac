window.onload = function() {
  let duration = 5000;
  magicCircle(duration, '#circle1 path');
  magicCircle(duration, '#hexagram1 path');
  magicCircle(duration, '#hexagram2 path');
}

function magicCircle(duration, target) {
  anime({
      targets: target,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: duration,
      delay: function(el, i) { return i * 450 },
      direction: 'alternate',
      fill: '#fcba03',
      loop: false
  });
}