import React from 'react';
import GoodsCard from './GoodsCard';

function GoodsGallery() {
  const goods = [
    { image: '/images/hammer.png', name: 'Hammer', price: 150 },
    { image: '/images/screwdriver.png', name: 'Screwdriver', price: 80 },
    { image: '/images/safety_helmet.png', name: 'Safety Helmet', price: 300 },
    { image: '/images/bucket.png', name: 'Bucket', price: 50 },
    { image: '/images/saw.png', name: 'Saw', price: 250 },
    { image: '/images/bricks.png', name: 'Bricks', price: 20 },
  ];

  return (
    <div style={styles.gallery}>
      {goods.map((item, index) => (
        <GoodsCard
          key={index}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}

const styles = {
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
};

export default GoodsGallery;
