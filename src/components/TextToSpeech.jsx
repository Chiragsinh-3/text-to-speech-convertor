import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../App.css";
import styles from "./TextToSpeech.module.css";

const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(null);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();
    console.log(voices,synth);
    setUtterance(u);
    setVoice(voices[0]);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    } else {
      utterance.voice = voice;
      utterance.pitch = pitch;
      utterance.rate = rate;
      utterance.volume = volume;
      synth.speak(utterance);
    }

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(false);
  };

  const handleVoiceChange = (event) => {
    const voices = window.speechSynthesis.getVoices();
    setVoice(voices.find((v) => v.name === event.target.value));
  };

  const handlePitchChange = (event) => {
    setPitch(parseFloat(event.target.value));
  };

  const handleRateChange = (event) => {
    setRate(parseFloat(event.target.value));
  };

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
  };

  return (
    <div className={styles.voice}>
      <div>
        <label>
          Voice:
          <br />
          <select value={voice?.name} onChange={handleVoiceChange}>
            {window.speechSynthesis.getVoices().map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <br />
      <div>
        <label>
          Pitch:
          <br />
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.03"
            value={pitch}
            onChange={handlePitchChange}
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Speed:
          <br />
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.03"
            value={rate}
            onChange={handleRateChange}
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Volume:
          <br />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </label>
      </div>

      <br />
      <div>
        <button onClick={handlePlay}>{isPaused ? "Resume" : "Play"}</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};
TextToSpeech.propTypes = {
  text: PropTypes.string.isRequired,
};
export default TextToSpeech;
