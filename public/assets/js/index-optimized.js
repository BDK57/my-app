window.addEventListener('resize', () => {
    document.querySelectorAll('section').forEach((e) => {
        // e.style.height = `${window.innerHeight}px`;
        // e.style.height = `${window.screen.height}`;
        e.style.height = `100vh`;
    })
})
// window.scrollTo(0,sectionTop - 120)
// console.log(li)

function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 50) }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 50,
        snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth, curX, distanceToStart, distanceToLoop, item, i;
    gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
            let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
            xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
            return xPercents[i];
        }
    });
    gsap.set(items, { x: 0 });
    totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
        item = items[i];
        curX = xPercents[i] / 100 * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
            .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
            .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
            vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }
    tl.next = vars => toIndex(curIndex + 1, vars);
    tl.previous = vars => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    // tl.times = times;
    // tl.progress(1, true).progress(0, true); // pre-render for performance
    // if (config.reversed) {
    //     tl.vars.onReverseComplete();
    //     tl.reverse();
    // }
    return tl;
}
window.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('section').forEach((e) => {
        // e.style.height = `${window.innerHeight}px`;
        e.style.height = `100vh`;
    })
    // INFINATE
    // Preloader Js ENd
    const boxes = gsap.utils.toArray(".d-show .rrr img");
    const boxes2 = gsap.utils.toArray(".d-show .ooo img");
    const boxes3 = gsap.utils.toArray(".d-show  .xxx img");
   
    const loop = horizontalLoop(boxes, { paused: true });
    const loop2 = horizontalLoop(boxes2, { paused: true });
    const loop3 = horizontalLoop(boxes3, { paused: true });
    setInterval(function () { loop.next() }, 500);
    setInterval(function () { loop2.previous() }, 500);
    setInterval(function () { loop3.next() }, 500);
    // boxes.forEach((box, i) => box.addEventListener("click", () => loop.toIndex(i, { duration: 0.8, ease: "power1.inOut" })));
    // boxes2.forEach((box, i) => box.addEventListener("click", () => loop2.toIndex(i, { duration: 0.8, ease: "power1.inOut" })));
    // boxes3.forEach((box, i) => box.addEventListener("click", () => loop3.toIndex(i, { duration: 0.8, ease: "power1.inOut" })));
    // INFINATE END
  
    // btn = document.createElement('button');
    // btn.textContent = 'Pause'
    // btn.className = 'Pause'
    // console.log(btn.style)
    // btn.style.position = "absolute"
    // btn.style.top = "0px"
    // btn.style.width = "80px"
    // btn.style.zIndex = 999999
    // btn1 = document.createElement('button');
    // btn1.textContent = 'Play'
    // btn1.className = 'play'
    // console.log(btn.style)
    // btn1.style.position = "absolute"
    // btn1.style.top = "0px"
    // btn1.style.left = "80px"
    // btn1.style.width = "80px"
    // btn1.style.zIndex = 999999
    // btn2 = document.createElement('button');
    // btn2.textContent = 'restart'
    // btn2.className = 'play'
    // console.log(btn.style)
    // btn2.style.position = "absolute"
    // btn2.style.top = "0px"
    // btn2.style.left = "160px"
    // btn2.style.width = "80px"
    // btn2.style.zIndex = 999999
    // document.querySelector('.d-show .slide-1').appendChild(btn)
    // document.querySelector('.d-show .slide-1').appendChild(btn1)
    // document.querySelector('.d-show .slide-1').appendChild(btn2)
    // btn.addEventListener('click', function () {
    //     master.pause()
    // })
    // btn1.addEventListener('click', function () {
    //     master.play()
    // })
    // btn2.addEventListener('click', function () {
    //     master.restart()
    // })
})
// Preloader Js
// const images = document.querySelectorAll("img");
// let isLoaded = false;
// let isLoadingAnimationEnd = false;
// const imgLoad = imagesLoaded(images);
// const entranceAnimation = () => {
//     const tl = gsap.timeline();
//     tl.to(".loading-image", {
//         y: -100,
//         duration: 1,
//         ease: "power2.inOut"
//     })
//         .to(
//             ".loading",
//             {
//                 yPercent: -100,
//                 duration: 1.25,
//                 ease: "power4.inOut"
//             },
//             0
//         )
//         // .to(
//         //     MorphSVGPlugin.convertToPath(
//         //         '.cls-1'
//         //     ),
//         //     {
//         //         morphSVG: ".rect"
//         //     }, "+=1"
//         // )
//         .to(
//             ".image",
//             {
//                 duration: 1,
//                 opacity: 1,
//                 y: 0,
//                 stagger: 0.1,
//                 ease: "power2.out"
//             },
//             0.6
//         );
//     master.play()
//     mob_master.play();
// };
// const loadingAnimation = () => {
//     const tl = gsap.timeline({
//         onComplete: () => {
//             isLoadingAnimationEnd = true;
//             if (isLoaded) {
//                 entranceAnimation()
//             }
//             else {
//                 master.pause()
//                 mob_master.pause();
//             }
//         }
//     }).from(".loading", {
//         yPercent: 0,
//         ease: "power3.inOut",
//         duration: 1
//     })
//         .fromTo(
//             ".loading-image",
//             {
//                 y: 0,
//                 duration: 2,
//                 ease: "power2.out"
//             },
//             {
//                 y: 200,
//                 yoyo: true,
//                 duration: 1,
//                 ease: "power2.out"
//             },
//             0.5
//         );
// };
// loadingAnimation();
// imgLoad.on("always", function () {
//     isLoaded = true;
//     if (isLoadingAnimationEnd) entranceAnimation();
// });
gsap.set(`.d-show .slide-1 .shades`, { xPercent: -50 });
// Mouse with Mouse js 
// document.querySelectorAll('.d-show section').forEach((e) => {
//     // console.log(e.style)
//     // gsap.set(`.d-show ${e} .shades`, { xPercent: -50 });
//     // // e.style.height = `${window.innerHeight}px`;
//     e.addEventListener("mousemove", e => {
//         console.log(e.x, e.y)
//         console.log("e", e.parentEleme)
//         gsap.to(`.d-show ${e.}.shades`, {
//             x: e.x,
//             // y: e.y,
//             duration: 2, ease: "power4",
//         })
//     });
// })
window.addEventListener("mousemove", e => {
    console.log(e.x, e.y)
    gsap.to('.d-show .slide-1  .shades', {
        x: e.x,
        // y: e.y,
        duration: 2, ease: "power4",
    })
});
// Lenis smoth Scrolling
const lenis = new Lenis(
    {
        duration: 3,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical', // vertical, horizontal
        gestureDirection: 'vertical', // vertical, horizontal, both
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: true,
        touchMultiplier: 1,
        infinite: false,
    }
)
// lenis.on('scroll', (e) => {
//     console.log(e)
// })
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
let intialScrollY = window.scrollY;

lenis.on('scroll', ScrollTrigger.update)
window.onscroll = ((e) => {
    if (intialScrollY < window.scrollY) {
        console.log("Down SCROLLING")
        document.querySelector("header").style.transform = "translateY(-150px)";
        document.querySelector("header").classList.add("scrolled")
        document.querySelector("header").style.transition = "all 1s";
       
    }
    else {
        document.querySelector("header").style.transform = "translateY(0)";
        if (window.scrollY == 0) {

            document.querySelector("header").classList.remove("scrolled");
        }
        

        console.log("up SCROLLING")
    }
    intialScrollY = window.scrollY
})

// 

// let tl = gsap.timeline({
//     delay: 0.5,
//     paused: true, // default is false
//     repeat: 2, // number of repeats (-1 for infinite)
//     repeatDelay: 1, // seconds between repeats
//     repeatRefresh: true, // invalidates on each repeat
//     yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
//     defaults: { // children inherit these defaults
//         duration: 1,
//         ease: "none"
//     },
//     smoothChildTiming: true,
//     autoRemoveChildren: true,
//     // onComplete: myFunc,
//     // other callbacks: 
//     // onStart, onUpdate, onRepeat, onReverseComplete
//     // Each callback has a params property as well
//     // i.e. onUpdateParams (Array)
// });
function navBar() {
    let easeValue = "slow(0.3, 0.5, false)"
    let tl = gsap.timeline()
    tl.fromTo('header', {
        // duration: 2,
    },
        {
            height: '100px',
            duration: 5,
            ease: easeValue,
            scrollTrigger: {
                trigger: "header",
                scroller: "body",
                // duration: 0.05,
                scrub: 2,
                start: '10% top',
                end: '50% bottom',
                // scrub: 5
            },
        })// build scene 2
    tl.fromTo('header figure img', {
        // duration: 2,
    },
        {
            height: '60px',
            duration: 50,
            ease: easeValue,
            scrollTrigger: {
                trigger: "header",
                scroller: "body",
                // duration: 0.05,
                scrub: 2,
                start: '10% top',
                end: '50% bottom',
                // scrub: 5
            },
        }, "<1")// build scene 2
    tl.fromTo('header figure', {
        // duration: 2,
    },
        {
            padding: "20px 0px",
            duration: 5,
            ease: easeValue,
            scrollTrigger: {
                trigger: "header",
                scroller: "body",
                // duration: 0.05,
                scrub: 2,
                start: '10% top',
                end: '50% bottom',
                // scrub: 5
            },
        }, "<1")// build scene 2
    tl.fromTo('header nav', {
        // duration: 2,
    },
        {
            marginTop: " 45px",
            duration: 5,
            ease: easeValue,
            scrollTrigger: {
                trigger: "header",
                scroller: "body",
                // duration: 0.05,
                scrub: 2,
                start: '10% top',
                end: '50% bottom',
                // scrub: 5
            },
        }, "<1")// build scene 2
    tl.fromTo('.d-show header .apply-now', {
        // duration: 2,
    },
        {
            marginTop: "25px",
            duration: 5,
            ease: easeValue,
            scrollTrigger: {
                trigger: "header",
                scroller: "body",
                // duration: 0.05,
                scrub: 2,
                start: '10% top',
                end: '50% bottom',
                // scrub: 5
            },
            // onComplete: (() => {
            //     loop.play()
            // })
        }, "<1")// build scene 2
    return tl;
}
// function scenceColorChange() {
//     let tl = gsap.timeline()
//     return tl
// }
function scene1() {
    let tl = gsap.timeline()
    tl.fromTo('.d-show header figure .span-reveal a img ',
        {
            yPercent: -100,
            opacity: 0,
            // duration: 2,
        },
        {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5
            // duration: 1.5,
        })
    tl.fromTo('.d-show header nav ul li',
        {
            yPercent: -100,
            opacity: 0,
            // duration: 2,
        },
        {
            yPercent: 0,
            opacity: 1,
            stagger: 0.2
            // duration: 1.5,
        }, '-=.0.25')
    tl.fromTo('.d-show header .span-reveal div img ',
        {
            xPercent: -100,
            opacity: 0,
            // duration: 2,
        },
        {
            xPercent: 0,
            opacity: 1,
            duration: 1.5,
        }, '-=0.75')
    tl.fromTo('.d-show .char-slide1', {
        // yPercent: 100,
        scale: 1.5,
        // opacity: 0
        // duration: 2,
    }, {
        // yPercent: 0,
        duration: 1,
        scale: 1,
    }, '-=3')// build scene 2
    tl.fromTo('.d-show .slide-1', {
        backgroundColor: 'rgba(134, 55, 138, 0.5)',
    },
        {
            backgroundColor: 'rgba(134, 55, 138, 1)',
            // duration: 0.5
        }, '-=2.5')// build scene 2
    tl.fromTo('.d-show .slide-1 .shades', {
        opacity: 0,
        // duration: 2,
    },
        {
            opacity: 1,
            duration: 2,
            ease: "expo.inOut"
        }, '-=2.5')// build scene 2
    tl.fromTo(".d-show .char-slide1 img",
        { x: -10, duration: 2 },
        { x: 20, duration: 4, repeat: -1, yoyo: true }
    )
    tl.fromTo('.d-show .real-online-exp .real', {
        xPercent: -100,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 0.8,
    }, "-=4")// build scene 2
    tl.fromTo('.d-show .real-online-exp .online span img', {
        yPercent: 100,
        opacity: 0,
        // duration: 2,
    }, {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
    }, "-=0.8")// build scene 2
    tl.fromTo('.d-show .real-online-exp .experience', {
        xPercent: -100,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 0.8,
    }, "-=0.8")// build scene 2
    tl.fromTo('.d-show .real-online-exp-nav .span-reveal ul',
        {
            xPercent: -100,
            opacity: 0,
            // duration: 2,
        },
        {
            xPercent: 0,
            opacity: 1,
            duration: 1,
        }, "<50%")
    tl.fromTo('.d-show .slide1-graphic1',
        {
            opacity: 0,
            xPercent: -80,
            yPercent: 200
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 1.5,
            stagger: 0.5,
        }, '-=30%')
    tl.fromTo('.d-show .slide1-graphic2',
        {
            opacity: 0,
            xPercent: -200,
            yPercent: 100
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 1.5,
            stagger: 0.5,
        }, '-=50%')
    tl.fromTo('.d-show .slide1-graphic3',
        {
            opacity: 0,
            xPercent: 200,
            yPercent: 200
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 1.5,
            stagger: 0.5,
        }, '-=50%')
    return tl;
}
function scene4() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .slide-1-txt-box', {
        xPercent: -800,
        scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 3.5,
        ease: 'power5'
    })// build scene 2
    return tl;
}
// function scene5() {
//     let tl = gsap.timeline();
//     return tl;
// }
function scene6_2() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .slide1-graphic1',
        { rotate: -360 },
        {
            rotate: 360, duration: 2,
            scrollTrigger: {
                trigger: ".d-show .slide1-graphic1",
                scroller: "body",
                start: "top 20%",
                end: "bottom 50%",
                scrub: 5
            },
        })
    return tl;
}
function scene6() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .slide1-graphic1 , .d-show .slide1-graphic2 , .d-show .slide1-graphic3, .d-show .slide1-graphic4,.d-show .slide1-graphic5', {
        yPercent: 0
    },
        {
            yPercent: -360,
            scrollTrigger: {
                // markers: true,
                trigger: ".d-show .slide-1",
                scroller: "body",
                start: "-0% 0%",
                end: "100% 0%",
                scrub: 8
            },
        })
    return tl;
}
let master = gsap.timeline()
    // .add(navBar())
    // .add(scenceColorChange())
    .add(scene1())
    // .add(scene2(), "-=2")
    // .add(scene6(), '+=0.2')
    // .add(scene3(), "-=2") // overlap slightly
    // .add(scene4(), "-=50%") // overlap slightly
    // .add(scene5(), "-=0.2") // overlap slightly
    .add(scene6()) // overlap slightly
    .add(scene6_2()) // overlap slightly
// master.pause()
// master.controls();
function scenceColorChange2() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".d-show .slide-2",
            scroller: "body",
            // duration: 0.05,
            scrub: 1,
            start: '-500px 0%',
            end: '600px bottom',
            // scrub: 5
        },
    })
    tl.fromTo('.d-show .slide-2', {
        backgroundColor: 'rgba(134, 55, 138,1)',
        // duration: 2,
    },
        {
            backgroundColor: 'rgba(121, 190, 125, 1)',
            duration: 3,
            ease: "power2"
        })// build scene 2
    tl.fromTo('.d-show .slide-2 .shades', {
        opacity: 0,
        // duration: 2,
    },
        {
            opacity: 1,
            duration: 20,
            ease: "expo.in"
        }, "-=0.5")// build scene 2
    return tl
}
function sceneSlidemove2() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .slide-2', { y: 0, opacity: 1 }, {
        y: -135, duration: 10, opacity: 1, ease: "expo",
        scrollTrigger: {
            trigger: ".d-show .slide-2",
            scroller: "body",
            // duration: 0.05,
            scrub: 5,
            start: '-80% top',
            end: '100% bottom',
            // markers: true
            // scrub: 5
        },
    })// build scene 2
    return tl;
}
function scene7() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .char-slide2', { y: 700, opacity: 1 }, {
        y: 0, duration: 2, opacity: 1, stagger: 1,
        scrollTrigger: {
            trigger: ".d-show .slide-2",
            scroller: "body",
            // duration: 0.05,
            scrub: true,
            start: '-60% top',
            end: '100% bottom',
            // scrub: 5
        },
    })// build scene 2
    return tl;
}
function scene8() {
    let tl = gsap.timeline();
    tl.fromTo(".d-show .char-slide2 img",
        { x: -10, duration: 2 },
        { x: 20, duration: 4, repeat: -1, yoyo: true })
    // return tl
}
function scene9() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".d-show .slide-2",
                scroller: "body",
                // duration: 0.05,

                scrub: 5,
                start: '-60% top',
                end: '90% bottom',
                // markers: true
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        }
    );
    tl.fromTo('.d-show .slide2-graphic3',
        {
            opacity: 0,
            xPercent: 200,
            yPercent: 300
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .slide2-graphic2',
        {
            opacity: 0,
            xPercent: -200,
            yPercent: 300
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .why-rox h2', {
        xPercent: 200,
    }, {
        xPercent: 0,
        duration: 50,
    })
    tl.fromTo('.d-show .why-rox .rox', {
        xPercent: 200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 50,
    })
    tl.fromTo('.d-show .why-rox .roll', {
        xPercent: 200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 50,
    }, '<50%')
    tl.fromTo('.d-show .slide-2-txt-box p', {
        xPercent: 200,
        scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 50,
    }, '-=25')// build scene 2
    tl.fromTo('.d-show .slide-2-txt-box h3', {
        xPercent: 200,
        scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 50,
        ease: 'power5'
    }, '-=35')// build scene 2
    tl.fromTo('.d-show .slide-2-txt-box .btn .span-reveal img.app-store,.d-show .slide-2-txt-box .btn .span-reveal img.google-play', {
        yPercent: 200,
        // scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        yPercent: 0,
        // scale: 1,
        stagger: 15,
        opacity: 1,
        duration: 25,
    }, '-=50')// build scene 2
    return tl;
}
function scene9n() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .slide2-graphic1 , .d-show .slide2-graphic2 ,.d-show .slide2-graphic3,.d-show .slide2-graphic4,.d-show .slide2-graphic5',
        {
            opacity: 0
            // duration: 2,
        },
        {
            opacity: 1,
            yPercent: 10,
            duration: 100,
            stagger: 1,
            scrollTrigger: {
                trigger: ".d-show .why-rox",
                scroller: "body",
                // duration: 0.05,
                scrub: 1,
                start: '-200px top',
                end: '700px bottom',
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        })
    return tl;
}
function scene10() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .slide2-graphic1 , .d-show .slide2-graphic2 , .d-show .slide2-graphic3, .d-show .slide2-graphic4,.d-show .slide2-graphic5', {
        yPercent: 0
    },
        {
            yPercent: -360,
            scrollTrigger: {
                // markers: true,
                trigger: ".d-show .slide-2",
                scroller: "body",
                start: "-40% 0%",
                end: "100% 0%",
                // markers: true,
                scrub: 3
            },
        })
    return tl;
}
let slide2Master = gsap.timeline()
slide2Master.add(sceneSlidemove2())
slide2Master.add(scenceColorChange2())
    .add(scene7())
    .add(scene8())
    .add(scene9())
    // .add(scene9n(), "+=50")
    .add(scene10())
function scenceColorChange3() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".d-show .slide-3",
            scroller: "body",
            // duration: 0.05,
            scrub: 1,
            start: '-500px top',
            end: '600px bottom',
            // scrub: 5
        },
    })
    tl.fromTo('.d-show .slide-3', {
        backgroundColor: 'rgba(121, 190, 125, 1)',
        // backgroundImage: 'none'
        // duration: 2,
    },
        {
            backgroundColor: 'rgba(104, 87, 157, 1)',
            // backgroundImage: `url(assets/images/gradient-purple.png)`,
            duration: 3,
            ease: "power2"
        })// build scene 2
    tl.fromTo('.d-show .slide-3 .shades', {
        opacity: 0,
        // duration: 2,
    },
        {
            opacity: 1,
            duration: 5,
            ease: "expo.inOut"
        }, "-=0.5")// build scene 2
    return tl
}
function sceneSlidemove3() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .slide-3', { y: -135, duration: 2, opacity: 1 },
        {
            y: -270, duration: 20, opacity: 1, ease: "expo",
            scrollTrigger: {
                trigger: ".d-show .slide-3",
                scroller: "body",
                // duration: 0.05,
                scrub: 4,
                start: '-70% top',
                end: '100% bottom',
            },
        })// build scene 2
    return tl;
}
function scene11() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .char-slide3', { y: 700, opacity: 1 }, {
        y: 0, duration: 2, opacity: 1, stagger: 1,
        scrollTrigger: {
            trigger: ".d-show .slide-3",
            scroller: "body",
            // duration: 0.05,
            scrub: true,
            start: '-60% top',
            end: '100% bottom',
            // scrub: 5
        },
    })// build scene 2
    return tl;
}
function scene12() {
    let tl = gsap.timeline();
    tl.fromTo(".d-show .char-slide3 img",
        { x: -10, duration: 2 },
        { x: 20, duration: 4, repeat: -1, yoyo: true })
    // return tl
}
function scene13() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".d-show .slide-3",
                scroller: "body",
                // duration: 0.05,
                // markers: true,
                scrub: 8,
                start: '-60% top',
                end: '80% bottom',
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        }
    );
    tl.fromTo('.d-show .slide3-graphic3',
        {
            opacity: 0,
            xPercent: 200,
            yPercent: 300
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .slide3-graphic2',
        {
            opacity: 0,
            xPercent: -200,
            yPercent: 300
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .collab-central h2', {
        xPercent: -200,
    }, {
        xPercent: 0,
        duration: 50,
    })
    tl.fromTo('.d-show .collab-central .collab', {
        xPercent: -300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 100,
    })
    tl.fromTo('.d-show .collab-central .central', {
        xPercent: -300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 100,
    }, '<100%')
    tl.fromTo('.d-show .fixed-height-sl3 .span-reveal p', {
        xPercent: -200,
        scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 100,
    }, '<100%')// build scene 2
    tl.fromTo('.d-show .slide3-nav .span-reveal h3', {
        xPercent: -200,
        scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 100,
        ease: 'power5'
    })// build scene 2
    tl.fromTo('.d-show .slide3-nav .item-bx', {
        yPercent: 80,
        // scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        // xPercent: 0,
        yPercent: 0,
        opacity: 1,
        duration: 80,
        stagger: 25
    })// build scene 2
    return tl;
}
function scene13n() {
    let tl = gsap.timeline();
    tl.fromTo(".d-show .slide3-graphic2 ,.d-show .slide3-graphic3,.d-show .slide3-graphic4 ,.d-show .slide3-graphic5 ,.d-show .slide3-graphic6",
        {
            opacity: 0
            // duration: 2,
        },
        {
            opacity: 1,
            // duration: 100,
            // stagger: 0.3,
            scrollTrigger: {
                trigger: ".d-show .slide-3",
                scroller: "body",
                // duration: 0.05,
                scrub: 5,
                // start: '-10% top',
                // end: '0% bottom',
                start: "-50% 10%",
                end: "0% 0%",
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        })
    return tl;
}
function scene14() {
    let tl = gsap.timeline()
    tl.fromTo(".d-show .slide3-graphic2 ,.d-show .slide3-graphic3,.d-show .slide3-graphic4 ,.d-show .slide3-graphic5 ,.d-show .slide3-graphic6", {
        yPercent: 0
    },
        {
            yPercent: -500,
            scrollTrigger: {
                // markers: true,
                trigger: ".d-show .slide-3",
                scroller: "body",
                start: "-40% 0%",
                end: "100% 0%",
                // markers: true,
                scrub: 6
            },
            // duration: 10,
            // stagger: 8
            // yoyo: true,
        })
    return tl;
}
// overlap slightly
// .add(scene5()) // overlap slightly
let slide3Master = gsap.timeline()
slide3Master.add(sceneSlidemove3())
slide3Master.add(scenceColorChange3())
    .add(scene11())
    .add(scene12(), "+=2")
    .add(scene13(), "+=2")
    // .add(scene13n(), "+=2")
    .add(scene14(), "+=2")
function scenceColorChange4() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".d-show .slide-4",
            scroller: "body",
            // duration: 0.05,
            scrub: 1,
            start: '-500px top',
            end: '600px bottom',
            // scrub: 5
        },
    })
    tl.fromTo('.d-show .slide-4', {
        backgroundColor: 'rgba(104, 87, 157, 1)',
        // backgroundImage: 'none'
        // duration: 2,
    },
        {
            backgroundColor: 'rgba(238, 234, 153, 1)',
            // backgroundImage: `url(assets/images/gradiant-dark-green.png)`,
            duration: 3,
            ease: "power2"
        })// build scene 2
    tl.fromTo('.d-show .slide-4 .shades', {
        opacity: 0,
        // duration: 2,
    },
        {
            opacity: 1,
            duration: 20,
            ease: "expo.in"
        }, "-=0.5")// build scene 2
    return tl
}
function sceneSlidemove4() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .slide-4', { y: -270, duration: 2, opacity: 1 }, {
        y: -405, duration: 10, opacity: 1, ease: "expo",
        scrollTrigger: {
            trigger: ".d-show .slide-4",
            scroller: "body",
            // duration: 0.05,
            scrub: 4,
            start: '-70% top',
            end: '100% bottom',
            // scrub: 5
        },
    })// build scene 2
    return tl;
}
function slide4_scence_1() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .char-slide4', { y: 700, opacity: 1 }, {
        y: 0, duration: 2, opacity: 1, stagger: 1,
        scrollTrigger: {
            trigger: ".d-show .slide-4",
            scroller: "body",
            // duration: 0.05,
            scrub: true,
            start: '-60% top',
            end: '100% bottom',
            // scrub: 5
        },
    })// build scene 2
    return tl;
}
function slide4_scence_2() {
    let tl = gsap.timeline();
    tl.fromTo(".d-show .char-slide4 img",
        { x: -10, duration: 2 },
        { x: 20, duration: 4, repeat: -1, yoyo: true })
    // return tl
}
function slide4_scence_3() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".d-show .slide-4",
                scroller: "body",
                // duration: 0.05,
                start: '-60% top',
                end: '70% bottom',
                // start: '-650px top',
                // end: '0px 0px',
                scrub: 8
            },
        }
    );
    tl.fromTo('.d-show .slide4-graphic1',
        {
            opacity: 0,
            xPercent: 100,
            yPercent: 400
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .slide4-graphic2',
        {
            opacity: 0,
            xPercent: -200,
            yPercent: 300
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .slide4-graphic4',
        {
            opacity: 0,
            xPercent: -200,
            yPercent: 300
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .slide4-graphic5',
        {
            opacity: 0,
            xPercent: -200,
            yPercent: 300
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .slide4-graphic6',
        {
            opacity: 0,
            xPercent: -200,
            yPercent: 300
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .ref-earn-thrive h2', {
        xPercent: 200,
    }, {
        xPercent: 0,
        duration: 50,
    })
    tl.fromTo('.d-show .ref-earn-thrive .ref', {
        xPercent: 300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 100,
    })
    tl.fromTo('.d-show .ref-earn-thrive .earn', {
        xPercent: 300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 100,
    }, '<100%')
    tl.fromTo('.d-show .ref-earn-thrive .thrive', {
        xPercent: 300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 100,
    }, '<100%')
    tl.fromTo('.d-show .slide4-nav .span-reveal p', {
        xPercent: 200,
        scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 100,
    }, '<100%')// build scene 2
    tl.fromTo('.d-show .slide4-nav .span-reveal>ul', {
        yPercent: 200,
        // scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        yPercent: 0,
        // scale: 1,
        // stagger: 30,
        opacity: 1,
        duration: 50
    })// build scene 2
    tl.fromTo('.slide4-nav .item-bx', {
        // xPercent: 200,
        scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        // xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 100,
    })// build scene 2
    return tl;
}
function slide4_scence_4() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .slide4-graphic1 ,.d-show .slide4-graphic2 ,.d-show .slide4-graphic3,.d-show .slide4-graphic4,.d-show .slide4-graphic5,.d-show .slide4-graphic6',
        {
            opacity: 0
            // duration: 2,
        },
        {
            opacity: 1,
            duration: 100,
            stagger: 10,
            scrollTrigger: {
                trigger: '.d-show .slide4-graphic1 ,.d-show .slide4-graphic2 ,.d-show .slide4-graphic3,.d-show .slide4-graphic4,.d-show .slide4-graphic5,.d-show .slide4-graphic6',
                scroller: "body",
                // duration: 0.05,
                scrub: 1,
                start: '-400px top',
                end: '0% bottom',
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        })
    return tl;
}
function slide4_scence_5() {
    let tl = gsap.timeline()
    tl.fromTo(".d-show .slide4-graphic1 , .d-show .slide4-graphic2 ,.d-show .slide4-graphic3,.d-show .slide4-graphic4 ,.d-show .slide4-graphic5 ,.d-show .slide4-graphic6", {
        yPercent: 0
    },
        {
            yPercent: -500,
            scrollTrigger: {
                // markers: true,
                trigger: ".d-show .slide-4",
                scroller: "body",
                start: "-40% 0%",
                end: "100% 0%",
                // markers: true,
                scrub: 6
            },
            // duration: 10,
            // stagger: 8
            // yoyo: true,
        })
    return tl;
}
let slide4Master = gsap.timeline()
slide4Master.add(sceneSlidemove4())
slide4Master.add(scenceColorChange4())
    .add(slide4_scence_1())
    .add(slide4_scence_2())
    .add(slide4_scence_3())
    .add(slide4_scence_4())
    .add(slide4_scence_5())
function scenceColorChange5() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".d-show .slide-5",
            scroller: "body",
            // duration: 0.05,
            scrub: 1,
            start: '-500px top',
            end: '600px bottom',
            // scrub: 5
        },
    })
    tl.fromTo('.d-show .slide-5', {
        backgroundColor: 'rgba(234, 226, 152, 1)',
        // duration: 2,
    },
        {
            backgroundColor: 'rgba(87, 173, 140, 1)',
            duration: 3,
            ease: "power2"
        })// build scene 2
    tl.fromTo('.d-show .slide-5 .shades', {
        opacity: 0,
        // duration: 2,
    },
        {
            opacity: 1,
            duration: 5,
            ease: "expo.inOut"
        }, "-=0.5")// build scene 2
    return tl
}
function sceneSlidemove5() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .slide-5', { y: -405, duration: 2, opacity: 1 }, {
        y: -405, duration: 10, opacity: 1, ease: "expo",
        scrollTrigger: {
            trigger: ".d-show .slide-5",
            scroller: "body",
            // duration: 0.05,
            scrub: 4,
            start: '-70% top',
            end: '100% bottom',

            // scrub: 5
        },
    })// build scene 2
    return tl;
}
function slide5_scence_1() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .char-slide5', { y: 700, x: 700, opacity: 1 }, {
        y: 0, x: 0, duration: 2, opacity: 1, stagger: 1,
        scrollTrigger: {
            trigger: ".d-show .slide-5",
            scroller: "body",
            // duration: 0.05,
            scrub: 2,
            start: '-60% top',
            end: '100% bottom',
            // scrub: 5
        },
    })// build scene 2
    return tl;
}
function slide5_scence_2() {
    let tl = gsap.timeline();
    tl.fromTo(".d-show .char-slide5 img",
        { x: -10, duration: 2 },
        { x: 20, duration: 4, repeat: -1, yoyo: true })
    // return tl
}
function slide5_scence_3() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".d-show .slide-5",
                scroller: "body",
                scrub: 6,
                start: '-60% top',
                end: '70% bottom',
                // markers: true
                // markers: true
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        }
    );
    tl.fromTo('.d-show .slide5-graphic1',
        {
            opacity: 0,
            xPercent: 200,
            yPercent: 400
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .slide5-graphic2',
        {
            opacity: 0,
            xPercent: -200,
            yPercent: 300
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .slide5-graphic4',
        {
            opacity: 0,
            xPercent: -200,
            yPercent: 300
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .slide5-graphic5',
        {
            opacity: 0,
            xPercent: -200,
            yPercent: 300
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .slide5-graphic6',
        {
            opacity: 0,
            xPercent: -200,
            yPercent: 300
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .our-data-plan>.span-reveal h2', {
        xPercent: -200,
    }, {
        xPercent: 0,
        duration: 50,
    })
    tl.fromTo('.d-show .our-data-plan .we-got', {
        xPercent: -300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 100,
    }, '-=50')
    tl.fromTo('.d-show .our-data-plan .plan', {
        xPercent: -300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 100,
    }, '<100%')
    tl.fromTo('.d-show .slide5-nav .span-reveal>p', {
        xPercent: -200,
        scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 100,
    }, '<100%')// build scene 2
    tl.fromTo('.d-show .slide5-nav>.btns .span-reveal>div', {
        yPercent: 200,
        // scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        yPercent: 0,
        // scale: 1,
        stagger: 5,
        opacity: 1,
        duration: 25,
    })// build scene 2
    tl.fromTo('.d-show .slide5-nav .span-reveal #show-pricing img', {
        // xPercent: -200,
        yPercent: 200,
        // scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        yPercent: 0,
        // scale: 1,
        // stagger: 30,
        opacity: 1,
        duration: 25,
    }, '<50%')// build scene 2

    // tl.fromTo('.d-show #plans-main2  .yellow', {
    //     yPercent: 100,
    //     xPercent: 10,
    //     // scale: 0,
    //     opacity: 0
    //     // duration: 2,
    // }, {
    //     yPercent: 10,
    //     xPercent: 10,
    //     // scale: 1,
    //     opacity: 1,
    //     duration: 100,

    // }, '<50%')// build scene 2
    return tl;
}
function slide5_scence_3n() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".d-show .slide-5.trigger2",
                scroller: "body",
                scrub: 6,
                start: '-30% top',
                end: '70% bottom',
                // markers: true
                // markers: true
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        }
    );

    tl.fromTo('.d-show #plans-main2  .yellow', {
        yPercent: 100,
        xPercent: 10,
        // scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        yPercent: 0,
        xPercent: 10,
        // scale: 1,
        opacity: 1,
        duration: 100,

    }, '<50%')// build scene 2
    return tl;
}
function slide5_scence_4() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .slide5-graphic1 ,.d-show .slide5-graphic2 ,.d-show .slide5-graphic3,.d-show .slide5-graphic4,.d-show .slide5-graphic5,.d-show .slide5-graphic6',
        {
            opacity: 0
            // duration: 2,
        },
        {
            opacity: 1,
            duration: 100,
            stagger: 10,
            scrollTrigger: {
                trigger: '.d-show .slide5-graphic1 ,.d-show .slide5-graphic2 ,.d-show .slide5-graphic3,.d-show .slide5-graphic4,.d-show .slide5-graphic5,.d-show .slide5-graphic6',
                scroller: "body",
                // duration: 0.05,
                scrub: 1,
                start: '-400px top',
                end: '0% bottom',
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        })
    return tl;
}
function slide5_scence_5() {
    let tl = gsap.timeline()
    tl.fromTo(".d-show .slide5-graphic1 , .d-show .slide5-graphic2 ,.d-show .slide5-graphic3,.d-show .slide5-graphic4 ,.d-show .slide5-graphic5 ,.d-show .slide5-graphic6", {
        yPercent: 0
    },
        {
            yPercent: -500,
            scrollTrigger: {
                // markers: true,
                trigger: ".d-show .slide-5",
                scroller: "body",
                start: "-40% 0%",
                end: "100% 0%",
                // markers: true,
                scrub: 6
            },
            // duration: 10,
            // stagger: 8
            // yoyo: true,
        })
    return tl;
}
let slide5Master = gsap.timeline()
slide5Master.add(sceneSlidemove5())
slide5Master.add(scenceColorChange5())
    .add(slide5_scence_1())
    // .add(slide5_scence_2())
    .add(slide5_scence_3())
    .add(slide5_scence_3n())
    // .add(slide5_scence_4())
    .add(slide5_scence_5())
//     .add(scene15())
// slide5Master.pause()
function scenceColorChange6() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".d-show .slide-6",
            scroller: "body",
            // duration: 0.05,
            scrub: 1,
            start: '-600px top',
            end: '600px bottom',
            // scrub: 5
        },
    })
    tl.fromTo('.d-show .slide-6', {
        backgroundColor: 'rgba(87, 173, 140, 1)',
        // duration: 2,
    },
        {
            backgroundColor: '#2b2c3e',
            duration: 3,
            ease: "power2"
        })// build scene 2
    tl.fromTo('.d-show .slide-6 .shades', {
        opacity: 0,
        // duration: 2,
    },
        {
            opacity: 1,
            duration: 5,
            ease: "expo.inOut"
        }, "-=0.5")// build scene 2
    return tl
}
function sceneSlidemove6() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .slide-6', { y: -540, duration: 2, opacity: 1 }, {
        y: -540, duration: 10, opacity: 1, ease: "expo",
        scrollTrigger: {
            trigger: ".d-show .slide-6",
            scroller: "body",
            // duration: 0.05,
            scrub: 4,
            start: '-70% top',
            end: '100% bottom',
            // scrub: 5
        },
    })// build scene 2
    return tl;
}
function slide6_scence_1() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .char-slide6', { y: 700, x: -700, opacity: 1 }, {
        y: 0, x: 0, duration: 2, opacity: 1, stagger: 1,
        scrollTrigger: {
            trigger: ".d-show .slide-6",
            scroller: "body",
            // duration: 0.05,
            scrub: 2,
            start: '-60% top',
            end: '100% bottom',
            // scrub: 5
        },
    })// build scene 2
    return tl;
}
function slide6_scence_2() {
    let tl = gsap.timeline();
    tl.fromTo(".d-show .char-slide6 img",
        { x: -10, duration: 2 },
        { x: 20, duration: 4, repeat: -1, yoyo: true })
    // return tl
}
function slide6_scence_3() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".d-show .slide-6",
                scroller: "body",
                // duration: 0.05,
                scrub: 8,
                start: '-60% top',
                end: '70% bottom',
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        }
    );
    // tl.fromTo('.d-show .our-data-plan>h2', {
    //     xPercent: -200,
    // }, {
    //     xPercent: 0,
    //     duration: 50,
    // })
    tl.fromTo('.d-show .slide6-graphic1',
        {
            opacity: 0,
            xPercent: 200,
            yPercent: 400
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .slide6-graphic2',
        {
            opacity: 0,
            xPercent: -200,
            yPercent: 300
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .slide6-graphic4',
        {
            opacity: 0,
            xPercent: -200,
            yPercent: 300
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .slide6-graphic5',
        {
            opacity: 0,
            xPercent: -200,
            yPercent: 300
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .faqs', {
        xPercent: 300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 50,
    })
    tl.fromTo('.d-show .faqs-text-inner-box', {
        yPercent: 300,
        // duration: 2,
    }, {
        yPercent: 0,
        duration: 50,
    })
    // tl.fromTo('.d-show .slide-6 .accor-box .panel', {
    //     // xPercent: -200,
    //     scale: 0,
    //     // opacity: 0
    //     // duration: 2,
    // }, {
    //     // xPercent: 0,
    //     scale: 1,
    //     // opacity: 1,
    //     duration: 100,
    //     ease: 'power5'
    // })// build scene 2
    tl.fromTo('.d-show .slide-6 .accor-box .firstBoxAcc', {
        // xPercent: -200,
        opacity: 0
        // duration: 2,
    }, {
        // xPercent: 0,
        opacity: 1,
        duration: 100,
    }, '<50%')// build scene 2
    tl.fromTo('.d-show .slide-6 .accor-box .span-reveal a#moveLeft img', {
        // xPercent: -200,
        yPercent: 200,
        // scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        yPercent: 0,
        // scale: 1,
        // stagger: 30,
        opacity: 1,
        duration: 50,
    }, '<10%')// build scene 2
    return tl;
}
function slide6_scence_4() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .slide6-graphic1 ,.d-show .slide6-graphic2 ,.d-show .slide6-graphic3,.d-show .slide6-graphic4,.d-show .slide6-graphic5,.d-show .slide6-graphic6',
        {
            opacity: 0
            // duration: 2,
        },
        {
            opacity: 1,
            duration: 100,
            stagger: 10,
            scrollTrigger: {
                trigger: '.d-show .slide6-graphic1 ,.d-show .slide6-graphic2 ,.d-show .slide6-graphic3,.d-show .slide6-graphic4,.d-show .slide6-graphic5,.d-show .slide6-graphic6',
                scroller: "body",
                // duration: 0.05,
                scrub: 1,
                start: '-400px top',
                end: '0% bottom',
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        })
    return tl;
}
function slide6_scence_5() {
    let tl = gsap.timeline()
    tl.fromTo(".d-show .slide6-graphic1 , .d-show .slide6-graphic2 ,.d-show .slide6-graphic3,.d-show .slide6-graphic4 ,.d-show .slide6-graphic5 ,.d-show .slide6-graphic6", {
        yPercent: 0
    },
        {
            yPercent: -500,
            scrollTrigger: {
                // markers: true,
                trigger: ".d-show .slide-6",
                scroller: "body",
                start: "-40% 0%",
                end: "100% 0%",
                // markers: true,
                scrub: 6
            },
            // duration: 10,
            // stagger: 8
            // yoyo: true,
        })
    return tl;
}
let slide6Master = gsap.timeline()
// slide6Master.add(sceneSlidemove6())
slide6Master.add(scenceColorChange6())
    .add(slide6_scence_1)
    .add(slide6_scence_2)
    .add(slide6_scence_3)
    // .add(slide6_scence_4)
    .add(slide6_scence_5)
function sceneSlidemove7() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .slide-7', { y: -540, duration: 2, opacity: 1 }, {
        y: -540, duration: 10, opacity: 1, ease: "expo",
        scrollTrigger: {
            trigger: ".d-show .slide-7",
            scroller: "body",
            // duration: 0.05,
            scrub: 4,
            start: '-10% top',
            end: '100% bottom',
            // scrub: 5
            // markers: true
        },
    })// build scene 2
    return tl;
}
// slide 7
function scenceColorChange7() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".d-show .slide-7",
            scroller: "body",
            // duration: 0.05,
            scrub: 1,
            start: '-600px top',
            end: '600px bottom',
            // scrub: 5
        },
    })
    tl.fromTo('.d-show .slide-7', {
        backgroundColor: '#86358a',
        // duration: 2,
    },
        {
            backgroundColor: '#b8b2d8',
            duration: 3,
            ease: "power2"
        })// build scene 2
    tl.fromTo('.d-show .slide-7 .shades', {
        opacity: 0,
        // duration: 2,
    },
        {
            opacity: 1,
            duration: 5,
            ease: "expo.inOut"
        }, "-=0.5")// build scene 2
    return tl
}
function slide7_scence_3() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".d-show .slide-7",
                scroller: "body",
                // duration: 0.05,
                scrub: 8,
                start: '-50% top',
                end: '80% bottom',
                // markers: true
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        }
    );
    // tl.fromTo('.d-show .our-data-plan>h2', {
    //     xPercent: -200,
    // }, {
    //     xPercent: 0,
    //     duration: 50,
    // })
    tl.fromTo('.d-show .slide7-graphic1',
        {
            opacity: 0,
            xPercent: 200,
            yPercent: 400
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .slide7-graphic2',
        {
            opacity: 0,
            xPercent: -200,
            yPercent: 300
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .slide7-graphic4',
        {
            opacity: 0,
            xPercent: -200,
            yPercent: 300
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .slide7-graphic5',
        {
            opacity: 0,
            xPercent: -200,
            yPercent: 300
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 50,
            stagger: 0.5,
        })
    tl.fromTo('.d-show .apply-Now .apply', {
        xPercent: -300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 500,
    })
    tl.fromTo('.d-show .apply-Now .now', {
        xPercent: -300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 500,
    }, '-=50%')
    tl.fromTo('.d-show .slide-7 .form-box', {
        yPercent: 500,
        scale: 0.8,
        opacity: 0,
        // backgroundColor: '#000',
        // duration: 2,
    }, {
        yPercent: 0,
        backgroundColor: '#86358a',
        scale: 1,
        opacity: 1,
        duration: 500,
    }, "-=250")// build scene 2
    tl.fromTo('.d-show .slide-7 .form-box .slide7-nav .span-reveal ul', {
        // xPercent: -200,
        yPercent: 200,
        // scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        yPercent: 0,
        // scale: 1,
        // stagger: 30,
        opacity: 1,
        duration: 20,
    }, '-=150%')// build scene 2
    return tl;
}
function slide7_scence_4() {
    let tl = gsap.timeline();
    tl.fromTo('.d-show .slide7-graphic1 ,.d-show .slide7-graphic2 ,.d-show .slide7-graphic3,.d-show .slide7-graphic4,.d-show .slide7-graphic5,.d-show .slide7-graphic6',
        {
            opacity: 0
            // duration: 2,
        },
        {
            opacity: 1,
            duration: 100,
            // stagger: 10,
            scrollTrigger: {
                trigger: '.d-show .slide7-graphic1 ,.d-show .slide7-graphic2 ,.d-show .slide7-graphic3,.d-show .slide7-graphic4,.d-show .slide7-graphic5,.d-show .slide7-graphic6',
                scroller: "body",
                // duration: 0.05,
                scrub: 1,
                start: '-400px top',
                end: '0% bottom',
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        })
    return tl;
}
function slide7_scence_5() {
    let tl = gsap.timeline()
    tl.fromTo(".d-show .slide7-graphic1 , .d-show .slide7-graphic2 ,.d-show .slide7-graphic3,.d-show .slide7-graphic4 ,.d-show .slide7-graphic5 ,.d-show .slide7-graphic6", {
        yPercent: 0
    },
        {
            yPercent: -500,
            scrollTrigger: {
                // markers: true,
                trigger: ".d-show .slide-7",
                scroller: "body",
                start: "-40% 0%",
                end: "100% 0%",
                // markers: true,
                scrub: 6
            },
            // duration: 10,
            // stagger: 8
            // yoyo: true,
        })
    return tl;
}
let slide7Master = gsap.timeline()
slide7Master.add(sceneSlidemove7())
slide7Master.add(scenceColorChange7())
    // .add(slide7_scence_1)
    // .add(slide7_scence_2)
    .add(slide7_scence_3)
    // .add(slide7_scence_4)
    .add(slide7_scence_5)
function footer_scence_1() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".d-show .mainFooter",
                scroller: "body",
                // duration: 0.05,
                scrub: 5,
                start: 'top 90%',
                end: 'bottom bottom',
                // markers: true
                // scrub: 5
            },
        }
    );
    tl.fromTo('.d-show .mainFooter .socialBox>img',
        {
            yPercent: 0,
            opacity: 0,
            scale: 0
            // duration: 2,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 80,
            stagger: 1,
        })
    tl.fromTo('.d-show .mainFooter .sociallogo p,.d-show .mainFooter .sociallogo img',
        {
            yPercent: 0,
            opacity: 0,
            scale: 0
            // duration: 2,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 80,
            stagger: 5,
            // ease: 'power3.in'
        }, "<10")
    tl.fromTo('.d-show .mainFooter nav ul li',
        {
            yPercent: 0,
            opacity: 0,
            scale: 0
            // duration: 2,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 10,
            stagger: 5,
        }, "<15")
    return tl;
}
let footerMaster = gsap.timeline()
// slide6Master.add(sceneSlidemove6())
footerMaster.add(footer_scence_1())
window.addEventListener('scroll', () => {
    if (document.querySelector('.d-show .faqs-main-screen').classList.contains('moved')) {
        document.querySelector('.d-show .faqs img').style.display = "none"
    }
})

// const yourDiv3 = document.querySelector('.slide-6 .faq-three .content-container'); // Replace 'yourDivId' with the actual ID of your <div> element




gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".slide-5.panel").forEach((panel, i) => {
    // ScrollTrigger.refresh();

    // let tl = gsap.timeline();
    // tl.fromTo('.d-show .slide-5', { y: -405, duration: 2, opacity: 1 }, {
    //     y: -540, duration: 10, opacity: 1, ease: "expo",
    //     scrollTrigger: {
    //         trigger: ".d-show .slide-5",
    //         scroller: "body",
    //         // duration: 0.05,
    //         scrub: 4,
    //         start: '-70% top',
    //         end: '100% bottom',

    //         // scrub: 5
    //     },
    // })// build scene 2
    ScrollTrigger.create({
        trigger: panel,
        start: `top top`,
        scroller: "body",
        pin: true,
        pinSpacing: false,
        // markers: true,
        onComplete: () => {
            ScrollTrigger.refresh();
        }
    });
});


// ScrollTrigger.create({
//     snap: false// snap whole page to the closest section!
// });



// gsap.set(".m-show .slide-5", { xPercent: 0, yPercent: 0 });
// gsap.set(".turbo-slider-bx", { xPercent: 0, yPercent: -5 });
//   gsap.set(".#plans-main2 .yellow", {  xPercent: 30});
gsap.set("#plans-main2 .green", { yPercent: 99, xPercent: 10, opacity: 0 });
gsap.set("#plans-main2 .purple", { yPercent: 114, xPercent: 20, opacity: 0 });
gsap.set("#plans-main2 .indigo", { yPercent: 121, xPercent: 25, opacity: 0 });
//   gsap.set(".turbo-slider-bx .purple", { yPercent: 20, xPercent: -100, opacity: 0 });
//   gsap.set(".turbo-slider-bx .indigo", { yPercent: 20, xPercent: -100, opacity: 0 });
// gsap.set("#textWrap .card3", { y: "<150", xPercent: -200 });

var heroDesk = gsap.timeline().to("#plans-main2 .green,#plans-main2 .purple,#plans-main2 .indigo", {
    //  autoAlpha: 1,
    yPercent: '-=100',
    duration: 10,
    stagger: 20,
    opacity: 1,
    scrollTrigger: {
        onEnter: () => {
            ScrollTrigger.refresh()
        },
        // container:".m-show .slide-5",
        trigger: ".d-show .slide-5.trigger2",
        pin: true,
        // pinSpacing: false,
        start: `top top`,
        end: "+=500",
        scrub: 0.5,
        // markers: true
    },
});


// setTimeout(function () {
//     ScrollTrigger.refresh();
// }, 1000);


gsap.utils.toArray(".panel2").forEach((panel, i) => {
    ScrollTrigger.refresh();
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        // markers: true
    });
});

// gsap.utils.toArray(".panel2").forEach((panel, i) => {
//     var hero = gsap.timeline().to(".slide-6.trigger", {
//         //  autoAlpha: 1,
//         xPercent: '-=200',
//         duration: 10,
//         stagger: 10,
//         opacity: 1,
//         scrollTrigger: {
//             trigger: panel,
//             start: "top top",
//             pin: true,
//             pinSpacing: false,
//         }

//         // markers: true

//     })
// });


ScrollTrigger.create({
    snap: false// snap whole page to the closest section!
});
if(window.innerWidth<800){

    function mhorizontalLoop(items, config) {
        items = gsap.utils.toArray(items);
        config = config || {};
        let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 50) }),
            length = items.length,
            startX = items[0].offsetLeft,
            times = [],
            widths = [],
            xPercents = [],
            curIndex = 0,
            pixelsPerSecond = (config.speed || 1) * 20,
            snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
            totalWidth, curX, distanceToStart, distanceToLoop, item, i;
        gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
            xPercent: (i, el) => {
                let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
                xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
                return xPercents[i];
            }
        });
        gsap.set(items, { x: 0 });
        totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
        for (i = 0; i < length; i++) {
            item = items[i];
            curX = xPercents[i] / 100 * widths[i];
            distanceToStart = item.offsetLeft + curX - startX;
            distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
            tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
                .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
                .add("label" + i, distanceToStart / pixelsPerSecond);
            times[i] = distanceToStart / pixelsPerSecond;
        }
        function toIndex(index, vars) {
            vars = vars || {};
            (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
            let newIndex = gsap.utils.wrap(0, length, index),
                time = times[newIndex];
            if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
                vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
                time += tl.duration() * (index > curIndex ? 1 : -1);
            }
            curIndex = newIndex;
            vars.overwrite = true;
            return tl.tweenTo(time, vars);
        }
        tl.next = vars => toIndex(curIndex + 1, vars);
        tl.previous = vars => toIndex(curIndex - 1, vars);
        tl.current = () => curIndex;
        tl.toIndex = (index, vars) => toIndex(index, vars);
        // tl.times = times;
        // tl.progress(1, true).progress(0, true); // pre-render for performance
        // if (config.reversed) {
        //     tl.vars.onReverseComplete();
        //     tl.reverse();
        // }
        return tl;
    }
    window.addEventListener('DOMContentLoaded', () => {
    
        document.querySelectorAll('section').forEach((e) => {
            // e.style.height = `${window.innerHeight}px`;
            e.style.height = `100vh`;
        })
        // INFINATE
        // Preloader Js ENd
        const mboxes = gsap.utils.toArray(".m-show .rrr img");
        const mboxes2 = gsap.utils.toArray(".m-show .ooo img");
        const mboxes3 = gsap.utils.toArray(".m-show  .xxx img");
        const mloop = mhorizontalLoop(mboxes, { paused: true });
        const mloop2 = mhorizontalLoop(mboxes2, { paused: true });
        const mloop3 = mhorizontalLoop(mboxes3, { paused: true });
       
        setInterval(function () { mloop.next() }, 500);
        setInterval(function () { mloop2.previous() }, 500);
        setInterval(function () { mloop3.next() }, 500);
        // boxes.forEach((box, i) => box.addEventListener("click", () => loop.toIndex(i, { duration: 0.8, ease: "power1.inOut" })));
        // boxes2.forEach((box, i) => box.addEventListener("click", () => loop2.toIndex(i, { duration: 0.8, ease: "power1.inOut" })));
        // boxes3.forEach((box, i) => box.addEventListener("click", () => loop3.toIndex(i, { duration: 0.8, ease: "power1.inOut" })));
        // INFINATE END
       
    
    })

    window.onscroll = ((e) => {
        if (intialScrollY < window.scrollY) {
           
            document.querySelector(".m-show header").style.transform = "translateY(-150px)";
            document.querySelector(".m-show header").style.transition = "all 1s";
            document.querySelector(".m-show header").classList.add = "scrolled";
        }
        else {
            document.querySelector(".m-show header").style.transform = "translateY(0)";
            
            document.querySelector(".m-show header").style.transform = "translateY(0)";
    
            console.log("up SCROLLING")
        }
        intialScrollY = window.scrollY
    })
// let acc = document.getElementsByClassName("accordion");
// for (let i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         let panel = this.nextElementSibling;
//         if (this.classList.contains("active")) {
//             this.classList.remove("active");
//             panel.style.height = "0";
//             panel.style.maxHeight = "0";
//             panel.style.minHeight = "0";
//         } else {
//             this.classList.add("active");
//             panel.style.height = panel.scrollHeight + "px";
//             panel.style.maxHeight = panel.scrollHeight + "px";
//             panel.style.opacity = 1;
//             panel.style.minHeight = "0";
//         }
//     });
// }
//Mobile Animations//
function scenceColorChangem() {
    let tl = gsap.timeline()
    tl.fromTo('.m-show .slide-1', {
        backgroundColor: 'rgba(134, 55, 138, 0.5)',
        // duration: 2, 
    },
        {
            backgroundColor: 'rgba(134, 55, 138, 1)',
            duration: 3,
            ease: "expo.in"
        })// build scene 2
    tl.fromTo('.m-show .slide-1 .shades', {
        opacity: 0,
        // duration: 2,
    },
        {
            opacity: 1,
            duration: 5,
            ease: "expo.inOut"
        }, "-=0.5")// build scene 2
    return tl
}
function scene1m() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .char-slide1', {
        yPercent: 100,
        // duration: 2,
    }, {
        yPercent: 0,
        duration: 2,
    })// build scene 2
    return tl
}
function scene2m() {
    let tl = gsap.timeline();
    tl.fromTo(".m-show .char-slide1 img",
        { x: -10, duration: 2 },
        { x: 20, duration: 4, repeat: -1, yoyo: true })
}
function scene3m() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .real-online-exp .real', {
        xPercent: -200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 2,
    })// build scene 2
    tl.fromTo('.m-show .real-online-exp .online', {
        xPercent: -200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 2,
    }, "-=1.5")// build scene 2
    tl.fromTo('.m-show .real-online-exp .experience', {
        xPercent: -200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 2,
    }, "-=1")// build scene 2
    tl.fromTo('.m-show .real-online-exp-nav ul', {
        yPercent: 200,
        // scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        yPercent: 0,
        // scale: 1,
        // stagger: 30,
        opacity: 1,
        duration: 2,
    }, "<1")
    return tl;
}
function scene4m() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .slide-1-txt-box', {
        xPercent: -800,
        scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 3.5,
        ease: 'power5'
    })// build scene 2
    return tl;
}
function scene5m() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .slide1-graphic1 , .m-show .slide1-graphic2 ,.m-show .slide1-graphic3',
        {
            opacity: 0,
            xPercent: 120,
            yPercent: 120
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 1.5,
            stagger: 0.5,
        })
    return tl;
}
function scene6_2m() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .slide1-graphic1',
        { rotate: -360 },
        {
            rotate: 360, duration: 2,
            scrollTrigger: {
                trigger: ".m-show .slide1-graphic1 , .m-show .slide1-graphic2 ,.m-show .slide1-graphic3",
                scroller: "body",
                start: "top 20%",
                end: "bottom 50%",
                scrub: 5
            },
        })
    return tl;
}
function scene6m() {
    let tl = gsap.timeline();
    tl.to('.m-show .slide1-graphic1 , .m-show .slide1-graphic2 ,.m-show .slide1-graphic3',
        {
            // opacity: 1,
            yPercent: -400,
            // duration: 2,
            // stagger: 2,
            yoyo: true,
            scrollTrigger: {
                trigger: ".m-show .slide-1",
                scroller: "body",
                start: "top 10%",
                end: "bottom 10%",
                scrub: 5
            },
        })
    return tl;
}
let mob_master = gsap.timeline()
mob_master.add(scenceColorChangem)
    .add(scene1m(), '+=2')
    .add(scene2m())
    .add(scene3m())
    .add(scene4m())
    .add(scene5m(), "<-50%")
    .add(scene6m())
    .add(scene6_2m())


function navBar_mob() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show #myNav ul li a', {
        yPercent: 100,
        opacity: 0
        // duration: 2,
    }, {
        yPercent: 0,
        opacity: 1,
        duration: 0.09,
        stagger: 0.05
    })// build scene 2
    tl.fromTo('.m-show #myNav .socialBox',
        {
            yPercent: 0,
            opacity: 0,
            scale: 0
            // duration: 2,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 1,
        })
    tl.fromTo('.m-show #myNav  .sociallogo p,.m-show #myNav .social-icons-nav img',
        {
            yPercent: 0,
            opacity: 0.5,
            scale: 0
            // duration: 2,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.01,
            // ease: 'power3.in'
        })
    return tl
}
let navBar_mob_master = gsap.timeline()
navBar_mob_master.add(navBar_mob())
navBar_mob_master.pause()
function scenceColorChange2m() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".m-show .slide-2",
            scroller: "body",
            // duration: 0.05,
            scrub: 1,
            start: '-550px 0%',
            end: '600px bottom',

            // scrub: 5
        },
    })
    tl.fromTo('.m-show .slide-2', {
        backgroundColor: 'rgba(134, 55, 138,1)',
        // duration: 2,
    },
        {
            backgroundColor: 'rgba(121, 190, 125, 1)',
            duration: 3,
            ease: "expo.in"
        })// build scene 2
    tl.fromTo('.m-show .slide-2 .shades', {
        opacity: 0,
        // duration: 2,
    },
        {
            opacity: 1,
            duration: 20,
            ease: "expo.in"
        }, "-=0.5")// build scene 2
    return tl
}
function sceneSlidemove2m() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .slide-2', { y: 0, opacity: 1 }, {
        y: -135, duration: 10, opacity: 1, ease: "expo",
        scrollTrigger: {
            trigger: ".m-show .slide-2",
            scroller: "body",
            // duration: 0.05,
            scrub: 5,
            start: '-750px top',
            end: '1500px bottom',
            // scrub: 5
        },
    })// build scene 2
    return tl;
}
function scene7m() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .char-slide2', { y: 700, opacity: 1 }, {
        y: 0, duration: 2, opacity: 1, stagger: 1,
        scrollTrigger: {
            trigger: ".m-show .char-slide2",
            scroller: "body",
            // duration: 0.05,
            scrub: true,
            start: '-1400px top',
            end: '0px bottom',
            // scrub: 5
        },
    })// build scene 2
    return tl;
}
function scene8m() {
    let tl = gsap.timeline();
    tl.fromTo(".m-show .char-slide2 img",
        { x: -10, duration: 2 },
        { x: 20, duration: 4, repeat: -1, yoyo: true })
    // return tl
}
function scene9m() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".m-show .slide-2",
                scroller: "body",
                // duration: 0.05,
                scrub: 1,
                start: '-40% top',
                end: '100% bottom',
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        }
    );
    tl.fromTo('.m-show .why-rox h2', {
        xPercent: 200,
    }, {
        xPercent: 0,
        duration: 50,
    })
    tl.fromTo('.m-show .why-rox .rox', {
        xPercent: 200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 100,
    })
    tl.fromTo('.m-show .why-rox .roll', {
        xPercent: 200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 100,
    }, '<100%')
    tl.fromTo('.m-show .slide-2-txt-box p', {
        xPercent: 200,
        // scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        // scale: 1,
        opacity: 1,
        duration: 100,
    }, '<100%')// build scene 2
    tl.fromTo('.m-show .slide-2-txt-box h3', {
        xPercent: 200,
        scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 100,
        ease: 'power5'
    })// build scene 2
    tl.fromTo('.m-show .slide-2-txt-box .app-store ,.m-show .slide-2-txt-box .play-store', {
        yPercent: 200,
        // scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        yPercent: 0,
        // scale: 1,
        stagger: 25,
        opacity: 1,
        duration: 50,
    })// build scene 2
    return tl;
}
function scene9nm() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .slide2-graphic1 , .m-show .slide2-graphic2 ,.m-show .slide2-graphic3,.m-show .slide2-graphic4,.m-show .slide2-graphic5',
        {
            opacity: 0,
            xPercent: 120,
            yPercent: 80,

            // duration: 2,
        },
        {
            opacity: 1,
            duration: 100,
            xPercent: 0,
            yPercent: 0,
            stagger: 25,
            scrollTrigger: {
                trigger: ".m-show .slide-2",
                scroller: "body",
                scrub: 5,
                start: '-40% top',
                end: '0% bottom',
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        })
    return tl;
}
function scene10m() {
    let tl = gsap.timeline();
    tl.to('.m-show .slide2-graphic1 , .m-show .slide2-graphic2 ,.m-show .slide2-graphic3,.m-show .slide2-graphic4,.m-show .slide2-graphic5',
        {
            // opacity: 1,
            yPercent: -600,
            // duration: 2,
            // stagger: 2,
            // yoyo: true,
            scrollTrigger: {
                trigger: ".m-show .slide-2",
                scroller: "body",
                start: "0% 10%",
                end: "50% 10%",
                scrub: 5
            },
        })
    return tl;
}
let slide2Masterm = gsap.timeline()
// slide2Master.add(sceneSlidemove2())
slide2Master.add(scenceColorChange2m())
    .add(scene7m())
    .add(scene8m())
    .add(scene9m())
    .add(scene9nm(), "+=50")
    .add(scene10m())
function scenceColorChange3m() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".m-show .slide-3",
            scroller: "body",
            // duration: 0.05,
            scrub: 1,
            start: '-700px top',
            end: '600px bottom',
            // scrub: 5
        },
    })
    tl.fromTo('.m-show .slide-3', {
        backgroundColor: 'rgba(121, 190, 125, 1)',
        // backgroundImage: 'none'
        // duration: 2,
    },
        {
            backgroundColor: 'rgba(104, 87, 157, 1)',
            // backgroundImage: `url(assets/images/gradient-purple.png)`,
            duration: 3,
        })// build scene 2
    tl.fromTo('.m-show .slide-3 .shades', {
        opacity: 0,
        // duration: 2,
    },
        {
            opacity: 1,
            duration: 5,
            ease: "expo.inOut"
        }, "-=0.5")// build scene 2
    return tl
}
function sceneSlidemove3m() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .slide-3', { y: -100, duration: 2, opacity: 1 },
        {
            y: -270, duration: 20, opacity: 1, ease: "expo",
            scrollTrigger: {
                trigger: ".m-show .slide-3",
                scroller: "body",
                // duration: 0.05,
                scrub: 4,
                start: '-650px top',
                end: '1000px bottom',
            },
        })// build scene 2
    return tl;
}
function scene11m() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .char-slide3', { y: 700, opacity: 1 }, {
        y: 0, duration: 2, opacity: 1, stagger: 1,
        scrollTrigger: {
            trigger: ".m-show .char-slide3",
            scroller: "body",
            // duration: 0.05,
            scrub: true,
            start: '-1400px top',
            end: '0px bottom',
            // scrub: 5
        },
    })// build scene 2
    return tl;
}
function scene12m() {
    let tl = gsap.timeline();
    tl.fromTo(".m-show .char-slide3 img",
        { x: -10, duration: 2 },
        { x: 20, duration: 4, repeat: -1, yoyo: true })
    // return tl
}
function scene13m() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".m-show .slide-3",
                scroller: "body",
                // duration: 0.05,
                scrub: 1,
                start: '-50% top',
                end: '100% bottom',
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        }
    );
    tl.fromTo('.m-show .collab-central h2', {
        xPercent: -200,
    }, {
        xPercent: 0,
        duration: 50,
    })
    tl.fromTo('.m-show .collab-central .collab', {
        xPercent: -300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 100,
    })
    tl.fromTo('.m-show .collab-central .central', {
        xPercent: -300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 100,
    }, '<100%')
    tl.fromTo('.m-show .collab-central .span-reveal>p', {
        xPercent: -200,
        // scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        // scale: 1,
        opacity: 1,
        duration: 100,
    }, '<100%')// build scene 2
    tl.fromTo('.m-show .slide3-nav .span-reveal>h3', {
        yPercent: 200,
        // scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        yPercent: 0,
        // scale: 1,
        opacity: 1,
        duration: 100,
        ease: 'power5'
    })// build scene 2
    tl.fromTo('.m-show .slide3-nav .item-bx', {
        yPercent: 200,
        // scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        yPercent: 0,
        stagger: 25,
        // scale: 1,
        opacity: 1,
        duration: 100,
    })// build scene 2
    return tl;
}
function scene13nm() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .slide3-graphic2 ,.m-show .slide3-graphic3,.m-show .slide3-graphic4 ,.m-show .slide3-graphic5,.m-show .slide3-graphic6',
        {
            opacity: 0,
            xPercent: 120,
            yPercent: 120
            // duration: 2,
        },
        {
            opacity: 1,
            duration: 100,
            xPercent: 0,
            yPercent: 0,
            stagger: 25,
            scrollTrigger: {
                trigger: ".m-show .slide-3",
                scroller: "body",
                scrub: 5,
                start: '-40% top',
                end: '0% bottom',
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        })
    return tl;
}
function scene14m() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: " .m-show .slide-3",
            scroller: "body",
            // stagger: 10,
            start: "0% 10%",
            end: "50% 10%",
            scrub: 2,
        },
    });
    tl.fromTo('.m-show .slide3-graphic2 ,.m-show .slide3-graphic3,.m-show .slide3-graphic4 ,.m-show .slide3-graphic5,.m-show .slide3-graphic6', {
        yPercent: 0
    },
        {
            yPercent: -600,
            // duration: 20,
            // stagger: 8
            // yoyo: true,
        })
    return tl;
}
// overlap slightly
// .add(scene5()) // overlap slightly
let slide3Masterm = gsap.timeline()
// slide3Master.add(sceneSlidemove3())
slide3Masterm.add(scenceColorChange3m())
    .add(scene11m())
    .add(scene12m(), "+=2")
    .add(scene13m(), "+=2")
    .add(scene13nm(), "+=2")
    .add(scene14m(), "+=2")
function scenceColorChange4m() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".m-show .slide-4",
            scroller: "body",
            // duration: 0.05,
            scrub: 1,
            start: '-500px top',
            end: '600px bottom',
            // scrub: 5
        },
    })
    tl.fromTo('.m-show .slide-4', {
        backgroundColor: 'rgba(104, 87, 157, 1)',
        // backgroundImage: 'none'
        // duration: 2,
    },
        {
            backgroundColor: 'rgba(238, 234, 153, 1)',
            // backgroundImage: `url(assets/images/gradiant-dark-green.png)`,
            duration: 1,
        })// build scene 2
    tl.fromTo('.m-show .slide-4 .shades', {
        opacity: 0,
        // duration: 2,
    },
        {
            opacity: 1,
            duration: 20,
            ease: "expo.in"
        }, "-=0.5")// build scene 2
    return tl
}
function sceneSlidemove4m() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .slide-3', { y: -100, duration: 2, opacity: 1 },
        {
            y: -270, duration: 20, opacity: 1, ease: "expo",
            scrollTrigger: {
                trigger: ".m-show .slide-3",
                scroller: "body",
                // duration: 0.05,
                scrub: 4,
                start: '-650px top',
                end: '1000px bottom',
            },
        })// build scene 2
    return tl;
}
function scene15m() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .char-slide4', { y: 700, opacity: 1 }, {
        y: 0, duration: 2, opacity: 1, stagger: 1,
        scrollTrigger: {
            trigger: ".m-show .char-slide4",
            scroller: "body",
            // duration: 0.05,
            scrub: true,
            start: '-1400px top',
            end: '0px bottom',
            // scrub: 5
        },
    })// build scene 2
    return tl;
}
function scene16m() {
    let tl = gsap.timeline();
    tl.fromTo(".m-show .char-slide4 img",
        { x: -10, duration: 2 },
        { x: 20, duration: 4, repeat: -1, yoyo: true })
    // return tl
}
function scene17m() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".m-show .slide-4",
                scroller: "body",
                // duration: 0.05,
                scrub: 1,
                start: '-20% top',
                end: '100% bottom',
                // markers: true,
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        }
    );
    tl.fromTo('.m-show .ref-earn-thrive h2', {
        xPercent: -200,
    }, {
        xPercent: 0,
        duration: 50,
    })
    tl.fromTo('.m-show .ref-earn-thrive .ref', {
        xPercent: -300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 100,
    })
    tl.fromTo('.m-show .ref-earn-thrive .earn', {
        xPercent: -300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 100,
    }, '<50%')
    tl.fromTo('.m-show .ref-earn-thrive .thrive', {
        xPercent: -300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 100,
    }, '+=100')
    tl.fromTo('.m-show .slide4-nav .span-reveal>p', {
        xPercent: -200,
        // scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        // scale: 1,
        opacity: 1,
        duration: 100,
    }, '<100%')// build scene 2
    tl.fromTo('.m-show .slide4-nav .span-reveal>ul', {
        yPercent: 200,
        // scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        yPercent: 0,
        // scale: 1,
        opacity: 1,
        duration: 100,
    })// build scene 2
    return tl;
}
function scene17nm() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .slide4-graphic1,.m-show .slide4-graphic2 , .m-show .slide4-graphic3',
        {
            opacity: 0,
            xPercent: 120,
            yPercent: 80
            // duration: 2,
        },
        {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 100,
            stagger: 25,
            scrollTrigger: {
                trigger: ".m-show .slide-4",
                scroller: "body",
                // duration: 0.05,
                scrub: 5,
                start: '-40% top',
                end: '100% bottom',
                // markers: true
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        })
    return tl;
}
function scene18m() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.m-show .slide-4',
            scroller: "body",
            // stagger: 10,
            start: "0% 10%",
            end: "50% 10%",
            scrub: 2,
        },
    });
    tl.fromTo('.m-show .slide4-graphic1,.m-show .slide4-graphic2 , .m-show .slide4-graphic3', {
        yPercent: 0
    },
        {
            yPercent: -600,

            // duration: 20,
            // stagger: 8
            // yoyo: true,
        })
    return tl;
}
// overlap slightly
// .add(scene5()) // overlap slightly
let slide4Masterm = gsap.timeline()
// slide3Master.add(sceneSlidemove3())
slide4Masterm.add(scenceColorChange4m())
    .add(scene15m())
    .add(scene16m(), "+=2")
    .add(scene17m(), "+=2")
    .add(scene17nm(), "+=2")
    .add(scene18m(), "+=2")
function scenceColorChange5m() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".m-show .slide-5",
            scroller: "body",
            // duration: 0.05,
            scrub: 1,
            start: '-500px top',
            end: '600px bottom',
            // scrub: 5
        },
    })
    tl.fromTo('.m-show .slide-5 .slide-5-m-content-bx', {
        backgroundColor: 'rgba(238, 234, 153, 1)',
        // backgroundImage: 'none'
        // duration: 2,
    },
        {
            backgroundColor: 'rgba(97, 176, 145, 0.9)',
            // backgroundImage: `url(assets/images/gradiant-dark-green.png)`,
            duration: 1,
        })// build scene 2
    tl.fromTo('.m-show .slide-5 .shades', {
        opacity: 0,
        // duration: 2,
    },
        {
            opacity: 1,
            duration: 20,
            ease: "expo.in"
        }, "-=0.5")// build scene 2
    return tl
}
function sceneSlidemove5m() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .slide-5', { y: -100, duration: 2, opacity: 1 },
        {
            y: -270, duration: 20, opacity: 1, ease: "expo",
            scrollTrigger: {
                trigger: ".m-show .slide-5",
                scroller: "body",
                // duration: 0.05,
                scrub: 4,
                start: '-650px top',
                end: '1000px bottom',
            },
        })// build scene 2
    return tl;
}
function scene19m() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .char-slide5', { xPercent: 700, opacity: 0 }, {
        xPercent: 0, duration: 2, opacity: 1,
        scrollTrigger: {
            trigger: ".m-show .slide-5",
            scroller: "body",
            // duration: 0.05,
            scrub: true,
            start: '-50% top',
            end: '0% 50%',
            // markers:true
            // scrub: 5
        },
    })// build scene 2
    return tl;
}
function scene20m() {
    let tl = gsap.timeline();
    tl.fromTo(".m-show .char-slide5 img",
        { x: -10, duration: 2 },
        { x: 20, duration: 4, repeat: -1, yoyo: true })
    // return tl
}
function scene21m() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".m-show .slide-5",
                scroller: "body",
                // duration: 0.05,
                scrub: 1,
                start: '-20% top',
                end: '80% bottom',
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        }
    );
    tl.fromTo('.m-show .our-data-plan .span-reveal h2', {
        xPercent: -200,
    }, {
        xPercent: 0,
        duration: 50,
    })
    tl.fromTo('.m-show .our-data-plan .span-reveal .we-got', {
        xPercent: -300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 100,
    })
    tl.fromTo('.m-show .our-data-plan .span-reveal .plan', {
        xPercent: -300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 100,
    }, '<50%')
    tl.fromTo('.m-show .our-data-plan .span-reveal>p', {
        xPercent: -200,
        // scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        // scale: 1,
        opacity: 1,
        duration: 100,
    }, '<50%')// build scene 2
    tl.fromTo('.m-show .turbo-slider-bx .yellow', {
        yPercent: 100, xPercent: -100,
        // scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        yPercent: 10,
        // scale: 1,
        opacity: 1,
        duration: 100,
    }, '<50%')// build scene 2
    return tl;
}
function scene21nm() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .slide5-graphic1,.m-show .slide5-graphic2 , .m-show .slide5-graphic3',
        {
            opacity: 0
            // duration: 2,
        },
        {
            opacity: 1,
            duration: 100,
            stagger: 1,
            scrollTrigger: {
                trigger: ".m-show .slide-5",
                scroller: "body",
                // duration: 0.05,
                scrub: 1,
                start: '-40% top',
                end: '100% bottom',
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        })
    return tl;
}
function scene22m() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.m-show .slide5-graphic1,.m-show .slide5-graphic2 , .m-show .slide5-graphic3',
            scroller: "body",
            // stagger: 10,
            start: "-50px 0%",
            end: "0% bottom",
            scrub: 5
        },
    });
    tl.fromTo('.m-show .slide5-graphic1,.m-show .slide5-graphic2 , .m-show .slide5-graphic3', {
        yPercent: -50
    },
        {
            yPercent: 200,
            // duration: 20,
            // stagger: 8
            // yoyo: true,
        })
    return tl;
}
// overlap slightly
// .add(scene5()) // overlap slightly
let slide5Masterm = gsap.timeline()
// slide3Master.add(sceneSlidemove3())
slide5Masterm.add(scenceColorChange5m())
    .add(scene19m())
    .add(scene20m(), "+=2")
    .add(scene21m(), "+=2")
    .add(scene21nm(), "+=2")
    .add(scene22m(), "+=2")
function scenceColorChange6m() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".m-show .slide-6",
            scroller: "body",
            // duration: 0.05,
            scrub: 1,
            start: '-500px top',
            end: '600px bottom',
            // scrub: 5
        },
    })
    tl.fromTo('.m-show .slide-6', {
        backgroundColor: 'rgba(97, 176, 145, 0.9)',
        // backgroundImage: 'none'
        // duration: 2,
    },
        {
            backgroundColor: '#2c2c3f',
            // backgroundImage: `url(assets/images/gradiant-dark-green.png)`,
            duration: 1,
        })// build scene 2
    tl.fromTo('.m-show .slide-6 .shades img', {
        opacity: 0,
        // duration: 2,
    },
        {
            opacity: 1,
            duration: 20,
            ease: "expo.in"
        }, "-=0.5")// build scene 2
    return tl
}
function sceneSlidemove6m() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .slide-6', { y: -100, duration: 2, opacity: 1 },
        {
            y: -270, duration: 20, opacity: 1, ease: "expo",
            scrollTrigger: {
                trigger: ".m-show .slide-6",
                scroller: "body",
                // duration: 0.05,
                scrub: 4,
                start: '-650px top',
                end: '1000px bottom',
            },
        })// build scene 2
    return tl;
}
function scene23m() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .char-slide6', { y: 700, opacity: 1 }, {
        y: 0, duration: 2, opacity: 1, stagger: 1,
        scrollTrigger: {
            trigger: ".m-show .char-slide6",
            scroller: "body",
            // duration: 0.05,
            scrub: true,
            start: '-1400px top',
            end: '0px bottom',
            // scrub: 5
        },
    })// build scene 2
    return tl;
}
function scene24m() {
    let tl = gsap.timeline();
    tl.fromTo(".m-show .char-slide6 img",
        { x: -10, duration: 2 },
        { x: 20, duration: 4, repeat: -1, yoyo: true })
    // return tl
}
function scene25m() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".m-show .slide-6",
                scroller: "body",
                // duration: 0.05,
                scrub: 5,
                start: '0% top',
                end: '100% bottom',
                // markers: true
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        }
    );
    tl.fromTo('.m-show .faqs', {
        xPercent: 300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 150,
    })
    tl.fromTo('.m-show .faqs-text-inner-box', {
        yPercent: 300,
        // duration: 2,
    }, {
        yPercent: 0,
        duration: 250,
    })
    tl.fromTo('.m-show .faqs-msc1.slidem .slide-6-m-content-bx .span-reveal>.faqs', {
        xPercent: -300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 100,
    })
    tl.fromTo('.m-show .slide-6 .accor-box .panel', {
        // xPercent: -200,
        scale: 0,
        // opacity: 0
        // duration: 2,
    }, {
        // xPercent: 0,
        scale: 1,
        // opacity: 1,
        duration: 100,
        ease: 'power5'
    }, "<100%")// build scene 2
    tl.fromTo('.m-show .slide-6 .accor-box button', {
        // xPercent: -200,
        opacity: 0
        // duration: 2,
    }, {
        // xPercent: 0,
        opacity: 1,
        duration: 100,
    })// build scene 2
    tl.fromTo('.m-show  .faqs-msc1.slidem .slide-6-m-content-bx .btns .span-reveal #moveLeftm img', {
        yPercent: 200,
        opacity: 0
        // duration: 2,
    }, {
        yPercent: 0,
        opacity: 1,
        duration: 50,
    })// build scene 2
    return tl;
}
function scene25nm() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .slide6-graphic1,.m-show .slide6-graphic2 , .m-show .slide6-graphic3',
        {
            opacity: 0
            // duration: 2,
        },
        {
            opacity: 1,
            duration: 100,
            stagger: 1,
            scrollTrigger: {
                trigger: ".m-show .slide-6",
                scroller: "body",
                // duration: 0.05,
                scrub: 1,
                start: '-40% top',
                end: '100% bottom',
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        })
    return tl;
}
function scene26m() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.m-show .slide-6',
            scroller: "body",
            // stagger: 10,
            start: "-2% 10%",
            end: "0% 0%",
            scrub: 5
        },
    });
    tl.fromTo('.m-show .slide6-graphic1,.m-show .slide6-graphic2 , .m-show .slide6-graphic3', {
        yPercent: -50
    },
        {
            yPercent: 400,
            // duration: 20,
            // stagger: 8
            // yoyo: true,
        })
    return tl;
}
// overlap slightly
// .add(scene5()) // overlap slightly
let slide6Masterm = gsap.timeline()
// slide3Master.add(sceneSlidemove3())
slide6Masterm.add(scenceColorChange6m())
    .add(scene23m())
    .add(scene24m(), "+=2")
    .add(scene25m(), "+=2")
    .add(scene25nm(), "+=2")
    .add(scene26m(), "+=2")
function scenceColorChange7m() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".m-show .slide-7",
            scroller: "body",
            // duration: 0.05,
            scrub: 1,
            start: '-500px top',
            end: '600px bottom',
            // scrub: 5
        },
    })
    tl.fromTo('.m-show .slide-7', {
        backgroundColor: 'rgba(47,45,66,255)',
        // backgroundImage: 'none'
        // duration: 2,
    },
        {
            // backgroundColor: 'rgba(97, 176, 145, 0.9)',
            backgroundColor: 'rgb(184, 178, 216)',
            // backgroundImage: `url(assets/images/gradiant-dark-green.png)`,
            duration: 1,
        })// build scene 2
    tl.fromTo('.m-show .slide-7 .shades img', {
        opacity: 0,
        // duration: 2,
    },
        {
            opacity: 1,
            duration: 20,
            ease: "expo.in"
        }, "-=0.5")// build scene 2
    return tl
}
function sceneSlidemove7m() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .slide-7', { y: -100, duration: 2, opacity: 1 },
        {
            y: -270, duration: 20, opacity: 1, ease: "expo",
            scrollTrigger: {
                trigger: ".m-show .slide-7",
                scroller: "body",
                // duration: 0.05,
                scrub: 4,
                start: '-650px top',
                end: '1000px bottom',
            },
        })// build scene 2
    return tl;
}
function scene27m() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .char-slide7', { y: 700, opacity: 1 }, {
        y: 0, duration: 2, opacity: 1, stagger: 1,
        scrollTrigger: {
            trigger: ".m-show .char-slide7",
            scroller: "body",
            // duration: 0.05,
            scrub: true,
            start: '-1400px top',
            end: '0px bottom',
            // scrub: 5
        },
    })// build scene 2
    return tl;
}
function scene28m() {
    let tl = gsap.timeline();
    tl.fromTo(".m-show .char-slide7 img",
        { x: -10, duration: 2 },
        { x: 20, duration: 2, repeat: -1, yoyo: true })
    // return tl
}
function scene29m() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".m-show .slide-7",
                scroller: "body",
                scrub: 5,
                start: '-30% top',
                end: 'bottom bottom',
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        }
    );
    tl.fromTo('.m-show .slide-7 .apply-Now', {
        xPercent: -300,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 100,
    })
    tl.fromTo('.m-show .slide-7 .form-box', {
        yPercent: 500,
        scale: 0.8,
        opacity: 0,
        // backgroundColor: '#000',
        // duration: 2,
    }, {
        yPercent: 0,
        backgroundColor: '#86358a',
        scale: 1,
        opacity: 1,
        duration: 500,
    }, '-=80')// build scene 2
    tl.fromTo('.m-show .slide7-nav .span-reveal ul', {
        yPercent: 200,

        opacity: 0,
        // duration: 2,
    }, {
        yPercent: 0,

        opacity: 1,
        duration: 50,
    })// build scene 2
    return tl;
}
function scene29nm() {
    let tl = gsap.timeline();
    tl.fromTo('.m-show .slide7-graphic1,.m-show .slide7-graphic2 , .m-show .slide7-graphic3',
        {
            opacity: 0
            // duration: 2,
        },
        {
            opacity: 1,
            duration: 100,
            stagger: 1,
            scrollTrigger: {
                trigger: ".m-show .slide-7",
                scroller: "body",
                // duration: 0.05,
                scrub: 1,
                start: '-40% top',
                end: '100% bottom',
                // start: '-650px top',
                // end: '0px 0px',
                // scrub: 5
            },
        })
    return tl;
}
function scene30m() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.m-show .slide-7',
            scroller: "body",
            // stagger: 10,
            start: "-2% 10%",
            end: "0% 0%",
            scrub: 5
        },
    });
    tl.fromTo('.m-show .slide7-graphic1,.m-show .slide7-graphic2 , .m-show .slide7-graphic3', {
        yPercent: -50
    },
        {
            yPercent: 400,
            // duration: 20,
            // stagger: 8
            // yoyo: true,
        })
    return tl;
}
// overlap slightly
// .add(scene5()) // overlap slightly
let slide7Masterm = gsap.timeline()
// slide3Master.add(sceneSlidemove3())
slide7Masterm.add(scenceColorChange7m())
    .add(scene27m())
    .add(scene28m(), "+=2")
    .add(scene29m(), "+=2")
    .add(scene29nm(), "+=2")
    .add(scene30m(), "+=2")
function footer_scence_1m() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".m-show .m-footer",
                scroller: "body",
                // duration: 0.05,
                // markers: true,
                scrub: 5,
                start: '70% 70%',
                end: 'bottom 90%',
            },
        }
    );
    // tl.fromTo('.m-show .m-footer .follow-us-bar',
    //     {
    //         yPercent: 0,
    //         opacity: 0,
    //         scale: 0
    //         // duration: 2,
    //     },
    //     {
    //         opacity: 1,
    //         scale: 1,
    //         duration: 30,
    //         stagger: 1,
    //     })
    tl.fromTo('.m-show .m-footer .follow-us-bar,.m-show .m-footer .follow-us-bar>h4,.m-show .m-footer .follow-us-bar ul li a  img',
        {
            yPercent: 0,
            opacity: 0,
            scale: 0
            // duration: 2,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 2,
            stagger: 2,
            // ease: 'power3.in'
        })
    tl.fromTo('.m-show .m-footer .m-copyright p',
        {
            yPercent: 0,
            opacity: 0,
            scale: 0
            // duration: 2,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 10,
            stagger: 5,
        }, "<15")
    return tl;
}
let footerMasterm = gsap.timeline()
// slide6Master.add(sceneSlidemove6())
footerMasterm.add(footer_scence_1m())
// infinate Scroll



// Remove any custom event handlers that might be interfering with scrolling

// CARD SCRIPT 

gsap.set(".m-show .slide-5", { xPercent: 0, yPercent: 0 });
gsap.set(".turbo-slider-bx", { xPercent: 0, yPercent: -5 });
//   gsap.set(".turbo-slider-bx .yellow", { yPercent: 100, xPercent: -100});
gsap.set(".turbo-slider-bx .green", { yPercent: 120, xPercent: -90, opacity: 0 });
gsap.set(".turbo-slider-bx .purple", { yPercent: 130, xPercent: -80, opacity: 0 });
gsap.set(".turbo-slider-bx .indigo", { yPercent: 140, xPercent: -70, opacity: 0 });
//   gsap.set(".turbo-slider-bx .purple", { yPercent: 20, xPercent: -100, opacity: 0 });
//   gsap.set(".turbo-slider-bx .indigo", { yPercent: 20, xPercent: -100, opacity: 0 });
// gsap.set("#textWrap .card3", { y: "<150", xPercent: -200 });

var hero = gsap.timeline().to(".turbo-slider-bx .green,.turbo-slider-bx .purple,.turbo-slider-bx .indigo", {
    //  autoAlpha: 1,
    yPercent: '-=100',
    duration: 10,
    stagger: 20,
    opacity: 1,
    scrollTrigger: {
        // container:".m-show .slide-5",
        trigger: ".m-show .slide-5",
        pin: true,
        //    pinSpacing: true,
        start: "40% 10%",
        end: "100% 70%",
        scrub: 1,
        //    markers:true
    },
});
}

// window.removeEventListener('touchstart',(e)=>{e.preventDefault()});
// yourDiv3.removeEventListener('touchmove',(e)=>{e.preventDefault()});
// yourDiv3.removeEventListener('touchend',(e)=>{e.preventDefault()});