const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('==================== ========'.magenta);
    console.log(`=====TABLA DEL ${base}=======`.cyan);
    console.log('============================='.green);

    for (let i = 1; i <= limite; i++) {
        let resultado = i * base;

        console.log(`${base}  X ${i} = ${resultado}`)
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            let resultado = i * base;

            data += `${base}  X ${i} = ${resultado} \n`;
        }


        fs.writeFile(`tablas/tabla-${ base }-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`.rainbow);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}