/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import React, { memo } from "react";
import { View } from "@adobe/react-spectrum";

// import SearchForm from "./SearchForm";
// import CategoryList from "./CategoryList";
// import AboutAddOn from "./AboutAddOn";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import NavigationIcon from "@mui/icons-material/Navigation";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./App.css";

const App = memo(({ addOnSdk }) => {
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

  return (
    <View
      width="100%"
      margin="size-0"
      padding="size-0"
      position="relative"
      backgroundColor="default"
    >
      <View>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>Video</Button>
          <Button>Photo</Button>
        </ButtonGroup>
      </View>

      <View>
        <View>
          <View>Tiktok</View>
          <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            tiktok
          </Fab>
        </View>
        <View>
          <View>LockedIn</View>
          <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            lockedin
          </Fab>
        </View>
        <View>
          <View>Instagram</View>
          <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            insta
          </Fab>
        </View>
      </View>

      <View>
        <View>Template Videos</View>
        <View>
          <ImageList sx={{ width: 250, height: 450 }} cols={2} rowHeight={164}>
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
    </View>
  );
});

export default App;
