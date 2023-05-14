import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Story from "./Story";

function App() {
  const [theme, setTheme] = useState("");

  const themes = ["space", "ocean", "fantasy"];

  return (
    <>
      <h1>Welcome to AdLibGPT</h1>
      <TextField
        id="theme-select"
        select
        label="Theme"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        helperText="Select a theme for you adlib"
        sx={{ width: 200 }}
      >
        {themes.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      {theme && <Story theme={theme} />}
    </>
  );
}

export default App;
