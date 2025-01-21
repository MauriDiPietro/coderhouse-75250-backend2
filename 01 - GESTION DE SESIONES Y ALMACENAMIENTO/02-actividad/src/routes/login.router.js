import { Router } from "express";

const router = Router()

router.post('/', (req, res)=>{
    const { name, email } = req.body;
    res.cookie('email', email, { maxAge: 15000, httpOnly: true }).send('cookie agregada ok')
})

export default router

