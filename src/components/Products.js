import React, { useEffect, useState } from 'react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('bestsellers');
  const [visibleCards, setVisibleCards] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleCards(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [activeCategory]);

  const categories = [
    {
      id: 'bestsellers',
      name: 'Best‑Sellers',
      icon: '🏆',
      description: 'Our most loved artisanal breads'
    },
    {
      id: 'cakes',
      name: 'Classic Cakes',
      icon: '🎂',
      description: 'Traditional & modern cake masterpieces'
    },
    {
      id: 'teatime',
      name: 'Tea‑Time Favourites',
      icon: '☕',
      description: 'Perfect companions for your evening chai'
    },
    {
      id: 'savoury',
      name: 'Savoury Treats',
      icon: '🥟',
      description: 'Delicious snacks for any time of day'
    },
    {
      id: 'festival',
      name: 'Festival Specials',
      icon: '🎊',
      description: 'Celebration treats made with extra love'
    }
  ];

  const products = {
    bestsellers: [
      {
        id: 1,
        name: 'Milk Bread',
        description: 'Soft, pillowy texture with a golden crust',
        emoji: '🍞',
        price: '₹180',
        specialty: 'Daily Fresh',
        ingredients: ['Fresh milk', 'Premium flour', 'Real butter', 'Natural yeast']
      },
      {
        id: 2,
        name: 'Multigrain Loaf',
        description: 'Packed with wholesome grains and seeds',
        emoji: '🌾',
        price: '₹220',
        specialty: 'Health Focus',
        ingredients: ['7 ancient grains', 'Flax seeds', 'Sunflower seeds', 'Oats']
      },
      {
        id: 3,
        name: 'Spicy Masala Buns',
        description: 'Aromatic spices baked into fluffy buns',
        emoji: '🌶️',
        price: '₹160',
        specialty: 'Local Flavour',
        ingredients: ['Cumin', 'Coriander', 'Turmeric', 'Fresh herbs']
      },
      {
        id: 4,
        name: 'Pav Rolls',
        description: 'Soft dinner rolls perfect for any meal',
        emoji: '🥖',
        price: '₹140',
        specialty: 'Versatile',
        ingredients: ['Premium flour', 'Milk', 'Butter', 'Sea salt']
      }
    ],
    cakes: [
      {
        id: 5,
        name: 'Black Forest',
        description: 'Rich chocolate layers with fresh cream (egg/eggless)',
        emoji: '🍰',
        price: '₹450',
        specialty: 'Classic',
        ingredients: ['Dark chocolate', 'Fresh cream', 'Cherries', 'Vanilla']
      },
      {
        id: 6,
        name: 'Red Velvet',
        description: 'Velvety smooth with cream cheese frosting',
        emoji: '❤️',
        price: '₹480',
        specialty: 'Premium',
        ingredients: ['Cocoa', 'Buttermilk', 'Cream cheese', 'Natural red colour']
      },
      {
        id: 7,
        name: 'Fruit & Nut Plum Cake',
        description: 'Rich with dried fruits and nuts',
        emoji: '🍇',
        price: '₹520',
        specialty: 'Traditional',
        ingredients: ['Dry fruits', 'Mixed nuts', 'Rum essence', 'Spices']
      },
      {
        id: 8,
        name: 'Traditional Honey Cake',
        description: 'Cardamom-kissed sweetness with pure honey',
        emoji: '🍯',
        price: '₹380',
        specialty: 'South-Indian',
        ingredients: ['Pure honey', 'Cardamom', 'Ghee', 'Traditional spices']
      }
    ],
    teatime: [
      {
        id: 9,
        name: 'Coconut Cookies',
        description: 'Crispy cookies with fresh coconut',
        emoji: '🥥',
        price: '₹240',
        specialty: 'Local Favourite',
        ingredients: ['Fresh coconut', 'Ghee', 'Jaggery', 'Cardamom']
      },
      {
        id: 10,
        name: 'Butter Biscuits',
        description: 'Melt-in-mouth buttery goodness',
        emoji: '🧈',
        price: '₹220',
        specialty: 'Classic',
        ingredients: ['Real butter', 'Premium flour', 'Vanilla', 'Sea salt']
      },
      {
        id: 11,
        name: 'Jeera Rusks',
        description: 'Crunchy rusks with aromatic cumin',
        emoji: '🌿',
        price: '₹180',
        specialty: 'Traditional',
        ingredients: ['Cumin seeds', 'Whole wheat', 'Ghee', 'Natural sweetener']
      },
      {
        id: 12,
        name: 'Peanut Chikki Brownies',
        description: 'Fusion of traditional chikki and modern brownies',
        emoji: '🥜',
        price: '₹280',
        specialty: 'Innovation',
        ingredients: ['Roasted peanuts', 'Jaggery', 'Dark chocolate', 'Ghee']
      }
    ],
    savoury: [
      {
        id: 13,
        name: 'Veg Puff',
        description: 'Flaky pastry with spiced vegetable filling',
        emoji: '🥟',
        price: '₹35',
        specialty: 'Street Food',
        ingredients: ['Mixed vegetables', 'Cumin', 'Garam masala', 'Puff pastry']
      },
      {
        id: 14,
        name: 'Egg Puff',
        description: 'Classic puff with perfectly spiced egg',
        emoji: '🥚',
        price: '₹40',
        specialty: 'Popular',
        ingredients: ['Fresh eggs', 'Onions', 'Green chillies', 'Coriander']
      },
      {
        id: 15,
        name: 'Chicken Keema Roll',
        description: 'Soft roll filled with spiced chicken keema',
        emoji: '🍗',
        price: '₹65',
        specialty: 'Non-Veg',
        ingredients: ['Chicken keema', 'Onions', 'Tomatoes', 'Indian spices']
      },
      {
        id: 16,
        name: 'Paneer Pocket',
        description: 'Flaky pocket with seasoned paneer filling',
        emoji: '🧀',
        price: '₹45',
        specialty: 'Protein Rich',
        ingredients: ['Fresh paneer', 'Bell peppers', 'Mint', 'Spice blend']
      }
    ],
    festival: [
      {
        id: 17,
        name: 'Rich Plum Cakes',
        description: 'Soaked for 3 months in premium spirits',
        emoji: '🍾',
        price: '₹850',
        specialty: 'Premium',
        ingredients: ['Aged fruits', 'Premium spirits', 'Nuts', 'Spices']
      },
      {
        id: 18,
        name: 'Thoothukudi Macaroons',
        description: 'Traditional coconut macaroons from the coastal city',
        emoji: '🏝️',
        price: '₹320',
        specialty: 'Regional',
        ingredients: ['Fresh coconut', 'Condensed milk', 'Cashews', 'Cardamom']
      },
      {
        id: 19,
        name: 'Karachi Fruit Biscuits',
        description: 'Heritage recipe with dried fruits and nuts',
        emoji: '🍪',
        price: '₹380',
        specialty: 'Heritage',
        ingredients: ['Dry fruits', 'Almonds', 'Pistachios', 'Traditional spices']
      }
    ]
  };

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <h2>Our Signature Bakes</h2>
          <p>Handcrafted with traditional methods and modern innovation</p>
        </div>

        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="tab-name">{category.name}</span>
              <span className="tab-description">{category.description}</span>
            </button>
          ))}
        </div>

        <div className="products-grid">
          {products[activeCategory].map((product, index) => (
            <div 
              key={product.id} 
              id={`product-${product.id}`}
              className={`product-card ${visibleCards[`product-${product.id}`] ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-header">
                <div className="product-image">
                  <span className="product-emoji">{product.emoji}</span>
                </div>
                <div className="product-specialty">{product.specialty}</div>
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-ingredients">
                  {product.ingredients.map((ingredient, i) => (
                    <span key={i} className="ingredient-tag">{ingredient}</span>
                  ))}
                </div>
              </div>
              <div className="product-footer">
                <span className="price">{product.price}</span>
                <button className="order-btn">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;