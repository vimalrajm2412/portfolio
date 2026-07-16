import { useState } from "react";
import { motion } from "framer-motion";

export function OnboardingModal({ onSubmit }) {
  const [name, setName] = useState("");

  return (
    <motion.div
      className="modal-shell"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.form
        className="welcome-card"
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: 16, filter: "blur(10px)" }}
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(name);
        }}
      >
        <p className="eyebrow">Welcome</p>
        <h2>Welcome. What should I call you?</h2>
        <input
          autoFocus
          className="text-input"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
        />
        <button type="submit" className="primary-btn">
          Continue
        </button>
      </motion.form>
    </motion.div>
  );
}
