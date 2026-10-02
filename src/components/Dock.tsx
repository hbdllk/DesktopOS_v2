import styles from './styles/Dock.module.css'
import Icon from './Icon'
import { useStore } from '../store/useStore'

function Dock() {
    const openWindow = useStore((s) => s.openWindow)

    return (
        <div className={styles.dock}>
            <Icon name="Counter" onClick={() => openWindow("Counter")} />
        </div>
    );
}

export default Dock
