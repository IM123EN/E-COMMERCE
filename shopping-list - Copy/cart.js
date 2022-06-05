//Like biuttton


var likes = document.getElementsByClassName ( 'like') // access to elements with class "like"
for ( let i = 0 ; i< likes.length; i++){
let like = likes[i] //every elemnt from the likes collection
console.log (like)
like.addEventListener('click', function(){
//to add an event => click
if ( like.style.color != 'red'){
    like.style.color ='red'

}

else {
    like.style.color=  'black'
}

})



}

var additions = document.getElementsByClassName ('plus-btn')  // access to elements with class "plus-btn"
console.log (additions)
for (var i = 0 ;i< additions.length; i++) {
let add = additions [i]
add.addEventListener('click', function(){
    add.previousElementSibling.value++// access to the previous elemnt of the add button  
totalprice()
})


}

var soutraction = document.getElementsByClassName ('minus-btn') // access to elements with class "minus"
for (var i = 0 ;i< soutraction.length; i++) {
let soust = soutraction[i]
soust.addEventListener('click', function(){
   if ( soust.nextElementSibling.value > 1){ 
   soust.nextElementSibling.value--// access to the next elemnt of the soustrac button  
    totalprice()
}
})


}

var deletes = document.getElementsByClassName ('delete')
for (var i = 0 ;i< deletes.length; i++) {

let del = deletes[i]

del.addEventListener('click', function() {
del.parentElement.remove()  // access to the parent  elemnt and remove it
})



}

function totalprice(){ 
    var items = document.getElementsByClassName('Item') // access to elements with class "Item"
    console.log(items)
var total = 0
for ( let i=0; i< items.length; i++){

var price = items[i].querySelector('.price') // access to elements with class "price" inside the every item
var qty = items[i].querySelector('.Quant')
console.log('price')
total+= price.innerHTML*qty.value   // to access the inside of the element in the elemnt was not an input


}
console.log (total)

var tot=document.getElementById("finalPrice")
tot.value=total //change the value of the input
}

