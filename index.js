window.addEventListener('load', function() {
    const range = document.querySelector('#range');
    range.value = 6; 
});

const range = document.querySelector('#range');
const para = document.querySelector('#para');
const outputbox = document.querySelector('#outputbox');
const num = document.querySelector('#true-false');
const Charector = document.querySelector('#Charector');
const btn = document.querySelector('#btn');

function passWordGenrator() {
    let char = 'ABCDEFJHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz';
    const numbrs = '1234567891011121314151617181920';
    const spe = '!@#$%^&*(){:><?|:"';
    let length = parseInt(range.value);
    if (num.checked) char += numbrs;
    if (Charector.checked) char += spe;
    let pass = '';

    for (let index = 0; index < length; index++) {
        let rindex = Math.floor(Math.random() * char.length);
        pass += char[rindex];
    }
    outputbox.value = pass;
}

function copyToClipboard() {
    outputbox.select();
    document.execCommand('copy');
    btn.textContent = 'Copied';
    btn.style.backgroundColor = '#4CAF50';
    outputbox.blur();
    setTimeout(() => {
        btn.textContent = 'Copy';
        btn.style.backgroundColor = 'rgb(18, 18, 29)';
    }, 1000);
}

range.addEventListener('input', () => {
    para.textContent = `Char-length: ${range.value}`;
    passWordGenrator();
});

btn.addEventListener('click', copyToClipboard);

passWordGenrator();
