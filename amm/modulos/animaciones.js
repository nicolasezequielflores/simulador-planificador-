gsap.registerPlugin(ScrollTrigger);

export const resultados = () => {
    window.scrollTo(0, 0); //Me lleva a la parte superior.
 
    setTimeout(()=>{

    gsap.from(
        '.bienvenidaNombreCont',{
            duration: 1,
            y: 2000,
            opacity: 0,
            ease: 'power1.out'
        }
    );

    gsap.from(
        '.resultadoCont',{
            duration: 1,
            y: 2000,
            opacity: 0,
            ease: 'power1.out'
        }
    );

    gsap.from(
        '.objetivoContainerCard',{
            duration: 1,
            y: 2000,
            opacity: 0,
            ease: 'power1.out'
        }
    );   

    gsap.from(
       ".planContainerCard",{
            duration: 1,
            y: 2000,
            opacity: 0,
            ease: 'power1.out'
        }
    );   
        
    }, 50);
    
    gsap.from(".btnVolver", {
        scrollTrigger: {
          trigger: ".btnVolver",
          start: "top 110%", 
          end: "top 80%", 
         
        },
        y: 100, 
        opacity: 0, 
        duration: 1, 
        ease: "power2.out",
    });

}