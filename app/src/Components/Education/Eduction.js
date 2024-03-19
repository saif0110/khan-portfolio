import React from 'react';
import './Education.css';
function Education() {
  return (
    <div className='eduContainer'>

      <div>
        <div className='degree'>
          <div className='degreeYear'>
            <h3>B.Tech</h3>
            <p>- (2019 to 2022)</p>
          </div>
          <p>I have completed graduation from <span className='highlighter'>Shri Ramswaroop Memorial University Lucknow </span>
            in Computer Science and Engineering, it was lateral entry program of three years,
            i admitted there in 2019 and completed in the year 2022 with 7.28 CGPA out of 10.
          </p>
        </div>
        <div className='degree'>
          <div className='degreeYear'>
            <h3>Diploma in Engineering</h3>
            <p>- (2016 to 2019)</p>
          </div>
          <p>
            As i was much interested in persuing my career in Computer Science since my childhood, i decided
            to take admission in Diploma program and that was possible though a state level examination and i did
            from Govt. Polytechnic Adampur Tarabganj Gonda,
            the journey started after qualifying high school board examination from 2016 to 2019 and passed with honours and scored 80.34% marks.
          </p>
        </div>
        <div className='degree'>
          <div className='degreeYear'>
            <h3>High School</h3>
            <p>- (2015 to 2016)</p>
          </div>
          <p>
            My High School standard was cool through the preparation and scored well i appeared in the year
            2016 and secured approx 90.33% marks and i was one of the top performer also i was honoured
            by District Magistrate for performance.
          </p>
        </div>
        <div className='degree'>
          <div className='degreeYear'>
            <h3>Certification course</h3>
            <p>- (2022 to present)</p>
          </div>
          <p>I am enrolled at <span className='highlighter'>Newton School</span> in a Fullstack Web Development
            program, i experienced the journey in MERN stack development and successfully completed multiple project in React.js and
            Node.js -Express.js and demonstrated my proficiency by completing
            various projects, showcased my ability to build dynamic and
            interactive user Interface.

          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;