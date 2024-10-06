const express = require("express");
const { spawn } = require("child_process");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.post("/generate-image", (req, res) => {
  const { prompt } = req.body;

  const pythonProcess = spawn("python", [
    "./python/stable_diffusion_script.py",
    prompt,
  ]);

  pythonProcess.stdout.on("data", (data) => {
    const imagePath = data.toString();
    res.json({ image: imagePath });
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
