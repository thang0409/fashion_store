import { useState } from 'react';
import styles from './styles.module.scss';
import { FaRegEye } from 'react-icons/fa6';
import { FaRegEyeSlash } from 'react-icons/fa6';

function InputCommon({ label, type, isRequired = false }) {
    const { labelInput, boxInput, container, boxIcon } = styles;
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const isPassword = type === 'password';
    const isShowTextPass = type === 'password' && showPassword ? 'text' : type;
    return (
        <div className={container}>
            <div className={labelInput}>
                {label}
                {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input type={isShowTextPass} />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputCommon;
