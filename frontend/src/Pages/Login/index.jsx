import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, FormControl, Grid, MenuItem, TextField } from "@mui/material";
import { loaderGIF, loginGIF } from "../../assets/lottieAnimations";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useStyles from "../../styles";
import { Link, Typography } from "@material-ui/core";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setShowPassword(!showPassword);
  }, []);

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
      toast.success("Successfully Registered", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      localStorage.setItem("user", JSON.stringify(values));
      const user = JSON.parse(localStorage.getItem("user"));
      user.loginType === "S" ? navigate("/students") : navigate("/teachers");
    },
  });

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const helloHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShow(!show);
    }, 1000);
  };
  useEffect(() => {
    helloHandler();
  }, []);
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("user"));
  if(user!==null){
    user.loginType === "S" ? navigate("/students") : navigate("/teachers");
  }
  return (
    <>
      {loading ? (
        <img
          style={{ width: "50%", transform: "translateX(50%)" }}
          src={loaderGIF}
          alt="loadingGIF"
        />
      ) : (
        <div className="login">
          <Grid container sx={{ width: "100%" }} spacing={3}>
            <Grid item xs={10} md={6}>
              <img src={loginGIF} alt="login GIF" />
            </Grid>
            <Grid item xs={10} md={6}>
              <FormControl fullWidth onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={8}>
                    <TextField
                      label="Email"
                      name="email"
                      sx={{ width: "100%" }}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      error={formik.touched.email && formik.errors.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div style={{ color: "red" }}>{formik.errors.email}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={8} className={classes.passwordField}>
                    <TextField
                      label="Password"
                      name="password"
                      type={showPassword ? "password" : "text"}
                      onChange={formik.handleChange}
                      sx={{ width: "100%" }}
                      onBlur={formik.handleBlur}
                      error={formik.touched.password && formik.errors.password}
                      value={formik.values.password}
                    />

                    {formik.touched.password && formik.errors.password ? (
                      <div style={{ color: "red" }}>
                        {formik.errors.password}
                      </div>
                    ) : null}
                    {showPassword ? (
                      <RemoveRedEyeIcon
                        className={classes.eyeIcon}
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <VisibilityOffIcon
                        className={classes.eyeIcon}
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      id="loginType"
                      name="loginType"
                      value={formik.values.loginType}
                      label="Login Type"
                      sx={{ width: "100%" }}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      select
                      error={formik.errors.loginType &&formik.touched.loginType}
                    >
                      <MenuItem value={"S"}>Students</MenuItem>
                      <MenuItem value={"T"}>Teachers</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={5}>
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
                  <Grid item xs={5}>
                    <Link href="/forgotPassword">Forgot Password?</Link>
                  </Grid>
                </Grid>
              </FormControl>
              <Button variant="text" onClick={()=>{navigate("/register")}}>
              <Typography className={classes.bottomText}>Don't have an account? Register here</Typography>
              </Button>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}
