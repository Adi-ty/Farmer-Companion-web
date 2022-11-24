import React from 'react';
import {IoLogoGooglePlaystore} from 'react-icons/io5'
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
            <a href='https://github.com/labmember003/farmer_companion_bpit'>
            <button className={styles.btn_android}>
            <IoLogoGooglePlaystore className={styles.download} /> Download</button>
            </a>
            
        </div>
        
    </div>
  )
}

export default Home