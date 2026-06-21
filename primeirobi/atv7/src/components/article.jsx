import banner from "../assets/front-end-banner.jpg";

function Article({ post }) {
  return (
    <article>
      <h2>{post.titulo}</h2>
      <p><strong>{post.autor}</strong></p>
      <time>{post.data}</time>

      {post.conteudo.map((p, index) => (
        <p key={index}>{p}</p>
      ))}

      <figure>
        <img src={banner} alt="Banner" />
        <figcaption>Banner de desenvolvimento web</figcaption>
      </figure>
    </article>
  );
}

export default Article;