let menu =document.querySelector('#menu-bars');
let navbar=document.querySelector(' .navbar ')

menu.onclick = ()=>{
     menu.classList.toggle('fa-times');
     navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = ()=>{

     menu.classList.remove('fa-times');
     navbar.classList.remove('active');
 
     section.forEach(sec =>{
          let top = window.scrollY;
          let height = sec.offsetHeight;
          let offset = sec.offsetTop - 150;
          let id = sec.getAttribute('id');

          if(top >= offset && top < offset + height){
               navLinks.forEach(links =>{
                    links.classList.remove('active');
                    document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
               });
          };

     });
}

document.querySelector('#search-icon').onclick = () =>{
     document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
     document.querySelector('#search-form').classList.remove('active');
}

function showPopup() {
     const popup = document.getElementById('popup');
     popup.classList.add('show');
 
     // Hide the pop-up after 3 seconds
     setTimeout(() => {
         popup.classList.remove('show');
     }, 3000);
 }



function addToCart(itemName, itemPrice) {
     // Check if a cart already exists in localStorage
     let cart = JSON.parse(localStorage.getItem('cart')) || [];
 
     // Add the item to the cart
     cart.push({ name: itemName, price: itemPrice });
 
     // Store the updated cart in localStorage
     localStorage.setItem('cart', JSON.stringify(cart));

     showPopup();
 }
 
 



