// fonction

function calcul_carre() {
    let x = 4

    // log est une fonction reservee aux objects Consoles donc c'est une methode 
    console.log('bonjour', x * x );
    
}

// appel de fonction

calcul_carre()

let humain = 'john'

// declaration de classe
class Humain{
    static afficheNom() {
        
    }
}

// instanciation d'un objet classe
let k = new Humain()


// Objet avec notation json

var coordonnes = {
    "nom": "john",
    "prenom": "foo",
    "phone": "453 78 67",
}


// les boucles 

// for

for (let index = 0; index < 10; index++) {
    
    console.log('bonjour');
    
}

// do while faire tant que

// A eviter boucle infinie avec do while

// do {
//     console.log('x');
    
// } while (true);

// boucle  do while
do {
    
    console.log('x');
    
} while (false === true);

// boucle infinie while
// while (true === true) {
//     console.log("c con mais ca marche");
// }


// boucle finie avec while

let stop = "start"

while (stop == "start") {

    console.log("la course n'est pas finie");
    
    stop = "end"
}

