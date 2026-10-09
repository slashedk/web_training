// tableau

let prenoms = ['kibabu']
let t2 = [1,2,3]
// acces aux elements du tableu a travers les indice / index
// console.log(prenoms[2]);

// suppression du dernier element pop(), premier element shift()

// console.log(prenoms.pop(),  t2.shift())
// element se trouvant a l'indice variable.at(indice)
// decoupage du tableau avec slice(commencement, fin)
// console.log(prenoms.slice(1, 1));
// decoupage et suppression avec nomdevariable.splice(debut, nombre d'element a supprimer)
// console.log(prenoms.splice(1,3));

// console.log(prenoms.find(  prenom => prenom === "karim"  ));

// () => {} fonction flechee
// retour de valeur mot cle return ou =>

// acces au tableau et affichage des elements avec map() 
// prenoms.map( prenom => console.log(prenom) )

// ajout d'element dans un tableau avec nomdevariable.push('valeur') en  derniere position
// ajout d'element dans un tableau avec nomdevariable.unshift('valeur') en  premiere position

prenoms.push('mbappe')
prenoms.unshift('leo messi')


// ajout de valeur avec remplacement
prenoms.fill('cr7', 2)

console.log(prenoms);

// comparaison de variable avec structure de controle == >= <= === > < !=


var petit = 12

var grand = 19

if ( petit != grand ) {
    console.log(true);
    
} else {
    console.log(false);
    
}













