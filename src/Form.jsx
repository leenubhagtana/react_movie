import React, { useState } from 'react';
import { TextField, Button, Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Select, MenuItem, InputLabel, Typography } from '@mui/material';
import axios from 'axios';
import Header from "./Userheader";
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    address: '',
    password: '',
    confirmPassword: '',
    
    gender: '',
   
  });
  const [success, setSuccess] = useState(false);
    
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(name, value); 
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    //saving data to db.json
    axios({
      
      url: "http://localhost:3030/users",
      method: "POST",
      headers: {
        authorization: "your token comes here",
      },
      // Attaching the form data
      data: formData,
    })
      .then((response) => { 
        console.log(response.data);
      }) // Handle the response from backend here
      .catch((error) => {console.error(error); });
    setSuccess(true); //on successfull submition
  };

  const passwordMatch = formData.password === formData.confirmPassword;

  return (
    <div>
      <Header/>
      <div className='bg'
    
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage:'url("images/p.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
      }}
    >
      
        {success ? (
    
        <Typography variant="body2" color="success" >
          <div
            style={{
              marginLeft: '50%',
              marginTop:'-100%',
              transform: 'translateX(-50%)',
              
            }}
          >
            <h1 >Sign up successful!</h1>
          </div>        </Typography>
      ) : (
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 400,
          padding: 5,
          border: '0.2px solid #ff6a00',
          borderRadius: '5px',
          borderColor:'darkslateblue',
          backgroundColor: 'rgb(168 188 239 / 40%)',
          
        }}
      >
        <h1 style={{textAlign : 'center',}}>Sign Up Form</h1>
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          sx={{ backgroundColor: 'white' }}
        />
        <TextField
          name="dateOfBirth"
          label="Date of Birth"
          type="date"
          value={formData.dateOfBirth}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          InputLabelProps={{ shrink: true }}
          sx={{ backgroundColor: 'white' }}
        />
        <TextField
          name="address"
          label="Address"
          multiline
          rows={4}
          value={formData.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          sx={{ backgroundColor: 'white' }}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          sx={{ backgroundColor: 'white' }}
        />
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          error={!passwordMatch}
          helperText={!passwordMatch && "Passwords do not match"}
          sx={{ backgroundColor: 'white' }}
        />
        
        <FormControl component="fieldset" fullWidth margin="normal" required>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FormLabel component="legend" sx={{ marginRight: '70px', color:'black'  }}>Gender</FormLabel>
            <RadioGroup
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            row>
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
            </RadioGroup>
        </Box>
        </FormControl>
        {(!passwordMatch) && (
          <Typography variant="body2" color="error">
            Passwords do not match.
          </Typography>
        )}
        
        <Button type="submit" variant="contained" color="inherit" style={{marginLeft:'30px'}}>
          Sign Up
        </Button>
      </Box>
      )}
      
    </div>

    </div>
    
  );
};

export default Form;
