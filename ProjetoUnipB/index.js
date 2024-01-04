require('dotenv').config();
const API_KEY = process.env.API_KEY; // Corrigir aqui
const { OpenAI } = require('openai');
const openai = new OpenAI(API_KEY);
<<<<<<< HEAD
//import {  }
=======
import {  }
>>>>>>> 011312d5750e409ae680354d5bcc999303d0b70a

console.log('Chave de API:', API_KEY); // Adicione esta linha para debug

console.log(API_KEY); // Apenas para debug

const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

<<<<<<< HEAD
app.post('/pergunte-ao-chatgpt', async (req, res) => {
=======
app.post('/submeta-o-prompt', async (req, res) => {
>>>>>>> 011312d5750e409ae680354d5bcc999303d0b70a
    const { prompt } = req.body;
    const model = 'gpt-3.5-turbo';
    const role = 'user';
    const max_tokens = 50;
    const completion = await openai.chat.completions.create({
        messages: [{ role: role, content: prompt }],
        model: model,
        max_tokens: max_tokens
    });
    res.json({ completion: completion.choices[0].message.content });
});

app.post('/teste', (req, res) => {
    res.send("Tudo certo");
});

<<<<<<< HEAD
app.listen(4000, () => console.log('ChatGPT_Backend em execução na porta 4000'));
=======
app.listen(4000, () => console.log('ChatGPT_Backend em execução na porta 4000'));

>>>>>>> 011312d5750e409ae680354d5bcc999303d0b70a
