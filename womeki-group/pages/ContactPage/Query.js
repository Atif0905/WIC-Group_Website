import { useState } from "react";
import styles from "./Query.module.css";
const Query = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    query: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form className={styles["query-container"]} onSubmit={handleSubmit}>
      <div className={styles["query-input-container"]}>
        <label className={styles["query-label"]} htmlFor="name">
          Name
        </label>
        <input
          className={styles["query-input"]}
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles["query-input-container"]}>
        <label className={styles["query-label"]} htmlFor="email">
          Email
        </label>
        <input
          className={styles["query-input"]}
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles["query-input-container"]}>
        <label className={styles["query-label"]} htmlFor="contact">
          Contact
        </label>
        <input
          className={styles["query-input"]}
          type="text"
          id="contact"
          name="contact"
          placeholder="Enter your contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles["query-input-container"]}>
        <label className={styles["query-label"]} htmlFor="query">
          Enter your query
        </label>
        <textarea
          className={styles["query-textarea"]}
          id="query"
          name="query"
          placeholder="Enter your query"
          value={formData.query}
          onChange={handleChange}
          required
        />
      </div>
      <button className={styles["query-button"]} type="submit">
        Submit
      </button>
    </form>
  );
};
export default Query;