let displayProduct= document.getElementById("displayProduct")
let totalPrice= document.getElementById("totalPrice")

function displaycartProduct(){
 let cartData = JSON.parse(localStorage.getItem("cart"))
 let input=""
 let Price=0;
 cartData.forEach((val,index)=>{
    Price +=val.price
input+=`
<div class="all-product" >
<img src=${val.images[0]} alt=${val.title}>
<p>${val.title}</p>
<p>Price:$ ${val.price}</p>
<p>stock: ${val.stock}</p>
<button class="delete-btn" onclick="deleteitem(${index})"> delete </button>
</div>
`
 });
displayProduct.innerHTML=input;
totalPrice.textContent=`total price is $${Price.toFixed(2)}`
// console.log(input)
}
displaycartProduct()
function deleteitem(index){
let cartproduct=JSON.parse(localStorage.getItem("cart"))
cartproduct.splice(index,1)
localStorage.setItem("cart",JSON.stringify(cartproduct))
displaycartProduct()
}
