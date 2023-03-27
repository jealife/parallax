// init controller
let controller = new ScrollMagic.Controller();
let timeline=new TimelineMax();

timeline
.to('.left',3 , {y:"23%"})
.to('.main-tilte',3, {y:-400},"-=3")
.to('.content',3.5, {backgroundColor:"#7501c8"})
.to('nav',1, {padding: "1rem 3rem",backgroundColor:"#0122c822",backdropFilter: "blur(50px)", position:"fixed"})
// .fromTo('.content-images',{opacity:0}, {opacity:1,})

let scene= new ScrollMagic.Scene({
    triggerElement: "section",
    duration:"100%",
    triggerHook:0,
})
    .setTween(timeline)
    .addTo(controller);
