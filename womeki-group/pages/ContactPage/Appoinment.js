import { useState } from "react";
import styles from "./Appoinment.module.css";
import emailjs from "emailjs-com";
const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    reason: "",
    personToTalk: "Gaurav Tonger",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bapecsi",
        "template_u94g49o",
        e.target,
        "FX1JN9-1U-8-AEoN5"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      {isSubmitted ? (
        <div className={styles["success-message"]}>
          <p>Form submitted successfully!</p>
        </div>
      ) : (
        <form className={styles["form-container"]} onSubmit={handleSubmit}>
          <div className={styles["form-element"]}>
            <label className={styles["form-label"]} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-element"]}>
            <label className={styles["form-label"]} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-element"]}>
            <label className={styles["form-label"]} htmlFor="companyName">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Enter your company name"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-element"]}>
            <label className={styles["form-label"]} htmlFor="reason">
              Reason
            </label>
            <input
              type="text"
              id="reason"
              name="reason"
              placeholder="Enter your reason"
              value={formData.reason}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-element"]}>
            <label className={styles["form-label"]} htmlFor="personToTalk">
              With whom do you want to talk
            </label>
            <select
              id="personToTalk"
              name="personToTalk"
              value={formData.personToTalk}
              onChange={handleChange}
            >
              <option value="Gaurav Tonger">Gaurav Tonger</option>
              <option value="Anjali Bhardwaj">Anjali Bhardwaj</option>
              <option value="Rohit Khari">Rohit Khari</option>
            </select>
          </div>
          <button className={styles["form-button"]} type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};
export default AppointmentForm;