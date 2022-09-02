// document.addEventListener("DOMContentLoaded", function() {
    
    //variables
    let allContainerCart = document.querySelector('.contenedor-menus');
    let containerBuyCart = document.querySelector('card-items')
    let buyThings = [];

    //funciones
    loadEventListeners();
    function loadEventListeners(){
        allContainerCart.addEventListener('click', addProduct); 
    }
    
    function addProduct(e){
        //e.preventDefault();
        if (e.target.classList.contains('fa-cart-plus')){
            const target = e.target
            // Con probabilidad de fallos
            const parentOfClickedItem = target.parentElement;
            const parentOfParentOfClickedItem = parentOfClickedItem && parentOfClickedItem.parentElement
            const selectProduct = parentOfParentOfClickedItem && parentOfParentOfClickedItem.parentElement
            if (selectProduct) {
                readTheContent(selectProduct);
            }
        }
    }
    
    function readTheContent(product){
        const infoProducts = {
            image: product.querySelector('div.thumb img.imgThumb').src,
            title: product.querySelector('.title-pedido').textContent,
            price: product.querySelector('div p span').textContent,
            id: product.querySelector('i').getAttribute('data-id'),
            amount: 1
        }
        buyThings = [...buyThings/*Copia del arreglo previamente*/, infoProducts]
        loadHtml();
        console.log(infoProducts);
    }

    function loadHtml(){
      buyThings.forEach(product =>{
          const {image, title, price, amount, id} = product;
          const row = document.createElement('div');
          row.classList.add('item');
          row.innerHTML = `
          <img src="${price}" alt="">
          <div class="item-content">
            <h5>${title}</h5>
            <h5>class="cart-price">RD$${price}</h5>
            <h6>Amount:${amount}</h6>
          </div>
          <span class="delete-proddata-id="${id}">X</span>`;
  
          containerBuyCart.appendChild(row)
      });
    }
