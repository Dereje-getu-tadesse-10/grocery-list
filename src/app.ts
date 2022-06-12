const form = document.querySelector('form') as HTMLFormElement;
const input = document.querySelector('input') as HTMLInputElement;
const itemDiv = document.querySelector('.list') as HTMLDivElement;
const editDiv = document.querySelector('.edit') as HTMLDivElement;
const editEl = document.querySelectorAll('.fa-edit') as  NodeListOf<HTMLElement>;
const deleteEl = document.querySelectorAll('.fa-trash-alt') as  NodeListOf<HTMLElement>;
const clearAllItems = document.querySelector('.clear') as HTMLDivElement;

const temp : string[] = [];

const tempu : string[] = [];

form.addEventListener('submit', addItem);

function addItem(e: Event) :void {
  e.preventDefault();
  const newItem = input.value;
    let items: string[] = [];

    if (newItem !== '') {
        if (localStorage.getItem('items') === null) {
            items = [];
            items.push(newItem);
            localStorage.setItem('items', JSON.stringify(items));
        } else {
            items = JSON.parse(localStorage.getItem('items')!);
            items.push(newItem);
            localStorage.setItem('items', JSON.stringify(items));
        }
        addToHtml(newItem);
    }
    input.value = '';
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
    const editItems = Array.from(document.querySelectorAll('.fa-edit') as NodeListOf<HTMLElement>);

    editItems.forEach((editItem : HTMLElement) => {
        // console.log(editItem);
        editItem.addEventListener('click', () => {
            
            const edit : string = editItem.parentElement.parentElement.childNodes[0].textContent;

            editItem.parentElement.parentElement.childNodes[0].textContent = edit;
            // modification du text avec contenteditable
            editItem.parentElement.parentElement.childNodes[0].contentEditable = 'true';
            editItem.parentElement.parentElement.childNodes[0].focus();
            editItem.parentElement.parentElement.childNodes[0].addEventListener('blur', () => {
                editItem.parentElement.parentElement.childNodes[0].contentEditable = 'false';
            }
            );

            editItem.parentElement.parentElement.childNodes[0].addEventListener('keypress', (e: KeyboardEvent) => {
                if (e.key === 'Enter') {
                    editItem.parentElement.parentElement.childNodes[0].contentEditable = 'false';

                    const items = localStorage.getItem('items');
                    const itemsArray : string [] = JSON.parse(items!);
                    itemsArray.forEach((item : string)=> {
                        if (item === edit) {

                            for (let i = 0; i < itemsArray.length; i++) {
                                if (itemsArray[i] === edit) {
                                    itemsArray[i] = editItem.parentElement.parentElement.childNodes[0].textContent;

                                    localStorage.setItem('items', JSON.stringify(itemsArray));
                                }
                                return itemsArray;
                            }
                        }
                    });
                }
            });

        });

    });

    // delete button
    const delEL = document.querySelectorAll('.fa-trash-alt') as NodeListOf<HTMLElement>;
    delEL.forEach((deleteItem : HTMLElement) => {
        deleteItem.addEventListener('click', () => {
            const items = localStorage.getItem('items');
            const itemsArray : string [] = JSON.parse(items!);
            itemsArray.forEach((item : string) => {
                if (item === deleteItem.parentElement.parentElement.childNodes[0].textContent) {
                    for (let i = 0; i < itemsArray.length; i++) {
                        if (itemsArray[i] === deleteItem.parentElement.parentElement.childNodes[0].textContent) {
                            itemsArray.splice(i, 1);
                            localStorage.setItem('items', JSON.stringify(itemsArray));
                        }
                    }
                }
            }
            );
            deleteItem.parentElement.parentElement.remove();
        }
        );

    })
    
}

// all items from local storage 
function getItems() :void {

    const items = localStorage.getItem('items');

    if (items !== null) {
        const itemsArray = JSON.parse(items);
        itemsArray.forEach(function(item : string) {
            addToHtml(item);
        });
    }
}
getItems();

// clear all items

clearAllItems.addEventListener('click', clearAllItem);
function clearAllItem() {
   localStorage.clear();
    itemDiv.textContent = '';
}



