window.onload = function() {
    var elements = document.querySelectorAll('.frame');
    const colorThief = new ColorThief();
    let duration = 5000;
    logo(duration);
    setBackGrounds(colorThief, elements);
    gallery(elements);


    let test = document.getElementsByClassName("menuItem");
    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener("mouseenter", event => onMouseEnter(event.target), false);
        // test[i].addEventListener("mouseover", event => onMouseHover(event.target), false);
        test[i].addEventListener("mouseleave", event => onMouseOut(event.target), false);
    }

}

var onMouseEnter = function(el) {
    animateMenuItem(el, 1.3, 700, 400, 0, '7px', '5px');
}

var onMouseHover = function(el) {
    console.log("on mouse hover");
}


var onMouseOut = function(el) {
    animateMenuItem(el, 1.0, 600, 300, 0, 0, '20px');
}

const colors = new Array();

function logo(duration) {
    anime({
        targets: '#svgLogo path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: duration,
        delay: function(el, i) { return i * 450 },
        direction: 'alternate',
        fill: '#f1f8f8',
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

            anime({
                targets: '.logo',
                targets: '.logo, .menuItems, .fab',
                // targets: '.logo, .menuItem a',
                delay: 3000,
                background: colors[next],
                opacity: [0.8, 0.9, 0.8],
                easing: 'easeInOutQuad',
            });
        },
    });
}

function setBackGrounds(colorThief, elements) {
    let backgrounds = new Array(elements.length);
    for (let i = 0; i < elements.length; i++) {
        let img = elements[i].children[0];
        let color = colorThief.getColor(img);
        let pallet = colorThief.getPalette(img);
        console.log('pallet ' + pallet);
        let radialGradient = 'radial-gradient(rgb(' +
            color[0] + ', ' +
            color[1] + ', ' +
            color[2] + ') 20%, rgb(239, 233, 245) 100%)';

        let radialGradient2 = 'radial-gradient(rgb(239, 233, 245) 10%, rgb(' +
            color[0] + ', ' +
            color[1] + ', ' +
            color[2] + ') 100%)';
        let bgColor = 'rgb(' +
            color[0] + ', ' +
            color[1] + ', ' +
            color[2] + ')';

        let linearGradient = 'linear-gradient(45deg, rgb(' +
            color[0] + ', ' +
            color[1] + ', ' +
            color[2] + ') 20%, rgb(239, 233, 245) 80%)';
        colors.push(bgColor);
        // console.log("bgColor " + bgColor);
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

function animateMenuItem(el, scale, duration, elasticity, translateY, translateX, borderRadius) {
    anime.remove(el);
    anime({
        targets: el,
        scale: scale,
        duration: duration,
        elasticity: elasticity,
        translateX: translateX,
        translateY: translateY
    });
}