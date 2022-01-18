//Reference DOM elements 
const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const searchBar = document.querySelector('.search input')


//FUNCTIONS SECTION

//Function that appends todo as li
const generateTemplate = todo =>{
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
  </li>
  `
  list.innerHTML += html
  }

// function that hides and show depending if todo matches searchTerm
const filteredSearch = searchTerm=>{

  Array.from(list.children) //note* list is the parent/ul and a HTML collection
  .filter(todo=>!todo.textContent.toLowerCase().includes(searchTerm))
  .forEach(todo=>todo.classList.add('filtered'))

  Array.from(list.children)
  .filter(todo=>todo.textContent.toLowerCase().includes(searchTerm))
  .forEach(todo=>todo.classList.remove('filtered'))
}


//EVENTS SECTION

//Get User Todo and remove spaces
addForm.addEventListener('submit',(e)=>{
  e.preventDefault()

const todo = addForm.add.value.trim() //note* <input name = 'add'>

//field must not be empty to be appended
if(todo.length){
  generateTemplate(todo)
  addForm.reset()
}
})

//Delete a Todo when user clicks trash can icon
list.addEventListener('click',(e)=>{
  
if(e.target.classList.contains('delete')){ 
  e.target.parentElement.remove() // note* here i am removing the entire li 
}
})

//filter Todo using search bar
searchBar.addEventListener('keyup',(e)=>{
  const searchTerm = searchBar.value

  filteredSearch(searchTerm)

})

