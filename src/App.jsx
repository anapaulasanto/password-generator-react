//A senha deve ser exibida na tela juntamente com um botao de "copiar" que copia o texto da senha para a area de transferencia. Apos copiar, o botao deve mudar seu texto para "Copiado" e, apos gerar uma nova senha, o texto deve voltar para "Copiar"
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")

  function generate() {
    const characters = "!@#$%¨&*1234567890qwertyuiopasdfghjlçzxcvbnmZXCVBNMQWERTYUIOPASDFGHJKLÇ,.;/"
    let newPassword = ""
    for (let i = 0; i < 12; i++) {
      let randomNumber = Math.floor(Math.random() * characters.length)

      newPassword += characters[randomNumber]
    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function handleClick() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado")
  }

  return (
    <div className="className">
      <h1>Gerador de senha</h1>
      <button onClick={generate}>Gerar senha</button>
      <button onClick={handleClick}> {copyText} </button>
      <div>{password}</div>
    </div>
  )
}

export default App
