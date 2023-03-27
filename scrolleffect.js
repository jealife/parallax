// init controller
let controller = new ScrollMagic.Controller();
let timeline=new TimelineMax();

timeline
.to('nav',1, {padding: "1rem 3rem",position:"fixed",backgroundColor:"#0122c822",backdropFilter: "blur(50px)"})
.to('.left',3 , {y:"600"})
.to('.main-tilte',3, {y:-400},"-=3")
.to('.bg',3, {y:50,width:"++"},"-=3")
.to('.content',3.5, {backgroundColor:"#7501c8"})
.to('nav',1, {position:"fixed",padding: "1rem 3rem",backgroundColor:"#0122c822",backdropFilter: "blur(50px)"})
// .fromTo('.content-images',{opacity:0}, {opacity:1,})

let scene= new ScrollMagic.Scene({
    triggerElement: "section",
    duration:"100%",
    triggerHook:0,
})
    .setTween(timeline)
    .addTo(controller);

////slidescrip
