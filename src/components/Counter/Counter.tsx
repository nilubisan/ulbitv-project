import {useState} from "react";

import styles from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((count) => count + 1)
    }

    return (
        <div>
            {count}
            <button className={styles.button} onClick={increment}>Increment</button>
        </div>
    )
}