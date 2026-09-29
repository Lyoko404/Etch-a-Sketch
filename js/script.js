const container = document.querySelector('#container');
container.style.width = `${16 * 16}px`;
container.style.height = `${16 * 16}px`;

const div = document.createElement('div');
div.style.width = '16px';
div.style.height = '16px';
div.classList.toggle('blue');

const fragment = new DocumentFragment();

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const divSquare = div.cloneNode(true);

        fragment.append(divSquare);
    }
}

container.append(fragment);


container.addEventListener('mouseover', (e) => {

    const changeElement = e.target;

    if (changeElement.classList.contains('blue')) {
        changeElement.classList.add('red'); 
    }
})

// container.addEventListener('mouseout', (e) => {
//     const changeElement = e.target;

//     if (changeElement.classList.contains('red')) {
//         changeElement.classList.toggle('blue');
//     }
// })
