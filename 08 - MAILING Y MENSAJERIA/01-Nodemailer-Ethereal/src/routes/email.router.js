import { Router } from 'express';
import { sendGmailHBS, sendMailEthereal, sendMailEtherealHBS } from '../controllers/email.controller.js';

const router = Router();

router.post('/send', sendMailEthereal);
router.post('/sendHBS', sendMailEtherealHBS);
router.post('/send-gmail', sendGmailHBS);

export default router;