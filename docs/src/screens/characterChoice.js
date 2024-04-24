import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Character.css'; // Import the CSS file for styling
import blueCharacter from '../images/blueP.png';
import greenCharacter from '../images/greenP.png';
import yellowCharacter from '../images/yellowP.png';
import redCharacter from '../images/redP.png';

const Character = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const imagePaths = [
    { 
      name: 'Blue', 
      path: blueCharacter, 
      blurb: "Emily Carson grew up in foster care and completed high school. She is a single mother and graphic designer earning a salary of 10 units. Emily has a five-year-old son and maintains savings of 3 units. Without a car, she faces logistical challenges and her financial strain is exacerbated by a pre-existing health condition; with consistent health care and monthly treatments, the condition can be maintained. Without it, though, the condition will worsen.",
      health: 5,
      money: 13,
      time: 10,
      house: 0,
      school: 0,
      work: 0,
    },
    { 
      name: 'Green', 
      path: greenCharacter, 
      blurb: "Marcus Allen has a Bachelor's degree in Education and is a middle school science teacher earning 15 units. He has a ten-year-old daughter and savings of 5 units. The absence of a car complicates daily commuting and school activities for his daughter. Marcus is in good health, which aids in managing his professional and personal responsibilities.",
      health: 10,
      money: 20,
      time: 10,
      house: 0,
      school: 0,
      work: 0,
    },
    { 
      name: 'Yellow', 
      path: yellowCharacter, 
      blurb: "Jordan Clarke holds a Master's degree in Business Administration and earns 20 units. He has two-year-old twins and savings of 10 units. Jordan pays 2 units monthly for his car, which supports family transportation. He enjoys very strong health, helping him manage the demands of work and twin parenting.",
      health: 10,
      money: 30,
      time: 10,
      house: 0,
      school: 0,
      work: 0,
    },
    { 
      name: 'Red', 
      path: redCharacter, 
      blurb: "Alex Reed has a PhD in Engineering, following his parents who also held PhDs in the field. He earns 50 units and has savings of 20 units. Alex owns a car with monthly payments of 4 units, facilitating his active lifestyle. With no children, he focuses on career advancement and personal interests, enjoying substantial financial stability and good health.",
      health: 10,
      money: 70,
      time: 10,
      house: 0,
      school: 0,
      work: 0,
    }
  ];

  const selectCharacter = (character) => {
    setSelectedCharacter(character.name);
  
    localStorage.setItem('selectedCharacter', character.name);
    localStorage.setItem('health', character.health);
    localStorage.setItem('money', character.money);
    localStorage.setItem('time', character.time);
    localStorage.setItem('house', character.house);
    localStorage.setItem('school', character.school);
    localStorage.setItem('work', character.work);
  };

  return (
    <div className="character-container">
      <p className="title">Choose your character</p>
      <div className="character-grid">
        {imagePaths.map((image, index) => (
          <div key={index} className={`card ${selectedCharacter === image.name ? 'selected' : ''}`} onClick={() => selectCharacter(image)}>
            <div className="card-inner">
              <div className="card-front">
                <img src={image.path} alt={image.name} className="character-image" />
              </div>
              <div className="card-back">
                <p className="character-blurb">{image.blurb}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="selected-character-info">
        <Link to={`/institutions`}>
          <button className="proceed-button">Play</button>
        </Link>
      </div>
    </div>
  );
}

export default Character;
