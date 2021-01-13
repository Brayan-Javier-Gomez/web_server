const hbs = require('hbs');

//HELPERS

//AÑO

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
})

//CAPITALIZADOR DE TEXTO
hbs.registerHelper('capitalizar', (texto) => {
    let palabra = texto.split(' ');
    palabra.forEach((palabras, idx) => {
        palabra[idx] = palabras.charAt(0).toUpperCase() + palabras.slice(1).toLowerCase();
    });
    return palabra.join(' ')
})