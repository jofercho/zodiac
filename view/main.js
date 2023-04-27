window.onload = function() {
    var elements = document.querySelectorAll('.frame');
    const colorThief = new ColorThief();
    logo();
    setBackGrounds(colorThief, elements);
    gallery(elements);
}

// const fac = new FastAverageColor();

function logo() {
    console.log('onload logo');
    // var elements = document.querySelectorAll('#bio');
    anime({
        targets: '#svgLogo path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 5000,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        fill: `#cccece`,
        loop: true
    });
}

function gallery(elements) {
    let top = 0;
    let next = top + 1;
    let currentFrame = elements[0];
    anime({
        targets: currentFrame,
        opacity: 0,
        delay: 3000,
        loop: true,
        easing: 'easeInCubic',
        loopComplete: function(anim) {
            currentFrame.classList.remove('top');
            if (elements.length - 1 < ++top) {
                top = 0;
            }
            currentFrame = elements[top];
            currentFrame.classList.add('top');
            if (elements.length - 1 < ++next) {
                next = 0;
            }
            elements[next].style.opacity = 1;
            anim.animatables[0].target = elements[top];
        },
    });
}

function setBackGrounds(colorThief, elements) {
    let backgrounds = new Array(elements.length);
    for (let i = 0; i < elements.length; i++) {
        let img = elements[i].children[0];
        let color = colorThief.getColor(img);
        let radialGradient = 'radial-gradient(rgb(' +
            color[0] + ', ' +
            color[1] + ', ' +
            color[2] + ') 20%, rgb(239, 233, 245) 100%)';
        let bgColor = 'rgb(' +
            color[0] + ', ' +
            color[1] + ', ' +
            color[2] + ')';
        console.log("bgColor " + bgColor);
        let frame = 'frame' + i;
        document.getElementById(frame).style.background = radialGradient;
        // document.getElementById(frame).style.background = bgColor;

    }
}

function colorToString(colorArray) {
    let bgColorString = 'rgb(' +
        colorArray[0] + ', ' +
        colorArray[1] + ', ' +
        colorArray[2] + ');'
    return bgColorString;
}

// function getAvgColor() {
//     let paintgContianer = document.querySelectorAll('.paintings');
//     fac.getColorAsync(paintgContianer.querySelector('img'))
//         .then(color => {
//             container.style.backgroundColor = color.rgba;
//             container.style.color = color.isDark ? '#fff' : '#000';
//         })
//         .catch(e => {
//             console.log(e);
//         });
// }