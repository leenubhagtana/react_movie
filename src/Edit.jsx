import React,{useState} from "react";
import axios from "axios";
import { TextField, Button, Box, FormControl,FormControlLabel,FormLabel,Radio,RadioGroup,  Select, MenuItem, InputLabel, Typography } from '@mui/material';
import { useParams } from "react-router-dom";
const Edit=() =>
{
    const { id } = useParams();

    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        address: '',
        password: '',
        confirmPassword: '',
        qualification: '',
        gender: '',
       
      });
      const [success, setSuccess] = useState(false);
        
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        console.log(name, value); 
      };

      const handleSubmit=(event)=>
      {
        event.preventDefault();
        axios.put(`http://localhost:3030/users/${id}`,formData)
        .then(()=>
        {
            console.log("upadated");
        })
        .catch((error)=>
        {
            console.log(error);
        })
        setSuccess(true);

      };

    return (
        <div 
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundImage:'url("images/u.jpg")',
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
                <h1 >Edit successful!</h1>
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
            <h1 style={{textAlign : 'center',}}>Edit Form</h1>
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
            
            
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Qualification</InputLabel>
              <Select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                sx={{ backgroundColor: 'white' }}
              >
                <MenuItem value="">Select Qualification</MenuItem>
                <MenuItem value="High School">High School</MenuItem>
    
                <MenuItem value="College">College</MenuItem>
                <MenuItem value="University">University</MenuItem>
              </Select>
            </FormControl>
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
            <Button type="submit" variant="contained" color="inherit">
              Save
            </Button>
          </Box>
          )}
        </div>
      );
}
export default Edit;