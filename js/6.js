// creation d'element
// var ciblant le champs de saisie

let elmnt = document.getElementById('nom')


function ajoutez() {
    
    var ul = document.querySelector('ul')
    // creation d'element
    var li = document.createElement('li')

    li.textContent = elmnt.value

    // ajout d'element a la fin
    ul.appendChild(li)
    elmnt.value = ''
}

const btn = document.getElementById('envoie')

btn.addEventListener('click', ()=>{
    
    ajoutez()
})