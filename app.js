// requires
//este tipo de require hace referencia a un proyecto propio de node
//const fs = require('fs');

//paquetes que no son nativos de node
//const fs = require('express');

//paquetes del proyecto
//const fs = require('../fs');

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'Listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'Crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');

}


// let parametro = argv[2];
// let base = parametro.split('=')[1];