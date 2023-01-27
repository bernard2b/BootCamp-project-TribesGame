import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, FormHelperText } from "@mui/material";
import "./addTroop.scss";
import { useState } from "react";
import addTroopFetch from "../../api/addTroop";
import fetchTroops from "../../api/troops";

function AddTroop() {
  const [troop, setTroop] = useState("");
  const [error, setError] = useState("");

  const handleChange = async () => {
    setError("");

    const data = { type: troop };
    if (data.type == "") {
      setError("Please select a troop");
      return;
    }

    try {
      await addTroopFetch(data);
      if (data) {
        fetchTroops;
        return;
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message) setError(error.message);
      }
    }
  };

  return (
    <div className="addTroop">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel>Train a new Troop</InputLabel>
          <Select
            value={troop}
            label="Troop"
            onChange={(e) => setTroop(e.target.value)}
          >
            <MenuItem></MenuItem>
            <MenuItem value={"melee"}>Melee</MenuItem>
            <MenuItem value={"ranged"}>Ranged</MenuItem>
            <MenuItem value={"mounted"}>Mounted</MenuItem>
          </Select>
          <div className="error">{error}</div>

          <Button onClick={handleChange}>Train</Button>
        </FormControl>
      </Box>
    </div>
  );
}

export default AddTroop;
