import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import { loaderGIF, loginGIF } from "../../assets/lottieAnimations";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {ToastContainer} from "react-toastify"
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate()
  useEffect(()=>{
    setShowPassword(!showPassword)
  },[])

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      loginType: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().required("Password is required"),
      loginType: Yup.string().required("Login Type is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      localStorage.setItem("user", JSON.stringify(values));
      const user = JSON.parse(localStorage.getItem("user"));
      user.loginType==="S"?navigate("/students"):navigate("/teachers")
    },
  });

  return (
    <>
    <ToastContainer autoClose={2000} />
      <div className="login">
        <Grid container sx={{ width: "100%" }} spacing={3}>
          <Grid item xs={10} md={6}>
            <img src={loginGIF} alt="login GIF" />
          </Grid>
          <Grid item xs={10} md={6}>
            <FormControl fullWidth onSubmit={formik.handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={7}>
                  <TextField
                    label="Email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div style={{color: "red"}}>{formik.errors.email}</div>
                  ) : null}
                </Grid>
                <Grid item xs={7}>
                  <TextField
                    label="Password"
                    name="password"
                    type={showPassword ?"password": "text" }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  >
                     {showPassword ? (
                      <RemoveRedEyeIcon
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                      />
                    ) : (
                      <VisibilityOffIcon
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      />
                    )}
                  </TextField>
                  {formik.touched.password && formik.errors.password ? (
                    <div style={{color: "red"}}>{formik.errors.password}</div>
                  ) : null}
                  <div
                  >
                    {showPassword ? (
                      <RemoveRedEyeIcon
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                      />
                    ) : (
                      <VisibilityOffIcon
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      />
                    )}
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="loginType"
                    name="loginType"
                    value={formik.values.loginType}
                    label="Login Type"
                    sx={{ width: "100%" }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    select
                    error={
                      !!formik.errors.loginType && !!formik.touched.loginType
                    }
                  >
                    <MenuItem value={"S"}>Students</MenuItem>
                    <MenuItem value={"T"}>Teachers</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={7}>
                  <Button
                    type="submit"
                    disabled={formik.isSubmitting}
                    variant="contained"
                    color="primary"
                    onClick={formik.handleSubmit}
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
