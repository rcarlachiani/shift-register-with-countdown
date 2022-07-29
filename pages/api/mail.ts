export async function getServerSideProps(context: any) {
    return {
        props: { 
           selectedDate: context.query.selectedDate ? context.query.selectedDate : null, 
           date: context.query.date ? context.query.date : null
        }
    }
}

export default function (req: any, res: any, props: any) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: process.env.MAIL,
            pass: process.env.PASS
        }
    })

    const mailData = {
        from: process.env.MAIL,
        to: req.body.email,
        subject: 'Confirmación de turno - Audio y Tambor',
        text: 'SU TURNO FUE CONFIRMADO',
        html: `
            <div>
                <h1>Turno confirmado para el día ${req.body.date} a las ${req.body.schedule}</h1>

                <p>Le recordamos la información brindada, ante cualquier modificación comuníquese telefónicamente al +549 342 5373670</p>

                <p>Artista/banda: ${req.body.artistName}</p>
                <p>¿Alquila backline?: ${req.body.backline}</p>
                <p>Nombre: ${req.body.name}</p>
                <p>Apellido: ${req.body.lastName}</p>
                <p>Email: ${req.body.email}</p>
                <p>Teléfono: ${req.body.phone}</p>
                <p>¿Acepta las políticas de cancelación?: ${req.body.terms}</p>

                <h2>¡Te esperamos!</h2>
            </div>
        `
    }

    transporter.sendMail(mailData, function (err: any, info: any) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })

      res.status(200)

    console.log(req.body)
}