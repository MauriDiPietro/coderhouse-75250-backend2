import express from "express";
import session from "express-session";
import "dotenv/config";

const app = express();

app.use(express.json());

const sessionConfig = {
  secret: process.env.SECRET_KEY,
  cookie: { maxAge: 30000 },
  saveUninitialized: true,
  resave: false,
};

app.use(session(sessionConfig));

const users = [
  { username: "juan", password: "1234", admin: true },
  { username: "pedro", password: "1234", admin: false },
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const index = users.findIndex(
    (user) => user.username === username && user.password === password
  );
  if (index < 0) return res.status(401).json({ msg: "Unhautorized" });
  const user = users[index];
  req.session.info = {
    loggedIn: true,
    count: 1,
    admin: user.admin,
  };
  res.json({ msg: 'Bienvenido!' })
});

const validateLogin = (req, res, next) =>{
    if(req.session.info && req.session.info.loggedIn) next()
    else res.status(401).json({msg: 'Unauthorized'})
}

const isAdmin = (req, res, next) =>{
    if(req.session.info && req.session.info.admin) next()
    else res.status(403).json({msg: 'solo usuarios administradores'})
}

app.get('/secret-endpoint', validateLogin, (req, res)=>{
    req.session.info.count++;
    res.json({
        msg: 'info secreta',
        contador: req.session.info.count,
        session: req.session
    })
})

app.get('/admin-secret-endpoint', validateLogin, isAdmin, (req, res)=>{
    req.session.info.count++;
    res.json({
        msg: 'info secreta solo admins',
        contador: req.session.info.count,
        session: req.session
    })
})

app.listen(8080, () => console.log("server ok puerto 8080"));
