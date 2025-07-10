import { useState, useEffect, useContext } from 'react';

import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constans';
import styles from './styles.module.scss';
import Menu from './Menu/Menu';
import Logo from '@icons/image/Logo-retina.png';
import { TfiReload } from 'react-icons/tfi';
import { LuHeart } from 'react-icons/lu';
import { LuShoppingCart } from 'react-icons/lu';
import { SideBarContext } from '@/contexts/SideBarProvider';

function MyHeader() {
    const {
        containerBox,
        containerBoxIcon,
        containerMenu,
        containerHeader,
        container
    } = styles;

    const [scrollHeader, setScrollHeader] = useState(false);
    const { setIsOpen, setType } = useContext(SideBarContext);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrollHeader(true);
            } else {
                setScrollHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`${container} ${scrollHeader ? styles.fixed : ''}`}>
            <div className={containerHeader}>
                {/* Khối bên trái */}

                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item, index) => {
                            return (
                                <BoxIcon
                                    key={index}
                                    type={item.type}
                                    href={item.href}
                                />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item, index) => {
                            return (
                                <Menu
                                    content={item.content}
                                    key={index}
                                    href={item.href}
                                />
                            );
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
                        {dataMenu
                            .slice(3, dataMenu.length)
                            .map((item, index) => {
                                return (
                                    <Menu
                                        key={index}
                                        content={item.content}
                                        href={item.href}
                                        setIsOpen={setIsOpen}
                                    />
                                );
                            })}
                    </div>

                    <div className={containerBoxIcon}>
                        <TfiReload
                            style={{
                                fontSize: '20px'
                            }}
                            onClick={() => handleOpenSideBar('compare')}
                        />
                        <LuHeart
                            style={{
                                fontSize: '20px'
                            }}
                            onClick={() => handleOpenSideBar('wishlist')}
                        />
                        <LuShoppingCart
                            style={{
                                fontSize: '22px'
                            }}
                            onClick={() => handleOpenSideBar('cart')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
