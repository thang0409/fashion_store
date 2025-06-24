import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constans';
import styles from './styles.module.scss';
import Menu from './Menu/Menu';
import Logo from '@icons/image/Logo-retina.png';
import reloadIcon from '@icons/svgs/reload_icon.svg';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cart_icon.svg';

function MyHeader() {
    const { containerBox, containerBoxIcon, containerMenu, containerHeader } =
        styles;
    return (
        <div className={containerHeader}>
            {/* Khối bên trái */}

            <div className={containerBox}>
                <div className={containerBoxIcon}>
                    {dataBoxIcon.map((item) => {
                        return <BoxIcon type={item.type} href={item.href} />;
                    })}
                </div>
                <div className={containerMenu}>
                    {dataMenu.slice(0, 3).map((item) => {
                        return <Menu content={item.content} href={item.href} />;
                    })}
                </div>
            </div>

            {/* Khối giữa */}

            <div>
                <img
                    src={Logo}
                    alt='logo'
                    style={{
                        width: '153px',
                        height: '53px'
                    }}
                />
            </div>

            {/* Khối bên phải */}
            <div className={containerBox}>
                <div className={containerMenu}>
                    {dataMenu.slice(3, dataMenu.length).map((item) => {
                        return <Menu content={item.content} href={item.href} />;
                    })}
                </div>

                <div className={containerBoxIcon}>
                    <img width={26} height={26} src={reloadIcon} alt='' />
                    <img width={26} height={26} src={heartIcon} alt='' />
                    <img width={26} height={26} src={cartIcon} alt='' />
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
