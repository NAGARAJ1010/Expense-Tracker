import { useNavigate } from 'react-router-dom';
import successIcon from '../assets/success-icon.svg';
const SuccessMsg = ({toggleMode, setToggleMode})=>{
    const navigate = useNavigate();
    const routeToLogin = ()=>{
        navigate('/login');
        setToggleMode('login');
        console.log(toggleMode);
    }
    return (
        <div className="success-msg-container bg-white flex flex-col justify-between items-center py-20 px-4 h-full w-full">
            <div className='flex flex-col items-center gap-4'>
                <div className="w-25">
                    <img className="w-fit" src={successIcon} alt="success-icon" />
                </div>
                <p className='capitalize text-center font-normal text-3xl text-(--primary-color)'>registration successful!</p>
            </div>
            <div className='w-[80%]'>
                <button className='primary-btn' onClick={routeToLogin}>Go to Login</button>
            </div>
        </div>
    )
}

export default SuccessMsg;