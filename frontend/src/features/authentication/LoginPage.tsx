import { useState, useEffect } from 'react';
import './loginpage.css';
import { Login } from './Login';
import { loginUser } from './loginAPI';
import { jwtDecode } from 'jwt-decode';
import { Modal } from 'react-bootstrap';



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

    
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
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
                console.error(error);
            });
    }
    

    
  	return (
    		<div className='loginCompany'>

     

      			<div className='loginCompanyInner'>
                    
                  <div className='loginInfo'>


                  <div className='loginText'>התחברות</div>

                    <div style = {{height: "48px"}}/>

                <div className='component286Parent'>
                    <div className='component286'>
                        <div className='megayes'>מגייס עובדים</div>
                    </div>
                    <div className='component282'>
                        <div className='mehapes'>מחפש עבודה</div>
                </div>
                </div>

                <div style = {{height: "60px"}}/>

                <div className="underline-button-parent">
                    <div className="underline-button">
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

                        <div className="line-or">

                        <div className="line-or-child" />

                        <div className="line-or-item" />

                        <div className="divOr">או</div>
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
                        {visible ? <img className="logo-icon" alt="" src={require('../../images/un-eye-slash.png')} /> : <img className="logo-icon" alt="" src={require('../../images/eye-slash.png')} />}
                        </div>
                        <input
                        type={visible ? "text" : "password"}
                        className="inputTag"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        maxLength={15}
                        placeholder="סיסמא"
                        />
                    </div>
                </div>
              </div>
            

            <div style = {{height: "18px"}}/>

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
                

            <button className="button" type="submit">
                <b className="button1">התחבר</b>
            </button></form>


                </div>

      			</div>


                                                                                    <div className='frameParent'>
                                                                                            <div className='parent'>
                              															</div>
                              															</div>
                              															<div className='parent1'>
                                																<img className='lineDuotoneNotesNotes' alt="" width = "50px" height = "80px" src={require(`../../images/kohi.png`)} />
                              															</div>
                              														</div>
                              												
                                                                                        );
                            														};
                            														
                            														export default LoginPage;
                            														