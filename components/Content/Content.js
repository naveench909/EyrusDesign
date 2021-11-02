import React from 'react'
import Body from './Body/Body'
import Header from './Header/Header'
import styles from './Content.module.css'
function Content() {
    return (
        <div className={styles.container}>
            {/* <Header /> */}
            <Body />
        </div>
    )
}

export default Content
