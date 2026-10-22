const container = document.querySelector('#container');
const btn = document.querySelector('#btn-custom');
const square = document.createElement('div');
square.classList.add('square');

function defaultGrid () {
    container.append(showGrid(16));
}

btn.addEventListener('click', () => {
    let custom = Number(prompt("Enter a number"));

    if (custom < 0 || custom > 100) {
        alert('Number must be under 100 and over 0');
    }

    container.textContent = '';

    customGrid = showGrid(custom);
    container.append(customGrid);
})


container.addEventListener('mouseover', (e) => {
    const changeElement = e.target;
    
    changeElement.style.backgroundColor = 'white';
})


function showGrid (customGrid) {

    const fragment = new DocumentFragment();

    square.style.width = `${((100/100)/customGrid)*100}%`;
    square.style.height = `${((100/100)/customGrid)*100}%`;

    for (let i = 0; i < customGrid; i++) {
        for (let j = 0; j < customGrid; j++) {
            const squareDiv = square.cloneNode(true);

            fragment.append(squareDiv);
        }
    }

    return fragment;
}

defaultGrid();