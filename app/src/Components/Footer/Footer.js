import React, { useState } from 'react';
import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer() {
    const [btn1, setButton1] = useState(false);
    const [btn2, setButton2] = useState(false);
    const [btn3, setButton3] = useState(false);
    const [btn4, setButton4] = useState(false);
    const handleShareClick = (url)=>{
        window.open(url, "_blank");
    }
    return (
        <div className='footerContainer'>
            <div className='topFooter'>
                <div id='topFooterContent'>
                    <h2>Fullstack Developer</h2>
                    <p>Hey, I have been trained as a Fullstack Developer from september 2022.
                        and now i am open to work across india. I enjoy the development and
                        also i love reading and understanding philosophy and poetry for my personal
                        interest and peace.
                    </p>
                    <div id='shareBtn'>
                        <div className={`btn ${btn1 ? 'btn1' : ''}`} onMouseDown={() => { setButton1(true) }} onMouseUp={() => { setButton1(false) }} onClick={() => {
                            handleShareClick("https://www.linkedin.com/in/mohd-tauheed-khan-6658a11b6/")
                        }}><LinkedInIcon fontSize={btn1 ? 'small' : 'medium'} /></div>
                        <div className={`btn ${btn2 ? 'btn2' : ''}`} onMouseDown={() => { setButton2(true) }} onMouseUp={() => { setButton2(false) }}
                            onClick={() => {
                                handleShareClick("https://github.com/saif0110?tab=repositories")
                            }}><GitHubIcon fontSize={btn2 ? 'small' : 'medium'} /></div>
                        <div className={`btn ${btn3 ? 'btn3' : ''}`} onMouseDown={() => { setButton3(true) }} onMouseUp={() => { setButton3(false) }}
                            onClick={() => {
                                handleShareClick("https://www.facebook.com/profile.php?id=100024009962609")
                            }}><FacebookIcon fontSize={btn3 ? 'small' : 'medium'} /></div>
                        <div className={`btn ${btn4 ? 'btn4' : ''}`} onMouseDown={() => { setButton4(true) }} onMouseUp={() => { setButton4(false) }}
                            onClick={() => {
                                handleShareClick("https://www.instagram.com/imtauheedkhan/");
                            }}><InstagramIcon fontSize={btn4 ? 'small' : 'medium'} /></div>
                    </div>
                </div>
            </div>
            <div className='bottomFooter'>
                <p>copy right&copy; 2024 | <span style={{color: "rgb(65, 94, 182)"}}>Portfolio: Tauheed Khan</span> </p>
            </div>
        </div>
    );
}

export default Footer