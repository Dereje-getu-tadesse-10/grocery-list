


const form = document.querySelector('form') as HTMLFormElement;
const input = document.querySelector('input') as HTMLInputElement;
const itemDiv = document.querySelector('.list') as HTMLDivElement;
const editDiv = document.querySelector('.edit') as HTMLDivElement;
const editEl = document.querySelector('.fa-edit') as HTMLElement;
const deleteEl = document.querySelector('.fa-trash-alt') as HTMLElement;

const temp : string[] = [];

form.addEventListener('submit', addItem);

function addItem(e: Event) :void {
  e.preventDefault();
  const newItem = input.value;
    let items: string[] = [];

    if (localStorage.getItem('items') === null) {
        items = [];
    }
    else 
    {
        items = JSON.parse(localStorage.getItem('items')!);
    }
    items.push(newItem);
    localStorage.setItem('items', JSON.stringify(items));
    input.value = '';
    console.log(items);
    addToHtml(newItem);
}


function editItem(e: Event) :void {
    e.preventDefault();

}

function addToHtml(input: string) :void {

    // items div
    const newDiv = document.createElement('div');
    newDiv.classList.add('item');
    const items = document.createElement('p');
    items.textContent = input;

    // icons div

    const icons = document.createElement('div');
    icons.classList.add('edit');
    const edit = document.createElement('i');
    edit.classList.add('fas', 'fa-edit');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash-alt');

    newDiv.appendChild(items);
    icons.appendChild(edit);
    icons.appendChild(deleteIcon);
    newDiv.appendChild(icons);
    itemDiv.appendChild(newDiv);

}

function getItems() :void {
    const items : string = localStorage.getItem('items');
    // Ajout des items 1 par 1 dans le dom au chargement de la page
    if (items !== null) {
        const itemArray = JSON.parse(items);
        itemArray.forEach(function (item : string) {
            addToHtml(item);
        });
    }
}

getItems();




