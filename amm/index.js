import { resultados } from './modulos/animaciones.js';
import { animacionesForm } from './modulos/animacionesForm.js';

const d = document;

const comisionForm = d.getElementById('comisionForm');
const resultadoText = d.querySelector('.resultado');
const btnVolver = d.querySelector('.btnVolver');
const resultadosContDocument = d.querySelector('.resultadosContDocument');
const tituloContainer = d.querySelector('.tituloContainer');

// PLAN
const nombreImp = d.querySelector('.nombreImp');
const tVender = d.querySelector('.tVender');
const sVolumen = d.querySelector('.sVolumen');
const tVentasMes = d.querySelector('.tVentasMes');
const dProspectar = d.querySelector('.dProspectar');
const fecha = d.querySelector('.fechaHoy');
const mMes = d.querySelector('.mMes');
const mSemanas = d.querySelector('.mSemanas');

// C O M I S I O N
const comisionSelect = d.getElementById('valorComision'); 
let comisionSeleccionada = parseFloat(comisionSelect.value) / 100; // Convierte a decimal.

// ********** E V E N T O S **********

comisionSelect.addEventListener('change', () => {
    comisionSeleccionada = parseFloat(comisionSelect.value) / 100;
})

comisionForm.addEventListener('submit', function(e){
    e.preventDefault();

    let nombre = d.getElementById('nombre').value;
    const producto = parseFloat(d.getElementById('producto').value) || 0;
    const objetivo = parseFloat(d.getElementById('objetivo').value) || 0;
    const ticket = parseFloat(d.getElementById('ticket').value) ;
    const valorUsd = parseFloat(d.getElementById('usd').value);
    let fechaHoy = new Date();

    const resultado = calculo(producto, comisionSeleccionada);
    const resultadoForm = formNum(resultado)
    const resultadoObjetivo = venderEnPesos(objetivo);
    const objetivoForm =  formNum(resultadoObjetivo);
    const resultadoSumaVolumen = sumarUnVolumen(resultadoObjetivo, valorUsd);
    const ventaForm = formNum(resultadoSumaVolumen);
    const totalVentas = totVentas(resultadoSumaVolumen, ticket);
    const totalForm =   formNum(totalVentas);
    const resultadoDatosAP = datosAProspectar(totalVentas);
    const prospFrom = formNum(resultadoDatosAP);
    const minimoMes = mPMes(totalVentas);
    const mesForm = formNum(minimoMes);
    const minimoSem = mPSemanas(minimoMes);
    const semForm = formNum(minimoSem);

    nombreImp.textContent = `${nombre}`;
    resultadoText.textContent = `$${resultadoForm}`;
    tVender.textContent = `$${objetivoForm}`;
    sVolumen.textContent = `${ventaForm}`;
    tVentasMes.textContent = `${totalForm}`;
    fecha.textContent = `${fechaHoy.toLocaleDateString()}`;
    dProspectar.textContent = `${prospFrom}`;
    mMes.textContent = `${mesForm}`;
    mSemanas.textContent = `${semForm}`;

    //M O S T R A R  Y  O C U L T A R  F O R M U L A R I O
    resultadosContDocument.style.display = 'flex';
    comisionForm.style.display = 'none';
    tituloContainer.style.display = 'none';

    resultados();
});

btnVolver.addEventListener('click', () =>{
    resultadosContDocument.style.display = 'none';
    comisionForm.style.display = 'flex';   
    tituloContainer.style.display = 'flex';
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50); //Retraso 50ms para que se aplique el flex antes de llevar la pagina al inicio. 
});

// ********** F U N C I O N E S **********

const calculo = (p, c) => {
    return c !== 0.4 ? p / 1.21 * c : p * c;
};

const venderEnPesos = (o) => {
    if(comisionSeleccionada === 0.1){
        return o * 1.21 * 10;
    }
    else if(comisionSeleccionada === 0.15){
        return o * 1.21 * 6.6;
    }
    else if(comisionSeleccionada === 0.2){
        return o * 1.21 * 5;
    }
    else if(comisionSeleccionada === 0.35){
        return o * 1.21 * 2.85;
    }
    else if(comisionSeleccionada === 0.4){
        return o * 1.21 * 1.8;
    }
};

const sumarUnVolumen = (r, u) => {
    return r / u;
};

const totVentas = (v, t) =>{
    return v / t;
};

const datosAProspectar = (t) => {
    return t * 6;
};

const mPMes = (t) => {
    if(comisionSeleccionada === 0.1){
        return t / 0.3;
    }
    else if(comisionSeleccionada === 0.15){
        return t / 0.35;
    }
    else if(comisionSeleccionada === 0.2){
        return t / 0.5;
    }
    else if(comisionSeleccionada === 0.35){
        return t / 0.5;
    }
    else if(comisionSeleccionada === 0.4){
        return t / 0.5;
    }
};

const mPSemanas = (m) =>{
    return (m / 4) + 1;
};

const formNum = (n) =>{
    return new Intl.NumberFormat('es-AR', {
        notation: 'compact',
        maximumFractionDigits: 1,
    }).format(n);
}; // Formateo de numeros grandes.

// ********** A N I M A C I O N  D E L  F O R M U L A R I O **********

animacionesForm()