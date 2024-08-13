import React, { useState} from "react";
import { Box, Button, Stack, TextField } from "@mui/material";

export default function AuthForm() {
  const [user, setUser] = useState({ email: "", password: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prev) => (
        { 
            ...prev, 
            [name]: value 
        }
    ));
  }

  function handleLogin() {
    console.log(user);
}
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100wh">
        <Stack direction={'column'}  width="500px"  height="700px"  border="1px solid black" p={2} spacing={3}>
            <TextField id="outlined-basic" label="Email" variant="outlined" value={user.email} onChange={handleChange} fullWidth/>
            <TextField id="outlined-basic" label="Password" variant="outlined" value={user.password} onChange={handleChange} fullWidth />
            <Button variant="contained" onClick={handleLogin}> Login </Button>
        </Stack>
    </Box>
  );
}