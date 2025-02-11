import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


const PORT = 8080
const mode = 'dev'

app.listen(PORT, ()=>{
    console.log(`🚀 Server listening on port ${PORT}`);
    console.log(`mode: ${mode}`);
});

