import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '@mui/material';
import "./addBuilding.scss";

function AddBuilding() {

  const [building, setBuilding] = React.useState('');

  const handleChange = () => {
    console.log(building)
  };

  return (
    <div className='addBuilding'>
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel>Add a:</InputLabel>
      <Select
        value={building}
        label="Building"
        onChange={(e) => setBuilding(e.target.value)}
      >
         <MenuItem></MenuItem>
        <MenuItem value={"mine"} >Mine</MenuItem>
        <MenuItem value={"farm"}>Farm</MenuItem>
        <MenuItem value={"lab"}>Lab</MenuItem>
        <MenuItem value={"barracks"}>Barracks</MenuItem>
      </Select>

      <Button
      onClick={handleChange}>
        Build
      </Button>
    </FormControl>
  </Box>
  </div>
  )
}

export default AddBuilding