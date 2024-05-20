import { useState, useEffect } from 'react';
import './loginpage.css';
import { Login } from './Login';
import { loginUser } from './loginAPI';
import { jwtDecode } from 'jwt-decode';
import { Col, Modal, Row } from 'react-bootstrap';



const LoginPage = () => {
 
    const [resetEmail, setResetEmail] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setEmail("");
        setPassword("");
        setVisible(false);
        setShowModal(false);
    }, [])


    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const [errorMessage, setErrorMessage] = useState("");

    const validatePassword = (userPassword: string) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(userPassword);
        const hasNumber = /\d/.test(userPassword);

        if (userPassword.length < minLength) {
            setErrorMessage('הסיסמה חייבת להיות באורך של 8 תווים לפחות');
            return false;
        }
        if (!hasUpperCase) {
            setErrorMessage('הסיסמה חייבת להכיל לפחות אות גדולה אחת');
            return false;
        }
        if (!hasNumber) {
            setErrorMessage('הסיסמה חייבת להכיל לפחות ספרה אחת');
            return false;
        }

        setErrorMessage("");
        
        return true;
    };

    
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validatePassword(password)) {
            return;
        }
    
        const userData: Login = {
            email,
            password,
        };
    
        loginUser(userData).then(data =>
            {
                if (data && data.access) {
                    const decoded = jwtDecode(data.access);

                    console.log('Decoded JWT:', decoded);
                    console.log(userData);
                }
            })
            .catch(error => {
                console.error(error.response.data);
                setErrorMessage("אימייל או סיסמה שגויים");
            }
        );
    }

    const isTabletOrTablet = window.innerWidth <= 600 || window.innerWidth <= 992;
    
    const [outerClass, setOuterClass] = useState('component286');
    const [innerClass, setInnerClass] = useState('megayes');

    const [outerClass2, setOuterClass2] = useState('component282');
    const [innerClass2, setInnerClass2] = useState('mehapes');

    const handleClick = () => {
        setOuterClass('component282');
        setInnerClass('mehapes');

        setOuterClass2('component286');
        setInnerClass2('megayes');
    };

    const handleClick2 = () => {
        setOuterClass('component286');
        setInnerClass('megayes');

        setOuterClass2('component282');
        setInnerClass2('mehapes');
    };

  	return (
    		<Row className='loginCompany'>
                
                {isTabletOrTablet ? ("") : (
                                    <Col md={6}>


                                    <div className='frameParent'>
                                            <div className='parent'>
                                          </div>
                                          </div>
                                          <div className='parent1'>
                                                <img className='lineDuotoneNotesNotes' alt="" width = "50px" height = "80px" src={require(`../../images/kohi.png`)} />
                                          </div>
                                          </Col>
                )}
                


                                                                                          <Col className='loginCompanyInner' md={6}>
                    
                    <div className='loginInfo'>
  
  
                    <div className='loginText'>התחברות</div>
  
                      <div style = {{height: "48px"}}/>
  
                  <div className='component286Parent'>
                  <div className={outerClass} onClick={handleClick}>
                            <div className={innerClass}>מגייס עובדים</div>
                        </div>
                      <div className={outerClass2} onClick={handleClick2}>
                          <div className={innerClass2}>מחפש עבודה</div>
                  </div>
                  </div>
  
                  <div style = {{height: "60px"}}/>

                    <div className = "centerMobile">

                  <div className="underline-button-parent">
                      <div>
                      <div className="divTzor">צור עכשיו</div>
                      </div>
                      <div className="header">
                      <div className="div1">אין לך חשבון?</div>
                      </div>
                  </div>
  
          <div style = {{height: "36px"}}/>
  
                  <div className="frame-parent">
                      <div className="login-button-parent">
  
                          <div className="login-button">
                              <img className="logo-icon" alt="" src={require('../../images/linkedinlogo.png')} />
                          <div className="childrenContinueWith">המשך עם Linkdin</div>
  
                          </div>
                              <div className="login-button">
                                  <img className="logo-icon" alt="" src={require('../../images/googlelogo.png')} />
                              <div className="childrenContinueWith">המשך עם Google</div>
                              </div>
                          </div>
  
<div className="divOr">
<div className="child" />
<div className="div1Or">או</div>
<div className="item" />
</div>

                  </div>
  
                  <div style = {{height: "42px"}}/>
  
              <form onSubmit={handleLogin}>
                  <div className="frameGroup">
                      <div className="group">
                      <div className="loginButton">
                          <input
                          type="email"
                          className="inputTag"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
                          maxLength={20}
                          placeholder="מייל"
                          />
                      </div>
  
                          <div className="loginButton">
                          <div
                          className="eyeSlashIcon"
                          onClick={() => setVisible(!visible)}
                          >
                          {visible ? <img className="logo-icon-eye" alt="" src={require('../../images/un-eye-slash.png')} /> : <img className="logo-icon-eye" alt="" src={require('../../images/eye-slash.png')} />}
                          </div>
                          <input
                          type={visible ? "text" : "password"}
                          className="inputTag"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          required
                          maxLength={20}
                          placeholder="סיסמא"
                          />
                      </div>
                  </div>
                </div>
              
              <div style = {{height: "18px"}}/>
            
                {isTabletOrTablet ? (
                    <p style = {{color: "red", fontSize: "15px", position: "absolute", marginTop: 35, marginLeft: '-20px', width: "350px", direction: "rtl"}}>{errorMessage}</p>
                ) : (
                    <p style = {{color: "red", fontSize: "15px", position: "absolute", marginTop: 9, marginLeft: '37px', width: "350px", direction: "rtl"}}>{errorMessage}</p>
                )}
              
  
              <div className="underline-button-parent-pass">
                  <div className="underline-button-pass">
                  <div className="childrenPass" onClick={toggleModal}>שכחת סיסמא?</div>
                  </div>
                  <div className="parentPass">
                  <div className="divRem">זכור אותי</div>
                  <input
                                  type="checkbox"
                                  className="checkboxStyle"
                                  />
                  </div>
              </div>

                <div className='connectButton'>
              <button className="button" type="submit">
                  <b className="button1">התחבר</b>
              </button>
              </div>
              </form>
              
              </div>
  
              {showModal && (
                  <div className="modal">
                                  <Modal show={showModal} onHide={toggleModal} size = 'lg' centered = {true}>
                                  <div className="divModal">
                                      <div className="parent">
                                      <div className="div1Modal" style = {{marginRight: "60px", marginTop: "60px", direction: "rtl"}}>שכחת את הסיסמא?</div>
                                      <div className="div2Modal" style = {{marginRight: "60px", direction: "rtl"}}>
                                      <p className="p">לא נורא...</p>
                                      <p className="p">מה כתובת המייל איתה נרשמת לאתר?</p>
                                      </div>
                                      </div>
                                      <div className="fill-button">
                                      
                                      <form onSubmit={handleLogin}>
                  <div className="frameGroup">
                      <div className="group">
                          <input
                          type="email"
                          className="inputTag"
                          onChange={(e) => setResetEmail(e.target.value)}
                          value={resetEmail}
                          required
                          maxLength={20}
                          placeholder="מייל"
                          />
                      </div>
                      </div>
                      </form>
  
  
                                      </div>
                                      <div className="continueButton">
                                      <b className="button1">המשך</b>
                                      </div>
                                  </div>
              </Modal>
                  </div>
              )}
  

  
  
                  </div>
  
                    </Col>
                              														</Row>
                              												
                                                                                        );
                            														};
                            														
                            														export default LoginPage;
                            														