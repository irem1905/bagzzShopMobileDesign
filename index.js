// const pen ="pembe" 
// if (pen !== "mavi"){
//     console.log("kalem mavidir");
// }
// else if (pen== "sarı"){
//     console.log("kalem sarı");
// }
// else{
//     console.log("kalem kırmızıdır");
//     const a= 15
//     console.log(a);
// }

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});


document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card-one');
    
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        window.location.href = url;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 1, title: 'Artsy', img: 'images/bagzz-images/red.png', heartImg: 'images/bagzz-images/heart.png.png' },
        { id: 2, title: 'Berkely', img: 'images/bagzz-images/gray.png', heartImg: 'images/bagzz-images/heart.png.png' },
        { id: 3, title: 'Capucinus', img: 'images/bagzz-images/black.png', heartImg: 'images/bagzz-images/heart.png.png' },
        { id: 4, title: 'Monogram', img: 'images/bagzz-images/green.png', heartImg: 'images/bagzz-images/heart.png.png' }
    ];

    const productList = document.getElementById('productList');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'card';

        productDiv.innerHTML = `
            <div class="card-inner">
                <div class="heart-right">
                    <i class="heart-icon far fa-heart"></i>
                </div>
                <div class="red-bag">
                    <img src="${product.img}" alt="${product.title}">
                </div>
            </div>
            <div class="texts">
                <p class="title">${product.title}</p>
                <p class="border-bottom-line">SHOP NOW</p>
            </div>
        `;

        productList.appendChild(productDiv);
        
        const heartIcon = productDiv.querySelector('.heart-icon');
        heartIcon.addEventListener('click', function(event) {
            event.stopPropagation(); 
            heartIcon.classList.toggle('fas');
            heartIcon.classList.toggle('far');
            
                if (heartIcon.classList.contains('fas')) {
                console.log(`Ürünü beğendiniz: ${product.title}`);
            } else {
                console.log(`Ürünü beğenmekten vazgeçtiniz: ${product.title}`);
            }
        });

        productDiv.addEventListener('click', () => {
            window.location.href = "bagScreen/bagScreen.html";
        });
    });
});
// const menuItems = [
//     { href: '#home', icon: 'fas fa-home' },
//     { href: '#search', icon: 'fas fa-search' },
//     { href: '#heart', icon: 'fas fa-heart' },
//     { href: '#shopping', icon: 'fas fa-shopping-basket' }
// ];

// const footerMenu = document.getElementById('footer-menu');

// menuItems.forEach(item => {
//     const button = document.createElement('button');
//     button.className = 'menu-item';
//     button.onclick = () => location.href = item.href;
//     button.innerHTML = `<i class="${item.icon}"></i>`;
//     footerMenu.appendChild(button);
// });


document.getElementById('shopping-button').addEventListener('click', function() {
    window.location.href = 'shopping.html';
});



// script.js
document.addEventListener("DOMContentLoaded", function() {
    const shoppingButton = document.getElementById("shopping-button");
    shoppingButton.addEventListener("click", function() {
        window.open("https://shopping.com", "_blank"); // Burada URL'yi istediğiniz URL ile değiştirebilirsiniz.
    });
});


















































// let currentIndex = 0;

// function showSlide(index) {
//     const slides = document.querySelectorAll('.slide');
//     if (index >= slides.length) {
//         currentIndex = 0;
//     } else if (index < 0) {
//         currentIndex = slides.length - 1;
//     } else {
//         currentIndex = index;
//     }
//     const offset = -currentIndex * 100;
//     document.querySelector('.slides').style.transform = 'translateX(${offset}%)';
// }

// function nextSlide() {
//     showSlide(currentIndex + 1);
// }

// function prevSlide() {
//     showSlide(currentIndex - 1);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     showSlide(currentIndex);
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const card = document.querySelector('.card-one');

//     card.addEventListener('click', () => {
//         const url = card.getAttribute('data-url');
//         window.location.href = url;
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const products = [
//         { id: 1, title: 'Artsy', img: 'images/bagzz-images/red.png', heartImg: 'images/bagzz-images/heart.png' },
//         { id: 2, title: 'Berkely', img: 'images/bagzz-images/gray.png', heartImg: 'images/bagzz-images/heart.png' },
//         { id: 3, title: 'Capucinus', img: 'images/bagzz-images/black.png', heartImg: 'images/bagzz-images/heart.png' },
//         { id: 4, title: 'Monogram', img: 'images/bagzz-images/green.png', heartImg: 'images/bagzz-images/heart.png' }
//     ];

//     const productList = document.getElementById('productList');

//     products.forEach(product => {
//         const productDiv = document.createElement('div');
//         productDiv.className = 'card';

//         productDiv.innerHTML = `
//             <div class="card-inner">
//                 <div class="heart-right">
//                     <i class="heart-icon far fa-heart"></i>
//                 </div>
//                 <div class="red-bag">
//                     <img src="${product.img}" alt="${product.title}">
//                 </div>
//             </div>
//             <div class="texts">
//                 <p class="title">${product.title}</p>
//                 <p class="border-bottom-line">SHOP NOW</p>
//             </div>
//         `;

//         productList.appendChild(productDiv);

//         const heartIcon = productDiv.querySelector('.heart-icon');
//         heartIcon.addEventListener('click', function(event) {
//             event.stopPropagation(); 
//             heartIcon.classList.toggle('fas');
//             heartIcon.classList.toggle('far');

//             if (heartIcon.classList.contains('fas')) {
//                 console.log('Ürünü beğendiniz: ${product.title}');
//             } else {
//                 console.log('Ürünü beğenmekten vazgeçtiniz: ${product.title}');
//             }
//         });

//         productDiv.addEventListener('click', () => {
//             window.location.href = "bagScreen/bagScreen.html";
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const shoppingButton = document.getElementById("shopping-button");
//     shoppingButton.addEventListener("click", function() {
//         window.open("https://shopping.com", "_blank"); // Burada URL'yi istediğiniz URL ile değiştirebilirsiniz.
// });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('search-button').addEventListener('click', function() {
//         window.location.href = 'searchScreen.html';
//     });
// });




