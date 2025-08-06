import React from 'react';

const Products = () => {
  const products = [
    {
      emoji: '🍞',
      name: 'Artisan Sourdough',
      description: 'Our signature sourdough made with ancient grains and natural fermentation. Crispy crust, soft interior.',
      price: '₹120'
    },
    {
      emoji: '🥖',
      name: 'Whole Wheat Baguette',
      description: 'Classic French baguette made with organic whole wheat flour from local farms.',
      price: '₹80'
    },
    {
      emoji: '🌾',
      name: 'Multigrain Loaf',
      description: 'Nutritious blend of quinoa, millet, and traditional grains. Perfect for healthy living.',
      price: '₹150'
    },
    {
      emoji: '🥐',
      name: 'Butter Croissant',
      description: 'Flaky, buttery croissants made with farm-fresh butter. A morning delight.',
      price: '₹60'
    },
    {
      emoji: '🧁',
      name: 'Seasonal Muffins',
      description: 'Made with seasonal fruits and vegetables from Coimbatore\'s rich agricultural land.',
      price: '₹45'
    },
    {
      emoji: '🍰',
      name: 'Celebration Cakes',
      description: 'Custom cakes for special occasions, decorated with natural ingredients and love.',
      price: '₹500+'
    }
  ];

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <h2>Fresh Daily Bakes</h2>
          <p>Handcrafted with care every morning</p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <span className="product-emoji">{product.emoji}</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="price">{product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;