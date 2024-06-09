var product = [{
    id: 1,
    img:'https://media.studio7thailand.com/109215/iPhone_15_Pro_Blue_Titanium_1-square_medium.jpg',
    name: 'iPhone 15 Pro',
    price: 999,
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum veniam eum soluta alias, corporis odio architecto ab molestiae atque at autem',
    type: 'iPhone15pro'
},{
    id: 2,
    img:'https://media.studio7thailand.com/109245/iPhone_15_Pro_Natural_Titanium_1-square_medium.jpg',
    name: 'iPhone 15 pro',
    price: 999,
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum veniam eum soluta alias, corporis odio architecto ab molestiae atque at autem',
    type: 'iPhone15pro'
},{
    id: 3,
    img:'https://media.studio7thailand.com/109245/iPhone_15_Pro_Natural_Titanium_1-square_medium.jpg',
    name: 'iPhone 15 pro',
    price: 999,
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum veniam eum soluta alias, corporis odio architecto ab molestiae atque at autem',
    type: 'iPhone15pro'
},{
    id: 4,
    img:'https://media.studio7thailand.com/109235/iPhone_15_Pro_White_Titanium_1-square_medium.jpg',
    name: 'iPhone 15 Pro',
    price: 999,
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum veniam eum soluta alias, corporis odio architecto ab molestiae atque at autem',
    type: 'iPhone15pro'
},{
    id: 5,
    img:'https://media.studio7thailand.com/109305/TH_iPhone_15_Black_1-square_medium.jpg',
    name: 'iPhone 15 ',
    price: 899,
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum veniam eum soluta alias, corporis odio architecto ab molestiae atque at autem',
    type: 'iPhone15'
},{
    id: 6,
    img:'https://media.studio7thailand.com/109335/iPhone_15_Blue_1-square_medium.jpg',
    name: 'iPhone 15 ',
    price: 899,
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum veniam eum soluta alias, corporis odio architecto ab molestiae atque at autem',
    type: 'iPhone15'
},{
    id: 7,
    img:'https://media.studio7thailand.com/109345/iPhone_15_Green_1-square_medium.jpg',
    name: 'iPhone 15 ',
    price: 899,
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum veniam eum soluta alias, corporis odio architecto ab molestiae atque at autem',
    type: 'iPhone15'
},{
    id: 8,
    img:'https://media.studio7thailand.com/109325/iPhone_15_Yellow_1-square_medium.jpg',
    name: 'iPhone 15  ',
    price: 799,
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum veniam eum soluta alias, corporis odio architecto ab molestiae atque at autem',
    type: 'iPhone15'
},{
    id: 9,
    img:'https://media.studio7thailand.com/75847/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1A_Deep_Purple_1-square_medium.jpg',
    name: 'iPhone 14 Pro ',
    price: 799,
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum veniam eum soluta alias, corporis odio architecto ab molestiae atque at autem',
    type: 'iPhone14pro'
},{
    id: 10,
    img:'https://media.studio7thailand.com/75842/iPhone_14_Pro_Gold_PDP_Image_Position-1A_Gold_1-square_medium.jpg',
    name: 'iPhone 14 Pro ',
    price: 799,
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum veniam eum soluta alias, corporis odio architecto ab molestiae atque at autem',
    type: 'iPhone14pro'
},{
    id: 11,
    img:'https://media.studio7thailand.com/75832/iPhone_14_Pro_Space_Black_PDP_Image_Position-1A_Space_Black_1-square_medium.jpg',
    name: 'iPhone 14 Pro ',
    price: 799,
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum veniam eum soluta alias, corporis odio architecto ab molestiae atque at autem',
    type: 'iPhone14pro'
},{
    id: 12,
    img:'https://media.studio7thailand.com/75842/iPhone_14_Pro_Gold_PDP_Image_Position-1A_Gold_1-square_medium.jpg',
    name: 'iPhone 14 Pro ',
    price: 799,
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum veniam eum soluta alias, corporis odio architecto ab molestiae atque at autem',
    type: 'iPhone14pro'
},{
    id: 13,
    img:'https://media.studio7thailand.com/75852/iPhone_14_Midnight_PDP_Image_Position-1A_Midnight_1-square_medium.jpg',
    name: 'iPhone 14 ',
    price: 699,
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum veniam eum soluta alias, corporis odio architecto ab molestiae atque at autem',
    type: 'iPhone14'
},{
    id: 14,
    img:'https://media.studio7thailand.com/75856/iPhone_14_Starlight_PDP_Image_Position-1A_Starlight_1-square_medium.jpg',
    name: 'iPhone 14 ',
    price: 699,
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum veniam eum soluta alias, corporis odio architecto ab molestiae atque at autem',
    type: 'iPhone14'
},{
    id: 15,
    img:'https://media.studio7thailand.com/75888/iPhone_14_Blue_PDP_Image_Position-1A_Blue_1-square_medium.jpg',
    name: 'iPhone 14 ',
    price: 699,
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum veniam eum soluta alias, corporis odio architecto ab molestiae atque at autem',
    type: 'iPhone14'
},{
    id: 16,
    img:'https://media.studio7thailand.com/75640/iPhone_14_Plus_Purple_PDP_Image_Position-1A_Purple_1-square_medium.jpg',
    name: 'iPhone 14 ',
    price: 699,
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum veniam eum soluta alias, corporis odio architecto ab molestiae atque at autem',
    type: 'iPhone14'
}];

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="iPhone">
                    <div class="product-details">
                        <p class="product-name">${product[i].name}</p>
                        <button onclick="openproductdetail(${i})" class="buy-button">Buy</button>
                    </div>
                    <p class="product-price">${product[i].price} USD</p>
                </div>`;
    }
    $("#productlist").html(html);
});

function searchiphone(elem) {
   
   var value = $('#'+elem.id).val()
   console.log(value)
   var html = '';
    for (let i = 0; i < product.length; i++) {
        if(product[i].name.includes(value)) {
            html += `<div class="product-items ${product[i].type}">
            <img class="product-img" src="${product[i].img}" alt="iPhone">
            <div class="product-details">
                <p class="product-name">${product[i].name}</p>
                <button onclick="openproductdetail(${i})" class="buy-button">Buy</button>
            </div>
            <p style="font-size: .9vw;">${product[i].price} USD</p>
        </div>`;
        }
       
    }

    if(html == ''){
        $("#productlist").html(`<p>Not found product</p>`);
    } else {
        $("#productlist").html(html);
    }

    
    
}

function searchproduct(param) {
       console.log(param) 
       $(".product-items").css('display','none')
       if(param=='all'){
        $(".product-items").css('display','block')
       }
       else {
          $("."+param).css('display','block')
       }
}
var productindex = 0;
function openproductdetail(index) {
    productindex = index;
    console.log(productindex);
    $("#modaldesc").css('display', 'flex');
    $("#mdd-img").attr('src', product[index].img);
    $("#mdd-name").text(product[index].name);
    $("#mdd-price").text((product[index].price) + ' USD');

    if ($(window).width() < 480) {
        
        $("#mdd-name").css('font-size', '6vw');
        $("#mdd-price").css('font-size', '5vw');
    } else {
        
        $("#mdd-name").css('font-size', '1.5vw');
        $("#mdd-price").css('font-size', '1.2vw');
    }
}


function closeModal(){
    $(".modal").css('display','none')
}
var cart = [];
function addtocart() {
    var pass = true;

    for (let i = 0; i < cart.length; i++) {
        if(productindex == cart[i].index){
            console.log('found same iphone')
            cart[i].count++;
            pass = false;
        }
    }

    if (pass) {
       var obj = {
            index: productindex,
            id: product[productindex].id,
            name:product[productindex].name,
            price:product[productindex].price,
            img:product[productindex].img,
            count: 1


            
       };
       
       cart.push(obj)
    }
    console.log(cart)

    Swal.fire({
        icon: 'success',
        title: 'Add ' + product[productindex].name + ' to cart'
    })
    $("#cartcount").css('display','flex').text(cart.length)
}

function openCart(){
    $('#modalCart').css('display','flex')
    rendercart();
}

function rendercart() {
    if (cart.length > 0) {
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html += `<div class="cartlist-items">
                <div class="cartlist-left">
                <img src="${cart[i].img}" alt="">
                <div class="cartlist-detail">
                    <p class="cart-item-name">${cart[i].name}</p>
                    <p class="cart-item-price">${cart[i].price * cart[i].count} USD</p>
                </div>
                </div>
                <div class="cartlist-right">
                    <p onclick="deinitems('-',${i})" class="btnc">-</p>
                    <p id="countitems${i}" style="margin: 0 20px;">${cart[i].count}</p>
                    <p onclick="deinitems('+',${i})" class="btnc">+</p>
                </div>
            </div>`;
        }
        $("#mycart").html(html);
    } else {
        $("#mycart").html(`<p>Not found product</p>`);
    }
}


function deinitems(action, index){
    if(action == '-'){
        if(cart[index].count > 0 ){
            cart[index].count--;
            $("#countitems"+index).text(cart[index].count)

            if(cart[index].count <= 0 ){
                Swal.fire({
                    icon: 'warning',
                    title: 'Are you sure to delete',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonntext:'Delete',
                    cancelButtonText: 'Cancel'
                }).then((res) =>{
                    if(res.isConfirmed){
                        cart.splice(index,1)
                        rendercart();
                        $("#cartcount").css('display','flex').text(cart.length)
                        if(cart.length <= 0){
                            $("#cartcount").css('display','none')
                        }

                    }
                    else{
                        cart[index].count++;
                        $("#countitems"+index).text(cart[index].count)

                    }
                })
            }
        }
    }

    else if(action == '+'){
        cart[index].count++;
        $("#countitems"+index).text(cart[index].count)
    }
}