import { useState } from "react";
import TextToSpeech from "./TextToSpeech";
import styles from "./InputText.module.css";

function InputText() {
  const initialText =
    "The quick brown fox jumps over the lazy dog. This sentence is often used to test typewriters and computer keyboards. It contains every letter of the English alphabet, making it an ideal choice for font display testing. Speech synthesis technology allows computers and mobile devices to convert written text into spoken words, providing accessibility for visually impaired users and enhancing user experience in various applications.";

  const [text, setText] = useState(initialText);

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Text To Speech</h1>
        <TextToSpeech text={text} />
      </div>
      <textarea
        rows="8"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.textarea}
      ></textarea>
    </div>
  );
}

export default InputText;