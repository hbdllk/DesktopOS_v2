import { useState } from 'react'
import styles from './styles/Counter.module.css'

function Counter() {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState('')

    return (
        <div className={styles.counter}>
            <div className={styles.app}>
                <div className={styles.count}>
                    <span>{count}</span>
                </div>
                <div className={styles.buttons}>
                    <button
                        className={styles.button}
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => setCount(count - 1)}
                    >
                        -
                    </button>
                </div>
            </div>
            <div>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Alert text'
                />
                <button onClick={() => alert(message)}>Alert</button>
            </div>
        </div>
    );
}

export default Counter
