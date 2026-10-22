const container = document.querySelector('#container');
const btn = document.querySelector('#btn-custom');
const square = document.createElement('div');
square.classList.add('square');

const fragment = new DocumentFragment();

btn.addEventListener('click', () => {
    let custom = Number(prompt("Enter a number"));

    square.style.width = `${((100/100)/custom)*100}%`;
    square.style.height = `${((100/100)/custom)*100}%`;

    for (let i = 0; i < custom; i++) {
        for (let j = 0; j < custom; j++) {
            const squareDiv = square.cloneNode(true);

            fragment.append(squareDiv);
        }
    }

    container.append(fragment);
})

container.addEventListener('mouseover', (e) => {
    const changeElement = e.target;

    changeElement.style.backgroundColor = 'white';
})
