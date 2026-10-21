const container = document.querySelector('#container');

const square = document.createElement('div');
square.classList.add('square');

container.append(square);

container.addEventListener('mouseover', (e) => {
    const changeElement = e.target;

    changeElement.style.backgroundColor = 'white';
})

// const container = document.querySelector('#container');
// container.style.width = `${100 * 100}px`;
// container.style.height = `auto`;

// const div = document.createElement('div');
// div.style.width = '16px';
// div.style.height = '16px';
// div.classList.toggle('blue');
// div.classList.toggle('pixle');

// const fragment = new DocumentFragment();

// for (let i = 0; i < 20; i++) {
//     for (let j = 0; j < 20; j++) {
//         const divSquare = div.cloneNode(true);

//         fragment.append(divSquare);
//     }
// }

// container.append(fragment);


// container.addEventListener('mouseover', (e) => {

//     const changeElement = e.target;

//     if (changeElement.classList.contains('blue')) {
//         changeElement.classList.add('red'); 
//     }
// })
