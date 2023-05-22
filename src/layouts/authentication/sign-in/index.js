/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

//required
import FormHelperText from "@mui/material/FormHelperText";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style.css"
import Backdrop from "@mui/material/Backdrop";
import Cookies from 'universal-cookie';

function Basic() {
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("userInfo")){
      navigate("/dashboard");
    }
  },[]);

  const cookies = new Cookies();

  const [openLoad, setOpenLoad] = useState(false);
  const handleCloseLoad = () => {
    setOpenLoad(false);
  };
  const handleOpenLoad = () => {
    setOpenLoad(true);
  };

  const [rememberMe, setRememberMe] = useState(false);
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const [eemail,setEemail] = useState(false);
  const [epass,setEpass] = useState(false);
  const [ememail,setEmemail] = useState("");
  const [empass,setEmpass] = useState("");


  const handleSignIn = () => {
    console.log("sign in");
    if(email === ""){
      setEemail(true);
      setEmemail("Email is required");
    }
    else if(!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email)){
      setEemail(true);
      setEmemail("Please enter correct email format");  
    }
    else{
      setEemail(false);
        setEmemail("");
    }
    if(pass === ""){
      setEpass(true);
      setEmpass("Password is required");
    }
    else
      {
        setEpass(false);
        setEmpass("");
      }

      if(rememberMe === true){
        cookies.set('statxo-user-email', email, { path: '/' });
        cookies.set('statxo-user-pass', pass, { path: '/' });
      }

      if(email!==""|| pass!==""){
        handleOpenLoad();    
        axios
            .get(
              "https://statxo-filemanager.onrender.com/signin?"+"email="+email+"&pass="+pass,
              { headers: { "Content-Type": "application/json" } }
            )
            .then((res) => {
              console.log(res.data.result);
              handleCloseLoad();
              let data = res.data.result;
              localStorage.setItem("userInfo", data);
              toast.success("Login Successfull", {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-success",
              });
              navigate("/dashboard");
            })
            .catch((error) => {
              console.log(error.message);
              handleCloseLoad();
              toast.error("Incorrect Username or Password", {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-error",
              });
            });
      }
  };

  const [cookiePop, setCookiePop] = useState({transform: "scaleY(0)",});
  const [cFirst,setcFirst] = useState(true);


  const handleCookie = () => {
    let cEmail = cookies.get('statxo-user-email');
    let cPass = cookies.get('statxo-user-pass');
    const handleCPop = ()=> {
      setEmail(cEmail);
      setPass(cPass);
    };
    if(cFirst === true && cEmail !== undefined && cPass !==undefined)
    {
      setcFirst(false);
    toast.success(<Box onClick={handleCPop}>Login With {cEmail} </Box>, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
   };

  return (
    <BasicLayout image={bgImage}>
      
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
            <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoad}
        onClick={handleCloseLoad}
      ></Backdrop>
              <MDInput value={email} onFocus={handleCookie} error={eemail} onChange={e=>setEmail(e.target.value)} type="email" label="Email" fullWidth />
              <FormHelperText style={{ color: "red" }}>
                    {ememail}
                  </FormHelperText>
            </MDBox>
            <MDBox mb={2}>
              <MDInput value={pass} error={epass} onChange={e=>setPass(e.target.value)} type="password" label="Password" fullWidth />
              <FormHelperText style={{ color: "red" }}>
                    {empass}
                  </FormHelperText>
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch onChange={e=>setRememberMe(e.target.checked)} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton onClick={handleSignIn} variant="gradient" color="info" fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
      {<ToastContainer autoClose={false} style={{ fontSize: "15px" }} toastStyle={{ borderRadius: "10px" }} />}
    </BasicLayout>
  );
}

export default Basic;
