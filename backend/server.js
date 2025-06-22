const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


app.post('/api/ai/reminder', async (req, res) => {
  const { input } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: `Convert this sentence into a reminder object with 4 fields:
Sentence: "${input}"
Return JSON format only:
{
  "date": "YYYY-MM-DD",
  "field1": "Short title",
  "field2": "Description or action",
  "field3": "Machine, Technician, or Site"
}`
        }
      ],
      temperature: 0.5,
    });

    const message = completion.choices[0].message.content;
    
    try {
      const json = JSON.parse(message);
      res.json(json);
    } catch (e) {
      res.status(400).json({ error: "AI did not return valid JSON" });
    }  
  } catch (error) {
    console.error("OpenAI error", error);
    res.status(500).send({ error: "AI generation failed." });
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));
