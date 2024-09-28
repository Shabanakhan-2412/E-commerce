let main_cnt=document.getElementById("main_cnt")
fetch("https://dummyjson.com/users").then((e)=>{return e.json()}).then((e)=>{
    console.log(e)
    let all_products = e.products
    let json_data = JSON.stringify(all_products)
    localStorage.setItem("all_prod_json",json_data)
   
        all_products.forEach((v) => {
            let cnt = document.createElement("div")
            cnt.classList="cnt"
            let img_cnt = document.createElement("div")
            img_cnt.classList = "img_cnt"
            let img = document.createElement("img")
            img.classList="img"
            img.src=(v.images[0])
            let products_name = document.createElement("h4")
            products_name.textContent=v.title
            let para = document.createElement("p")
            para.textContent = v.category
            img_cnt.appendChild(img)
});
});

