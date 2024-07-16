
// // Slider fonksiyonları
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
//     document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
// }

// function nextSlide() {
//     showSlide(currentIndex + 1);
// }

// function prevSlide() {
//     showSlide(currentIndex - 1);
// }

// // Sayfa yüklendiğinde çalışacak fonksiyonlar
// document.addEventListener('DOMContentLoaded', () => {
//     // Slider'ı göster
//     showSlide(currentIndex);

//     // Kart tıklama olayları
//     const card = document.querySelector('.card-one');
//     if (card) {
//         card.addEventListener('click', () => {
//             const url = card.getAttribute('data-url');
//             window.location.href = url;
//         });
//     }

//     // Ürün listesi
//     const products = [
//         { id: 1, title: 'Artsy', img: 'images/bagzz-images/red.png', heartImg: 'images/bagzz-images/heart.png.png' },
//         { id: 2, title: 'Berkely', img: 'images/bagzz-images/gray.png', heartImg: 'images/bagzz-images/heart.png.png' },
//         { id: 3, title: 'Capucinus', img: 'images/bagzz-images/black.png', heartImg: 'images/bagzz-images/heart.png.png' },
//         { id: 4, title: 'Monogram', img: 'images/bagzz-images/green.png', heartImg: 'images/bagzz-images/heart.png.png' }
//     ];

//     const productList = document.getElementById('productList');

//     if (productList) {
//         products.forEach(product => {
//             const productDiv = document.createElement('div');
//             productDiv.className = 'card';

//             productDiv.innerHTML = `
//                 <div class="card-inner">
//                     <div class="heart-right">
//                         <i class="heart-icon far fa-heart"></i>
//                     </div>
//                     <div class="red-bag">
//                         <img src="${product.img}" alt="${product.title}">
//                     </div>
//                 </div>
//                 <div class="texts">
//                     <p class="title">${product.title}</p>
//                     <p class="border-bottom-line">SHOP NOW</p>
//                 </div>
//             `;

//             productList.appendChild(productDiv);

//             const heartIcon = productDiv.querySelector('.heart-icon');
//             heartIcon.addEventListener('click', function(event) {
//                 event.stopPropagation();
//                 heartIcon.classList.toggle('fas');
//                 heartIcon.classList.toggle('far');

//                 if (heartIcon.classList.contains('fas')) {
//                     console.log(`Ürünü beğendiniz: ${product.title}`);
//                 } else {
//                     console.log(`Ürünü beğenmekten vazgeçtiniz: ${product.title}`);
//                 }
//             });

//             productDiv.addEventListener('click', () => {
//                 window.location.href = "bagScreen/bagScreen.html";
//             });
//         });
//     }

//     // Menü açma/kapama
//     const menuToggle = document.querySelector('.menu-toggle');
//     const menu = document.querySelector('.menu');
//     const menuClose = document.querySelector('.menu-close');

//     if (menuToggle && menu) {
//         menuToggle.addEventListener('click', function() {
//             menu.classList.toggle('open');
//         });

//         if (menuClose) {
//             menuClose.addEventListener('click', function() {
//                 menu.classList.remove('open');
//             });
//         }
//     }

//     // Menü butonları
//     document.getElementById("home-button").addEventListener("click", function() {
//         window.location.href = "ana_sayfa.html";
//     });

//     document.getElementById("search-button").addEventListener("click", function() {
//         window.location.href = "searchScreen/search.html"; 
//     });

//     document.getElementById("heart-button").addEventListener("click", function() {
//         window.location.href = "likeScreen/like.html";
//     });

//     document.getElementById("shopping-button").addEventListener("click", function() {
//         window.location.href = "shoppingScreen/shopping.html";
//     });
// });

// document.getElementById('clearBtn').addEventListener('click', function() {
//     document.getElementById('search').value = '';
// });





// Slider fonksiyonları
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

let likedProducts = [];

// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', () => {
    // Slider'ı göster
    showSlide(currentIndex);

    // Kart tıklama olayları
    const card = document.querySelector('.card-one');
    if (card) {
        card.addEventListener('click', () => {
            const url = card.getAttribute('data-url');
            window.location.href = url;
        });
    }

    // Ürün listesi
    const products = [
        { id: 1, title: 'Artsy', img: 'images/bagzz-images/red.png' },
        { id: 2, title: 'Berkely', img: 'images/bagzz-images/gray.png' },
        { id: 3, title: 'Capucinus', img: 'images/bagzz-images/black.png' },
        { id: 4, title: 'Monogram', img: 'images/bagzz-images/green.png' }
    ];

    const productList = document.getElementById('productList');

    if (productList) {
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
                    likedProducts.push(product);
                    console.log(`Ürünü beğendiniz: ${product.title}`);
                } else {
                    likedProducts = likedProducts.filter(p => p.id !== product.id);
                    console.log(`Ürünü beğenmekten vazgeçtiniz: ${product.title}`);
                }
            });

            productDiv.addEventListener('click', () => {
                window.location.href = "bagScreen/bagScreen.html";
            });
        });
    }

    // Menü açma/kapama
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const menuClose = document.querySelector('.menu-close');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('open');
        });

        if (menuClose) {
            menuClose.addEventListener('click', function() {
                menu.classList.remove('open');
            });
        }
    }

    // Menü butonları
    document.getElementById("home-button").addEventListener("click", function() {
        window.location.href = "ana_sayfa.html";
    });

    document.getElementById("search-button").addEventListener("click", function() {
        window.location.href = "searchScreen/search.html"; 
    });

    document.getElementById("heart-button").addEventListener("click", function() {
        showLikedProductsModal();
    });

    document.getElementById("shopping-button").addEventListener("click", function() {
        window.location.href = "shoppingScreen/shopping.html";
    });

    // Modal kapatma işlevleri
    const modal = document.getElementById("likedProductsModal");
    const span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

function showLikedProductsModal() {
    const modal = document.getElementById("likedProductsModal");
    const likedProductsContainer = document.getElementById("likedProductsContainer");

    likedProductsContainer.innerHTML = ''; // Önceki öğeleri temizle

    likedProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'card';

        productDiv.innerHTML = `
            <div class="card-inner">
                <div class="red-bag">
                    <img src="${product.img}" alt="${product.title}">
                </div>
            </div>
            <div class="texts">
                <p class="title">${product.title}</p>
            </div>
        `;

        likedProductsContainer.appendChild(productDiv);
    });

    modal.style.display = "block";
}









































// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const menu = document.querySelector('.menu');
//     const menuClose = document.querySelector('.menu-close');

//     menuToggle.addEventListener('click', function() {
//         menu.classList.toggle('active');
//     });

//     menuClose.addEventListener('click', function() {
//         menu.classList.remove('active');
//     });
// });



























