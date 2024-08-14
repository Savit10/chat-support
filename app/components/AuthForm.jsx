import React, { useState} from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import Link from 'next/link';

export default function AuthForm(props) {
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

  function handleSubmit(event) {
    event.preventDefault();
    if (props.page === "Login") {
        props.login(user);
    }
    else {
        props.register(user);
    }
}
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100wh">
        <Stack direction={'column'}  width="500px"  height="500px"  border="1px solid black" p={2} spacing={3}>
            <TextField id="email" label="Email" name="email" variant="outlined" value={user.email} onChange={handleChange} fullWidth/>
            <TextField id="password" label="Password" name="password" type="password" variant="outlined" value={user.password} onChange={handleChange} fullWidth />
            <Box>{props.error && ( <span style={{color:'red'}}>{props.error}</span> )}</Box>
            <Button variant="contained" onClick={handleSubmit}> 
              {props.page==="Login"? (props.signingIn? "Signing In..." : props.page): (props.registering? "Registering..." : props.page)} 
            </Button>
            {props.page === "Login"?
              <div> 
                <p>Don&apos;t have an account? <Button><Link href='/auth/register'>Sign up</Link></Button></p>
                {/* <p>OR</p>
                <button disabled={props.signingIn} onClick={(e) => { onGoogleSignIn(e) }}>
                    {props.signingIn ? 'Signing In...' : 'Continue with Google'}
                </button> */}
              </div>
              :
              <div> 
                <p>Already have an account? <Button><Link href='/auth/login'>Sign In</Link></Button></p>
              </div>}
            
        </Stack>
    </Box>
  );
}