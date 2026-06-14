document.addEventListener('DOMContentLoaded', () => {
    // --- Global Variables ---
    let cart = [];
    window.addItemToCart = addItemToCart;

    // Initialize Menu & Reviews
    initializeMenu();
    initializeFeaturedCategoriesNew();
    initializeReviewsCarousel();
    checkUserSession();

    // Floating Contact FAB Toggle
    const fabBtn = document.getElementById('contact-main-btn');
    const fabSubmenu = document.getElementById('contact-submenu');
    if (fabBtn && fabSubmenu) {
        const mainIcon = fabBtn.querySelector('.main-icon');
        const closeIcon = fabBtn.querySelector('.close-icon');
        
        fabBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            fabSubmenu.classList.toggle('active');
            
            if (fabSubmenu.classList.contains('active')) {
                mainIcon.style.display = 'none';
                closeIcon.style.display = 'block';
                fabBtn.style.backgroundColor = 'var(--primary)';
            } else {
                mainIcon.style.display = 'block';
                closeIcon.style.display = 'none';
                fabBtn.style.backgroundColor = 'var(--accent-orange)';
            }
        });

        // Close submenu when clicking anywhere else on the page
        document.addEventListener('click', () => {
            if (fabSubmenu.classList.contains('active')) {
                fabSubmenu.classList.remove('active');
                mainIcon.style.display = 'block';
                closeIcon.style.display = 'none';
                fabBtn.style.backgroundColor = 'var(--accent-orange)';
            }
        });
    }

    // --- Navbar & Navigation ---
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            }
        }
    });

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                if (navLinks) navLinks.classList.remove('active');
            }
        });
    });

    // --- Dynamic Menu Rendering ---
    function initializeMenu() {
        const menuCategoriesContainer = document.getElementById('menu-categories');
        const menuGridContainer = document.getElementById('menu-grid');

        if (!menuCategoriesContainer || !menuGridContainer) return;
        if (typeof D3DB === 'undefined') return;

        const menuData = D3DB.getMenuByCategories();
        menuCategoriesContainer.innerHTML = '';

        // Create Category Buttons
        menuData.forEach((categoryData, index) => {
            const btn = document.createElement('button');
            btn.className = `category-btn ${index === 0 ? 'active' : ''}`;
            btn.textContent = categoryData.category;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderMenuItems(categoryData.items);
            });
            menuCategoriesContainer.appendChild(btn);
        });

        // Initial Load
        if (menuData.length > 0) {
            renderMenuItems(menuData[0].items);
        }
    }

    function renderMenuItems(items) {
        const menuGridContainer = document.getElementById('menu-grid');
        if (!menuGridContainer) return;

        menuGridContainer.innerHTML = '';
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'menu-item';
            
            const iconHtml = item.type === 'veg' ? '<span class="veg-icon"></span>' : '<span class="non-veg-icon"></span>';
            
            div.innerHTML = `
                <div class="menu-item-header">
                    <h3>${iconHtml} ${item.name}</h3>
                    <span class="price">${item.price}</span>
                </div>
                <p>${item.description}</p>
                <div class="menu-item-action-wrapper">
                    <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
                </div>
            `;
            menuGridContainer.appendChild(div);
        });

        // Add event listeners to "Add to Cart" buttons
        menuGridContainer.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = e.target.getAttribute('data-id');
                addItemToCart(itemId);
            });
        });
    }

    // --- Shopping Cart Drawer Logic ---
    const cartIconBtn = document.getElementById('cart-icon-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');

    if (cartIconBtn && cartDrawer && cartDrawerOverlay) {
        cartIconBtn.addEventListener('click', (e) => {
            e.preventDefault();
            cartDrawer.classList.add('active');
            cartDrawerOverlay.classList.add('active');
        });
    }

    if (closeCartBtn && cartDrawer && cartDrawerOverlay) {
        closeCartBtn.addEventListener('click', () => {
            cartDrawer.classList.remove('active');
            cartDrawerOverlay.classList.remove('active');
        });
        cartDrawerOverlay.addEventListener('click', () => {
            cartDrawer.classList.remove('active');
            cartDrawerOverlay.classList.remove('active');
        });
    }

    // Add item to cart
    function addItemToCart(itemId) {
        window.addItemToCart = addItemToCart;
        if (typeof D3DB === 'undefined') return;
        const menu = D3DB.getMenu();
        const item = menu.find(i => i.id === itemId);
        if (!item) return;

        const existingCartItem = cart.find(i => i.id === itemId);
        if (existingCartItem) {
            existingCartItem.quantity += 1;
        } else {
            cart.push({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: 1
            });
        }

        updateCartUI();
        playAddToCartSound();
        
        // Quick visual effect on cart button
        if (cartIconBtn) {
            cartIconBtn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartIconBtn.style.transform = 'scale(1)';
            }, 200);
        }
    }

    // Play warm synthetic audio chime on cart add
    function playAddToCartSound() {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
            osc.frequency.exponentialRampToValueAtTime(880.00, audioCtx.currentTime + 0.1); // A5
            
            gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.start();
            osc.stop(audioCtx.currentTime + 0.35);
            
            // Second tone for premium chime effect
            setTimeout(() => {
                try {
                    const osc2 = audioCtx.createOscillator();
                    const gain2 = audioCtx.createGain();
                    osc2.type = 'sine';
                    osc2.frequency.setValueAtTime(880.00, audioCtx.currentTime); // A5
                    gain2.gain.setValueAtTime(0.1, audioCtx.currentTime);
                    gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
                    osc2.connect(gain2);
                    gain2.connect(audioCtx.destination);
                    osc2.start();
                    osc2.stop(audioCtx.currentTime + 0.4);
                } catch (e) {}
            }, 80);
        } catch (e) {
            console.warn('Web Audio playback failed/blocked:', e);
        }
    }

    function updateCartUI() {
        const badge = document.getElementById('cart-badge-count');
        const itemsContainer = document.getElementById('cart-items-container');
        const totalPriceEl = document.getElementById('cart-total-price');

        // Update badge
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (badge) {
            if (totalItems > 0) {
                badge.textContent = totalItems;
                badge.style.display = 'flex';
            } else {
                badge.style.display = 'none';
            }
        }

        // Render items list
        if (itemsContainer) {
            itemsContainer.innerHTML = '';
            if (cart.length === 0) {
                itemsContainer.innerHTML = '<p class="cart-empty-msg">Your cart is empty.</p>';
            } else {
                cart.forEach(item => {
                    const priceVal = parseFloat(item.price.replace(/[₹,]/g, ''));
                    const itemTotal = (priceVal * item.quantity).toFixed(2);

                    const div = document.createElement('div');
                    div.className = 'cart-item';
                    div.innerHTML = `
                        <div class="cart-item-details">
                            <h4>${item.name}</h4>
                            <span class="cart-item-price">${item.price}</span>
                            <div class="cart-item-qty">
                                <button class="qty-btn minus-qty" data-id="${item.id}">-</button>
                                <span>${item.quantity}</span>
                                <button class="qty-btn plus-qty" data-id="${item.id}">+</button>
                            </div>
                        </div>
                        <button class="remove-cart-item" data-id="${item.id}"><i class="fa fa-trash"></i></button>
                    `;
                    itemsContainer.appendChild(div);
                });

                // Attach Qty modification events
                itemsContainer.querySelectorAll('.minus-qty').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const id = e.target.getAttribute('data-id');
                        changeItemQty(id, -1);
                    });
                });

                itemsContainer.querySelectorAll('.plus-qty').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const id = e.target.getAttribute('data-id');
                        changeItemQty(id, 1);
                    });
                });

                itemsContainer.querySelectorAll('.remove-cart-item').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        // Find closest button or use target attribute
                        const btnEl = e.target.closest('.remove-cart-item');
                        const id = btnEl.getAttribute('data-id');
                        removeItemFromCart(id);
                    });
                });
            }
        }

        // Update subtotal
        if (totalPriceEl) {
            totalPriceEl.textContent = `₹${calculateCartTotal().toFixed(2)}`;
        }
    }

    function changeItemQty(itemId, amount) {
        const item = cart.find(i => i.id === itemId);
        if (!item) return;

        item.quantity += amount;
        if (item.quantity <= 0) {
            removeItemFromCart(itemId);
        } else {
            updateCartUI();
        }
    }

    function removeItemFromCart(itemId) {
        cart = cart.filter(i => i.id !== itemId);
        updateCartUI();
        if (cart.length === 0) {
            resetCheckoutUI();
        }
    }

    function calculateCartTotal() {
        return cart.reduce((sum, item) => {
            const priceVal = parseFloat(item.price.replace(/[₹,]/g, ''));
            return sum + (priceVal * item.quantity);
        }, 0);
    }

    // --- Checkout Logic ---
    const checkoutBtn = document.getElementById('checkout-btn');
    const placeOrderBtn = document.getElementById('place-order-btn');
    const checkoutForm = document.getElementById('cart-checkout-form');
    const checkoutTypeSelect = document.getElementById('checkout-type');
    const tableGroup = document.getElementById('checkout-table-group');
    const addressGroup = document.getElementById('checkout-address-group');

    if (checkoutTypeSelect) {
        checkoutTypeSelect.addEventListener('change', (e) => {
            if (e.target.value === 'Delivery') {
                tableGroup.style.display = 'none';
                addressGroup.style.display = 'block';
            } else {
                tableGroup.style.display = 'block';
                addressGroup.style.display = 'none';
            }
        });
    }

    if (checkoutBtn && checkoutForm && placeOrderBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Please add some items to your cart first.');
                return;
            }
            
            // Pre-fill fields if user is logged in
            if (typeof D3DB !== 'undefined') {
                const sessionUser = D3DB.getCurrentUser();
                if (sessionUser) {
                    const nameInput = document.getElementById('checkout-name');
                    if (nameInput && !nameInput.value) nameInput.value = sessionUser.name;
                }
            }

            checkoutForm.classList.add('active');
            checkoutBtn.style.display = 'none';
            placeOrderBtn.style.display = 'block';
        });
    }

    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', () => {
            const nameInput = document.getElementById('checkout-name');
            const phoneInput = document.getElementById('checkout-phone');
            const branchSelect = document.getElementById('checkout-branch');
            const typeSelect = document.getElementById('checkout-type');
            const tableInput = document.getElementById('checkout-table');
            const addressInput = document.getElementById('checkout-address');

            if (!nameInput.value.trim() || !phoneInput.value.trim()) {
                alert('Please fill in your Name and Phone Number.');
                return;
            }

            const mobileRegex = /^[6-9]\d{9}$/;
            if (!mobileRegex.test(phoneInput.value.trim())) {
                alert('Please enter a valid 10-digit mobile number.');
                return;
            }

            if (typeSelect.value === 'Delivery' && !addressInput.value.trim()) {
                alert('Please provide a delivery address.');
                return;
            }

            if (typeSelect.value === 'Dine-in' && !tableInput.value.trim()) {
                alert('Please provide your Table Number.');
                return;
            }

            // Placed Order Object
            const currentUser = (typeof D3DB !== 'undefined') ? D3DB.getCurrentUser() : null;
            const orderData = {
                username: currentUser ? currentUser.username : 'guest',
                name: nameInput.value.trim(),
                phone: phoneInput.value.trim(),
                branch: branchSelect.value,
                orderType: typeSelect.value,
                table: typeSelect.value === 'Dine-in' ? tableInput.value.trim() : '',
                address: typeSelect.value === 'Delivery' ? addressInput.value.trim() : '',
                items: cart.map(item => ({ name: item.name, price: item.price, quantity: item.quantity })),
                subtotal: calculateCartTotal()
            };

            if (typeof D3DB !== 'undefined') {
                const orderId = D3DB.submitOrder(orderData);
                
                // Show order success modal
                const successOverlay = document.getElementById('order-success-overlay');
                const successOrderIdEl = document.getElementById('success-order-id');
                if (successOverlay && successOrderIdEl) {
                    successOrderIdEl.textContent = `#${orderId}`;
                    successOverlay.classList.add('active');
                }
                
                // Reset cart and checkout UI
                cart = [];
                updateCartUI();
                resetCheckoutUI();
                
                // Close Cart Drawer
                if (cartDrawer) {
                    cartDrawer.classList.remove('active');
                    cartDrawerOverlay.classList.remove('active');
                }
            }
        });
    }

    function resetCheckoutUI() {
        if (checkoutForm && checkoutBtn && placeOrderBtn) {
            checkoutForm.classList.remove('active');
            checkoutBtn.style.display = 'block';
            placeOrderBtn.style.display = 'none';
            
            // Clear inputs
            document.getElementById('checkout-name').value = '';
            document.getElementById('checkout-phone').value = '';
            document.getElementById('checkout-table').value = '';
            document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('category-modal').classList.remove('active');
});
            tableGroup.style.display = 'block';
            addressGroup.style.display = 'none';
        }
    }

    const successCloseBtn = document.getElementById('success-close-btn');
    if (successCloseBtn) {
        successCloseBtn.addEventListener('click', () => {
            const successOverlay = document.getElementById('order-success-overlay');
            if (successOverlay) {
                successOverlay.classList.remove('active');
            }
            // Trigger profile view to see the order immediately
            const profileIcon = document.getElementById('profile-icon-btn');
            if (profileIcon) profileIcon.click();
        });
    }

    // --- Authentication & User Profile Modal ---
    const profileIconBtn = document.getElementById('profile-icon-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const authOverlay = document.getElementById('auth-modal-overlay');

    if (profileIconBtn && authOverlay && closeModalBtn) {
        profileIconBtn.addEventListener('click', (e) => {
            e.preventDefault();
            authOverlay.classList.add('active');
            checkUserSession(); // update fields when opening modal
        });
        
        closeModalBtn.addEventListener('click', () => {
            authOverlay.classList.remove('active');
        });

        authOverlay.addEventListener('click', (e) => {
            if (e.target === authOverlay) {
                authOverlay.classList.remove('active');
            }
        });
    }

    // Tabs Toggle
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (tabLogin && tabRegister && loginForm && registerForm) {
        tabLogin.addEventListener('click', () => {
            tabLogin.classList.add('active');
            tabRegister.classList.remove('active');
            loginForm.classList.add('active');
            registerForm.classList.remove('active');
        });
        
        tabRegister.addEventListener('click', () => {
            tabRegister.classList.add('active');
            tabLogin.classList.remove('active');
            registerForm.classList.add('active');
            loginForm.classList.remove('active');
        });
    }

    // Handle Login Submit
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById('login-username');
            const passwordInput = document.getElementById('login-password');
            const errorEl = document.getElementById('login-error');

            if (typeof D3DB !== 'undefined') {
                const res = D3DB.loginUser(usernameInput.value, passwordInput.value);
                if (res.success) {
                    errorEl.style.display = 'none';
                    usernameInput.value = '';
                    passwordInput.value = '';
                    checkUserSession();
                } else {
                    errorEl.textContent = res.message;
                    errorEl.style.display = 'block';
                }
            }
        });
    }

    // Handle Register Submit
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('reg-name');
            const usernameInput = document.getElementById('reg-username');
            const passwordInput = document.getElementById('reg-password');
            const errorEl = document.getElementById('register-error');

            if (typeof D3DB !== 'undefined') {
                const res = D3DB.registerUser(usernameInput.value, passwordInput.value, nameInput.value);
                if (res.success) {
                    errorEl.style.display = 'none';
                    alert('Registration successful! Please log in with your credentials.');
                    nameInput.value = '';
                    usernameInput.value = '';
                    passwordInput.value = '';
                    if (tabLogin) tabLogin.click();
                } else {
                    errorEl.textContent = res.message;
                    errorEl.style.display = 'block';
                }
            }
        });
    }

    // Handle Logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (typeof D3DB !== 'undefined') {
                D3DB.logoutUser();
                checkUserSession();
            }
        });
    }

    function checkUserSession() {
        const formsContainer = document.getElementById('auth-forms-container');
        const dashboardContainer = document.getElementById('profile-dashboard-container');
        const displayNameEl = document.getElementById('user-display-name');
        const roleBadgeEl = document.getElementById('user-role-badge');
        
        if (typeof D3DB === 'undefined') return;

        const user = D3DB.getCurrentUser();
        if (user) {
            // Logged in
            if (formsContainer) formsContainer.style.display = 'none';
            if (dashboardContainer) dashboardContainer.classList.add('active');
            if (displayNameEl) displayNameEl.textContent = `Welcome, ${user.name}!`;
            if (roleBadgeEl) {
                roleBadgeEl.textContent = user.role;
                roleBadgeEl.className = `status-badge ${user.role === 'admin' ? 'status-preparing' : 'status-completed'}`;
            }
            renderOrderHistory(user.username);
        } else {
            // Not logged in
            if (formsContainer) formsContainer.style.display = 'block';
            if (dashboardContainer) dashboardContainer.classList.remove('active');
        }
    }

    function renderOrderHistory(username) {
        const body = document.getElementById('user-orders-body');
        if (!body) return;
        if (typeof D3DB === 'undefined') return;

        const orders = D3DB.getOrders().filter(o => o.username === username);
        body.innerHTML = '';

        if (orders.length === 0) {
            body.innerHTML = '<tr><td colspan="5" style="text-align:center;">You haven\'t placed any orders yet.</td></tr>';
        } else {
            orders.forEach(order => {
                const tr = document.createElement('tr');
                
                // Construct items string
                const itemsStr = order.items.map(i => `${i.name} x${i.quantity}`).join(', ');
                
                // Lowercase/slug status class mapping
                const statusClass = `status-${order.status.toLowerCase().replace(/\s+/g, '-')}`;

                tr.innerHTML = `
                    <td style="font-weight:bold;">${order.id}</td>
                    <td>${order.date}</td>
                    <td><span title="${itemsStr}">${itemsStr.length > 30 ? itemsStr.substring(0, 30) + '...' : itemsStr}</span></td>
                    <td style="font-weight:700;">₹${order.subtotal.toFixed(2)}</td>
                    <td><span class="status-badge ${statusClass}">${order.status}</span></td>
                `;
                body.appendChild(tr);
            });
        }
    }

    // --- Reviews Carousel Testimonial Slider ---
    function initializeReviewsCarousel() {
        const track = document.getElementById('reviews-track');
        const nav = document.getElementById('carousel-nav');
        if (!track || !nav) return;
        if (typeof D3DB === 'undefined') return;

        const reviews = D3DB.getFeedback().filter(fb => parseFloat(fb.rating) >= 4);
        track.innerHTML = '';
        nav.innerHTML = '';

        if (reviews.length === 0) {
            track.innerHTML = '<p class="text-center" style="width:100%; color:var(--text-light);">No customer reviews available yet.</p>';
            return;
        }

        reviews.forEach((review, index) => {
            const card = document.createElement('div');
            card.className = 'review-card';
            
            // Build stars html
            const ratingStars = '★'.repeat(parseInt(review.rating)) + '☆'.repeat(5 - parseInt(review.rating));
            const reviewTagsHtml = review.tags && review.tags.length > 0
                ? `<div style="margin-top: 10px;">${review.tags.map(t => `<span class="status-badge status-preparing" style="margin-right: 5px; font-size:0.65rem;">${t}</span>`).join('')}</div>`
                : '';

            card.innerHTML = `
                <div class="review-rating">${ratingStars}</div>
                <p class="review-text">"${review.message}"</p>
                <div class="review-author">${review.fullName}</div>
                <div class="review-meta">${review.branch} Outlet | ${review.date}</div>
                ${reviewTagsHtml}
            `;
            track.appendChild(card);

            // Create carousel indicator dot
            const dot = document.createElement('button');
            dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                goToReviewSlide(index, track, nav);
            });
            nav.appendChild(dot);
        });

        // Auto slide cycle
        let currentSlide = 0;
        const totalSlides = reviews.length;
        if (totalSlides > 1) {
            setInterval(() => {
                currentSlide = (currentSlide + 1) % totalSlides;
                goToReviewSlide(currentSlide, track, nav);
            }, 6000); // cycle every 6s
        }
    }

    function goToReviewSlide(index, track, nav) {
        if (!track || !nav) return;
        track.style.transform = `translateX(-${index * 100}%)`;
        
        // Update dots
        const dots = nav.querySelectorAll('.carousel-dot');
        dots.forEach((dot, idx) => {
            if (idx === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // --- Branch Card Detail Interactivity (Store Locator Map Toggle) ---
    const branchCards = document.querySelectorAll('.branch-card');
    const locatorIframe = document.querySelector('.locator-map iframe');

    if (branchCards && locatorIframe) {
        branchCards.forEach(card => {
            card.addEventListener('click', () => {
                // Remove active class from all
                branchCards.forEach(c => c.classList.remove('active'));
                
                // Add active to current
                card.classList.add('active');
                
                // Update map src
                const mapUrl = card.getAttribute('data-map-url');
                if (mapUrl) {
                    locatorIframe.src = mapUrl;
                }
            });
        });
    }

    // --- Ambience Gallery Filter & Lightbox ---
    function initializeGallery() {
        const filterBtns = document.querySelectorAll('.gallery-filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');
        const lightbox = document.getElementById('lightbox-modal');
        const lightboxMediaContainer = document.getElementById('lightbox-media-container');
        const lightboxTitle = document.getElementById('lightbox-title');
        const lightboxClose = document.getElementById('lightbox-close');
        const lightboxPrev = document.getElementById('lightbox-prev');
        const lightboxNext = document.getElementById('lightbox-next');

        if (!galleryItems.length || !lightbox) return;

        // 1. Filtering Logic
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });

        // 2. Lightbox Logic
        let activeItems = [];
        let currentIndex = -1;

        function updateActiveItems() {
            activeItems = Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));
        }

        function showMedia(index) {
            if (index < 0 || index >= activeItems.length) return;
            currentIndex = index;
            const item = activeItems[currentIndex];
            const src = item.getAttribute('data-src');
            const title = item.getAttribute('data-title') || '';
            const isVideo = item.classList.contains('video');

            lightboxMediaContainer.innerHTML = '';
            lightboxTitle.textContent = title;

            if (isVideo) {
                if (src.includes('instagram.com')) {
                    const iframe = document.createElement('iframe');
                    let embedUrl = src;
                    if (!embedUrl.endsWith('/')) {
                        embedUrl += '/';
                    }
                    if (!embedUrl.includes('/embed')) {
                        embedUrl += 'embed/';
                    }
                    iframe.src = embedUrl;
                    iframe.style.width = '450px';
                    iframe.style.height = '500px';
                    iframe.style.border = 'none';
                    iframe.style.maxWidth = '100%';
                    iframe.style.borderRadius = '8px';
                    iframe.setAttribute('allowtransparency', 'true');
                    lightboxMediaContainer.appendChild(iframe);
                } else {
                    const video = document.createElement('video');
                    video.src = src;
                    video.controls = true;
                    video.autoplay = true;
                    video.loop = true;
                    video.style.width = '100%';
                    video.style.maxHeight = '70vh';
                    lightboxMediaContainer.appendChild(video);
                }
            } else {
                const img = document.createElement('img');
                img.src = src;
                img.alt = title;
                img.style.maxWidth = '100%';
                img.style.maxHeight = '70vh';
                lightboxMediaContainer.appendChild(img);
            }
        }

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                updateActiveItems();
                const index = activeItems.indexOf(item);
                if (index !== -1) {
                    showMedia(index);
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        function closeLightbox() {
            lightbox.classList.remove('active');
            lightboxMediaContainer.innerHTML = '';
            document.body.style.overflow = '';
        }

        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        if (lightboxPrev) {
            lightboxPrev.addEventListener('click', (e) => {
                e.stopPropagation();
                updateActiveItems();
                let prevIdx = currentIndex - 1;
                if (prevIdx < 0) prevIdx = activeItems.length - 1;
                showMedia(prevIdx);
            });
        }

        if (lightboxNext) {
            lightboxNext.addEventListener('click', (e) => {
                e.stopPropagation();
                updateActiveItems();
                let nextIdx = (currentIndex + 1) % activeItems.length;
                showMedia(nextIdx);
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                if (lightboxPrev) lightboxPrev.click();
            } else if (e.key === 'ArrowRight') {
                if (lightboxNext) lightboxNext.click();
            }
        });
    }

    initializeGallery();
});

// New clean implementation for featured category cards and modal
function initializeFeaturedCategoriesNew() {
    const gridContainer = document.getElementById('featured-delights-grid');
    if (!gridContainer) return;
    if (typeof D3DB === 'undefined') return;

    const featured = [
        { title: 'Drink', img: 'images/drink.png', category: 'Beverages' },
        { title: 'Pizza', img: 'images/pizza.png', category: 'Pasta & Pizza' },
        { title: 'Sandwich', img: 'images/sandwich.png', category: 'Sandwiches' },
        { title: 'Biryani', img: 'images/biryani.png', category: 'Rice & Biryani' }
    ];

    gridContainer.innerHTML = '';
    featured.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'grid-card';
        btn.setAttribute('data-category', item.category);
        btn.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <div class="card-overlay"><h3>${item.title}</h3></div>
        `;
        gridContainer.appendChild(btn);
    });

    // Click handler to open modal with category items
    const cards = gridContainer.querySelectorAll('.grid-card');
    cards.forEach(cardEl => {
        cardEl.addEventListener('click', () => {
            const titleEl = cardEl.querySelector('h3');
            const categoryName = cardEl.getAttribute('data-category');
            const modal = document.getElementById('category-modal');
            const modalTitle = document.getElementById('modal-title');
            const modalGrid = document.getElementById('modal-menu-grid');
            if (modal && modalTitle && modalGrid) {
                modalTitle.textContent = titleEl ? titleEl.textContent.trim() : categoryName;
                const menuCategories = D3DB.getMenuByCategories();
                const catData = menuCategories.find(c => c.category.toLowerCase() === categoryName.toLowerCase());
                const items = catData ? catData.items : [];
                modalGrid.innerHTML = '';
                items.forEach(it => {
                    const div = document.createElement('div');
                    div.className = 'menu-item';
                    const icon = it.type === 'veg' ? '<span class="veg-icon"></span>' : '<span class="non-veg-icon"></span>';
                    div.innerHTML = `
                        <div class="menu-item-header">
                            <h3>${icon} ${it.name}</h3>
                            <span class="price">${it.price}</span>
                        </div>
                        <p>${it.description}</p>
                        <div class="menu-item-action-wrapper" style="margin-top: 15px; display: flex; justify-content: flex-end;">
                            <button class="add-to-cart-btn" data-id="${it.id}">Add to Cart</button>
                        </div>
                    `;
                    modalGrid.appendChild(div);
                });

                // Add event listeners to "Add to Cart" buttons inside modal
                modalGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const itemId = e.target.getAttribute('data-id');
                        window.addItemToCart(itemId);
                    });
                });

                modal.classList.add('active');
            }
            // Sync main menu category buttons
            const menuBtn = document.querySelectorAll('#menu-categories .category-btn');
            menuBtn.forEach(b => {
                if (b.textContent.trim().toLowerCase() === categoryName.toLowerCase()) {
                    b.click();
                }
            });
        });
    });

    // Modal close button
    const closeBtn = document.getElementById('modal-close');
    const modal = document.getElementById('category-modal');
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
}
