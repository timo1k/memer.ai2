import React, { useState, memo } from "react";
import Button from "@mui/material/Button";

const ImageGen = memo(({ addOnSdk }) => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const getBlob = async (url) => {
    return await fetch(url).then((response) => response.blob());
  };

  const addToDocument = async (event) => {
    try {
      const url = event.currentTarget.querySelector("img").src; // Get the image URL
      const blob = await getBlob(url); // Fetch the image as a blob
      addOnSdk.app.document.addImage(blob); // Add the image blob to the document
    } catch (error) {
      console.log(error);
    }
  };

  const generateImage = async () => {
    console.log("Button clicked with prompt:", prompt);

    setLoading(true);

    try {
      const raw = JSON.stringify({
        key: "aNA6XOSXh8zypL016hiHQGVFF9yOH34GdnMXTIH9SoelPgjonZNek2urBOyY",
        prompt: prompt,
        negative_prompt: "bad quality",
        width: "512",
        height: "512",
        safety_checker: false,
        seed: null,
        samples: 1,
        base64: false,
        webhook: null,
        track_id: null,
      });

      const requestOptions = {
        method: "POST",
        body: raw,
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        "https://modelslab.com/api/v6/realtime/text2img",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json(); // Parse the JSON response
      console.log("Data received from API:", result);

      // Set the image from the output
      setImage(result.output[0]);
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
      {image && (
        <Button onClick={addToDocument}>
          <img src={image} loading="lazy" />
        </Button>
      )}
    </div>
  );
});

export default ImageGen;
