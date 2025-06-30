import styles from './styles.module.scss';
import classNames from 'classnames';

function Button({ content, isPrimary = true }) {
    const { btn, primaryBtn, seconBtn } = styles;
    return (
        <button
            className={classNames(btn, {
                [primaryBtn]: isPrimary,
                [seconBtn]: !isPrimary
            })}
        >
            {content}
        </button>
    );
}

export default Button;
