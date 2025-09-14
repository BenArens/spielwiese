let myObjectArr = [
    {
        "name": "max",
        "is_a_good_guy": false
    },
    {
        "name": "ben",
        "is_a_good_guy": true
    },
    {
        "name": "pumba",
        "is_a_good_guy": true
    },
    {
        "name": "peter",
        "is_a_good_guy": true
    }
];

let oriObj = myObjectArr;

function renderArr() {
    let contentRef = document.getElementById('main_content');
    contentRef.innerHTML = "";
    for (let index = 0; index < myObjectArr.length; index++) {
        contentRef.innerHTML += getContentTemplate(index);
    }
}

function getContentTemplate(index) {
    return ` <div class="names">
            <h2>Name: ${myObjectArr[index].name}</h2>
        </div> `
}

function renderFilterArr(obj) {
    myObjectArr = obj;
    let contentRef = document.getElementById('main_content');
    contentRef.innerHTML = "";
    for (let index = 0; index < obj.length; index++) {
        contentRef.innerHTML += getContentTemplate(index);
    }
}

function getInput() {
    let bensInput = document.getElementById('bens_input');
    bensInput = bensInput.value
    
    let filterObj = oriObj;

        filterObj = filterObj.filter((element) => element['name'].includes(bensInput))
        renderFilterArr(filterObj)
}
