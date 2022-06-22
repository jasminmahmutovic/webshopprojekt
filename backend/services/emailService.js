const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const orderConfirmed = (orderInfo) => {
    
    sgMail.setApiKey(process.env.SENDGRID_KEY)

    const msg = {
    to: `${orderInfo.email}`, 
    from: 'maiaruiz@live.se',
    subject: 'Order confirmed',
    text: 'Din order är nu bekräftad!',
    html: 
    `
    <table style="padding:20px;border: 1px solid grey;">
        <tr>
            <td style="padding-bottom: 20px; color: green;">
                <h1>Hej ${orderInfo.firstname}, din order är nu bekräftad!</h1>
            </td>
        </tr>
        <tr>
            <td>
                <p>Tack för att du beställer från Cool fashion.</p>
            </td>
        </tr>
        <tr>
            <td>
                Vi kontaktar dig igen när din order är skickad!
            </td>
        </tr>
        <tr>
            <td>
                <p>Stay cool!</p>
            </td>
        </tr>
    </table>
    `
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })

};

const orderNotConfirmed = (orderInfo) => {
    
    sgMail.setApiKey(process.env.SENDGRID_KEY)

    const msg = {
    to: `${orderInfo.email}`, 
    from: 'maiaruiz@live.se',
    subject: 'Order not confirmed',
    text: 'Något gick fel med din order',
    html: 
    `
    <table style="padding:20px;border: 1px solid grey;">
        <tr>
            <td style="padding-bottom: 20px; color: green;">
                <h1>Hej ${orderInfo.firstname}, något gick fel när du försökte beställa från oss och din order kunde inte bekräftas.</h1>
            </td>
        </tr>
        <tr>
            <td>
                <p>Vi ber om ursäkt över detta och ber dig försöka igen vid ett annat tillfälle.</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Stay cool!</p>
            </td>
        </tr>
    </table>
    `
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Failed order email sent')
    })
    .catch((error) => {
        console.error(error)
    })

};

module.exports = {orderConfirmed, orderNotConfirmed};