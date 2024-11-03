import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

export default class Animate
{
    constructor()
    {

        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(CSSRulePlugin)

    }

    canvas(canvas)
    {
        gsap.to(canvas, {
            scaleX: 0.7,
            scaleY: 0.7,
            borderRadius: "50",
            transformOrigin: "center center",
            scrollTrigger: {
                trigger: canvas,
                start: "top top",
                end: "+=1000",
                toggleActions: "play none none reverse",
                scrub: true,
                pin: true,
            }
        });
    }

    image(img_container1, img_container2, img_container3, img1, img2, img3)
    {

        gsap.to(img_container1,
            {
                scale: 1,
                scrollTrigger: {
                    trigger: img1,
                    toggleActions: "play none none reverse",
                    scrub: true,
                }
            }
        )

        gsap.to(img_container2,
            {
                scale: 1,
                scrollTrigger: {
                    trigger: img2,
                    toggleActions: "play none none reverse",
                    scrub: true,
                }
            }
        )

        gsap.to(img_container3,
            {
                scale: 1,
                scrollTrigger: {
                    trigger: img3,
                    toggleActions: "play none none reverse",
                    scrub: true,
                }
            }
        )

        gsap.to(img1,
            {
                scale: 1,
                scrollTrigger: {
                    trigger: img1,
                    toggleActions: "play none none reverse",
                    scrub: true,
                }
            }
        )

        gsap.to(img2,
            {
                scale: 1,
                scrollTrigger: {
                    trigger: img2,
                    toggleActions: "play none none reverse",
                    scrub: true,
                }
            }
        )

        gsap.to(img3,
            {
                scale: 1,
                scrollTrigger: {
                    trigger: img3,
                    toggleActions: "play none none reverse",
                    scrub: true,
                }
            }
        )

    }

    text(text1, text2, text3, subtext1, subtext2, subtext3)
    {

        gsap.from(text1, 
            {
                opacity: 0,
                letterSpacing: 1,
                stagger: 0.05,
                duration: 1.0,
                scrollTrigger:
                {
                    trigger: text1,
                    toggleActions: "play none none reverse",
                }
            }
        )

        gsap.from(subtext1, 
            {
                 opacity: 0,
                 letterSpacing: 1,
                 stagger: 0.05,
                 delay: 1.0,
                 duration: 1.0,
                 scrollTrigger:
                 {
                     trigger: text1,
                     toggleActions: "play none none reverse",
                 }
            }
        )

        gsap.from(text2, 
            {
                opacity: 0,
                letterSpacing: 1,
                stagger: 0.05,
                duration: 1.0,
                scrollTrigger:
                {
                    trigger: text2,
                    toggleActions: "play none none reverse",
                }
            }
        )

        gsap.from(subtext2, 
            {
                 opacity: 0,
                 letterSpacing: 1,
                 stagger: 0.05,
                 delay: 1.0,
                 duration: 1.0,
                 scrollTrigger:
                 {
                     trigger: text2,
                     toggleActions: "play none none reverse",
                 }
            }
        )

        gsap.from(text3, 
            {
                opacity: 0,
                letterSpacing: 1,
                stagger: 0.05,
                duration: 1.0,
                scrollTrigger:
                {
                    trigger: text3,
                    toggleActions: "play none none reverse",
                }
            }
        )

        gsap.from(subtext3, 
            {
                 opacity: 0,
                 letterSpacing: 1,
                 stagger: 0.05,
                 delay: 1.0,
                 duration: 1.0,
                 scrollTrigger:
                 {
                     trigger: text3,
                     toggleActions: "play none none reverse",
                 }
            }
        )
    }

    loaded(circle, loader)
    {
        gsap.to(circle,
            {
                scale: 10,
                duration: 1
            }
        )

        gsap.to(loader,
            {
                opacity: 0,
                duration: 1,
                onComplete: () => {
                    loader.style.display = "none";
                }
            }
        )
    }

    loaderText(textTop, textBottom)
    {
        gsap.to(textTop,
            {
                y: -20,
                stagger: 0.05,
                duration: 0.5
            }
        )
        gsap.to(textBottom,
            {
                y: -20,
                stagger: 0.05,
                duration: 0.5
            }
        )
    }

    loaderTextReverse(textTop, textBottom)
    {
        gsap.to(textTop,
            {
                y: 4,
                stagger: 0.05,
                duration: 0.5
            }
        )
        gsap.to(textBottom,
            {
                y: 4,
                stagger: 0.05,
                duration: 0.5
            }
        )
    }

    button(button, buttonBack)
    {
        gsap.to(button, 
            {
                y: -10,
                duration: 0.5
            }
        )

        gsap.to(buttonBack, 
            {
                top: "10px",
                duration: 0.5
            }
        )
    }

}