//A senha deve ser exibida na tela juntamente com um botao de "copiar" que copia o texto da senha para a area de transferencia. Apos copiar, o botao deve mudar seu texto para "Copiado" e, apos gerar uma nova senha, o texto deve voltar para "Copiar"
import { useState } from "react";
import Input from "../components/input";

function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  const [customSize, setCustomSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  const passwordSize = showInput ? customSize : 8


  function generate() {
    const characters = "!@#$%¨&*1234567890qwertyuiop´[asdfghjklç~]zxcvbnm,.;QWERTYUIOP`{ASDFGHJKLÇ^}ZXCVBNM<>:/*-"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      let randomNumber = Math.floor(Math.random() * characters.length)

      newPassword += characters[randomNumber]
    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado")
  }

  return (
    <div className="app">
      <h1>Gerador de senha</h1>
      <div>
        <label htmlFor="showInput">Definir tamanho da senha:</label>
        <input 
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}
        />
      </div>
      {showInput && (
        <div>
          <label htmlFor="passwordSize">Tamanho:</label>
          <Input passwordSize={customSize} setPasswordSize={setCustomSize} />
      </div>
      )}
      
      <button onClick={generate}>Gerar senha de {passwordSize} caracteres</button>
      <button onClick={copyToClipboard}> {copyText} </button>
      <div>{password}</div>
    </div>
  )
}

export default App
