
    'use strict'


var wzrostMateusz = 190;
var wzrostOlgi = 190;
if (wzrostOlgi < wzrostMateusz) {
    console.log("Olga jest nizsza :)");
}
else if (wzrostMateusz==wzrostOlgi) {
    console.log("Olga jest tak wysoka jak Matiusz")
}

else {
    console.log("Olga jest wyæsza")
}
//switch przykøad

var kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
        console.log('kolor czerwony')
        break;
    case 'zielony':
        console.log('kolor zielony')
        break;
    case 'niebieski':
        console.log('kolor niebieski')
        break;
    default:
        console.log('Inny kolor');
          }