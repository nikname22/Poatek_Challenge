import { useState } from "react";
import "./SecondChallenge.css";

function SecondChallenge() {
  const [str, setStr] = useState("");

  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  return (
    <section className="container">
      <div className="challenge-title">
        2) Verifique se a string é um palíndromo (quando o inverso é exatamente
        igual à forma original).
      </div>
      <input
        className="challenge-input"
        type="text"
        placeholder="Digite uma palavra"
        value={str}
        onChange={(e) => setStr(e.target.value)}
      />
      {str !== "" ? (
        <div>
          {str.trim().toLowerCase() ===
          reverseString(str).trim().toLowerCase() ? (
            <div className="second-challenge-result">Palindroma</div>
          ) : (
            <div className="second-challenge-result">Não é palindroma</div>
          )}
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}

export default SecondChallenge;