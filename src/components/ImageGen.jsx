import React, { useState } from "react";
import { getStorage, ref, uploadString } from "firebase/storage";
import { storage } from "./firebase";

const ImageGen = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageToFirebase = async (imageUrl) => {
    try {
      console.log("Uploading image to Firebase:", imageUrl);
      // Your Firebase upload logic here
      console.log("Image uploaded successfully.");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const generateImage = async () => {
    console.log("Button clicked with prompt:", prompt);

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5001/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      console.log("Response received:", response);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Data received from API:", data);
      setImage(data.image);
      await uploadImageToFirebase(data.image);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
      console.log("Loading state set to false.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a prompt"
        required
      />
      <button onClick={generateImage} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>
      {image && <img src={image} alt="Generated" />}
    </div>
  );
};

export default ImageGen;
