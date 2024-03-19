import React from 'react';
import CircularBar from './CircularBar';
import './Skills.css';
function Skills() {
  return (
    <div className='skillContainer'>
      <h2>My Skills in Web Development</h2>
      <div id='skills'>
        <div>
          <CircularBar skillPercent={95}/>
          <h3>HTML</h3>
        </div>
        <div>
          <CircularBar skillPercent={92}/>
          <h3>CSS</h3>
        </div>
        <div>
          <CircularBar skillPercent={87}/>
          <h3>Java Script</h3>
        </div>
        <div>
          <CircularBar skillPercent={89}/>
          <h3>React.js</h3>
        </div>
        <div>
          <CircularBar skillPercent={76}/>
          <h3>Node.js</h3>
        </div>
        <div>
          <CircularBar skillPercent={80}/>
          <h3>Express.js</h3>
        </div>
        <div>
          <CircularBar skillPercent={80}/>
          <h3>MongoDB</h3>
        </div>
        <div>
          <CircularBar skillPercent={84}/>
          <h3>DSA</h3>
        </div>
        <div>
          <CircularBar skillPercent={86}/>
          <h3>Java</h3>
        </div>
      </div>
    </div>
  );
}
// <CircularBar skillPercent={75}/>
export default Skills;