// Screen Navigation System
class ScreenNavigator {
    constructor() {
        this.screens = {
            'splash': 'screen-splash',
            'onboarding-1': 'screen-onboarding-1',
            'onboarding-2': 'screen-onboarding-2',
            'onboarding-3': 'screen-onboarding-3',
            'signup': 'screen-signup',
            'login': 'screen-login',
            'forgot-password': 'screen-forgot-password',
            'reset-password': 'screen-reset-password',
            'home': 'screen-home',
            'product-details': 'screen-product-details',
            'cart': 'screen-cart',
            'payment': 'screen-payment',
            'orders': 'screen-orders',
            'settings': 'screen-settings',
            'success': 'screen-success'
        };
        this.currentScreen = 'splash';
        this.init();
    }

    init() {
        console.log('ScreenNavigator initialized');
        
        // Setup demo button navigation FIRST
        this.setupDemoButtons();
        
        // Then setup other event listeners
        this.setupEventListeners();
        
        // Show initial screen
        this.showScreen('splash');
    }

    setupDemoButtons() {
        console.log('Setting up demo buttons...');
        const demoBtns = document.querySelectorAll('.demo-btn');
        console.log('Found demo buttons:', demoBtns.length);
        
        demoBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const screenName = btn.dataset.screen;
                console.log('Demo button clicked:', screenName);
                this.showScreen(screenName);
            });
        });
    }

    setupEventListeners() {
        // Skip buttons
        document.querySelectorAll('.skip-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showScreen('signup');
            });
        });

        // Cancel buttons
        document.querySelectorAll('.cancel-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showScreen('login');
            });
        });

        // Onboarding carousel dots
        this.setupCarouselDots();

        // Form submissions
        this.setupFormHandlers();

        // Navigation buttons
        this.setupNavigation();

        // Cart and other interactive elements
        this.setupInteractiveElements();
    }

    setupCarouselDots() {
        const dots = document.querySelectorAll('.carousel-dots .dot');
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                dots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
            });
        });
    }

    setupFormHandlers() {
        // Signup form
        const signupForm = document.querySelector('#screen-signup .auth-form');
        if (signupForm) {
            signupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.showScreen('home');
            });
        }

        // Login form
        const loginForm = document.querySelector('#screen-login .auth-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.showScreen('home');
            });
        }

        // Forgot password form
        const forgotForm = document.querySelector('#screen-forgot-password .auth-form');
        if (forgotForm) {
            forgotForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.showScreen('reset-password');
            });
        }

        // Reset password form
        const resetForm = document.querySelector('#screen-reset-password .auth-form');
        if (resetForm) {
            resetForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.showScreen('home');
            });
        }

        // Payment form
        const paymentForm = document.querySelector('#screen-payment');
        if (paymentForm) {
            const paymentBtns = paymentForm.querySelectorAll('.button-group .primary-btn');
            paymentBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showScreen('success');
                });
            });
        }

        // Success screen button
        const successBtn = document.querySelector('#screen-success .primary-btn');
        if (successBtn) {
            successBtn.addEventListener('click', () => {
                this.showScreen('home');
            });
        }
    }

    setupNavigation() {
        // Login link from onboarding
        document.querySelectorAll('.login-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.showScreen('login');
            });
        });

        // Create account button in onboarding
        document.querySelectorAll('.onboarding-container .primary-btn').forEach((btn, idx) => {
            if (idx === 0) { // First set of buttons
                btn.addEventListener('click', () => {
                    this.showScreen('signup');
                });
            }
        });

        // Back button
        document.querySelectorAll('.back-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.goBack();
            });
        });

        // Bottom nav
        const homeNavBtn = document.querySelector('.bottom-nav .nav-item.active');
        if (homeNavBtn) {
            homeNavBtn.addEventListener('click', () => {
                this.showScreen('home');
            });
        }

        // Search button
        const searchBtn = document.querySelector('.bottom-nav .search-btn');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                this.showScreen('home');
            });
        }

        // Cart button
        const cartBtn = document.querySelector('.bottom-nav .nav-item:last-child');
        if (cartBtn) {
            cartBtn.addEventListener('click', () => {
                this.showScreen('cart');
            });
        }

        // Product card click
        document.querySelectorAll('.restaurant-card').forEach(card => {
            card.addEventListener('click', () => {
                this.showScreen('product-details');
            });
        });

        // Add to cart button
        const addToCartBtn = document.querySelector('#screen-product-details .secondary-btn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showScreen('cart');
            });
        }

        // Process to payment from product details
        const processBtnPD = document.querySelector('#screen-product-details .button-group .primary-btn');
        if (processBtnPD) {
            processBtnPD.addEventListener('click', (e) => {
                e.preventDefault();
                this.showScreen('payment');
            });
        }

        // Process to payment from cart
        const processBtnCart = document.querySelector('#screen-cart .primary-btn');
        if (processBtnCart) {
            processBtnCart.addEventListener('click', (e) => {
                e.preventDefault();
                this.showScreen('payment');
            });
        }

        // Menu button
        document.querySelectorAll('.menu-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.showScreen('orders');
            });
        });

        // Orders - My profile link
        const profileLink = document.querySelector('.sidebar-nav a:first-child');
        if (profileLink) {
            profileLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.showScreen('settings');
            });
        }

        // Orders - close button
        const orderCloseBtn = document.querySelector('.orders-container .close-btn');
        if (orderCloseBtn) {
            orderCloseBtn.addEventListener('click', () => {
                this.showScreen('home');
            });
        }

        // Orders - home button
        const orderHomeBtn = document.querySelector('.home-btn');
        if (orderHomeBtn) {
            orderHomeBtn.addEventListener('click', () => {
                this.showScreen('home');
            });
        }

        // Settings - back button
        const settingsBackBtn = document.querySelector('#screen-settings .back-btn');
        if (settingsBackBtn) {
            settingsBackBtn.addEventListener('click', () => {
                this.showScreen('orders');
            });
        }
    }

    setupInteractiveElements() {
        // Quantity selectors
        this.setupQuantitySelectors();

        // Category selection
        this.setupCategorySelection();

        // Keypad for reset password
        this.setupKeypad();

        // Cart quantity controls
        this.setupCartQuantityControls();
    }

    setupQuantitySelectors() {
        document.querySelectorAll('.quantity-selector').forEach(selector => {
            const minusBtn = selector.querySelector('.qty-btn:first-child');
            const plusBtn = selector.querySelector('.qty-btn:last-child');
            const display = selector.querySelector('.qty-display');

            let quantity = parseInt(display.textContent);

            minusBtn.addEventListener('click', () => {
                if (quantity > 1) {
                    quantity--;
                    display.textContent = quantity;
                }
            });

            plusBtn.addEventListener('click', () => {
                quantity++;
                display.textContent = quantity;
            });
        });
    }

    setupCategorySelection() {
        document.querySelectorAll('.category-item').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.category-item').forEach(i => {
                    i.classList.remove('active');
                });
                item.classList.add('active');
            });
        });
    }

    setupKeypad() {
        const keys = document.querySelectorAll('.key:not(.empty)');
        const codeInputs = document.querySelectorAll('.code-input');
        let currentIndex = 0;

        keys.forEach(key => {
            key.addEventListener('click', () => {
                if (key.classList.contains('delete')) {
                    if (currentIndex > 0) {
                        currentIndex--;
                        codeInputs[currentIndex].textContent = '';
                        codeInputs[currentIndex].classList.remove('filled');
                    }
                } else {
                    if (currentIndex < codeInputs.length) {
                        const keyText = key.textContent.split('\n')[0].trim();
                        codeInputs[currentIndex].textContent = keyText;
                        codeInputs[currentIndex].classList.add('filled');
                        currentIndex++;
                    }
                }
            });
        });
    }

    setupCartQuantityControls() {
        document.querySelectorAll('.cart-item').forEach(item => {
            const minusBtn = item.querySelector('.qty-btn:first-child');
            const plusBtn = item.querySelector('.qty-btn:last-child');
            const display = item.querySelector('.item-controls span:nth-child(2)');

            if (minusBtn && display) {
                let quantity = parseInt(display.textContent);

                minusBtn.addEventListener('click', () => {
                    if (quantity > 1) {
                        quantity--;
                        display.textContent = quantity;
                    }
                });

                plusBtn.addEventListener('click', () => {
                    quantity++;
                    display.textContent = quantity;
                });
            }
        });

        // Delete button
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.closest('.cart-item').remove();
            });
        });
    }

    showScreen(screenName) {
        console.log('Showing screen:', screenName);
        const screenId = this.screens[screenName];
        if (!screenId) {
            console.warn(`Screen not found: ${screenName}`);
            return;
        }

        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show the new screen
        const newScreen = document.getElementById(screenId);
        if (newScreen) {
            console.log('Setting screen active:', screenId);
            newScreen.classList.add('active');
            this.currentScreen = screenName;
            this.scrollToTop();
            
            // Update active demo button
            document.querySelectorAll('.demo-btn').forEach(btn => {
                if (btn.dataset.screen === screenName) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        } else {
            console.warn('Screen element not found:', screenId);
        }
    }

    goBack() {
        const previousScreens = {
            'onboarding-1': 'splash',
            'onboarding-2': 'onboarding-1',
            'onboarding-3': 'onboarding-2',
            'product-details': 'home',
            'cart': 'home',
            'payment': 'cart',
            'orders': 'home',
            'settings': 'orders',
            'success': 'home'
        };

        const previousScreen = previousScreens[this.currentScreen];
        if (previousScreen) {
            this.showScreen(previousScreen);
        }
    }

    scrollToTop() {
        const currentScreen = document.querySelector('.screen.active');
        if (currentScreen) {
            currentScreen.scrollTop = 0;
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Initializing...');
    const navigator = new ScreenNavigator();
    
    // Expose navigator globally for debugging
    window.screenNavigator = navigator;
    console.log('ScreenNavigator ready. Use window.screenNavigator to debug.');
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (window.screenNavigator) {
        if (e.key === 'Escape') {
            window.screenNavigator.goBack();
        }
        // Arrow keys for screen navigation (optional)
        if (e.key === 'ArrowRight') {
            const current = window.screenNavigator.currentScreen;
            if (current === 'onboarding-1') {
                window.screenNavigator.showScreen('onboarding-2');
            }
        }
        if (e.key === 'ArrowLeft') {
            window.screenNavigator.goBack();
        }
    }
});
