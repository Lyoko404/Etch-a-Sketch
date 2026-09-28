const container = document.querySelector('.container');
container.style.width = `${16 * 16}px`;
container.style.height = `${16 * 16}px`;

const square = document.createElement('div');
square.style.width = '16px';
square.style.height = '16px';
square.style.backgroundColor = 'blue';

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {

        container.append(square.cloneNode(true));
    }
}