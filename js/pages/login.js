import { renderizarPagina } from "../main.js"

//Tela de Login
export function criarLogin () {
    const container = document.createElement('form')

    const inputEmail = document.createElement('input')
    inputEmail.type = 'text'
    inputEmail.placeholder = 'Digite seu e-mail'
    inputEmail.className = 'input-login'

    const inputSenha = document.createElement('input')
    inputSenha.type = 'password'
    inputSenha.placeholder = 'Digite sua senha...'
    inputSenha.className = 'input-login'

    const button = document.createElement('button')
    button.type = 'button'
    button.classList.add('button')
    button.textContent = 'ENTRAR'
    button.onclick = () => renderizarPagina('preview')

    container.append(inputEmail, inputSenha, button)

    return container
}