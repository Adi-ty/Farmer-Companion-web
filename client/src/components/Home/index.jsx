import React from 'react';
import {IoLogoGooglePlaystore} from 'react-icons/io5'
import {AiFillApple} from 'react-icons/ai'
import {Link} from "react-router-dom"
import styles from "./styles.module.css"

function Home() {
  return (
    <div className={styles.main_container}>
        <nav className={styles.navbar}>
            <div className={styles.right}>
                <h1>Farmer Companion</h1>
            </div>
            <div className={styles.left}>
                <Link to="/signup">
                    <button type="button" className={styles.btn}>
                        Sign Up
                    </button>
				</Link>
                <Link to="/login">
						<button type="button" className={styles.btn}>
							Sign In
						</button>
				</Link>
                <Link to="/premium">
						<button type="button" className={styles.white_btn}>
							Premimum
						</button>
				</Link>
            </div>
        </nav>
        <div className={styles.home} >
            <h1>Farmer Companion</h1>
            <h3>Making farming in India easier.</h3>
            <button className={styles.btn_android}><IoLogoGooglePlaystore className={styles.download} /> Download</button>
            <button className={styles.btn_apple}><AiFillApple className={styles.download} /> Download</button>
        </div>
        
    </div>
  )
}

export default Home