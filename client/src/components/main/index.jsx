import React from "react"
import { Link } from "react-router-dom"
import styles from "./styles.module.css";
import {CgProfile} from "react-icons/cg";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<>
		<nav className={styles.navbar}>
					<h1>Farmer Companion</h1>
					<button className={styles.white_btn} onClick={handleLogout}>
						Logout
					</button>
				</nav>					

			<div className={styles.main_container}>
							
			<div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className={styles.card}>
		<CgProfile className={styles.profile} />
        <h1>Ram Singh</h1>
        <p>
		<p className={styles.title}>Phulhera, Uttar Pradesh</p>
        <p>Kharif Crop Farmer</p>
        
        <p>
			<Link to="/premium">
			<button>Buy Premimum</button>
			</Link>
          
        </p> 
        </p>
      </div>
	  
    </div>
	</div>
		</>
	);
};

export default Main;