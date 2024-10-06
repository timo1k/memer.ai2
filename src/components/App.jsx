import React, { useState, memo } from "react";
import { View } from "@adobe/react-spectrum";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import memeIcon from "../../meme.png"; // Import the meme image
import ImageGen from "./ImageGen";

import Initializer from "./Initializer";

const App = memo(({ addOnSdk }) => {
  const itemData = [
    {
      // img: "https://firebasestorage.googleapis.com/v0/b/temple-trading-hub-tth.appspot.com/o/fire4.mp4?alt=media&token=4c6968b8-85d7-4428-a5ca-21592879aec8",
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  const handleGoBack = () => {
    setSelectedOption(null);
    setSelectedTag(null);
  };

  const handleTagClick = (option) => {
    setSelectedTag(option);
  };

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

  return (
    <Initializer addOnSdk={addOnSdk}>
      <View className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        {/* Initially only the buttons are shown */}
        {!selectedOption && (
          <View className="text-center space-y-4">
            <h1 className="text-xl font-bold">Generate Viral Meme Stickers</h1>
            <ButtonGroup variant="contained" aria-label="Basic button group">
              <Button onClick={() => handleButtonClick("Video")}>Video</Button>
              <Button onClick={() => handleButtonClick("Photo")}>Photo</Button>
            </ButtonGroup>
          </View>
        )}

        {/* Show this content only if a button is clicked */}
        {selectedOption && (
          <View className="text-center space-y-4">
            {/* Go Back Button */}
            <View className="flex items-center justify-center">
              <img
                src={memeIcon}
                alt="meme icon"
                className="w-10 h-10 mr-2" // Adjusted size and margin
              />
              <h1 className="text-3xl font-bold underline">memer.ai</h1>
            </View>
            <Button variant="outlined" onClick={handleGoBack} className="mb-4">
              Go Back
            </Button>

            {/* Trending and Tags */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">TRENDING</h2>
              <h2 className="text-lg font-semibold">TikTok</h2>
              <Button onClick={() => handleTagClick("skibidiGyatRizz")}>
                <Fab variant="extended" size="small" className="text-xs p-2">
                  #skibidiGyatRizz
                </Fab>
              </Button>
              <Button onClick={() => handleTagClick("skibidiGyatRizz")}>
                <Fab variant="extended" size="small" className="text-xs p-2">
                  #skibidiGyatRizz
                </Fab>
              </Button>
              <div className="flex justify-center space-x-2">
                {" "}
                {/* Use flexbox for inline alignment */}
                <Button onClick={() => handleTagClick("skibidiGyatRizz")}>
                  <Fab
                    variant="extended"
                    size="small"
                    style={{ fontSize: "0.5rem", padding: "0.2rem 0.4rem" }}
                  >
                    #skibidiGyatRizz
                  </Fab>
                </Button>
                <Button onClick={() => handleTagClick("skibidiGyatRizz")}>
                  <Fab variant="extended" size="small" className="text-xs p-2">
                    #s
                  </Fab>
                </Button>
              </div>

              <div>
                <h2 className="text-lg font-semibold">LinkedIn</h2>
                <Button onClick={() => handleTagClick("lockedin")}>
                  <Fab variant="extended">#lockedin</Fab>
                </Button>
              </div>

              <div>
                <h2 className="text-lg font-semibold">Instagram</h2>
                <Button onClick={() => handleTagClick("insta")}>
                  <Fab variant="extended">#insta</Fab>
                </Button>
              </div>
            </div>

            {/* Show Template Videos based on the selected tag */}
            {selectedTag && (
              <View>
                <View className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    {selectedTag} Template Videos
                  </h3>
                  <View>
                    <ImageList
                      sx={{ width: 250, height: 450 }}
                      cols={2}
                      rowHeight={164}
                    >
                      {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                          <Button onClick={addToDocument}>
                            <img
                              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                              alt={item.title}
                              loading="lazy"
                            />
                          </Button>
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </View>
                </View>

                <View>
                  <h2 className="text-lg font-semibold">
                    {selectedOption} Generator
                  </h2>
                  {/* <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                      "& .MuiTextField-root": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Title"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-multiline-static"
                      label="Description"
                      multiline
                      rows={4}
                      defaultValue="your description here"
                    />
                  </Box>
                  <Button onClick={() => handleTagClick("insta")}>
                    <Fab variant="extended">Generate</Fab>
                  </Button> */}
                  <ImageGen addOnSdk={addOnSdk}></ImageGen>
                </View>
              </View>
            )}
          </View>
        )}
      </View>
    </Initializer>
  );
});

export default App;
