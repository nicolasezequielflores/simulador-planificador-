
    export const animacionesForm = () =>{
        gsap.from(
            '.tituloContainer',{
                duration: 1.1,
                x: -2000,
                opacity: 0,
                ease: 'power1.out'
            }
        );
        
        gsap.from(
            '.inputCont',{
                duration: .9,
                x: -2000,
                opacity: 0,
                ease: 'power1.out'
            }
        );
        
        gsap.from(
            '.comisionCont',{
                duration: .7,
                x: -2000,
                opacity: 0,
                ease: 'power1.out'
            }
        );
        
        gsap.from(
            '.calcular',{
                duration: .5,
                x: -2000,
                opacity: 0,
                ease: 'power1.out'
            }
        );
        
    }
    


