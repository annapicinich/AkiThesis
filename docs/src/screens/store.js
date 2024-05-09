import React, { useState } from 'react';

const Store = () => {
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Placeholder function for purchasing items
  const handlePurchase = (itemName) => {
    console.log(`You purchased ${itemName}`);
  };

  // Store items data
  const storeItems = [
    { name: 'Car', cost: 5, benefit: '+2 heart' },
    { name: 'Healthy Groceries', cost: 2, benefit: '+2 heart' },
    { name: 'Fun Activity', cost: 1, benefit: '+2 heart' },
    { name: 'Nap', cost: 0.5, benefit: '+1 heart' },
    { name: 'Workout Class', cost: 1, benefit: '+1 heart' },
    { name: 'Air Conditioning', cost: 1, benefit: '+1 heart' },
  ];

  return (
    <div>
      {/* Store box */}
      <div style={styles.storeBox} onClick={togglePopup}>
        Life Store
      </div>

      {/* Popup */}
      {showPopup && (
        <div style={styles.popupBackground}>
          <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
            <div style={styles.closeButton} onClick={closePopup}>X</div>
            {/* Render store items */}
            <div style={styles.storeGrid}>
              {storeItems.map((item, index) => (
                <div key={item.name} style={styles.storeItem}>
                  <strong>{item.name}</strong>
                  <p>Cost: {item.cost} coin</p>
                  <p>Benefit: {item.benefit}</p>
                  <button style={styles.purchaseButton} onClick={() => handlePurchase(item.name)}>Purchase</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  storeBox: {
    position: 'fixed',
    top: 60,
    left: 30,
    background: 'white',
    borderRadius: '10px',
    padding: '10px',
    cursor: 'pointer',
    display: 'flex',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    fontSize: '20px',
  },
  popupBackground: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '999',
  },
  popup: {
    borderRadius: '10px',
    position: 'relative',
    background: 'white',
    padding: '30px',
    textAlign: 'center',
    maxWidth: '600px',
  },
  storeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, auto)',
    gap: '20px',
  },
  storeItem: {
    marginBottom: '20px',
    border: '1px solid #f0f0f0',
    background: '#f0f0f0',
    borderRadius: '5px',
    padding: '10px',
  },
  purchaseButton: {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  
  closeButton: {
    position: 'absolute',
    top: '8px',
    right: '12px',
    cursor: 'pointer',
  },
  
};

export default Store;
