import styles from "./Summary.module.css";
export default function Summary(props) {
    const planArray = ["Arcade", "Advanced", "Pro"];
    return (
        <div className={styles.form}>
            <h1 className={styles.heading}>Summary</h1>
            <div className={styles.details}>
                <p><b>Name</b> : {props.name}</p>
                <p><b>Email</b> : {props.email}</p>
                <p><b>Phone</b> : {props.phone}</p>
                <p><b>Plan</b> : {planArray[props.plan - 1]}</p>
                <p><b>Total</b> : {props.total}</p>
                <hr />
                <p><b>Grand Total</b> : </p>
                <p className={styles.grandTotal}>{props.grandTotal}</p>
                {props.err===true? <p className={styles.err}>You cannot leave any field empty!</p>: ""}
            </div>
        </div>
    );
}