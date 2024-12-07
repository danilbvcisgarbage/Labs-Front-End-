import React from 'react';

function GoodsCard({ image, name, price }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.price}>Cost: {price} hrn</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    margin: '10px',
    width: '150px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
  },
  name: {
    color: '#007BFF',
    fontSize: '1.2em',
    margin: '10px 0',
  },
  price: {
    fontSize: '1em',
    color: '#333',
  },
};

export default GoodsCard;
