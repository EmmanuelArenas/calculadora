import "../styles/Input.css";

const Input = ({ input }) => {
  let sig = "+-*/";
  for (let i = 0; i < input.length; i++) {
    let first = sig.includes(input[i]);
    let second = sig.includes(input[i + 1]);
    if (first && second) {
      input = "";
      alert(
        "Error no puede colocar dos signos consecutivos en esta calculadora"
      );
    }
  }
  return <div className="input">{input}</div>;
};
export default Input;
