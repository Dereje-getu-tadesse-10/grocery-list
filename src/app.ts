const form = document.querySelector('form') as HTMLFormElement;
const input = document.querySelector('input') as HTMLInputElement;
const itemDiv = document.querySelector('.list') as HTMLDivElement;
const editDiv = document.querySelector('.edit') as HTMLDivElement;
const editEl = document.querySelectorAll('.fa-edit') as  NodeListOf<HTMLElement>;
const deleteEl = document.querySelectorAll('.fa-trash-alt') as  NodeListOf<HTMLElement>;

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

function addToHtml(input: string) :void {
    const newDiv = document.createElement('div');
    itemsCreated(newDiv, input);
    icons(newDiv);
    itemDiv.appendChild(newDiv);
}

// function create item
 function itemsCreated(div: HTMLDivElement, input:string):void {

   div.classList.add('item');
    const items = document.createElement('p');
    items.textContent = input;

   div.appendChild(items);
}


// function create icons
function icons(div: HTMLDivElement):void{
    const icons = document.createElement('div');
    icons.classList.add('edit');
    const edit = document.createElement('i');
    edit.classList.add('fas', 'fa-edit');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash-alt');

    div.appendChild(icons);
    icons.appendChild(edit);
    icons.appendChild(deleteIcon);
}



function getItems() :void {
    const items : string = localStorage.getItem('items');
    if (items !== null) {
        const itemArray = JSON.parse(items);
        itemArray.forEach(function (item : string) {
            addToHtml(item);
        });
    }
}

getItems();








