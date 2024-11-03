import gsap from 'gsap';

export default class Event
{
    textImage(text1_1, text1_2, text1_3, text1_4, text2_1, text2_2, text2_3, text2_4, text3_1, text3_2, text3_3, text3_4)
    {
        this.textImage1(text1_1, text1_2, text1_3, text1_4)
        this.textImage2(text2_1, text2_2, text2_3, text2_4)
        this.textImage3(text3_1, text3_2, text3_3, text3_4)
    }

    textImage1(text1_1, text1_2, text1_3, text1_4)
    {
        text1_1.addEventListener('mouseover', (event) => {
            event.stopPropagation()
            gsap.to(cursor, {
                width: "240px",
                height: "110px",
                borderRadius: 10,
                border: "0px",
                backgroundImage: "url('../img/1/1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                duration: 0.5,
                transformOrigin: "center center"
            })
        })
        
        text1_1.addEventListener('mouseout', () => {
            gsap.to(cursor, {
                width: "20px",
                height: "20px",
                borderRadius: "50%", 
                border: '1px solid black', 
                backgroundImage: "none", 
                backgroundColor: "transparent", 
                duration: 0.5
            })
        })

        text1_2.addEventListener('mouseover', (event) => {
            event.stopPropagation()
            gsap.to(cursor, {
                width: "240px",
                height: "110px",
                borderRadius: 10,
                border: "0px",
                backgroundImage: "url('../img/1/2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                duration: 0.5,
                transformOrigin: "center center"
            })
        })
        
        text1_2.addEventListener('mouseout', () => {
            gsap.to(cursor, {
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: '1px solid black',
                backgroundImage: "none",
                backgroundColor: "transparent",
                duration: 0.5
            })
        })
        

        text1_3.addEventListener('mouseover', (event) => {
            event.stopPropagation()
            gsap.to(cursor, {
                width: "240px",
                height: "110px",
                borderRadius: 10,
                border: "0px",
                backgroundImage: "url('../img/1/3.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                duration: 0.5,
                transformOrigin: "center center"
            })
        })
        
        text1_3.addEventListener('mouseout', () => {
            gsap.to(cursor, {
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: '1px solid black',
                backgroundImage: "none",
                backgroundColor: "transparent",
                duration: 0.5
            })
        })

        text1_4.addEventListener('mouseover', (event) => {
            event.stopPropagation()
            gsap.to(cursor, {
                width: "240px",
                height: "110px",
                borderRadius: 10,
                border: "0px",
                backgroundImage: "url('../img/1/4.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                duration: 0.5,
                transformOrigin: "center center"
            })
        })
        
        text1_4.addEventListener('mouseout', () => {
            gsap.to(cursor, {
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: '1px solid black',
                backgroundImage: "none",
                backgroundColor: "transparent",
                duration: 0.5
            })
        })

        
    }

    textImage2(text2_1, text2_2, text2_3, text2_4)
    {
        text2_1.addEventListener('mouseover', (event) => {
            event.stopPropagation()
            gsap.to(cursor, {
                width: "240px",
                height: "110px",
                borderRadius: 10,
                border: "0px",
                backgroundImage: "url('../img/2/1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                duration: 0.5,
                transformOrigin: "center center"
            })
        })
        
        text2_1.addEventListener('mouseout', () => {
            gsap.to(cursor, {
                width: "20px",
                height: "20px",
                borderRadius: "50%", 
                border: '1px solid black', 
                backgroundImage: "none", 
                backgroundColor: "transparent", 
                duration: 0.5
            })
        })

        text2_2.addEventListener('mouseover', (event) => {
            event.stopPropagation()
            gsap.to(cursor, {
                width: "240px",
                height: "110px",
                borderRadius: 10,
                border: "0px",
                backgroundImage: "url('../img/2/2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                duration: 0.5,
                transformOrigin: "center center"
            })
        })
        
        text2_2.addEventListener('mouseout', () => {
            gsap.to(cursor, {
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: '1px solid black',
                backgroundImage: "none",
                backgroundColor: "transparent",
                duration: 0.5
            })
        })
        

        text2_3.addEventListener('mouseover', (event) => {
            event.stopPropagation()
            gsap.to(cursor, {
                width: "240px",
                height: "110px",
                borderRadius: 10,
                border: "0px",
                backgroundImage: "url('../img/2/3.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                duration: 0.5,
                transformOrigin: "center center"
            })
        })
        
        text2_3.addEventListener('mouseout', () => {
            gsap.to(cursor, {
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: '1px solid black',
                backgroundImage: "none",
                backgroundColor: "transparent",
                duration: 0.5
            })
        })

        text2_4.addEventListener('mouseover', (event) => {
            event.stopPropagation()
            gsap.to(cursor, {
                width: "240px",
                height: "110px",
                borderRadius: 10,
                border: "0px",
                backgroundImage: "url('../img/2/4.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                duration: 0.5,
                transformOrigin: "center center"
            })
        })
        
        text2_4.addEventListener('mouseout', () => {
            gsap.to(cursor, {
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: '1px solid black',
                backgroundImage: "none",
                backgroundColor: "transparent",
                duration: 0.5
            })
        })

        
    }

    textImage3(text3_1, text3_2, text3_3, text3_4)
    {
        text3_1.addEventListener('mouseover', (event) => {
            event.stopPropagation()
            gsap.to(cursor, {
                width: "240px",
                height: "110px",
                borderRadius: 10,
                border: "0px",
                backgroundImage: "url('../img/3/1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                duration: 0.5,
                transformOrigin: "center center"
            })
        })
        
        text3_1.addEventListener('mouseout', () => {
            gsap.to(cursor, {
                width: "20px",
                height: "20px",
                borderRadius: "50%", 
                border: '1px solid black', 
                backgroundImage: "none", 
                backgroundColor: "transparent", 
                duration: 0.5
            })
        })

        text3_2.addEventListener('mouseover', (event) => {
            event.stopPropagation()
            gsap.to(cursor, {
                width: "150",
                height: "150px",
                borderRadius: 10,
                border: "0px",
                backgroundImage: "url('../img/3/2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                duration: 0.5,
                transformOrigin: "center center"
            })
        })
        
        text3_2.addEventListener('mouseout', () => {
            gsap.to(cursor, {
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: '1px solid black',
                backgroundImage: "none",
                backgroundColor: "transparent",
                duration: 0.5
            })
        })
        

        text3_3.addEventListener('mouseover', (event) => {
            event.stopPropagation()
            gsap.to(cursor, {
                width: "240px",
                height: "110px",
                borderRadius: 10,
                border: "0px",
                backgroundImage: "url('../img/3/3.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                duration: 0.5,
                transformOrigin: "center center"
            })
        })
        
        text3_3.addEventListener('mouseout', () => {
            gsap.to(cursor, {
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: '1px solid black',
                backgroundImage: "none",
                backgroundColor: "transparent",
                duration: 0.5
            })
        })

        text3_4.addEventListener('mouseover', (event) => {
            event.stopPropagation()
            gsap.to(cursor, {
                width: "240px",
                height: "110px",
                borderRadius: 10,
                border: "0px",
                backgroundImage: "url('../img/3/4.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                duration: 0.5,
                transformOrigin: "center center"
            })
        })
        
        text3_4.addEventListener('mouseout', () => {
            gsap.to(cursor, {
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: '1px solid black',
                backgroundImage: "none",
                backgroundColor: "transparent",
                duration: 0.5
            })
        })

        
    }

}