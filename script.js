const myLibrary = [];
let size = 0;

function Book(name, autor, pages, read){
  this.name = name;
  this.autor = autor;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(Book) {
  size++;
  myLibrary.push(Book);  
  makeTable(myLibrary);
}

function makeTable(myLibrary) {
  const table = document.querySelector('#new');
  table.replaceChildren();
  let j = 0;
  for (let i = 0; i < size; i++) {
    const books =  myLibrary[i];
    const tr = document.createElement('tr');
    tr.setAttribute('id', 't'+i);
    table.appendChild(tr);
     for (const variable in books) {
      j++;
      const tr = document.querySelector('#t'+i);
      const th = document.createElement('th');
      console.log(books[variable]);
      th.textContent = books[variable];
      th.setAttribute('id', `${i}`+`${j}`);
      tr.appendChild(th);
    }
    j = 0;
  }
}

function makeTabl(myLibrary) {
  const table = document.querySelector('#new');
  table.replaceChildren();
  let i = 0;
  let j = 0;
  for (const books of myLibrary) {
    i++;
    const tr = document.createElement('tr');
    tr.setAttribute('id', 't'+i);
    table.appendChild(tr);

     for (const variable in books) {

      j += 1;   

      const tr = document.querySelector('#t'+i);
      const th = document.createElement('th');
      th.textContent = `${books[variable]}`;
      th.setAttribute('id', `${i}`+`${j}`)
      tr.appendChild(th);
    }
    j=0;
  }
}

function newBook(){
  const body = document.querySelector('body');
  const form = document.createElement('form');
  body.appendChild(form);
}

const dialog = document.querySelector('dialog');
const button = document.querySelector('.add');
const confirmBtn = document.getElementById('submit');

button.addEventListener("click", () => {

  dialog.showModal();
})

dialog.addEventListener("close", () => {
  
})

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector('.name').value;
  const author = document.querySelector('.author').value;
  const pages = document.querySelector('.pages').value;
  const read = document.querySelector('.select').value;
  const book = new Book(name,author,pages,read);

  addBookToLibrary(book); 
  dialog.close();
});

