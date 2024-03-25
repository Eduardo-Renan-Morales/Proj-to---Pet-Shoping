const list = document.querySelector("ul")
const listServiços = document.querySelector(".link-serviços")
const listContato = document.querySelector(".link-contato")

let myLi = ''

function menuServiços() {
    let myLi = ''
    serviços.forEach((product) => {
        myLi = myLi + `
            <li>
                <p>${product.serv}</p> 
            </li>
        `
    })
    list.innerHTML = myLi
}

function menuContatos() {
    let myLi = ''
    contatos.forEach((product) => {
        myLi += `
        <li>
            <a>${product.tel}</a>
            <a>${product.whats}</a>
            <a href="mailto: brunna-maria@hotmail.com">${product.email}</a>
            <a href="https://www.instagram.com/tiabrubanhoetosa" target="_blank">${product.inst}</a>
        </li> 
        `
    })
    list.innerHTML = myLi
    console.log(myLi)
}


listServiços.addEventListener('click', menuServiços)
listContato.addEventListener('click', menuContatos)




