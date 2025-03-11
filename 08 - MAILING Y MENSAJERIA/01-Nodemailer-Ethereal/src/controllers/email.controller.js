import { mailConfig, mailConfigHbs, transporter, transporterGoogle } from "../services/email.service.js"

export const sendMailEthereal = async(req, res) => {
    try {
        const response = await transporter.sendMail(mailConfig);
        res.json(response)
    } catch (error) {
        throw new Error(error)
    }
}

export const sendMailEtherealHBS = async(req, res) => {
    try {
        const response = await transporter.sendMail(mailConfigHbs);
        res.json(response)
    } catch (error) {
        throw new Error(error)
    }
}

export const sendGmailHBS = async(req, res) => {
    try {
        const response = await transporterGoogle.sendMail(mailConfigHbs);
        res.json(response)
    } catch (error) {
        throw new Error(error)
    }
}