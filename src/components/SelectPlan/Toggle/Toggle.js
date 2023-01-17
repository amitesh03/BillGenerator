import { useState } from "react";
import styles from "./Toggle.module.css";
export default function Toggle({ label, toggled, onClick }) {
  const [isToggled, toggle] = useState(toggled);
  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };
  return (
    <label>
      <input className={styles.ip} type="checkbox" defaultChecked={isToggled} onClick={callback} />
      <span></span>
      <strong>{label}</strong>
    </label>
  );
}