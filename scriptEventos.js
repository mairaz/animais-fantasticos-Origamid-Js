const links = document.querySelectorAll('a[href^="#"]')

links.forEach((link)=>{
    link.addEventListener('click', ativar)
})

function ativar(e){
    e.preventDefault();
    links.forEach((link)=>{
        link.classList.remove('ativo'); // remove a classe de todos elementos da lista
       
    })
    e.target.classList.add('ativo');     
}

const all = document.body.querySelectorAll('body *')




all.forEach((item)=>{
   item.addEventListener('click', clicado); 
})

function clicado(e){
    console.log(e.currentTarget)
    e.target.remove()
}

const menu = document.querySelector('.menu');
const footer = document.querySelector('.copy');

const novoMenu =menu.cloneNode(true)

footer.appendChild(novoMenu);

const faqLista = document.querySelector('.faq-lista');

const animais = document.querySelector('#animais')

faqLista.innerText = animais.innerText;
