var first_term = 4

var second_term = 2


var result = first_term + second_term

var sec_result = first_term * second_term

var division = first_term / second_term

var modulo = first_term % second_term

console.log('resultat de la division', division,'\n resultat du modulo', modulo  )

// affichage dans la console

//  affiche un seul resultat console.log(trm)
//  affiche deux resultats console.log(trm , trmdeux)
//  affiche le resultat d'une operation console.log(trm + trmdeux)
// affiche deux resultats avec retour a la ligne console.log('resultat de la division', division,'\n resultat du modulo', modulo  )
// puissance simple ou avec Math
// type string

var nom = 'ibn'
var mail = 'x@mail.km'
var prenom = 'x'
// affichage avec concatenation
console.log('nom complet: ', nom + ' ' + prenom);
// affichage sans concatenation
console.log('nom complet: ', nom , prenom);

// longueur
console.log('longueur', nom.length );

//  position
console.log('position de n dans nom', nom.indexOf('n') );

console.log('char a la position 0', nom.charAt(0) );

// la chaine inclu
console.log(mail.includes('@'));

// suppression des espaces avec trim, trimEnd, trimStart

var y = ' john '
var z = 'jack'

console.log(y.trimEnd()+ z);
// remplacement de char

var soleil = 'solail '

console.log('avant remp', soleil, 'apres remp', soleil.replace('a', 'e'));

soleil = soleil.replace('a', 'e')

// type int
var x = 16

// type float
var decimal = 12.50

// incrementation ++nomdevariable, decrementation --nomdevariable

// console.log(--x);

// console.log(x+= 6);

// equivaut a

console.log(x + 6);

// Objet Math, arrondissement Math.round(nomdevariable), carre Math.sqrt(nomdevariable), Math.PI

console.log(decimal, Math.round(decimal));

// nombre aleatoire Math.random()
console.log(Math.sqrt(x), Math.random() );





















