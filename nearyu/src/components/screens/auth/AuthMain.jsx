import React,{useState} from 'react';
import AuthLeft from '../../includes/AuthLeft';
import styled from 'styled-components';
import SignUp from './SignUp';
import Login from './Login';
import Verification from './Verification';

const AuthMain = (props) => {
const [modalType, setModalType] = useState("login");



    return (
        props.showSignUp && <Authentication>
            <AuthLeft />
            {modalType === "signup"? <SignUp />: modalType === "login"? <Login />: modalType === "verification" ?<Verification /> : null}
       </Authentication>
    )
}

export default AuthMain;

const Authentication = styled.section`
    position: fixed;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    margin: 0 auto;
    background-color: #fff;
    width: 90%;
    max-width: 800px;
    height: 600px;
    z-index: 9;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    transition: ease-in-out 0.5s;
    opacity: 1;
    overflow: hidden;
    animation: slide 0.5s ease;
    @keyframes slide {
        0% {
            top: -600px;
        }
        100% {
            top:50%;
        }
    }
`;