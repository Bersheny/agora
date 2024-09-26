import React from 'react';
import './Hobby.css';

const Hobby = ({ hobbyName, userLevel, onLevelChange }) => {

  return (
    <div className="hobby">
      <button>-</button>
      <p>{hobbyName}</p>
        <select value={userLevel} onChange={(e) => onLevelChange(e.target.value)} className="custom-select">
          <option value="je veux apprendre">Je veux apprendre</option>
          <option value="je sais faire">Je sais faire</option>
          <option value="je peux enseigner">Je peux enseigner</option>
        </select>
    </div>
  );
};

export default Hobby;