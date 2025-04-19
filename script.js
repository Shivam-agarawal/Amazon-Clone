// Sample product data
const products = [
    {
        id: 1,
        name: "Kindle Paperwhite E-reader",
        price: 139.99,
        image: "https://via.placeholder.com/300x300.png?text=Kindle+Paperwhite",
        rating: 4.5,
        category: "Electronics",
        reviews: 1250,
        prime: true
    },
    {
        id: 2,
        name: "Instant Pot Pressure Cooker",
        price: 79.99,
        image: "https://via.placeholder.com/300x300.png?text=Instant+Pot",
        rating: 4.8,
        category: "Kitchen",
        reviews: 3420,
        prime: true
    },
    {
        id: 3,
        name: "Apple AirPods Pro",
        price: 249.99,
        image: "https://via.placeholder.com/300x300.png?text=AirPods+Pro",
        rating: 4.7,
        category: "Electronics",
        reviews: 5670,
        prime: true
    },
    {
        id: 4,
        name: "Nintendo Switch",
        price: 299.99,
        image: "https://via.placeholder.com/300x300.png?text=Nintendo+Switch",
        rating: 4.6,
        category: "Gaming",
        reviews: 4230,
        prime: true
    },
    {
        id: 5,
        name: "Samsung 4K Smart TV",
        price: 497.99,
        image: "https://via.placeholder.com/300x300.png?text=Samsung+TV",
        rating: 4.4,
        category: "Electronics",
        reviews: 1890,
        prime: true
    },
    {
        id: 6,
        name: "Dyson V11 Vacuum",
        price: 599.99,
        image: "https://via.placeholder.com/300x300.png?text=Dyson+V11",
        rating: 4.9,
        category: "Home",
        reviews: 2760,
        prime: true
    },
    {
        id: 7,
        name: "Fitbit Versa 3",
        price: 229.99,
        image: "https://via.placeholder.com/300x300.png?text=Fitbit+Versa",
        rating: 4.3,
        category: "Electronics",
        reviews: 1540,
        prime: true
    },
    {
        id: 8,
        name: "KitchenAid Stand Mixer",
        price: 379.99,
        image: "https://via.placeholder.com/300x300.png?text=KitchenAid",
        rating: 4.8,
        category: "Kitchen",
        reviews: 2130,
        prime: true
    }
];

// Function to create product cards
function createProductCard(product) {
    return `
        <div class="col-md-3 mb-4">
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x300.png?text=Product+Image'">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">
                        <strong>$${product.price}</strong><br>
                        <span class="text-warning">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 ? '½' : ''}</span>
                        <span class="text-muted">(${product.reviews})</span>
                    </p>
                    ${product.prime ? '<span class="badge bg-primary">Prime</span>' : ''}
                </div>
            </div>
        </div>
    `;
}

// Function to load products
function loadProducts() {
    const productContainer = document.getElementById('product-container');
    if (productContainer) {
        // Create a document fragment to hold all product cards
        const fragment = document.createDocumentFragment();
        
        // Create a temporary container to hold the HTML
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = products.map(product => createProductCard(product)).join('');
        
        // Append all child nodes to the fragment
        while (tempContainer.firstChild) {
            fragment.appendChild(tempContainer.firstChild);
        }
        
        // Clear the container and append the fragment
        productContainer.innerHTML = '';
        productContainer.appendChild(fragment);
    }
}

// Load products when the page is ready
document.addEventListener('DOMContentLoaded', loadProducts);

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Product data for carousel
    const products = [
        {
            image: 'images and media/1.jpg',
            discount: 'Up to 40% off',
            title: 'Deal of the Day',
            price: '299.99',
            originalPrice: '499.99',
            rating: 4.5,
            reviews: 1234,
            isPrime: true
        },
        // Add more products as needed
    ];

    // Populate product carousel
    const carouselItems = document.querySelector('.carousel-items');
    
    products.forEach(product => {
        const productElement = createProductElement(product);
        carouselItems.appendChild(productElement);
    });

    // Carousel navigation
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            carouselItems.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        });

        nextButton.addEventListener('click', () => {
            carouselItems.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        });
    }

    // Helper function to create product elements
    function createProductElement(product) {
        const div = document.createElement('div');
        div.className = 'product-item';
        
        div.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="Product">
                ${product.discount ? `<div class="product-discount">${product.discount}</div>` : ''}
            </div>
            <div class="product-info">
                <div class="product-title">${product.title}</div>
                <div class="product-price">
                    <span class="current-price">$${product.price}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
                </div>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span class="review-count">(${product.reviews})</span>
                </div>
                ${product.isPrime ? '<div class="prime-badge"><img src="images and media/tick.svg" alt="Prime"></div>' : ''}
            </div>
        `;
        
        return div;
    }

    // Helper function to generate star ratings
    function generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }
}); 