
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
let cartProducts = [];

// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', () => {
    // Slider'ı göster
    showSlide(currentIndex);

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
                    <button class="shop-now-button">SHOP NOW</button> 
                </div>
            `;

            productList.appendChild(productDiv);

            const heartIcon = productDiv.querySelector('.heart-icon');
            const shopNowButton = productDiv.querySelector('.shop-now-button');

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

            shopNowButton.addEventListener('click', function(event) {
                event.stopPropagation(); // İçeriğe yönlendirme işlemini engellemek için
                cartProducts.push({ ...product, quantity: 1 }); // Ürünü sepete ekle ve başlangıç miktarını 1 olarak ayarla
                console.log(`Ürünü sepete eklediniz: ${product.title}`);
            });

            productDiv.addEventListener('click', function() {
                const texts = productDiv.querySelector('.texts');
                texts.classList.toggle('open');

                if (product.img === 'images/bagzz-images/red.png') {
                    window.location.href = 'bagScreen/bagScreen.html';
                }
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
        showCartProductsModal(); // Sepet ürünlerini modal penceresinde göster
    });

    // Modal kapatma işlevleri
    const likedProductsModal = document.getElementById("likedProductsModal");
    const cartProductsModal = document.getElementById("cartProductsModal");
    const likedProductsClose = likedProductsModal.querySelector(".close");
    const cartProductsClose = cartProductsModal.querySelector(".close");

    likedProductsClose.onclick = function() {
        likedProductsModal.style.display = "none";
    };

    cartProductsClose.onclick = function() {
        cartProductsModal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == likedProductsModal) {
            likedProductsModal.style.display = "none";
        }
        if (event.target == cartProductsModal) {
            cartProductsModal.style.display = "none";
        }
    };
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

function showCartProductsModal() {
    const modal = document.getElementById("cartProductsModal");
    const cartProductsContainer = document.getElementById("cartProductsContainer");

    cartProductsContainer.innerHTML = ''; // Önceki öğeleri temizle

    cartProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'card';

        productDiv.innerHTML = `
            <div class="card-inner">
                <div class="red-bag">
                    <img src="${product.img}" alt="${product.title}">
                </div>
                <div class="delete-right">
                    <i class="delete-icon fas fa-times"></i>
                </div>
            </div>
            <div class="texts">
                <p class="title">${product.title}</p>
                <div class="quantity-control">
                    <button class="quantity-button decrease">-</button>
                    <span class="quantity">${product.quantity}</span>
                    <button class="quantity-button increase">+</button>
                </div>
            </div>
        `;

        const decreaseButton = productDiv.querySelector('.quantity-button.decrease');
        const increaseButton = productDiv.querySelector('.quantity-button.increase');
        const quantitySpan = productDiv.querySelector('.quantity');
        const deleteIcon = productDiv.querySelector('.delete-icon');

        decreaseButton.addEventListener('click', function() {
            if (product.quantity > 1) {
                product.quantity -= 1;
                quantitySpan.textContent = product.quantity;
                console.log(`Ürün miktarı azaltıldı: ${product.title}, Yeni Miktar: ${product.quantity}`);
            }
        });

        increaseButton.addEventListener('click', function() {
            product.quantity += 1;
            quantitySpan.textContent = product.quantity;
            console.log(`Ürün miktarı artırıldı: ${product.title}, Yeni Miktar: ${product.quantity}`);
        });

        deleteIcon.addEventListener('click', function() {
            cartProducts = cartProducts.filter(p => p.id !== product.id);
            showCartProductsModal(); // Sepet modülünü yeniden göster
            console.log(`Ürün sepetten çıkarıldı: ${product.title}`);
        });

        cartProductsContainer.appendChild(productDiv);
    });

    modal.style.display = "block";
}



