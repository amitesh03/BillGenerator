import React from "react";
import styles from "./YourInfo.module.css";
export default function YourInfo(props) {
    function handleName(event){
        props.setName(event.target.value);
    }
    function handleEmail(event){
        props.setEmail(event.target.value);
    }
    function handlePhone(event){
        props.setPhone(event.target.value);
    }
    return (
        <div className={styles.form}>
            <h1 className={styles.heading}>Your Information</h1>
            <form className={styles.inner}>
                    <label className={styles.label1} >Name</label>
                    <input type="text" value={props.name} onChange={handleName}className={styles.name} placeholder="Enter Your Name" />

                    <label className={styles.label2}>Email</label>
                    <input type="email" value={props.email} onChange={handleEmail} className={styles.email} placeholder="Enter Your Email" />

                    <label className={styles.label3}>Phone</label>
                    <input type="tel"  value={props.phone} onChange={handlePhone} className={styles.phone} placeholder={"\u{1F1EE}\u{1F1F3} Enter Your Phone No."} />

                <br />
            </form>
        </div>
    );
}