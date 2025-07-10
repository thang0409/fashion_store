import Inputcommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
function Login() {
    const { container, title, boxRemember, loginBtn, lostPass } = styles;
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>

            <Inputcommon label={'Username or Email'} type={'text'} isRequired />
            <Inputcommon label={'Password'} type={'password'} isRequired />

            <div className={boxRemember}>
                <input type='checkbox' />
                <span>Remember me</span>
            </div>

            <Button className={loginBtn} content={'LOGIN'} />

            <div className={lostPass}>Lost your pasword?</div>
        </div>
    );
}

export default Login;
