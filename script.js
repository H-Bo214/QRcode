'use strict'

const qr = document.getElementById('qrcode')
const form = document.getElementById('qr-form')
const input = document.getElementById('url-input')
input.addEventListener('focus', clearMessage)
form.addEventListener('submit', generateQRcode)
let priorURL

function generateQRcode(e) {
  e.preventDefault()
  const url = document.getElementById('url-input').value
  priorURL = url
  clearQRcode()
  new QRCode('qrcode', {
    text: url,
    colorDark: '#fff',
    colorLight: 'rgb(74, 133, 276)',
  })
}

function clearQRcode() {
  qr.innerHTML = ''
  clearInput()
}

function clearInput() {
  const url = (document.getElementById('url-input').value = 'https://')
  displayMessage()
}

function displayMessage() {
  const main = document.querySelector('main')
  const message = document.createElement('p')
  message.classList.add('message')
  message.textContent = `Your QR code for ${priorURL} is ready to scan`
  main.appendChild(message)
}

function clearMessage() {
  const main = document.querySelector('main')
  const message = document.querySelector('.message')
  if (message) {
    main.removeChild(message)
  }
}
