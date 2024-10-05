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
import Button from "@mui/material/Button";
import "./App.css";

const App = memo(({ addOnSdk }) => {
  return (
    <View
      width="100%"
      margin="size-0"
      padding="size-0"
      position="relative"
      backgroundColor="default"
    >
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </View>
  );
});

export default App;
