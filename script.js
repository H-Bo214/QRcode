// 'use strict'

const qr = document.getElementById('qrcode')
const form = document.getElementById('qr-form')
form.addEventListener('submit', generateQRcode)

function generateQRcode(e) {
  e.preventDefault()
  clearUI()
  const url = document.getElementById('url-input').value

  if (url === '') return alert('Please enter a url')
  const qrcode = new QRCode('qrcode', {
    text: url,
    colorDark: '#fff',
    colorLight: 'rgb(74, 133, 276)',
    width: '200',
    height: '200',
  })
}

function clearUI() {
  qr.innerHTML = ''
}
