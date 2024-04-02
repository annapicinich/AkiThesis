import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blueCharacter from '../images/blueP.png';
import greenCharacter from '../images/greenP.png';
import yellowCharacter from '../images/yellowP.png';
import redCharacter from '../images/redP.png';

const Character = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(localStorage.getItem('selectedCharacter') || null);

  const imagePaths = [
    { name: 'Blue', path: blueCharacter, blurb: 'This character is known for its calm and collected demeanor.' },
    { name: 'Green', path: greenCharacter, blurb: 'This character is known for its adventurous spirit.' },
    { name: 'Yellow', path: yellowCharacter, blurb: 'This character is known for its cheerful and optimistic personality.' },
    { name: 'Red', path: redCharacter, blurb: 'This character is known for its fiery and passionate nature.' }
  ];

  const selectCharacter = (name) => {
    setSelectedCharacter(name);
    localStorage.setItem('selectedCharacter', name); // Save selected character in local storage
  };

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <p style={{ fontSize: '24px', marginBottom: '40px', textAlign: 'center' }}>Choose your character</p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {imagePaths.map((image, index) => (
          <div key={index} style={{ margin: '10px', cursor: 'pointer' }} onClick={() => selectCharacter(image.name)}>
            <img src={image.path} alt={image.name} style={{ width: '150px', height: '150px' }} />
            <p style={{ textAlign: 'center', fontSize: '20px' }}>{image.name}</p>
            <p style={{ textAlign: 'center', fontSize: '14px', maxWidth: '200px' }}>{image.blurb}</p>
          </div>
        ))}
      </div>
      {selectedCharacter && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>{selectedCharacter} character selected</p>
          <Link to={`/institutions`}> 
            <button style={{ fontSize: '15px', padding: '10px', width: '150px', border: '2px solid black', borderRadius: '5px', marginTop: '20px' }}>Proceed</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Character;
