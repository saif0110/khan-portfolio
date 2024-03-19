import './Home.css';
import DownloadIcon from '@mui/icons-material/Download';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useEffect, useState } from 'react';
const Home = () => {
    const [btn1, setButton1] = useState(false);
    const [btn2, setButton2] = useState(false);
    const [btn3, setButton3] = useState(false);
    const [btn4, setButton4] = useState(false);
    const [displayedName, setDisplayedName] = useState("");
    const [index, setIndex] = useState(0);

    // handle the download of the resume file logic
    const handleDownload = () => {
        // Construct the URL for the resume file in the public folder
        const resumeUrl = process.env.PUBLIC_URL + '/resume.pdf';

        // Open the file in a new window/tab to trigger the download
        window.open(resumeUrl, '_blank');
    }
    // handle share click
    const handleShareClick = (url)=>{
        window.open(url, "_blank");
    }

    const fullName = "Mohd Tauheed Khan";

    useEffect(() => {
        const intervalId = setInterval(() => {
          if (index < fullName.length) {
            setDisplayedName((prevText) => prevText + fullName[index]);
            setIndex((prevIndex) => prevIndex + 1);
          } else {
            clearInterval(intervalId);
          }
        }, 40); // Adjust speed here (milliseconds)
    
        return () => clearInterval(intervalId);
      }, [fullName, index]);

    return (
        <div className="container" id="home">
            <div className="left-menu">
                <div className='content'>
                    <h1>Hi There,</h1>
                    <h1>I'm <span id="name">{displayedName}</span></h1>
                    <p>I am into Web and Mobile Application Development.</p>
                    <button id='resumeBtn' onClick={handleDownload}>Download Resume <DownloadIcon fontSize='small' style={{ paddingLeft: '7px' }} /></button>
                    <div className='shareButton'>
                        <div className={`btn ${btn1 ? 'btn1' : ''}`} onMouseDown={() => { setButton1(true) }} onMouseUp={() => { setButton1(false) }} onClick={()=>{
                            handleShareClick("https://www.linkedin.com/in/mohd-tauheed-khan-6658a11b6/")
                        }}><LinkedInIcon fontSize={btn1 ? 'small' : 'medium'} /></div>
                        <div className={`btn ${btn2 ? 'btn2' : ''}`} onMouseDown={() => { setButton2(true) }} onMouseUp={() => { setButton2(false) }}
                        onClick={()=>{
                            handleShareClick("https://github.com/saif0110?tab=repositories")
                        }}><GitHubIcon fontSize={btn2 ? 'small' : 'medium'} /></div>
                        <div className={`btn ${btn3 ? 'btn3' : ''}`} onMouseDown={() => { setButton3(true) }} onMouseUp={() => { setButton3(false) }}
                        onClick={()=>{
                            handleShareClick("https://www.facebook.com/profile.php?id=100024009962609")
                        }}><FacebookIcon fontSize={btn3 ? 'small' : 'medium'} /></div>
                        <div className={`btn ${btn4 ? 'btn4' : ''}`} onMouseDown={() => { setButton4(true) }} onMouseUp={() => { setButton4(false) }}
                        onClick={()=>{
                            handleShareClick("https://www.instagram.com/imtauheedkhan/");
                        }}><InstagramIcon fontSize={btn4 ? 'small' : 'medium'} /></div>
                    </div>
                </div>
            </div>
            <div className="right-menu">
                <div className="imgContainer">
                </div>
            </div>
        </div>
    )
}

export default Home;