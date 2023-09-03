// --- First Time Code -- 
// const firstText = document.querySelector(".text1");
// const secondText = document.querySelector(".text2");
// let xPercent = 0;
// let direction = -1;

// const animation = () => {
//     gsap.set(firstText, { xPercent : xPercent });
//     gsap.set(secondText, { xPercent : xPercent });
//     xPercent += 0.1 * direction;
//     requestAnimationFrame(animation);
// };

// gsap.registerPlugin(ScrollTrigger);

// animation();

// --- Second Time Code -- 


// const firstText = document.querySelector(".text1");
// const secondText = document.querySelector(".text2");
// let xPercent = 0;
// let direction = -1;

// const animation = () => {
//     if(xPercent <= -100){
//         xPercent = 0;
//     }

//     if(xPercent > 0){
//         xPercent = -100;
//     }

//     gsap.set(firstText, { xPercent : xPercent });
//     gsap.set(secondText, { xPercent : xPercent });
//     xPercent += 0.1 * direction;
//     requestAnimationFrame(animation);
// };

// gsap.registerPlugin(ScrollTrigger);

// animation();

// --- Third Time Code -- 
// --- Final Code -- 



const firstText = document.querySelector(".text1");
const secondText = document.querySelector(".text2");
const slider = document.querySelector(".slider");
let xPercent = 0;
let direction = -1;

const animation = () => {
    if(xPercent <= -100){
        xPercent = 0;
    }

    if(xPercent > 0){
        xPercent = -100;
    }

    gsap.set(firstText, { xPercent : xPercent });
    gsap.set(secondText, { xPercent : xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
};

// Assuming you've registered ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

gsap.to(slider, {
    scrollTrigger:{
        trigger: document.documentElement,
        start:0,
        end:window.innerHeight,
        scrub:0.25,
        onUpdate: (e) => (direction = e.direction * -1),
    },
    x:"-=300px"
})

animation();


// --- Final Code -- 