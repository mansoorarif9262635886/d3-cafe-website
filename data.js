const menuData = [
    {
        category: "Snacks",
        items: [
            { name: "Golden Fried Prawns", price: "₹575.00", description: "[8pieces] Juicy prawns coated in golden crispy batter, deep fried and served with tangy dipping sauce.", type: "non-veg" },
            { name: "Fish Chilli Dry", price: "₹390.00", description: "[8 Pieces] Tender fish cubes tossed in spicy Indo Chinese chilli sauce, bursting with bold flavours, fresh veggies and perfect wok charred aroma.", type: "non-veg" },
            { name: "Fish Munia Dry", price: "₹390.00", description: "[8 Pieces] Soft boneless fish cooked in a mildly spiced, rich, flavourful gravy with earthy herbs, offering a smooth, comforting coastal taste.", type: "non-veg" },
            { name: "Prawns Chilli Dry", price: "₹620.00", description: "[8 Pieces] Juicy prawns wok tossed in spicy chilli sauce with peppers, garlic and spring onion for a bold, flavour packed Indo Chinese delight dish.", type: "non-veg" },
            { name: "Tandoori Fish Tikka", price: "₹390.00", description: "Succulent fish cubes marinated in spiced yogurt, skewered and charcoal grilled for a smoky, juicy, flavour rich starter.", type: "non-veg" },
            { name: "Scotch Egg With Fries", price: "₹339.00", description: "[4 Slice Eggs] Crispy golden scotch eggs stuffed with flavourful spiced chicken.", type: "non-veg" },
            { name: "Pista House Special Fish Finger With Fries", price: "₹370.00", description: "Crunchy golden fish fingers served with perfectly salted fries, offering a tasty, satisfying, classic snack combo", type: "non-veg" },
            { name: "Paneer Pakoda With Chutney", price: "₹260.00", description: "[8 Pieces] Paneer pakoda is a crispy, deep fried snack with spiced paneer coated in gram flour batter, served hot with ketchup.", type: "veg" },
            { name: "Kurkure Paneer Pakoda", price: "₹270.00", description: "[8 Pieces] Paneer pakoda is a crispy, deep fried snack with spiced paneer coated in gram flour batter, served hot.", type: "veg" },
            { name: "Veg Spring Roll", price: "₹210.00", description: "Crispy, golden fried appetizer filled with spiced vegetables, served with tangy hot garlic dipping sauce.", type: "veg" },
            { name: "Chicken Spring Roll", price: "₹221.00", description: "Crispy, golden fried snack filled with spiced chicken and veggies, served with tangy hot garlic sauce.", type: "non-veg" }
        ]
    },
    {
        category: "Soups",
        items: [
            { name: "Veg Sweet Corn Soup", price: "₹150.00", description: "Light and comforting soup made with sweet corn, mixed vegetables and mild seasonings.", type: "veg" },
            { name: "Lemon Coriander Soup", price: "₹135.00", description: "A light, clear soup with fresh lemon flavour and aromatic coriander.", type: "veg" },
            { name: "Veg Hot And Sour Soup", price: "₹150.00", description: "Tangy and mildly spicy soup loaded with fresh vegetables", type: "veg" },
            { name: "Creme Of Tomato Soup", price: "₹150.00", description: "Smooth and creamy tomato soup with a rich, comforting taste.", type: "veg" },
            { name: "Veg Manchow Soup", price: "₹150.00", description: "Spicy and flavourful vegetable soup topped with crispy fried noodles.", type: "veg" },
            { name: "Chicken Sweet Corn Soup", price: "₹170.00", description: "Light and flavorful soup with tender chicken, sweet corn", type: "non-veg" },
            { name: "Chicken Hot And Sour Soup", price: "₹170.00", description: "Spicy and tangy soup with tender chicken and fresh vegetables.", type: "non-veg" },
            { name: "Cream Of Chicken Soup", price: "₹190.00", description: "Soup made with tender chicken.", type: "non-veg" },
            { name: "Chicken Manchow Soup", price: "₹170.00", description: "Tender chicken, vegetables and crispy fried noodles.", type: "non-veg" }
        ]
    },
    {
        category: "Starters - Veg",
        items: [
            { name: "Paneer Chilli", price: "₹300.00", description: "(8 PIECES) Spicy, stir-fried paneer cubes with bell peppers, onions, and a tangy chili sauce.", type: "veg" },
            { name: "Veg Manchurian", price: "₹235.00", description: "(8PIECES) Crispy vegetable balls in a tangy, spicy sauce with soy sauce, garlic, and green onions.", type: "veg" },
            { name: "Paneer 65", price: "₹300.00", description: "Crispy fried paneer cubes tossed in spicy South Indian style masala.", type: "veg" },
            { name: "Hot Garlic Paneer Chilli Dry", price: "₹310.00", description: "A fiery combination of garlic sauce, chilli and paneer.", type: "veg" },
            { name: "Schezwan Paneer Chilli Dry", price: "₹310.00", description: "Schezwan paneer with a fiery spice coating.", type: "veg" },
            { name: "Mushroom Chilli", price: "₹290.00", description: "Spicy Indo Chinese dish with crispy mushrooms, tossed in tangy sauce.", type: "veg" },
            { name: "Honey Chilli Potato", price: "₹230.00", description: "Succulent potato dish infused with spicy and sweet flavors.", type: "veg" },
            { name: "Chilli Potato", price: "₹225.00", description: "Crispy, spicy fried potatoes tossed in tangy chilli sauce.", type: "veg" },
            { name: "Crispy American Corn", price: "₹260.00", description: "Crunchy, golden fried sweet corn tossed with spices and herbs.", type: "veg" },
            { name: "Baby Corn Chilli", price: "₹285.00", description: "Crispy baby corn in a spicy, tangy sauce.", type: "veg" },
            { name: "Hara Bhara Kebab", price: "₹270.00", description: "Succulent mix of spinach, mashed potato and aromatic spices.", type: "veg" },
            { name: "Tandoori Aloo Bharwa", price: "₹270.00", description: "Classic Indian dish made with potatoes stuffed with spices.", type: "veg" },
            { name: "Dahi Kebab", price: "₹290.00", description: "Succulent vegetarian kebab, flavored with rich yogurt and spices.", type: "veg" },
            { name: "Paneer Tikka", price: "₹305.00", description: "Paneer marinated in spices and grilled to perfection.", type: "veg" },
            { name: "Paneer Malai Tikka", price: "₹315.00", description: "Soft paneer cubes marinated in yogurt, spices, and herbs.", type: "veg" },
            { name: "Mushroom Stuff Tikka", price: "₹305.00", description: "Juicy mushrooms stuffed with spiced filling and grilled.", type: "veg" },
            { name: "Tandoori Soya Chaap", price: "₹291.00", description: "Marinated soya chaap grilled in tandoor spices.", type: "veg" },
            { name: "Malai Soya Chaap", price: "₹305.00", description: "Creamy, mildly spiced soya chaap grilled till soft.", type: "veg" }
        ]
    },
    {
        category: "Starters - Non Veg",
        items: [
            { name: "Chicken 65", price: "₹310.00", description: "Spicy, crispy South Indian dish with deep fried chicken.", type: "non-veg" },
            { name: "Chicken Chilli", price: "₹341.00", description: "Sweet, spicy and crispy appetizer.", type: "non-veg" },
            { name: "Oyster Chicken Chili Dry", price: "₹351.00", description: "Tender chicken tossed in oyster sauce and chilli flavors.", type: "non-veg" },
            { name: "Schezwan Chicken Chilli Dry", price: "₹351.00", description: "Crispy chicken tossed in fiery schezwan sauce.", type: "non-veg" },
            { name: "Hot Garlic Chicken Chill Dry", price: "₹350.00", description: "Crispy chicken tossed in fiery garlic sauce.", type: "non-veg" },
            { name: "Peri Peri Chicken Chilli Dry", price: "₹351.00", description: "Crispy chicken tossed in zesty peri peri sauce.", type: "non-veg" },
            { name: "Chicken Manchurian", price: "₹340.00", description: "Spicy, tangy Indo Chinese dish with crispy chicken.", type: "non-veg" },
            { name: "Pista House Special Chicken Leg Stuffed Kebab", price: "₹439.00", description: "[4 Pieces] Tender chicken leg stuffed with flavorful masala.", type: "non-veg" },
            { name: "Chicken Reshmi Kebab", price: "₹330.00", description: "Soft and creamy chicken kebabs marinated in rich, mild spices.", type: "non-veg" },
            { name: "Chicken Boti Kebab", price: "₹330.00", description: "Juicy chicken cubes marinated in spices and grilled.", type: "non-veg" },
            { name: "Chicken Seekh Kebab", price: "₹330.00", description: "Chicken seasoned with aromatic spices and grilled.", type: "non-veg" },
            { name: "Chicken Lasooni Kebab", price: "₹390.00", description: "Chunks of chicken, glazed in yogurt and garlic sauce.", type: "non-veg" },
            { name: "Chicken Kalimirch Kebab", price: "₹330.00", description: "Chicken tikka style dish made with black pepper.", type: "non-veg" },
            { name: "Chicken Tandoori", price: "₹305.00", description: "Chicken marinated in yogurt and grilled in a tandoor.", type: "non-veg" },
            { name: "Chicken Afgani", price: "₹315.00", description: "Creamy, mildly spiced chicken cooked with yogurt, cream.", type: "non-veg" },
            { name: "Tangdi Kebab", price: "₹221.00", description: "Juicy chicken drumsticks marinated in spices and grilled.", type: "non-veg" },
            { name: "Chicken Lollipop", price: "₹320.00", description: "(6PIECES) Juicy chicken wings coated in a crispy, spicy batter.", type: "non-veg" },
            { name: "Drums Of Heaven", price: "₹320.00", description: "Crispy fried chicken lollipops tossed in spicy sauce.", type: "non-veg" },
            { name: "Mutton Seekh Kebab", price: "₹385.00", description: "Juicy mutton grilled with aromatic spices.", type: "non-veg" }
        ]
    },
    {
        category: "Momos",
        items: [
            { name: "Spicy Mushroom Momos", price: "₹159.00", description: "[6 Pieces] Spicy and tangy mushroom momos served with peri peri and peanut sauce.", type: "veg" },
            { name: "Cottage Cheese Momos", price: "₹159.00", description: "[6 Pieces] Cottage cheese momos served with peri peri and peanut chutney.", type: "veg" },
            { name: "Classic Chicken Momos", price: "₹170.00", description: "[6 Pieces] Juicy, spiced dumpling, steamed or fried.", type: "non-veg" },
            { name: "Crispy Panko Paneer Fried Momos", price: "₹195.00", description: "[6 Pieces] Crispy cottage cheese momos.", type: "veg" },
            { name: "Crispy Panko Chicken Fried Momos", price: "₹195.00", description: "[6 Pieces] Crispy panko fry momos filled with chicken.", type: "non-veg" },
            { name: "Tandoori Momos", price: "₹190.00", description: "[6 Pieces] Smoky, spiced dumplings marinated in yogurt and tandoori spices.", type: "non-veg" }
        ]
    },
    {
        category: "Main Course - Veg",
        items: [
            { name: "Paneer Tikka Butter Masala", price: "₹350.00", description: "Rich, creamy curry with grilled paneer, buttery tomato gravy.", type: "veg" },
            { name: "Paneer Tikka Masala", price: "₹340.00", description: "Spicy, flavorful curry with grilled paneer.", type: "veg" },
            { name: "Paneer Butter Masala", price: "₹295.00", description: "Soft paneer cubes in a creamy, buttery tomato sauce.", type: "veg" },
            { name: "Paneer Handi", price: "₹299.00", description: "(8 pieces) Tender paneer cubes simmered in a rich, creamy tomato gravy.", type: "veg" },
            { name: "Paneer Kadhai", price: "₹299.00", description: "(8 PIECES) Paneer cubes cooked in a spicy, aromatic gravy.", type: "veg" },
            { name: "Paneer Kolhapuri", price: "₹291.00", description: "Paneer cooked in a rich, fiery Kolhapuri masala gravy.", type: "veg" },
            { name: "Paneer Changezi", price: "₹291.00", description: "Rich, Mughlai dish with paneer cooked in a creamy tomato gravy.", type: "veg" },
            { name: "Paneer Pasanda", price: "₹310.00", description: "Stuffed paneer in a creamy, flavorful, nutty gravy.", type: "veg" },
            { name: "Paneer Do Pyaza", price: "₹270.00", description: "(8 pieces) Paneer cubes cooked with a generous amount of onions.", type: "veg" },
            { name: "Matar Paneer", price: "₹275.00", description: "Popular veg dish made with fresh green peas and paneer.", type: "veg" },
            { name: "Paneer Tawa Masala", price: "₹291.00", description: "Tawa with rich, spiced tomato onion gravy.", type: "veg" },
            { name: "Malai Kofta", price: "₹305.00", description: "Rich, creamy dish with soft paneer potato dumplings.", type: "veg" },
            { name: "Jeera Aloo", price: "₹181.00", description: "Flavorful potatoes mixed with cumin seeds and mild spices.", type: "veg" },
            { name: "Soya Chaap Masala", price: "₹270.00", description: "Soya chaap cooked in a rich and flavorful spiced gravy.", type: "veg" },
            { name: "Mix Veg Jalfrezi", price: "₹255.00", description: "Crisp mixed vegetables in tangy and spicy tomato gravy.", type: "veg" },
            { name: "Mix Veg Kolhapuri", price: "₹255.00", description: "Kolhapuri style spicy gravy.", type: "veg" },
            { name: "Mushroom Dehati", price: "₹305.00", description: "Mushrooms cooked in a rich tomato-based gravy.", type: "veg" },
            { name: "Mushroom Kadhai", price: "₹292.00", description: "Mushrooms cooked in a spicy, tangy kadhai style masala.", type: "veg" },
            { name: "Mushroom Do Pyaza", price: "₹281.00", description: "Mushrooms cooked with onions and aromatic spices.", type: "veg" },
            { name: "Dal Tadka", price: "₹181.00", description: "Cooked with ghee, garlic and aromatic spices.", type: "veg" },
            { name: "Dal Fry", price: "₹160.00", description: "Onions, tomatoes and spices for a rich flavor.", type: "veg" },
            { name: "Dal Makhani", price: "₹220.00", description: "Butter and mild spices for a rich taste.", type: "veg" },
            { name: "Paneer Diwani Handi", price: "₹310.00", description: "Paneer cooked in a creamy, spiced gravy with mixed vegetables.", type: "veg" },
            { name: "Makai Matar Mushroom", price: "₹285.00", description: "Flavorful curry with corn, peas and mushrooms.", type: "veg" },
            { name: "Mix Veg", price: "₹260.00", description: "Assorted vegetables cooked in a spiced, aromatic gravy.", type: "veg" },
            { name: "Aloo Dum Bhojpuri", price: "₹255.00", description: "Baby potatoes cooked in a rich, aromatic Bhojpuri style gravy.", type: "veg" }
        ]
    },
    {
        category: "Main Course - Non Veg",
        items: [
            { name: "Pista House Special Chicken Curry", price: "₹429.00", description: "[Chef's Special]", type: "non-veg" },
            { name: "Chicken Tikka Butter Masala", price: "₹410.00", description: "Grilled chicken boneless tikka in a buttery, spiced tomato gravy.", type: "non-veg" },
            { name: "Chicken Tikka Masala", price: "₹400.00", description: "Tender chicken pieces in rich masala.", type: "non-veg" },
            { name: "Chicken Butter Masala", price: "₹391.00", description: "Tender chicken with butter in a creamy sauce.", type: "non-veg" },
            { name: "Chicken Dehati", price: "₹381.00", description: "(4 pieces) Rustic dish with tender chicken pieces simmered in spices.", type: "non-veg" },
            { name: "Chicken Rara", price: "₹420.00", description: "Chicken pieces cooked in a rich, spicy and flavorful gravy.", type: "non-veg" },
            { name: "Murg Makhanwala", price: "₹391.00", description: "Tender pieces of chicken cooked with cashew nut gravy.", type: "non-veg" },
            { name: "Chicken Kadhai", price: "₹379.00", description: "Cooked with bell peppers and spices in a tangy kadhai masala.", type: "non-veg" },
            { name: "Chicken Handi", price: "₹379.00", description: "Traditional handi with rich, creamy and spiced gravy.", type: "non-veg" },
            { name: "Chicken Masala", price: "₹379.00", description: "Chicken curry cooked with aromatic spices.", type: "non-veg" },
            { name: "Chicken Do Pyaza", price: "₹369.00", description: "Chicken cooked with onions and aromatic spices.", type: "non-veg" },
            { name: "Mutton Rogan Josh", price: "₹489.00", description: "Mutton Rogan Josh recipe is a delicacy with intense flavours.", type: "non-veg" },
            { name: "Mutton Handi", price: "₹476.00", description: "Mutton slow cooked in a traditional handi.", type: "non-veg" },
            { name: "Mutton Bhuna", price: "₹461.00", description: "Mutton pieces cooked on slow heat with onions and spices.", type: "non-veg" },
            { name: "Pista House Special Mutton Curry", price: "₹671.00", description: "[Chef's Special]", type: "non-veg" },
            { name: "Egg Curry", price: "₹295.00", description: "[4 Eggs] Flavorful eggs in a creamy, aromatic gravy.", type: "non-veg" },
            { name: "Omelette Curry", price: "₹240.00", description: "Soft omelettes in flavorful curry.", type: "non-veg" }
        ]
    },
    {
        category: "Breads",
        items: [
            { name: "Aloo Paratha", price: "₹60.00", description: "Stuffed Indian flatbread with spiced mashed potatoes.", type: "veg" },
            { name: "Paneer Paratha", price: "₹75.00", description: "Stuffed Indian flatbread with spiced paneer.", type: "veg" },
            { name: "Naan", price: "₹42.00", description: "Classic soft Indian flatbread.", type: "veg" },
            { name: "Butter Naan", price: "₹49.00", description: "Soft, fluffy naan bread brushed with melted butter.", type: "veg" },
            { name: "Stuff Naan", price: "₹78.00", description: "Stuffed fluffy naan.", type: "veg" },
            { name: "Garlic Naan", price: "₹71.00", description: "Naan topped with garlic and coriander.", type: "veg" },
            { name: "Lachha Paratha", price: "₹55.00", description: "Flaky, layered Indian flatbread, crispy outside, soft inside.", type: "veg" },
            { name: "Tandoori Roti", price: "₹25.00", description: "Traditional tandoor baked roti.", type: "veg" },
            { name: "Butter Tandoori Roti", price: "₹30.00", description: "Soft, crispy flatbread, infused with butter.", type: "veg" },
            { name: "Kashmiri Naan", price: "₹105.00", description: "Soft, sweet flatbread stuffed with nuts, dried fruits.", type: "veg" },
            { name: "Kulcha", price: "₹55.00", description: "Soft Indian flatbread baked until golden and fluffy.", type: "veg" },
            { name: "Tawa Roti Chapati", price: "₹21.00", description: "Homestyle flatbread cooked on tawa.", type: "veg" },
            { name: "Ghee Chapati", price: "₹26.00", description: "Homestyle flatbread with rich ghee.", type: "veg" }
        ]
    },
    {
        category: "Rice & Biryani",
        items: [
            { name: "Pista House Special Mutton Biryani", price: "₹390.00", description: "Spiced rice dish with tender mutton, herbs served with mix raita.", type: "non-veg" },
            { name: "Pista House Special Chicken Biryani", price: "₹330.00", description: "Spiced rice dish with tender chicken, served With Mix Raita.", type: "non-veg" },
            { name: "Pista House Special Chicken Tikka Biryani", price: "₹340.00", description: "Spiced grilled boneless chicken with aromatic basmati rice.", type: "non-veg" },
            { name: "Pista House Special Veg Biryani", price: "₹231.00", description: "Fragrant, spiced rice dish loaded with fresh vegetables.", type: "veg" },
            { name: "Pista House Special Paneer Biryani", price: "₹285.00", description: "Fragrant basmati rice, flavorful spices, and tender paneer.", type: "veg" },
            { name: "Egg Biryani", price: "₹270.00", description: "Spiced rice dish with eggs.", type: "non-veg" },
            { name: "Ghee Steamed Rice", price: "₹140.00", description: "Fragrant, fluffy rice infused with rich ghee.", type: "veg" },
            { name: "Jeera Rice", price: "₹145.00", description: "Fragrant basmati rice tempered with cumin seeds.", type: "veg" },
            { name: "Green Peas Pulao", price: "₹160.00", description: "Aromatic basmati rice cooked with peas.", type: "veg" },
            { name: "Veg Pulao", price: "₹190.00", description: "Aromatic basmati rice with mixed vegetables.", type: "veg" },
            { name: "Kashmiri Pulao", price: "₹200.00", description: "Fragrant rice dish with saffron, nuts, dried fruits.", type: "veg" }
        ]
    },
    {
        category: "Noodles & Fried Rice",
        items: [
            { name: "Veg Hakka Noodles", price: "₹240.00", description: "Stir-fried with colorful mixed vegetables, soy sauce.", type: "veg" },
            { name: "Schezwan Hakka Noodles", price: "₹245.00", description: "Spicy noodles tossed with schezwan sauce.", type: "veg" },
            { name: "Chicken Hakka Noodles", price: "₹259.00", description: "Noodles tossed with chicken and vegetables.", type: "non-veg" },
            { name: "Veg Fried Rice", price: "₹240.00", description: "Wok tossed rice with mixed veggies.", type: "veg" },
            { name: "Schezwan Fried Rice", price: "₹245.00", description: "Spicy fried rice tossed in schezwan sauce.", type: "veg" },
            { name: "Chicken Fried Rice", price: "₹259.00", description: "Fried rice with tender chicken chunks.", type: "non-veg" }
        ]
    },
    {
        category: "Continental Food",
        items: [
            { name: "Chicken Popcorn", price: "₹290.00", description: "Tender chicken bites, coated in a crispy, seasoned batter.", type: "non-veg" },
            { name: "Korean Fried Chicken", price: "₹360.00", description: "[6 Pieces] Crispy, double fried chicken wings coated in a sweet, spicy sauce.", type: "non-veg" },
            { name: "Herb Crusted Legs", price: "₹380.00", description: "Tender leg of meat coated in a flavorful mixture of fresh herbs.", type: "non-veg" },
            { name: "Barbecue Chicken Wings", price: "₹430.00", description: "Juicy chicken wings grilled and slathered in barbecue sauce.", type: "non-veg" },
            { name: "Peri Peri Chicken Wings", price: "₹430.00", description: "Spicy peri peri chicken wings marinated in zesty blend.", type: "non-veg" },
            { name: "American Fried Chicken", price: "₹225.00", description: "Crispy, seasoned coating with juicy tender chicken inside.", type: "non-veg" },
            { name: "Cheese Corn Croquettes With Chipotle Sauce", price: "₹360.00", description: "Crispy golden brown bites filled with creamy cheese and tender corn.", type: "veg" },
            { name: "Crispy Potato Wedges", price: "₹185.00", description: "Golden, crunchy exterior with soft fluffy interior.", type: "veg" },
            { name: "Chicken Nuggets", price: "₹290.00", description: "[6 Pieces] Crispy golden bites of tender chicken.", type: "non-veg" }
        ]
    },
    {
        category: "Pasta & Pizza",
        items: [
            { name: "Veg Arrabiata Pasta", price: "₹320.00", description: "Zesty tomato sauce with garlic, chilli flakes and herbs.", type: "veg" },
            { name: "Non Veg Arrabiata Pasta", price: "₹350.00", description: "Zesty tomato sauce with chicken.", type: "non-veg" },
            { name: "Veg Mama Rosa Pasta", price: "₹320.00", description: "Creamy tomato sauce infused with garlic, basil and Parmesan.", type: "veg" },
            { name: "Chicken Mama Rosa Pasta", price: "₹350.00", description: "Creamy tomato sauce with chicken.", type: "non-veg" },
            { name: "Veg Alfredo Pasta", price: "₹320.00", description: "Creamy sauce with butter, heavy cream, Parmesan cheese.", type: "veg" },
            { name: "Chicken Alfredo Pasta", price: "₹350.00", description: "Creamy alfredo sauce with chicken.", type: "non-veg" },
            { name: "Ratatouille Vegetable Lasagna", price: "₹365.00", description: "Layers zucchini, eggplant, bell peppers with rich marinara.", type: "veg" },
            { name: "Three Cheese Chicken Stuffed Lasagna", price: "₹425.00", description: "Tender chicken, ricotta, Mozzarella and Parmesan.", type: "non-veg" },
            { name: "Pista House Margherita Pizza", price: "₹435.00", description: "Thin crust topped with fresh Mozzarella, tangy tomato sauce.", type: "veg" },
            { name: "Paneer Tikka Pizza", price: "₹499.00", description: "Spicy marinated paneer, tangy tomato sauce on crispy crust.", type: "veg" },
            { name: "Paneer Chilli Pizza", price: "₹499.00", description: "Spicy paneer, bell peppers, onion and Mozzarella.", type: "veg" },
            { name: "Tri Onion Bell Pepper Pizza", price: "₹460.00", description: "Three vibrant bell pepper varieties, onion and Mozzarella.", type: "veg" },
            { name: "Pista House Special Mushroom Pizza", price: "₹460.00", description: "Savory blend of sautéed mushroom, Mozzarella, garlic and herbs.", type: "veg" },
            { name: "Chicken Tikka Pizza", price: "₹600.00", description: "Spiced chicken tikka, tangy tomato sauce, Mozzarella.", type: "non-veg" },
            { name: "Chicken Hawaiian Pizza", price: "₹600.00", description: "Tender chicken, sweet pineapple, Mozzarella.", type: "non-veg" },
            { name: "Pista House Special Chicken Chilli Pizza", price: "₹600.00", description: "Spicy chicken, bell peppers, onion and Mozzarella.", type: "non-veg" }
        ]
    },
    {
        category: "Sandwiches",
        items: [
            { name: "Veg Sandwich With Fries", price: "₹185.00", description: "Fresh veggies layered between soft bread.", type: "veg" },
            { name: "Veg N Cheese Sandwich With Fries", price: "₹250.00", description: "Fresh veggies and melted cheese between toasted bread.", type: "veg" },
            { name: "Cheese Corn Sandwich With Fries", price: "₹260.00", description: "Melted cheese, sweet corn and crispy bread.", type: "veg" },
            { name: "Paneer Tikka Sandwich With Fries", price: "₹290.00", description: "Grilled sandwich with spicy marinated paneer.", type: "veg" },
            { name: "Chicken Tikka Sandwich With Fries", price: "₹305.00", description: "Spiced chicken tikka, crisp veggies in soft bread.", type: "non-veg" }
        ]
    },
    {
        category: "Accompaniments & Desserts",
        items: [
            { name: "Green Salad", price: "₹105.00", description: "Fresh garden salad.", type: "veg" },
            { name: "Papad", price: "₹35.00", description: "Crispy lentil wafer.", type: "veg" },
            { name: "Boondi Raita", price: "₹100.00", description: "Yogurt with gram flour pearls.", type: "veg" },
            { name: "Mixed Raita", price: "₹100.00", description: "Yogurt with mixed veggies.", type: "veg" },
            { name: "Pineapple Raita", price: "₹140.00", description: "Yogurt with sweet pineapple chunks.", type: "veg" },
            { name: "Masala Papad", price: "₹75.00", description: "Papad topped with spicy onion-tomato mix.", type: "veg" },
            { name: "Hot Gulab Jamun", price: "₹61.00", description: "[1 Piece] Classic Indian sweet.", type: "veg" }
        ]
    },
    {
        category: "Beverages",
        items: [
            { name: "Nutty Banana Shake", price: "₹235.00", description: "Creamy blend of nutty goodness and sweet banana.", type: "veg" },
            { name: "Oreo Shake", price: "₹235.00", description: "Creamy Oreo cookies and milk.", type: "veg" },
            { name: "Kitkat Shake", price: "₹235.00", description: "Kitkat chocolate bars and milk.", type: "veg" },
            { name: "Mint Oreo Shake", price: "₹245.00", description: "Oreo cookies, cool mint and creamy indulgence.", type: "veg" },
            { name: "Chocolate Shake", price: "₹235.00", description: "A chocolate lover's dream.", type: "veg" },
            { name: "Chocolate Cookies Shake", price: "₹235.00", description: "Chocolate, cookies and creamy indulgence.", type: "veg" },
            { name: "Peanut Butter Shake", price: "₹245.00", description: "Peanut butter and healthy oatmeal.", type: "veg" },
            { name: "Dry Fruit Shake", price: "₹255.00", description: "Dried fruits, ice and creamy goodness.", type: "veg" },
            { name: "Mango Smoothie", price: "₹220.00", description: "Ripe mangoes and creamy yogurt.", type: "veg" },
            { name: "Blueberry Smoothie", price: "₹220.00", description: "Blueberries, yogurt and velvety smoothness.", type: "veg" },
            { name: "Kiwi Smoothie", price: "₹220.00", description: "Juicy kiwi and creamy yogurt.", type: "veg" },
            { name: "Strawberry Smoothie", price: "₹220.00", description: "Ripe strawberries and creamy yogurt.", type: "veg" },
            { name: "Pista House Special Beer Fusion", price: "₹295.00", description: "Fruit beer and mocktail [Non Alcoholic].", type: "veg" },
            { name: "Blue Lagoon Mocktails", price: "₹270.00", description: "Citrus, mint and blue curacao [Non Alcoholic].", type: "veg" },
            { name: "Mint Mojito", price: "₹235.00", description: "Mint, lime, sugar and sparkling water [Non Alcoholic].", type: "veg" },
            { name: "Strawberry Mojito", price: "₹235.00", description: "Mint, lime, strawberry and sparkling water [Non Alcoholic].", type: "veg" },
            { name: "Watermelon Mojito", price: "₹235.00", description: "Mint, lime, watermelon and sparkling water [Non Alcoholic].", type: "veg" },
            { name: "Lemon Soda", price: "₹145.00", description: "Refreshing lemon soda.", type: "veg" },
            { name: "Choco Cookie Coffee", price: "₹235.00", description: "Cold coffee with choco cookie.", type: "veg" },
            { name: "Cold Coffee With Vanilla Ice Cream", price: "₹235.00", description: "Classic cold coffee topped with vanilla ice cream.", type: "veg" },
            { name: "Cold Coffee", price: "₹220.00", description: "Classic cold coffee.", type: "veg" },
            { name: "Lemon Ice Tea", price: "₹170.00", description: "Infusion of lemon and chilled tea.", type: "veg" },
            { name: "Lemon Mint Ice Tea", price: "₹170.00", description: "Blend of lemon, mint and chilled tea.", type: "veg" }
        ]
    }
];
