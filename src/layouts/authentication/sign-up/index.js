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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { useState } from "react";

//required
import FormHelperText from "@mui/material/FormHelperText";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style.css"
import Backdrop from "@mui/material/Backdrop";

function Cover() {

  const [openLoad, setOpenLoad] = useState(false);
  const handleCloseLoad = () => {
    setOpenLoad(false);
  };
  const handleOpenLoad = () => {
    setOpenLoad(true);
  };

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const [term,setTerm] = useState(false);

  const [ename,setEname] = useState(false);
  const [eemail,setEemail] = useState(false);
  const [epass,setEpass] = useState(false);
  const [eterm,setEterm] = useState(false);

  const [emname,setEmname] = useState("");
  const [ememail,setEmemail] = useState("");
  const [empass,setEmpass] = useState("");
  const [emterm,setEmterm] = useState("");

  const handleSignUp = () => {
    console.log("sign up");
    if(name === ""){
      setEname(true);
      setEmname("Name is required");
    }
    else
      {
        setEname(false);
        setEmname("");
      }
    
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
    
    if(term === false){
      setEterm(true);
      setEmterm("Please check term and conditions");
    }
    else
      {
        setEterm(false);
        setEmterm("");
      }

      if(name!=="" || email!==""|| pass!==""|| term===true){
        handleOpenLoad();
            axios
            .post(
              "https://statxo-filemanager.onrender.com/signup",
              {
              name:name,
              email:email,
              pass:pass
              },
              { headers: { "Content-Type": "application/json" } }
            )
            .then((res) => {
              console.log(res);
              handleCloseLoad();
              toast.success("Sign Up Successfull", {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-success",
              });
            })
            .catch((error) => {
              console.log(error.message);
              handleCloseLoad();
              toast.error("Sign Up Failed", {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-error",
              });
            });
      }

  };

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoad}
        onClick={handleCloseLoad}
      ></Backdrop>
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput error={ename} onChange={(e)=>setName(e.target.value)} type="text" label="Name" variant="standard" fullWidth />
              <FormHelperText style={{ color: "red" }}>
                    {emname}
                  </FormHelperText>
            </MDBox>
            <MDBox mb={2}>
              <MDInput error={eemail} onChange={(e)=>setEmail(e.target.value)} type="email" label="Email" variant="standard" fullWidth />
              <FormHelperText style={{ color: "red" }}>
                    {ememail}
                  </FormHelperText>
            </MDBox>
            <MDBox mb={2}>
              <MDInput error={epass} onChange={(e)=>setPass(e.target.value)} type="password" label="Password" variant="standard" fullWidth />
              <FormHelperText style={{ color: "red" }}>
                    {empass}
                  </FormHelperText>
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox error={eterm} onChange={e=>setTerm(e.target.checked)} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <FormHelperText style={{ color: "red" }}>
                    {emterm}
                  </FormHelperText>
            <MDBox mt={4} mb={1}>
              <MDButton onClick={handleSignUp} variant="gradient" color="info" fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
      {<ToastContainer style={{ fontSize: "15px" }} toastStyle={{ borderRadius: "10px" }} />}
    </CoverLayout>
  );
}

export default Cover;
