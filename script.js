const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            display.innerText = '0';
        } else if (button.id === 'del') {
            display.innerText = display.innerText.slice(0, -1) || '0';
        } else if (button.id === 'equals') {
            try {
                display.innerText = eval(display.innerText) || '0';
            } catch {
                display.innerText = 'Error';
            }
        } else {
            if (display.innerText === '0') {
                display.innerText = button.innerText;
            } else {
                display.innerText += button.innerText;
            }
        }
    });
});
