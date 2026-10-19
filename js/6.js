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
        li.textContent = elmnt.value
        ul.appendChild(li)

        elmnt.value = ''
        sup.textContent = 'X'
        ul.appendChild(sup)
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