let all_products = JSON.parse(localStorage.getItem("all_prod_json"))
console.log(all_products)

let prod_id = JSON.parse(localStorage.getItem("id"))

let matching_prod = all_products.find((v)=>{return v.id == prod_id})
console.log(matching_prod)


let prod_cnt = document.getElementById("prod_cnt")

let card =`
<div class="main">
    <img class="prod_img" src="${matching_prod.images[0]}" alt="">
    <div id = "details">
        <p><b>TITLE : </b> ${matching_prod.title}</p>
        <p><b>BRAND : </b> ${matching_prod.brand}</p>
        <p><b>Description : </b>${matching_prod.description}</p>
        <p><b>Price : $ </b>${matching_prod.price}</p>
        <p><b>DISCOUNT : </b>${matching_prod.discountPercentage} %</p>
        <p><b>STOCK : </b>${matching_prod.stock}</p>
        <p><b>MINIMUM ORDER QUANTITY : </b>${matching_prod.minimumOrderQuantity}</p>
        <p><b>Warranty Information : </b>${matching_prod.warrantyInformation}</p>
        <p><b>SHIPPING INFORMATION : </b>${matching_prod.shippingInformation}</p>
        <p><b>RATING : </b>&star;  ${matching_prod.rating}</p>
        <button id ="btn">Add to Cart</button>
    </div>
</div>
`


prod_cnt.innerHTML=card
let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{addtocart(matching_prod)})
let review_cnt = document.getElementById("review_cnt")

let review_card = ""
matching_prod.reviews.forEach((r) => {
    console.log(r)

    review_card +=  `
    <div class = "review">
    <p><span>REVIEWER Name :</span> ${r.reviewerName}</p>
    <p><span>REVIEWER Email :</span> ${r.reviewerEmail}</p>
    <p><span>RATING :</span> ${r.rating}</p>
    <p><span>COMMENTS :</span> ${r.comment}</p>
    <p><span>DATE :</span> ${r.date}</p>
    </div><hr>

    `
    review_cnt.innerHTML=review_card
});

 function addtocart(obj){

    let cartprod = JSON.parse(localStorage.getItem("cart")) || []
    console.log(cartprod)
    cartprod.push(obj)
    localStorage.setItem("cart",JSON.stringify(cartprod))
   alert("product has been add to cart")
 }