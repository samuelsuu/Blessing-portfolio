
// FOR THE STICK NAV MENU
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// FOR THE BLINKING EFFECT
// List of sentences
var _CONTENT = [ 
	"Technical Product Manager",
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);





// RESPONSIVE NAV MENU
const Navy = document.querySelector('.nav-menu')
const Ham = document.querySelector('.harmburger')
const Linky = document.querySelectorAll('.nav-link')

	Ham.addEventListener("click", ()=>{
	Navy.classList.toggle("active")
	Ham.classList.toggle("active")
})
Linky.forEach(n=> n.addEventListener('click', ()=>{
	Navy.classList.remove("active")
	Ham.classList.remove("active")
}))


// LOAD MORE BUTTON
const parentContainer =  document.querySelector('.read');
const parent = document.querySelector('.reado');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('Load');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.loadMore');

    currentText.classList.toggle('read-show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})
parent.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('Load');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.loadMore');

    currentText.classList.toggle('read-show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})


// FORM VALIDATION
let name =document.querySelector('.namy')
let email =document.querySelector('.emaily')
let error =document.querySelector('.danger')
let errorName =document.querySelector('.Namedanger')
let btn = document.querySelector('.form-btn')
const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    btn.addEventListener('click', (e)=>{
      if(name.value === ''){
        errorName.innerHTML = 'Name is required';
		name.style.borderColor = 'red'
		name.focus()
		e.preventDefault()
    }
	else{
		errorName.innerHTML = ' ';
		name.style.borderColor = 'green'
		
	  }
    if(email.value === ''){
        error.innerHTML = 'Email is required!';
		email.style.borderColor = 'red'
		email.focus()
		e.preventDefault()
    }
    else if (!regex.test(email.value)) {
      error.innerHTML = "This is not a valid email format!"
	  e.preventDefault()
  }
  else{
	error.innerHTML = ' ';
	email.style.borderColor = 'green'
	
  }
  
    })