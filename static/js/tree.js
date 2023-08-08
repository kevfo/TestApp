// Deals with the construction of the 
// Species tree as shown on https://phytozome-next.jgi.doe.gov/

const TREE_DISPLAY = document.querySelector('.treeDisplay');
const TREE_SELECTOR = document.querySelector('#jsonData');

const updateTree = () => {
    let value = TREE_SELECTOR.value;
    switch(value) {
        case 'G':
            console.log("You picked G")
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