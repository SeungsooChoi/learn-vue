import "./db";
import "./models/Post";
import app from "./index";

const PORT = 4000;

const handleListening = () => {
  console.log(`Server listening on port ${PORT}`);
};

app.listen(PORT, handleListening);
