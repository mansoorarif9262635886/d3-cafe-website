// Cafe D3 - Client-Side Mock Database Layer (localStorage)
const D3DB = {
    // Keys used in localStorage (Versioned to force reset with new names/locations)
    KEYS: {
        MENU: 'd3_menu_items_v4',
        ORDERS: 'd3_orders_v4',
        FEEDBACK: 'd3_feedback_v4',
        USERS: 'd3_users_v4',
        SESSION: 'd3_current_session_v4'
    },

    // Initialize the DB
    init() {
        // 1. Initialize Menu
        if (!localStorage.getItem(this.KEYS.MENU)) {
            const rawMenu = (typeof menuData !== 'undefined') ? menuData : [];
            let flatMenu = [];
            let idCounter = 1;

            rawMenu.forEach(catGroup => {
                catGroup.items.forEach(item => {
                    // Clean names containing Pista House
                    let cleanedName = item.name
                        .replace(/Pista House Special/g, 'D3 Special')
                        .replace(/Pista House/g, 'D3');
                    let cleanedDesc = item.description
                        .replace(/Pista House Special/g, 'D3 Special')
                        .replace(/Pista House/g, 'D3');

                    flatMenu.push({
                        id: `item_${idCounter++}`,
                        category: catGroup.category,
                        name: cleanedName,
                        price: item.price,
                        description: cleanedDesc,
                        type: item.type
                    });
                });
            });

            localStorage.setItem(this.KEYS.MENU, JSON.stringify(flatMenu));
        }

        // 2. Initialize Users
        if (!localStorage.getItem(this.KEYS.USERS)) {
            const defaultUsers = [
                { username: 'admin', password: 'admin123', name: 'Manager Admin', role: 'admin' },
                { username: 'john', password: 'john123', name: 'John Doe', role: 'customer' }
            ];
            localStorage.setItem(this.KEYS.USERS, JSON.stringify(defaultUsers));
        }

        // 3. Initialize Feedbacks
        if (!localStorage.getItem(this.KEYS.FEEDBACK)) {
            const seedFeedbacks = [
                {
                    id: 'fb_1',
                    fullName: 'Sarah Ahmed',
                    rating: '5',
                    email: 'sarah@example.com',
                    mobileNumber: '9876543210',
                    branch: 'Hajipur',
                    tags: ['Food Quality', 'Service'],
                    message: 'The D3 Special Mutton Biryani was absolutely succulent. Love the elegant ambiance and fast service!',
                    date: '2026-06-10'
                },
                {
                    id: 'fb_2',
                    fullName: 'Rahul Verma',
                    rating: '4',
                    email: 'rahul@example.com',
                    mobileNumber: '8765432109',
                    branch: 'Hajipur',
                    tags: ['Food Quality', 'Value for Money'],
                    message: 'Excellent specialty shakes! The Oreo Shake was rich and creamy. Will definitely visit again.',
                    date: '2026-06-11'
                },
                {
                    id: 'fb_3',
                    fullName: 'Ananya Reddy',
                    rating: '5',
                    email: 'ananya@example.com',
                    mobileNumber: '7654321098',
                    branch: 'Hajipur',
                    tags: ['Ambience', 'Customer Satisfaction'],
                    message: 'The Margherita Pizza has a perfect thin crust. Wonderful environment to work and have a coffee.',
                    date: '2026-06-09'
                }
            ];
            localStorage.setItem(this.KEYS.FEEDBACK, JSON.stringify(seedFeedbacks));
        }

        // 4. Initialize Orders
        if (!localStorage.getItem(this.KEYS.ORDERS)) {
            const seedOrders = [
                {
                    id: 'ORD-1001',
                    username: 'john',
                    name: 'John Doe',
                    phone: '9876543210',
                    items: [
                        { name: 'D3 Special Chicken Biryani', quantity: 1, price: '₹330.00' },
                        { name: 'Oreo Shake', quantity: 2, price: '₹235.00' }
                    ],
                    subtotal: 800,
                    status: 'Completed',
                    date: '2026-06-10 14:30',
                    branch: 'Hajipur',
                    orderType: 'Delivery',
                    address: 'Marai Road, Hajipur'
                },
                {
                    id: 'ORD-1002',
                    username: 'john',
                    name: 'John Doe',
                    phone: '9876543210',
                    items: [
                        { name: 'D3 Margherita Pizza', quantity: 1, price: '₹435.00' },
                        { name: 'Cold Coffee', quantity: 1, price: '₹220.00' }
                    ],
                    subtotal: 655,
                    status: 'Preparing',
                    date: '2026-06-11 19:45',
                    branch: 'Hajipur',
                    orderType: 'Dine-in',
                    table: 'Table 4'
                },
                {
                    id: 'ORD-1003',
                    username: 'guest',
                    name: 'Rohan Sharma',
                    phone: '9006516677',
                    items: [
                        { name: 'Golden Fried Prawns', quantity: 1, price: '₹575.00' }
                    ],
                    subtotal: 575,
                    status: 'Pending',
                    date: '2026-06-11 20:05',
                    branch: 'Hajipur',
                    orderType: 'Dine-in',
                    table: 'Table 12'
                }
            ];
            localStorage.setItem(this.KEYS.ORDERS, JSON.stringify(seedOrders));
        }
    },

    // --- MENU OPERATIONS ---
    getMenu() {
        return JSON.parse(localStorage.getItem(this.KEYS.MENU)) || [];
    },

    getMenuByCategories() {
        const menu = this.getMenu();
        const categories = {};
        menu.forEach(item => {
            if (!categories[item.category]) {
                categories[item.category] = [];
            }
            categories[item.category].push(item);
        });

        // Convert to array of { category: string, items: [] }
        return Object.keys(categories).map(catName => ({
            category: catName,
            items: categories[catName]
        }));
    },

    saveMenuItem(itemData) {
        const menu = this.getMenu();
        if (itemData.id) {
            // Edit existing
            const index = menu.findIndex(item => item.id === itemData.id);
            if (index !== -1) {
                menu[index] = { ...menu[index], ...itemData };
            }
        } else {
            // Add new
            const newId = `item_${Date.now()}`;
            const newItem = { id: newId, ...itemData };
            menu.push(newItem);
        }
        localStorage.setItem(this.KEYS.MENU, JSON.stringify(menu));
        return true;
    },

    deleteMenuItem(id) {
        let menu = this.getMenu();
        menu = menu.filter(item => item.id !== id);
        localStorage.setItem(this.KEYS.MENU, JSON.stringify(menu));
        return true;
    },

    // --- ORDER OPERATIONS ---
    getOrders() {
        return JSON.parse(localStorage.getItem(this.KEYS.ORDERS)) || [];
    },

    submitOrder(orderData) {
        const orders = this.getOrders();
        const orderId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
        const newOrder = {
            id: orderId,
            date: new Date().toISOString().replace('T', ' ').substring(0, 16),
            status: 'Pending',
            ...orderData
        };
        orders.unshift(newOrder); // Add to the top of list
        localStorage.setItem(this.KEYS.ORDERS, JSON.stringify(orders));
        return orderId;
    },

    updateOrderStatus(orderId, status) {
        const orders = this.getOrders();
        const index = orders.findIndex(o => o.id === orderId);
        if (index !== -1) {
            orders[index].status = status;
            localStorage.setItem(this.KEYS.ORDERS, JSON.stringify(orders));
            return true;
        }
        return false;
    },

    // --- FEEDBACK OPERATIONS ---
    getFeedback() {
        return JSON.parse(localStorage.getItem(this.KEYS.FEEDBACK)) || [];
    },

    submitFeedback(feedbackData) {
        const feedbacks = this.getFeedback();
        const newFeedback = {
            id: `fb_${Date.now()}`,
            date: new Date().toISOString().substring(0, 10),
            ...feedbackData
        };
        feedbacks.unshift(newFeedback);
        localStorage.setItem(this.KEYS.FEEDBACK, JSON.stringify(feedbacks));
        return true;
    },

    // --- USER / SESSION OPERATIONS ---
    getUsers() {
        return JSON.parse(localStorage.getItem(this.KEYS.USERS)) || [];
    },

    registerUser(username, password, name) {
        const users = this.getUsers();
        if (users.some(u => u.username === username.toLowerCase())) {
            return { success: false, message: 'Username already exists' };
        }
        const newUser = {
            username: username.toLowerCase(),
            password: password,
            name: name,
            role: 'customer'
        };
        users.push(newUser);
        localStorage.setItem(this.KEYS.USERS, JSON.stringify(users));
        return { success: true };
    },

    loginUser(username, password) {
        const users = this.getUsers();
        const user = users.find(u => u.username === username.toLowerCase() && u.password === password);
        if (user) {
            const session = { username: user.username, name: user.name, role: user.role };
            localStorage.setItem(this.KEYS.SESSION, JSON.stringify(session));
            return { success: true, user: session };
        }
        return { success: false, message: 'Invalid username or password' };
    },

    getCurrentUser() {
        return JSON.parse(localStorage.getItem(this.KEYS.SESSION)) || null;
    },

    logoutUser() {
        localStorage.removeItem(this.KEYS.SESSION);
        return true;
    }
};

// Auto-run initialization
D3DB.init();
