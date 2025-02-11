import { Router } from "express";
const router = Router();

// router.get('/:email', (req, res)=>{
//     const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
//     const { email } = req.params;
//     if(email.match(emailRegex)){
//         // emailRegex.test(email) --> boolean
//         // return await UserModel.findOne({ email })
//         return res.send(`Email válido: ${email}`)
//     }
//     return res.status(400).send('email inválido')
// });

// router.get('/express/:email([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})', (req, res)=>{
//     const { email } = req.params;
//     // return await UserModel.findOne({ email })
//     res.send(`Email válido: ${email}`)
// });

router.get("/name/:name([a-zA-Z]+)", (req, res) => {
  res.send("nombre valido");
});

router.get("/:email", (req, res) => {
  const { email } = req.params;
  // return await UserModel.findOne({ email })
  return res.send(`Email válido: ${email}`);
});

router.param("email", (req, res, next, email) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const isValid = email.match(emailRegex);
  if (isValid) return next();
  return res.status(400).send("email invalido");
});

router.all('/admin/*', (req, res, next)=>{
    if(!req.isAuthenticated()) return res.status(403).send('Access denied');
    return next();
})

router.get("*", (req, res) => {
  res.send("Ruta inexistente");
});

export default router;
