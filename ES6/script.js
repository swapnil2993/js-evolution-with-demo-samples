class TodoList {
  constructor(root) {
    // Local state management object
    this.state = [];
    // [{1:'Bring Milk'},{2:'Bring Bread'}]

    // UI variables
    this.root = root;
    this.form = root.querySelector('.form-wrapper');
    this.addbtn = this.form.querySelector('.addBtn');
    this.input = this.form.querySelector('#todo-input');
    this.help = root.querySelector('.help');
    this.ul = root.querySelector('ul');
    // Lookup object containing the uid as key and li element as object
    this.items = {}

    // event handlers
    this.addbtn.addEventListener('click', e => {
      e.preventDefault()
      const { value } = this.input;
      if (value === '') {
        alert("For Gods Sake just type something before adding anything!");
      } else {
        this.input.value = '';
        this.addItem(value);
      }
    })

    this.ul.addEventListener('click', e => {
      if (e.target.classList.contains('close')) {
        const id = e.target.parentElement.getAttribute('data-delete-id')
        if (id) {
          this.removeItem(id)
        }
      }
    })
  }

  addItem(item) {
    // Updating the local state 
    const id = this.state.length + 1;
    this.state = this.state.concat({ item, id })

    // UI logic
    this.toggleEmptyState()

    const li = document.createElement('li');
    li.setAttribute('data-delete-id', id);
    const text = document.createTextNode(item);
    li.appendChild(text);

    const span = document.createElement("span");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    this.ul.appendChild(li)
    this.items[id] = li
  }

  removeItem(id) {
    const uid = parseInt(id, 10)
    // Updating the local state 
    this.state = this.state.filter(item => item.id !== uid)

    // UI logic
    const li = this.items[uid]
    this.ul.removeChild(li)
    this.toggleEmptyState()
  }

  toggleEmptyState() {
    const element = document.getElementsByClassName('help')[0];
    if (this.state.length > 0) {
      element.style.display = 'none';
    } else {
      element.style.display = 'block';
    }
  }
}

const root = document.getElementById('root')
new TodoList(root)