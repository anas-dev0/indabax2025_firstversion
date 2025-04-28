const descriptionPanel = document.querySelector('.description-panel');
const widthp = window.innerWidth;
gsap.registerPlugin(ScrollTrigger);
    if(widthp<=768){
    gsap.utils.toArray(".hackathon-panel.red").forEach((panel, i) => {
        ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            endTrigger: ".hackathon-panel.last-panel",
            end: "top bottom",
            pin: true,
            pinSpacing: false,
        });
    });
    gsap.to(descriptionPanel, {
        scrollTrigger: {
            trigger: descriptionPanel,
            start: "top top",
            endTrigger: ".hackathon-panel.last-panel",
            end: "top bottom",
            pin: true,
            pinSpacing: false,
        },
    });
}
if(widthp>768){
    gsap.utils.toArray(".hackathon-panel:not(.description-panel)").forEach((panel, i) => {
        ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            endTrigger: "#speaker-section",
            end: "top bottom",
            pin: true,
            pinSpacing: false
        });
    });
    const pinDescriptionPanel = gsap.to(descriptionPanel, {
        scrollTrigger: {
            trigger: descriptionPanel,
            start: "top top",
            endTrigger: "#speaker-section",
            end: "top bottom",
            pin: true,
            pinSpacing: false,
        },
    });
}