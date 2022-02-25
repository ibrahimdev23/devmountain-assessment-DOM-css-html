



function handleSubmit(evt) {
	evt.preventDefault();
	
	
	alert('the form has submitted successfully');
}


const complimentFn = (e) => {
	e.preventDefault(e)
	let onlyOne = Math.ceil(Math.random() * 3)
	
	let newArray = [];
	
for ( let i = 0; i < compliments.length; i++) {
    let arrValue = compliments[onlyOne].innerHTML;
    newArray.push(arrValue);
}
alert(newArray[onlyOne]);

}




//save html elements to variables
let form = document.querySelector('form#contact');
let duckImg = document.querySelector('.duck')
let compliments = document.querySelectorAll('.comp li')




//event listerners
form.addEventListener('submit', handleSubmit);
duckImg.addEventListener("mouseover", complimentFn);
