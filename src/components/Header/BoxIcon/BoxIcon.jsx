import styles from '../styles.module.scss';
import facebookIcon from '@icons/svgs/facebook_icon.svg';
import instaIcon from '@icons/svgs/insta_icon.svg';
import ytbIcon from '@icons/svgs/ytb_icon.svg';

function BoxIcon({ type, href }) {
    const { boxIcon } = styles;

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return facebookIcon;
                break;
            case 'insta':
                return instaIcon;
                break;
            case 'ytb':
                return ytbIcon;
                break;
            default:
                break;
        }
    };
    return (
        <div className={boxIcon}>
            <img src={handleRenderIcon(type)} width={18} height={18} />
        </div>
    );
}

export default BoxIcon;
