let total = 0;

// input validation
let inputField = document.getElementById("inputField")
let inputDiv = document.getElementById("inputDiv")
let inputButton = document.getElementById("inputButton")
let totalpriceValue = document.getElementById("total");
let totalPrice = document.getElementById("totaltaka");
let discount = document.getElementById("discount");
let productlist = document.getElementById("productlist");
let allclearProduct = document.getElementById("allclearProduct")
let purchase = document.getElementById("purchase");


inputField.disabled = true;


function productAdd(e){



    let price = e.querySelector("p").innerText;
    let name = e.querySelector("h2").innerText;


   
    purchase.disabled = false;



    // new name added
    let count = productlist.childElementCount + 1;
    let newProductadd = document.createElement("p");
    newProductadd.innerText=count +". "+ name;
    productlist.appendChild(newProductadd)


    // price 

    let newTotal = parseFloat(total)
    let newrice = parseFloat(price)
     total= newTotal + newrice;
    // console.log(total)
    totalpriceValue.innerText = total.toFixed(2);



     // input validation


  if( total <= 200){
    inputField.disabled = true;
    }else{
      inputField.disabled = false;
    }


    // total price
    totalPrice.innerText=total.toFixed(2);

}

 // discount validation

inputButton.addEventListener("click", function(){
    let copon = "SELL200";
    let couponcode = inputField.value ;
    if(couponcode === copon){
        let discounttaka = total / 100 * 20;
        let newTotalPrice = total - discounttaka; 
        discount.innerText = discounttaka.toFixed(2);
        totalPrice.innerText = newTotalPrice.toFixed(2);
    }else{
        discount.innerText = "00.00";
        totalPrice.innerText = total.toFixed(2);
    }
})


function allclear(){
    discount.innerText = 0;
    totalPrice.innerText = 0;
     totalpriceValue.innerText= 0;
     productlist.innerText="";
     purchase.disabled = true;
     inputField.value="";
}



