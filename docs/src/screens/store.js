import React, { useState, useEffect } from 'react';

const Store = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [money, setMoney] = useState(parseInt(localStorage.getItem('money'), 10) || 0);
  const [health, setHealth] = useState(100);
  const [currentTask, setCurrentTask] = useState(1);
  const [showStore, setShowStore] = useState(false);

  const items = [
    { name: "Car", cost: 5, monthlyCost: 2, effect: 0, description: "Car (5 coin + 2 monthly base price)" },
    { name: "Healthy Groceries", cost: 2, effect: 2, description: "Healthy groceries (2 coin)" },
    { name: "Fun Activity", cost: 0, effect: 3, description: "Fun activity (1 hour)" },
    { name: "Nap", cost: 0, effect: 1, description: "Nap (30 mins time)" },
    { name: "Workout Class", cost: 1, effect: 1, description: "Workout class (1 coin + 1 heart)" }
  ];

  const closePopup = () => {
    setShowPopup(false);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleStore = () => {
    setShowStore(!showStore);
  };

  const buyItem = (item) => {
    if (money >= item.cost) {
      setMoney(money - item.cost);
      setHealth(health + item.effect);
    } else {
      alert("You don't have enough money to buy this item!");
    }
  };

  return (
    <div>
      <div
        style={styles.taskBox}
        onClick={togglePopup}
      >
        Task {currentTask}
      </div>

      {showPopup && (
        <div style={styles.popupBackground} onClick={closePopup}>
          <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
            <div style={styles.closeButton} onClick={closePopup}>X</div>
            <h2>Store</h2>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <div>{item.description}</div>
                  <button onClick={() => buyItem(item)}>Buy</button>
                </li>
              ))}
            </ul>
            <button onClick={closePopup}>Close Store</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  taskBox: {
    position: 'fixed',
    top: 180,
    right: 30,
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
    maxWidth: '350px',
  },
  popupText: {
    margin: '0',
    fontSize: '18px',
  },
  closeButton: {
    position: 'absolute',
    top: '8px',
    right: '12px',
    cursor: 'pointer',
  },
};

export default Store;
