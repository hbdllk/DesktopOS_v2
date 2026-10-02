import styles from './styles/Window.module.css'

type WindowProps = {
    title: string
    x?: number
    y?: number
    onClose?: () => void
    onMaximize?: () => void
    isMaximized?: boolean
}

function Window({ title, x = 100, y = 50, isMaximized, onClose, onMaximize, children }: WindowProps & {children: React.ReactNode}) {
    return (
        <div
            className={`${styles.window} ${isMaximized ? styles.maximized : ''}`}
            style={isMaximized ? undefined : { left: x, top: y }}
        >
            <div className={styles.titlebar}>
                <div className={styles.buttons}>
                    <span className={styles.close} onClick={onClose} />
                    <span className={styles.minimize} />
                    <span className={styles.maximize} onClick={onMaximize}/>
                </div>
                <span className={styles.title}>
                    {title}
                </span>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}

export default Window
