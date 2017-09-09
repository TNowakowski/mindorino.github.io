
    'use strict';





var kaja = {
    imie: "Kaja",
    wzrost:152,
    przedstawOsobe: function() {console.log(this.imie)}
    
}
var krystian = {
    imie: "Krystian",
    wzrost:180,
    przedstawOsobe: function() {console.log(this.imie)}
    
}
console.log(kaja.wzrost);
krystian.przedstawOsobe();

class Osoba {
    constructor(firstname, lastname, height, eyes) {
        this.imie = firstname;
        this.nazwisko = lastname;
        this.wzrost = height;
        this.koloroczu = eyes;
        
    }
    
    wyswietlinfo() {
        console.log( "Imie" + this.imie + ", " + "Nazwisko: " + this.nazwisko, "wzrost" + this.wzrost, "koloroczu" + this.koloroczu);
    }
}

var krystian = new Osoba('krystian', 'dziopa', '180', 'niebieskie');
var kajs = new Osoba('Kaja', 'Brzeczyszczykiewicz')


console.log(krystian,);

