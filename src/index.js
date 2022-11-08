document.addEventListener("DOMContentLoaded", () => {
  // your code here
let form = document.querySelector("#create-task-form") // we got our form. /1/

function doSomething(e){
e.preventDefault();   // preventing our page from refreshing by deafult  /1/
console.log(e);

   console.log(e.target[0].value)  //1/ considering e first then     /2/ considering .target[0].value

    const myList = document.getElementById("tasks"); //2// get the ID element from the index.html
     console.log(myList); //2// displays myList to us

     let newListItem =document. createElement('li'); //2// creates a new element we are going to use to add a text content to it which will
      
       newListItem.textContent = e.target[0].value ;  //2// be the whatever we type in the box

        myList.appendChild(newListItem); //2// adds what we wront into each <li></li> and appends it to "myList" that has gotten our "task" ID

        let btn = document.createElement('button') //3// created a variable to create an element botton
       
        btn.textContent = " x "; //3// button has an x when displayed
       
        newListItem.appendChild(btn); //3// we append botton to newmyListItem
       
        btn.addEventListener('click', handleDelete) //4// adds an eventListener click to btn

        form.reset() //5// let's us reset and keep tying 
}

form.addEventListener("submit",doSomething); //1//

function handleDelete(e){  

  e.target.parentNode.remove( ) //4// let's us remove what we typed in

}








/*
function addingtodo(todo){
  let li = document.createElement('li')
  console.log(li);
  li.textContent= todo
  document.querySelector('#tasks').appendChild(li)


}
console.log(addingtodo);
*/




/*
//
let div = document.getElementById("list");
//console.log(div);
let li = document.createElement("li");
//console.log(li)
li.appendChild(document.createTextNode("Element 4"));
ul.appendChild(li)
*/


});


