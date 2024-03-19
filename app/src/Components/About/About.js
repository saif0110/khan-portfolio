import React, { useEffect, useState } from 'react';
import './About.css';
function About() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = "Hi, it's me Mohd Tauheed Khan, i have completed graduation(B.Tech in CSE) from Shri Ramswaroop Memorail University Lucknow, in the year 2022. I am passionate of web and mobile application development, i have successfully completed multiple projects and demonstrated my proficiency by building dynamic and interactive User Interface.  I use my ineterset in philosophy, poetry and understanding the nature's creature for inner peace, satisfaction and joy which really does for me. I always try to find the way to achieve something which is hidden or something which is not available publicly and explore that to the world."
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 25); // Adjust speed here (milliseconds)

    return () => clearInterval(intervalId);
  }, [text, currentIndex]);
  return (
    <div className='aboutContainer'>
      <div id='aboutImg'></div>
      <div id='aboutContent'>
        <h2>A Passionate Web and Mobile Application Developer:</h2>
        <p>{displayText}</p>
      </div>
    </div>
  );
}

export default About;