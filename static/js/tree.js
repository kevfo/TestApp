// Deals with the construction of the 
// Species tree as shown on https://phytozome-next.jgi.doe.gov/

const TREE_DISPLAY = document.querySelector('.treeDisplay');
const TREE_SELECTOR = document.querySelector('#jsonData');

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

TREE_SELECTOR.addEventListener('change', updateTree)