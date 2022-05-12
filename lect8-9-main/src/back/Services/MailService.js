import nodeMailer from 'nodemailer'
import { config } from '../../database/config/config.js';
import { dbGame } from '../../database/db.js';
class MailService {
    constructor() {
        this.transporter = nodeMailer.createTransport({
            host:config.smtp_host,
            secureConnection: false,
            port: config.smtp_port,
            auth: {
            user: config.smpt_user,
            pass: config.smtp_password
            },
        })
    }
    async activateMail (email,link) {
        await this.transporter.sendMail({
            from:config.smpt_user,
            to:email,
            subject:' Активация аккаунта на ' + config.api_url,
            text:'',
            html:
                `
                    <div>
                        <h1>Перейти для активации аккаунта</h1>
                        <a href='${link}'>${link}</a>
                    </div>
                `
            
        })
        //console.log('tipo otpravil email')
    }
}

export default new MailService();