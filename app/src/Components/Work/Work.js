import React from 'react';
import './Work.css';
import { Link, NavLink } from 'react-router-dom';
function Work() {
  const handleCardClick = (url)=>{
    window.open(url, "_blank");
  }
  return (
    <div className='workContainer'>
      <div className='aboutWork'>Projects</div>
      <div className='cardContainer'>
        <div className='card' onClick={()=>{
          const url = "https://github.com/saif0110/amazon-clone";
          handleCardClick(url)
        }}>
          <div className='title'>
            <h3>Amazon Clone</h3>
          </div>
          <hr></hr>
          <div className='body'>
            <p>
              Picked up some of the existing functionality of amzon application and
              used inside it for the purpose of engaging my overall development skill and used my existing skill(Node, React and Express.js).
            </p>
          </div>
        </div>
        <div className='card' onClick={()=>{
          const url = "https://github.com/saif0110/apple-music-clone/tree/master";
          handleCardClick(url)
        }}>
          <div className='title'>
            <h3>Apple Music Clone</h3>
          </div>
          <hr></hr>
          <div className='body'>
            <p>
              Picked up some of the existing functionality of apple music application
              and used inside it for the purpose of engaging my overall
              development skill and used my existing skill(Node, React and
              Express.js).
            </p>
          </div>
        </div>
        <div className='card' onClick={()=>{
          const url = "https://github.com/saif0110/dictionary-project";
          handleCardClick(url)
        }}>
          <div className='title'>
            <h3>Dictionary</h3>
          </div>
          <hr></hr>
          <div className='body'>
            <p>
              The target was in the way of caching the history to look at it what i searched 
              for in the past time and the tech stack i have used is HTML, CSS, and Java Script
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Work;