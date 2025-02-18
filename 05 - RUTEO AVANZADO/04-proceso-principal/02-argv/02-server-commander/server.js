import express from 'express';
import { program } from 'commander';

const app = express();

program
    .option('-p <port>', 'port server', 8080)
    .option('-e <env>', 'environment server', 'dev')

program.parse();

// console.log(program.opts());
// console.log(program.args);

app.use(express.json());
app.use(express.urlencoded({extended:true}));


const PORT = program.opts().p;
const mode = program.opts().e

app.listen(PORT, ()=>{
    console.log(`🚀 Server listening on port ${PORT}`);
    console.log(`mode: ${mode}`);
});

