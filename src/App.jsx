import React from 'react';
import './App.css';
import photo from '/images/image.png';
import { FaAddressCard, FaMapMarkerAlt, FaPhone, FaLaptop, FaEnvelope, FaCog, FaUser, FaGraduationCap, FaBriefcase } from 'react-icons/fa'; // Added FaMapMarkerAlt


function App() {
  return (
    <div className="App">
      <div className="left">
        <header className='Header'>
          <img className="MyPic" src={photo} alt="MyPic" />
          <h1 className="Name">LATHAVIT</h1>
          <h1 className="surname">PAKTRAKETRIN</h1>
          <h1 className="mini">COMPUTER SCIENCE<br />@SILPAKORN U.</h1>
        </header>
        <main>
          <contact>
            <div className="rectangle_left">
              <FaAddressCard size={20} />
              <p>Contact</p>
            </div>
            <nav>
              <ul>
                <li className="custom-icon-li">
                  <FaMapMarkerAlt /><h2>132/5 หมู่บ้านคาซ่าวิลล์ ราชพฤกษ์-พระราม 5 <br />
                    อ.เมือง ต.บางกร่าง จ.นนทบุรี 11000</h2>
                </li>
                <li className="custom-icon-li">
                  <FaPhone style={{ transform: 'scaleX(-1)' }} /><h2>064-597-4241</h2>
                </li>
                <li className="custom-icon-li">
                  <FaLaptop /><h2>https://www.linkedin.com/in/lathavit-<br />paktraketrin-8359932a8</h2>
                </li>
                <li className="custom-icon-li">
                  <FaLaptop /><a href="https://github.com/Lathavit">https://github.com/Lathavit</a>
                </li>
                <li className="custom-icon-li">
                  <FaEnvelope /><h2>paktraketrin_l@silpakorn.edu</h2>
                </li>
              </ul>
            </nav>
          </contact>
          <br />
          <skills>
            <div className="rectangle_left">
              <FaCog size={20} />
              <p>Skills</p>
            </div>
            <bar>
              <li className="skills"><h2>Java</h2>
                <div className="progress-bar" style={{ marginLeft: '40px' }}>
                  <div className="progress" style={{ width: '70%' }}></div>
                </div><h3>70%</h3>
              </li>
              <li className="skills"><h2>C</h2>
                <div className="progress-bar" style={{ marginLeft: '65px' }}>
                  <div className="progress" style={{ width: '75%' }}></div>
                </div><h3>75%</h3>
              </li>
              <li className="skills"><h2>HTML</h2>
                <div className="progress-bar" style={{ marginLeft: '25px' }}>
                  <div className="progress" style={{ width: '40%' }}></div>
                </div><h3>40%</h3>
              </li>
              <li className="skills"><h2>Python</h2>
                <div className="progress-bar" style={{ marginLeft: '15px' }}>
                  <div className="progress" style={{ width: '45%' }}></div>
                </div><h3>45%</h3>
              </li><li className="skills"><h2>CSS</h2>
                <div className="progress-bar" style={{ marginLeft: '40px' }}>
                  <div className="progress" style={{ width: '35%' }}></div>
                </div><h3>35%</h3>
              </li>
              <li className="skills"><h2>Flutter</h2>
                <div className="progress-bar" style={{ marginLeft: '15px' }}>
                  <div className="progress" style={{ width: '60%' }}></div>
                </div><h3>60%</h3>
              </li>
            </bar>
          </skills>
        </main></div>
      <section className='right'>
        <about>
          <div className="rectangle_right">
            <FaUser size={20} />
            <p>About me</p>
          </div>
          <h3 className='About'>I am a person of few <br />words. I like to find new<br />
            experience in another<br />
            place. In this time, I am <br />
            interested in front-end and<br />
            mobile app or full-stack. </h3>

          <h3 className='Strength'>My Strengths<br />
            <li>Good listener</li>
            <li>Seft learning</li>
            <li>Carefully</li>
            <li>Can communicate</li>
          </h3>

          <div className="vertical-line"></div>
        </about>

        <education>
          <div className="rectangle_right">
            <FaGraduationCap size={20} />
            <p>Education</p>
          </div>

          <div className="vertical-circle" style={{ height: '60px', marginTop: '25px' }}/>
          <h3 className='Education'>
            <li className='school'>Silpakorn University</li>
            <li className='year'>2020 - present</li>
            <li className='grade'>computer science (GPA 2.59)</li>
          </h3>
          
          <div className="vertical-circle" style={{ height: '60px', marginTop: '5px' }}/>
          <h3 className='Education'>
            <li className='school'>Assumption College Thonburi</li>
            <li className='year'>2008 - 2020</li>
            <li className='grade'>Grade 1 - Grade 12 sci-math (GPA 2.93)</li>
          </h3>

        </education>

        <acin>
          <div className="rectangle_right">
            <FaBriefcase size={20} />
            <p>Activities & Interests</p>
          </div>

          <div className="vertical-circle" style={{ height: '115px', marginTop: '50px' }}/>
          <h3 className='Act'> Activities <br />
            <li className='act'>Marching band (Grade 7 - Grade 12)</li>
            <li className='act'>The Coding club</li>
          </h3>

          <div className="vertical-circle" style={{ height: '120px', marginTop: '95px' }}/>
          <h3 className='Int'> Interests <br />
            <li className='act'>Make a games with Unity or Unreal Engine</li>
            <li className='act'>All kinds of sports</li>
            <li className='act'>IoT</li>
            <li className='act'>Web application</li>
            <li className='act'>Mobile Application</li>
          </h3>

          <div className="vertical-circle" style={{ height: '120px', marginTop: '65px' }}/>
          <h3 className='Lan'> Language <br />
            <li className='act'>Thai</li>
            <li className='act'>English (Basic)</li>
          </h3>

        </acin>



      </section>
    </div>
  );
}

export default App;
