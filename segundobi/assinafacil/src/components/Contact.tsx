import { useState, type FormEvent } from "react"
import Button from "./Button"

export default function Contact() {
  // Valores para capturar dados dos inputs
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendContactEmail() {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
		    email,
		    message
      }),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      throw new Error(body.error ?? "Erro ao enviar mensagem.");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await sendContactEmail();
      setEmail("");
      setMessage("");
      alert("E-mail enviado com sucesso.");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Erro ao enviar mensagem.");
    }
  }

  return (
    <section className="container" id="contact">
      <header>
        <p>Fale Conosco</p>
        <h2>Entre em contato</h2>
        <span>
          Possui dúvidas, sugestões ou deseja conhecer mais sobre o AssinaFácil? Entre em contato conosco.
        </span>
      </header>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="Digite sua mensagem"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <span>
          <Button text="Enviar Mensagem" />
        </span>
      </form>
    </section>
  )
}
