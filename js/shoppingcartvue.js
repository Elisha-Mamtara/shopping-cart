let changeButtonTxt =document.getElementById("changeTxt")
let viewShoppingCart = document.getElementById("viewShoppingCart");
let selectMoreItems = document.getElementById("selectShoppingCart");
let showingSelectMoreItemsElement = false;

selectMoreItems.style.display="none";
viewShoppingCart.style.display="block";

function changeView(){
    if(showingSelectMoreItemsElement === true){
        selectMoreItems.style.display = "none"
        viewShoppingCart.style.display = "block"
        showingSelectMoreItemsElement = false;
        changeButtonTxt.innerHTML = "view Shopping Cart";
    }else{
        changeButtonTxt.innerHTML = "select More Items"
        selectMoreItems.style.display= "block";
        viewShoppingCart.style.display= "none";
        showingSelectMoreItemsElement = true;
    }
}