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
      blurb: "Emily entered foster care when she was 8 and completed high school. She is a 28 year-old single mother and graphic designer earning a salary of 10 units. Emily has a five-year-old son and currently has savings of 3 units. She has no car. Further, she has a pre-existing health condition; with consistent health care and monthly treatments, the condition can be maintained. Without consistent treatment, though, the condition will worsen. ",
      health: 5,
      money: 9,
      time: 10,
      house: 0,
      school: 0,
      work: 0,
      car: 0,
      baby: 1,
    },
    { 
      name: 'Green', 
      path: greenCharacter, 
      blurb: "Marcus has a Bachelor's degree in Education and is a middle school science teacher earning 15 units monthly. He has a ten-year-old daughter and savings of 5 units. Marcus does not have a car. Marcus is in good health.",
      health: 10,
      money: 20,
      time: 10,
      house: 0,
      school: 0,
      work: 1,
      car: 0,
      baby: 1,
    },
    { 
      name: 'Yellow', 
      path: yellowCharacter, 
      blurb: "Jordan has a Master's degree in Business Administration and earns 20 units per month. He has two-year-old twins and savings of 10 units. Jordan pays 2 units monthly for his car. He has strong health.",
      health: 10,
      money: 30,
      time: 10,
      house: 0,
      school: 0,
      work: 1,
      car: 1,
      baby: 2,
    },
    { 
      name: 'Red', 
      path: redCharacter, 
      blurb: "Maya has a PhD in Engineering, following her parents who also held Ph.Ds in the field. He earns 50 units and has savings of 20 units. Alex owns a car with monthly payments of 4 units. Alex has no children and is in strong health. ",
      health: 10,
      money: 70,
      time: 10,
      house: 0,
      school: 0,
      work: 1,
      car: 1,
      baby: 3,
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
    localStorage.setItem('car', character.car);
    localStorage.setItem('baby', character.baby);
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
