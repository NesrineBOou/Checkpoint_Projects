function updateCarteTotal(){
    
    var cartItemContainer = document.getElementsByClassName('table')[0];
    
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    
    let sum=0;
    for(let i=0;i<cartRows.length;i++){
    
    var cartRow=cartRows[i];
    var priceElement=cartRow.getElementsByClassName('price')[0]
    var price= priceElement.innerText; 
    var QuantityElement=cartRow.getElementsByClassName('input-number')[0]
    var SubTotal=Number(price)*Number(QuantityElement.value);
    var subpriceElement=cartRow.getElementsByClassName('total')[0]
    subpriceElement.innerText= SubTotal;
   sum= sum+SubTotal;
   
  
   }
   document.getElementById('cart-total').innerHTML=sum;
   
   }
   
let Removebtn = document.getElementsByClassName('btn-danger removebtn');
console.log('Removebutton:',Removebtn);
for(let i=0;i<Removebtn.length;i++){
    var button=Removebtn[i];
    button.addEventListener('click', function(event){
    var buttonclicked=event.target;
    buttonclicked.parentElement.parentElement.parentElement.remove();
    updateCarteTotal();
    
    })

}



let Shopbtn =document.getElementsByClassName('btn-sm mr-1 mb-2');
for(let i=0;i<Shopbtn.length;i++)
{
    var button=Shopbtn[i];
    button.addEventListener('click',addToCartClicked);
}


function addItemToCart(title,price,ImageSrc)
{
    var cartRow = document.createElement('tr')
    cartRow.classList.add('cart-row')
    var cartItem = document.getElementsByClassName('items')[0];
    var cartItemNames= cartItem.getElementsByClassName('Poduct__desc')
    for (var i=0;i<cartItemNames.length;i++)
    {
        var cartItemName= cartItemNames[i].innerText;
        console.log(cartItemName)
        if (cartItemName==title)
            {
                alert('this item is already added')
                return
            }
    }
    var carRowContents= 
    `
    <tr  class="cart-row"">
         
    <th scope="row">
    <div class="element">
        <div class="Product_img">
            <img src=${ImageSrc} class="img-responsive" alt="...">
        </div>
        <h5 class="Poduct__desc">
            ${title}
        </h5>
    </div>   
    </th>
    <div class="info">
    <td class="price"> 
       ${price}
    </td>
    <td>
        <div id="counter">
            <i class="fa fa-angle-down" id="decrement" aria-hidden="true" onclick="decrement('inp1')"></i>
            <input id="inp1" class="input-number" type="text" value="1"
            min="0" max="10">
             
            <i class="fa fa-angle-up" id="increment" aria-hidden="true" onclick="increment('inp1')"></i>
        </div>
    </td>
    <td class="total">
       <div class="Remove">
        <button type="button" class="btn btn-danger removebtn">Remove</button>
      </div>
    </td>
    </div>
  </tr>
        
`

    cartRow.innerHTML = carRowContents
    cartItem.append(cartRow) 
}


function addToCartClicked(event){
 var button = event.target;
 var shopItem =button.parentElement.parentElement

 var title = shopItem.getElementsByClassName('shop-thumb__title')[0].innerText;
 var price = shopItem.getElementsByClassName('shop-thumb__price')[0].innerText;
 var ImageSrc = shopItem.getElementsByClassName('shop-thumb__img')[0].src
console.log(ImageSrc)
addItemToCart(title,price,ImageSrc)


}





function increment(idinp)
{
var QUANTITY=document.getElementById(idinp).value;
QUANTITY++;
document.getElementById(idinp).value=QUANTITY
updateCarteTotal()
}



function decrement(idinp)
{
    var QUANTITY=document.getElementById(idinp).value;
    if(QUANTITY > 0)
    {QUANTITY--;}
    document.getElementById(idinp).value=QUANTITY
    updateCarteTotal()
   
}
