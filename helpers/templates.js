const activation = ({ to, token }) => ({
  from: `" 🤟 Tutteam" ${process.env.MAIL_USER}`,
  to,
  subject: "Confirma tu correo",
  html: `
        <h2>Un último paso</h2>
        <p>Para confirmar tu cuenta, haz clic en el siguiente enlace: 
        <a href="${process.env.VERCEL_URL}:${process.env.PORT}/auth/confirmation/${token}" target="_blank"> ${process.env.VERCEL_URL}/auth/confirmation/${token} </a>
        </p>
        <p>Muchas gracias.</p>
      `,
});

const wellcome = ({ to, username }) => ({
  from: `" 🤟 Tutteam" ${process.env.MAIL_USER}`,
  to,
  subject: `${username || ""}, tu cuenta ha sido verificada`,
  html: `
      <h2> Gracias por suscribirte ${username || ""}. </h2>
      <p> Tu cuenta ha sido verificada. </p>
      <p> Bienvenido/a/e ! </p>  
    `,
});

module.exports = {
  activation,
  wellcome,
};
