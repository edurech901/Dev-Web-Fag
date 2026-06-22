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
        <p>Envie sua dúvida</p>
        <h2>Entre em contato</h2>
        <span>
          Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um
          orçamento, uma dúvida técnica de algum de nossos produtos. Estamos à
          disposição para responder.
        </span>
      </header>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Seu melhor Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <span>
          <Button text="Enviar" />
        </span>
      </form>
    </section>
  )
}
