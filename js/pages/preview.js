'use strict'

import { renderizarPagina } from "../main.js"

//Tela de Preview
//Essa função cria os previews, seguindo o exemplo de cima, tudo na mesma ordem
export function criarPreview() {
    const container = document.createElement('form')

    const previewContainer = document.createElement('div')
    previewContainer.classList.add('preview-container')

    const input = document.createElement('input')
    input.id = 'preview-input'
    input.classList.add('preview-input')
    input.type = 'file'
    input.accept = 'image/*'

    const label = document.createElement('label')
    label.classList.add('preview-label')
    label.htmlFor = 'preview-input'

    const img = document.createElement('img')
    img.id = 'preview-image'
    img.classList.add('preview-image')
    img.src = './img/upload-icon.svg'
    previewContainer.append(input, label, img)

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button-container')

    const buttonSalvar = document.createElement('button')
    buttonSalvar.classList.add('button')
    buttonSalvar.type = 'button'
    buttonSalvar.id = 'upload-button'
    buttonSalvar.textContent = 'salvar'
    
    const buttonCancelar = document.createElement('button')
    buttonCancelar.classList.add('button')
    buttonCancelar.type = 'button'
    buttonCancelar.textContent = 'cancelar'
    buttonCancelar.onclick = () => renderizarPagina('login')

    buttonContainer.append(buttonSalvar, buttonCancelar)

    container.append(previewContainer, buttonContainer)
    return container
}