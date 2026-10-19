// selection d'id ou class avec querySelector


// selection de classe
// var para = document.querySelector('.p')

// selection d'id'
// var para = document.querySelector('#p')


let p = document.getElementById('p')

var bouton1 = document.getElementById('btn1')

var bouton2 = document.getElementById('btn2')

// acces aux valeurs de l'attribut class
// let art = document.querySelector('article')

// console.log(art.classList);

// ajout d'un ecouteur d'evenement

// structure de ctrl if else
// classList.remove supprime une classe donnee
// classList.add ajoute une classe donnee

// structure de ctrl if avec deux conditions stricts

// if (condition1 && condition2) {
    
// }

// structure de ctrl if avec deux conditions optionnelles

// if (condition1 || condition2) {
    
// }

bouton1.addEventListener('click', () => {
    
    if (p.classList.contains('diminue')) {

        p.classList.remove('diminue')

    }

    if (p.classList.contains('augmente')) {

        p.classList.remove('augmente')

    }else{

        p.classList.add('augmente')

    }

})


bouton2.addEventListener('click', () => {
    if (p.classList.contains('augmente')) {

        p.classList.remove('augmente')

    }

    if (p.classList.contains('diminue')) {

        p.classList.remove('diminue')

    }else{

        p.classList.add('diminue')

    }
})





