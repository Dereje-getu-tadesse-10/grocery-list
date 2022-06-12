const form = document.querySelector('form') as HTMLFormElement;
const input = document.querySelector('input') as HTMLInputElement;
const itemDiv = document.querySelector('.list') as HTMLDivElement;
const editDiv = document.querySelector('.edit') as HTMLDivElement;
const editEl = document.querySelector('.fa-edit') as HTMLElement;
const deleteEl = document.querySelector('.fa-trash-alt') as HTMLElement;


form.addEventListener('submit', addItem);

function addItem(e: Event) {
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
}

// edit item
// editEl.addEventListener('click', editItem);
function editItem(e: Event) {
    e.preventDefault();

}

const newDiv = document.createElement('div');
newDiv.classList.add('item');

