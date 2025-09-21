import { useNavigate } from 'react-router-dom';
import successIcon from '../assets/success-icon.svg';
const SuccessMsg = ()=>{
    const navigate = useNavigate();
    return (
        <div className="success-msg-container bg-white flex flex-col justify-between items-center py-20 px-4 h-full w-full">
            <div className='flex flex-col items-center gap-4'>
                <div className="w-25">
                    <img className="w-fit" src={successIcon} alt="success-icon" />
                </div>
                <p className='capitalize text-center font-normal text-3xl text-(--primary-color)'>registration successful!</p>
            </div>
            <button className='primary-btn' onClick={()=>navigate('/login')}>Go to Login</button>
        </div>
    )
}

export default SuccessMsg;