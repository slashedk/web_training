// creation d'element
// var ciblant le champs de saisie

let elmnt = document.getElementById('nom')



function ajoutez() {
    
    var ul = document.querySelector('ul')
    // creation d'element
    var li = document.createElement('li')
    let sup = document.createElement('button')

    
    // ajout d'element a la fin
    if (elmnt.value != '') {
        li.textContent = elmnt.value + '  '
        ul.appendChild(li)

        elmnt.value = ''
        sup.textContent = 'X'
        li.appendChild(sup)
    }

    sup.addEventListener('click', ()=>{
        li.remove()
        sup.remove()
    })
}

const btn = document.getElementById('envoie')

btn.addEventListener('click', ()=>{
    
    ajoutez()
})

var lien = document.getElementById('lien')

lien.addEventListener('click', ()=>{
    // changement d'url navigation
    location.assign("https://www.mozilla.org")
})


let aff = document.getElementById('afficher')
let bloc = document.getElementById('bloc')

aff.addEventListener('click', ()=>{
bloc.setAttribute('hidden', true)
})