
const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    console.log(personagem);
    personagem.addEventListener('mouseenter', () =>{
        const selec = document.querySelector('.selecionado')
        
        personagem.classList.add('selecionado')
        selec.classList.remove('selecionado')

        const idS = personagem.attributes.id.value;
        const img = document.getElementById('persona-1')
        img.src = `./Projeto jogo Meninas Super Poderosas/${idS}.png`

    })
})