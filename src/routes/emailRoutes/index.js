//const jwt = require("jsonwebtoken")
const { 
  sendEmail
} = require('../../controllers/nodemailer');

const router = require('express').Router();

const buf = "sdsaadadddadadadsa"
//const buf = jwt.sign({ emailtoactivate: validated.value.email }, process.env.USER_RECOVER2_TOKEN, { expiresIn: 60 * 10});//10 minutos
var resetHtml=
          `
          <div><h2><p>Se ha solicitado recuperar el acceso a la plataforma.</h2></p></div>
          <div><h2><p>A continuación podrá elegir el nombre de usuario de la cuenta a recuperar, cada enlace pertenece a cada usuario.</h2></p></div>
          <div><h2><p>Al acceder al enlace sólo se le solicitará la nueva contraseña la cual irá ligada al nombre de usuario de la cuenta del enlace.</h2></p></div>
          <div></div>      
          `
          // for(const user of users){
          //   user.token = jwt.sign({ user: user._id, email: email }, process.env.USER_RECOVER_TOKEN, {
          //     expiresIn: 60 * 10
          //   });
          //   contentHtml +=
          //   `
          //   <div><h2><p><a href='https://app.econtrols.com.ar/recover?vkey=${user.token}'>Click para recuperar "${user.username}"</a></p></h2></div>
          //   <div><p>Enlace para copiar y pegar en el navegador web</p>
          //   <p>https://app.econtrols.com.ar/recover?vkey=${user.token}</p></div>
          //   <div></div>
          //   `
          // }
resetHtml +=
`     
<div><h2><p>En caso de no haberlo solicitado puede desestimar este correo.</h2></p></div>
`  

var welcomeAndActivateHtml=
      `
      <div><h2><p>Gracias por registrarse en nuestra plataforma</h2></p></div> 
           
      <div><h2><p><a href='https://beffshop??/activate?vkey=${buf}'>Click para confirmar cuenta</a></p></h2></div>
      <div><p>O bien puede ingresar el siguente enlace en el navegador web</p>
      <p>https:/beffshop??/activate?vkey=${buf}</p></div>
      <div></div>
      <div><p>Caso contrario, puede desestimar este correo.</p></div>
      `  

function validateEmail(input) {
  if (/^.+@.+\..+$/.test(input)) {
    return input
  }
  return undefined
}

function validateMotive(input){
  if (input === "activate" || input === "reset") {
    return input
  }
  return undefined
}

router.post('/send', async (req, res) => { 
  try {
    const emailTo = validateEmail(req.body.emailTo) || "beefshophenry@gmail.com"
    const motive = validateMotive(req.body.motive) || 'test'
    let subject = "Test Email ✔" // esta variable la vamos a hardcodear desde el back asi que no hace falta chequear
    let htmlContent =  welcomeAndActivateHtml // esta variable la vamos a hardcodear desde el back asi que no hace falta chequear
    if (motive === 'test') {
      subject = "Test email ✔" // esta variable la vamos a hardcodear desde el back asi que no hace falta chequear
      htmlContent =  '<div><h2>Test email</h2></div>' // esta variable la vamos a hardcodear desde el back asi que no hace falta chequear
    } else if (motive === 'activate'){
      subject = "Activate account ✔" // esta variable la vamos a hardcodear desde el back asi que no hace falta chequear
      htmlContent =  welcomeAndActivateHtml // esta variable la vamos a hardcodear desde el back asi que no hace falta chequear
    } else if (motive === 'reset') {
      subject = "Reset password ✔" // esta variable la vamos a hardcodear desde el back asi que no hace falta chequear
      htmlContent =  resetHtml // esta variable la vamos a hardcodear desde el back asi que no hace falta chequear
    }    
    const sending = await sendEmail(emailTo, subject, htmlContent)
    res.status(200).json(sending)
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: error })
  }
})

module.exports = router;