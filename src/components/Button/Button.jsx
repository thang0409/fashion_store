import styles from './styles.module.scss';
import classNames from 'classnames';

function Button({ className = '', content, isPrimary = true }) {
    const { btn, primaryBtn, seconBtn } = styles;
    return (
        <button
            className={classNames(btn, className, {
                [primaryBtn]: isPrimary,
                [seconBtn]: !isPrimary
            })}
        >
            {content}
        </button>
    );
}

export default Button;
