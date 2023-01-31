import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, FormHelperText } from "@mui/material";
import "./addBuilding.scss";
import addBuildingFetch from "../../api/addBuilding";
import { useState } from "react";
import fetchBuildings from "../../api/buildings";

function AddBuilding() {
  const [building, setBuilding] = useState("");
  const [error, setError] = useState("");

  const handleChange = async () => {
    setError("");

    const data = { type: building };
    if (data.type == "") {
      setError("Please select a building");
      return;
    }

    try {
      await addBuildingFetch(data);
      if (data) {
        fetchBuildings;
        return;
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message) setError(error.message);
      }
    }
  };


  return (
    <div className="addBuilding">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel>Select a new Building</InputLabel>
          <Select
            value={building}
            label="Building"
            onChange={(e) => setBuilding(e.target.value)}
          >
            <MenuItem></MenuItem>
            <MenuItem value={"mine"}>Mine</MenuItem>
            <MenuItem value={"farm"}>Farm</MenuItem>
            <MenuItem value={"lab"}>Lab</MenuItem>
            <MenuItem value={"barracks"}>Barracks</MenuItem>
          </Select>
          <div className="error">{error}</div>

          <Button onClick={handleChange}>Build</Button>
        </FormControl>
      </Box>
    </div>
  );
}

export default AddBuilding;
