const activation = ({ to, token }) => ({
  from: `" 🤟 Tutteam" ${process.env.MAIL_USER}`,
  to,
  subject: "Confirma tu correo",
  html: `
        <h2>Un último paso</h2>
        <p>Para confirmar tu cuenta, haz clic en el siguiente enlace: 
        <a href="${process.env.SERVER_URL}:${process.env.PORT}/confirmation/${token}" target="_blank"> ${process.env.SERVER_URL}:${process.env.PORT}/confirmation/${token} </a>
        </p>
        <p>Muchas gracias.</p>
      `,
});

const wellcome = ({ to }) => ({
  from: `" 🤟 Tutteam" ${process.env.MAIL_USER}`,
  to,
  subject: `Querido/a subscriptor/a, tu cuenta ha sido verificada`,
  html: `
      <h2> Gracias por suscribirte. </h2>
      <p> Tu cuenta ha sido verificada. </p>
      <p> Bienvenido/a/e ! </p>  
    `,
});

module.exports = {
  activation,
  wellcome,
};
