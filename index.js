console.log("Adding the Title and Description in local storage and update it")
function getAndupdate(){
console.log("Updating listing")
tit = document.getElementById('item').value;
desc= document.getElementById('description').value;
if(localStorage.getItem('itemsJson')==null)
{
itemjsonarray= [];
itemjsonarray.push([tit, desc])
localStorage.setItem('itemsJson', JSON.stringify(itemjsonarray));
}
else{
itemjsonarraystr =localStorage.getItem('itemsJson');
itemjsonarray = JSON.parse(itemjsonarraystr)
itemjsonarray.push([tit, desc])
localStorage.setItem('itemsJson', JSON.stringify(itemjsonarray));
}
update();
}

function update(){
if(localStorage.getItem('itemsJson')==null)
{
itemjsonarray= [];
localStorage.setItem('itemsJson', JSON.stringify(itemjsonarray));
}
else{
itemjsonarraystr =localStorage.getItem('itemsJson');
itemjsonarray = JSON.parse(itemjsonarraystr)
}

//console.log("populate the table")
let tablebody= document.getElementById('tablebody');
let str= "";
itemjsonarray.forEach((element, index) =>{
str+= `
 <tr>
      <th>${index+1}</th>
      <th>${element[0]}</th>
      <th>${element[1]}</th>
      <th><button id="delete_btn" onclick=deleted(${index})>Delete</button></th>
 </tr>`;


});
tablebody.innerHTML= str;



}
add= document.getElementById('add');
add.addEventListener("click", getAndupdate);
update()

function deleted(itemIndex){
console.log('delete', itemIndex);
itemjsonarraystr =localStorage.getItem('itemsJson');
itemjsonarray = JSON.parse(itemjsonarraystr)
// delete itemIndex element from the array
itemjsonarray.splice(itemIndex, 1)
localStorage.setItem('itemsJson', JSON.stringify(itemjsonarray));
update()
}
clear=document.getElementById('clear');
clear.addEventListener("click", function(){
console.log('clearing the item');
localStorage.clear();
update();
});