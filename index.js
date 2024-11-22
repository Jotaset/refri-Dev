// itens interativos na tela
let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

// contagem e reconhecimento de item com a classe active
let count = list.length
let active = 0

//arrow function que vai gerar o evento de click do botao
next.onclick = () => {
  let activeOld = document.querySelector('.active')
  activeOld.classList.remove('active')

  //identificaçao do item na lista para adicao da class active para alterar o item na tela
  active = active >= count - 1 ? 0 : active + 1
  list[active].classList.add('active')

}

prev.onclick = () => {
  let activeOld = document.querySelector('.active')
  activeOld.classList.remove('active')

  active = active <= 0 ? count - 1 : active - 1
  list[active].classList.add('active')
}
