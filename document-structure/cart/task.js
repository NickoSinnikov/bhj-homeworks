const cartProducts = document.querySelector(".cart__products");
const productPlus = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const productMinus = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const productAdd = Array.from(document.querySelectorAll('.product__add'));

// Увеличение кол-ва товара
for (let i = 0; i < productPlus.length; i++){
    productPlus[i].onclick = function(){
        const productValue = productPlus[i].previousElementSibling; 
        productValue.textContent ++;
    }
}

// Уменьшение кол-ва товара
for (let i = 0; i < productMinus.length; i++){
    productMinus[i].onclick = function(){
        const productValue = productMinus[i].nextElementSibling; 
        if (productValue.textContent > 1){
        productValue.textContent --;
        }
    }
}

// Добавление в корзину продукта
for (let i = 0; i < productAdd.length; i++){
    productAdd[i].onclick = function(){
        const product = productAdd[i].closest('.product');
        const productId = product.getAttribute('data-id');
        const cartProduct = Array.from(document.querySelectorAll('.cart__product'))
        console.log(cartProduct);
        if (cartProduct.length===0){
            cartProducts.insertAdjacentHTML('beforeEnd', `<div class="cart__product" data-id=${product.getAttribute('data-id')}>
            <img class = "cart__product-image" src = ${product.querySelector('.product__image').getAttribute('src')}>
               <div class="cart__product-count">${product.querySelector('.product__quantity-value').textContent}</div></div>`)
        } else {
        
        console.log(cartProduct.find(element => element[data-id === "1"]));
      
            {if (productId !== item.getAttribute('data-id'))
                {  cartProducts.insertAdjacentHTML('beforeEnd', `<div class="cart__product" data-id=${product.getAttribute('data-id')}>
                <img class = "cart__product-image" src = ${product.querySelector('.product__image').getAttribute('src')}>
                   <div class="cart__product-count">${product.querySelector('.product__quantity-value').textContent}</div></div>`)
                }
            }
        
    }}
}

