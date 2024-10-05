import React, { useState } from "react";
import { View } from "@adobe/react-spectrum";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import NavigationIcon from "@mui/icons-material/Navigation";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./App.css";

const App = () => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
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
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
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

  return (
    <View className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Initially only the buttons are shown */}
      {!selectedOption && (
        <View className="text-center space-y-4">
          <h1 className="text-xl font-bold">Generate Viral Meme Content</h1>
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
          <Button variant="outlined" onClick={handleGoBack} className="mb-4">
            Go Back
          </Button>

          {/* Trending and Tags */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">TRENDING</h2>
            <Button onClick={() => handleTagClick("skibidiGyatRizz")}>
              <Fab variant="extended">
                <NavigationIcon sx={{ mr: 1 }} />
                #skibidiGyatRizz
              </Fab>
            </Button>

            <div>
              <h2 className="text-lg font-semibold">LockedIn</h2>
              <Button onClick={() => handleTagClick("lockedin")}>
                <Fab variant="extended">
                  <NavigationIcon sx={{ mr: 1 }} />
                  lockedin
                </Fab>
              </Button>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Instagram</h2>
              <Button onClick={() => handleTagClick("insta")}>
                <Fab variant="extended">
                  <NavigationIcon sx={{ mr: 1 }} />
                  insta
                </Fab>
              </Button>
            </div>
          </div>

          {/* Show Template Videos based on the selected tag */}
          {selectedTag && (
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
                      <img
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default App;
