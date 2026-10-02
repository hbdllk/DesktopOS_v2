import styles from './styles/Icon.module.css'

type IconProps = {
    name: string
    onClick?: () => void
}

function Icon({name, onClick}: IconProps) {
    return (
        <button className={styles.icon} onClick={onClick}>
            <img src={'/Icons/' + name.toLowerCase() + '.svg'} alt="" />
        </button>
    );
}

export default Icon
