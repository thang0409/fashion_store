import { useContext } from 'react';
import classNames from 'classnames';
import { MdClose } from 'react-icons/md';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import Login from '@components/ContentSideBar/Login/Login';

function SideBar() {
    const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen } = useContext(SideBarContext);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={container}>
            <div
                className={classNames({
                    [overlay]: isOpen
                })}
                onClick={handleToggle}
            ></div>
            <div
                className={classNames(sideBar, {
                    [slideSideBar]: isOpen
                })}
            >
                {isOpen && (
                    <div className={boxIcon} onClick={handleToggle}>
                        <MdClose />
                    </div>
                )}

                <Login />
            </div>
        </div>
    );
}

export default SideBar;
