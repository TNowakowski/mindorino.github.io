
'use strict';
function wypiszImie(imieDoWyswietlenia) {
    var zwracanyNapis;
   zwracanyNapis = "Imie jest: " + imieDoWyswietlenia;
    
    return zwracanyNapis;
}

var imieMeskie = "Mateusz";
var imieZenskie = "Ola";

wypiszImie(imieMeskie);
console.log(wypiszImie(imieZenskie));
wypiszImie();

function multiply(parametr1,parametr2) {
    var zwracamy;
    zwracamy = parametr1*parametr2;
    return zwracamy;
}
var czynnik = "10";
var mnoznik1 = "4";
console.log(multiply(czynnik,mnoznik1));