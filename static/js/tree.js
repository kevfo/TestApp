// Deals with the construction of the 
// Species tree as shown on https://phytozome-next.jgi.doe.gov/

const TREE_DISPLAY = document.querySelector('.treeDisp');
const TREE_SELECTOR = document.querySelector('#jsonData');
const INFO_DISP = document.querySelector('.disp');

const showInformation = () => {
    console.log(event.target.innerText);
    fetch('/find_entity', {method: 'POST', body: event.target.innerText})
    .then(response => response.json())
    .then(resData => {
        INFO_DISP.innerHTML = `<p> ${resData.info1} </p> <p> ${resData.info2} </p> <p> ${resData.info3} </p>`;
    })
    .catch(error => console.error(error))
}

const updateTree = () => {
    if (TREE_DISPLAY.innerHTML.length !== 0) {
        TREE_DISPLAY.innerHTML = ''
    }
    let value = TREE_SELECTOR.value;

    switch(value) {
        case 'G':
            var tree = new Tree(TREE_DISPLAY)
            tree.json(G_DATA)
            break;
        case 'R':
            console.log("You picked R")
            break;
        case 'V':
            console.log("You picked V")
            break;
    }
}

TREE_SELECTOR.addEventListener('change', () => {
    updateTree()
    let TREE_ITEMS = document.querySelectorAll('[data-type="file"], [data-type="folder"]');
    TREE_ITEMS.forEach(item => item.addEventListener('click', showInformation));
})
