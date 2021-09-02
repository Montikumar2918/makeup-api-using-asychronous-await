async function getDetails(){
   try{
      const data = await fetch(
      "https://makeup-api.herokuapp.com/api/v1/products.json",
      {method: "GET"}
      );
   const details = await data.json();
    //console.log(details);
    document.querySelector(".product-list").innerHTML = ``;
    details.forEach((detail) => createDetail(detail));
 }
 catch(err){
   console.log(err);
}
}  
 function createDetail({id, brand, name, price, price_sign, currency, image_link, product_link, website_link, description, rating, category, product_type, created_at, updated_at}){
    const info = document.createElement("div");
    info.setAttribute("class", "container");
   
            info.innerHTML +=` 
           <div class="image-container">
           
           <img class="image_link" src=${image_link} width="250px" height="250px" />
           </div>
 
           <div class="details">
          <h2>Brand:<span style="color:blue">  ${brand}</span></h2>
          <h3>Name:<span style="color:blue">  ${name}</span></h3>
          <h3>Price: <span style="color:blue"> ${price}</span></h3>
          <h3>Price_Sign:<span style="color:blue">  ${price_sign}</span></h3>
          <h3>Currency:<span style="color:blue">  ${currency}</span></h3>
          <h3>Product Link:- <a href="${product_link}">${product_link}</a></h3>
          <h3>Website Link:- <a href="${website_link}">${website_link}</a></h3>
          <p1><h3>Description:</h3><span style="color:blue">  ${description}</span></p1>
          <h3>Rating:<span style="color:blue">  ${rating}</span></h3>
          <h3>Category:<span style="color:blue">  ${category}</span></h3>
          <h3>Product_type:<span style="color:blue">  ${product_type}</span></h3>
          <h3>Created_at:<span style="color:blue">  ${new Date(created_at).toDateString()}</span></h3>
          <h3>Updated_at:<span style="color:blue">  ${new Date(updated_at).toDateString()}</span></h3>
          
          </div>
          </div>`;
          document.querySelector(".product-list").append(info)
                        
          }

          getDetails();
          
          //  seraching by Brand name 
          
          
            async function searchBrand(){
            
            brands = document.querySelector(".myInput").value;
            const data = await fetch(
               `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brands}`,
               {method: "GET"}
              );
            const details1 = await data.json();
            console.log(details1);
            document.querySelector(".product-list").innerHTML = ``;
            details1.forEach((update) => createDetail(update));
           
         }
         
         

          
