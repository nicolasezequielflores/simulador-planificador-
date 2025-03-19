const d = document;

const img = d.querySelector('.img');
const titBien = d.querySelector('.titBien');
const btnSimular = d.querySelector('.btnSimular');

gsap.from(
        img ,{
        duration: 1,
        y: 2000,
        opacity: 0,
        ease: 'power1.out'
    }
);

gsap.from(
    titBien ,{
    duration: 1,
    y: 2000,
    opacity: 0,
    ease: 'power1.out'
}
);

gsap.from(
    btnSimular ,{
    duration: 1,
    y: 2000,
    opacity: 0,
    ease: 'power1.out'
}
);



