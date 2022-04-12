import { Typography } from "@material-ui/core";
import { Button, FormControl, Grid, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import useStyles from "../../styles";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { registerGIF } from "../../assets/lottieAnimations";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { toast } from "react-toastify";

export default function Register() {
  const [file, setFile] = React.useState("");
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleChange = (e) => {
    if (
      e.target.files &&
      e.target.files[0] &&
      e.target.files[0]["type"].split("/")[0] === "image"
    ) {
      setFile(e.target.files[0]);
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      var url = URL.createObjectURL(e.target.files[0]);
      setAvatarPreview(url);
      setFile(e.target.files[0]);
      formik.setFieldValue("logo", e.target.files[0]);
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    setShowPassword(!showPassword);
  }, []);

  const formik = useFormik({
    initialValues: {
      logo: file,
      email: "",
      password: "",
      StudOrTeach: "",
      age: "",
      name: "",
      REpassword: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().required("Password is required"),
      StudOrTeach: Yup.string().required("Login Type is required"),
      age: Yup.number()
        .required("Age is required")
        .positive("Age must be positive"),
      name: Yup.string().required("Name is required"),
    }),
    onSubmit: (values) => submitHandler(values)
  });
  const submitHandler = (values) => {
    if(values.password===values.confirmPassword){
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
    }
    else{
      toast.error("Password and Confirm Password must be same", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const classes = useStyles();

  return (
    <div className="register">
      <Typography variant="h5">Register</Typography>
      <div style={{ display: "flex" }}>
        <img src={registerGIF} alt="login GIF" />
        <FormControl fullWidth onSubmit={formik.handleSubmit}>
          <Grid container spacing={3} style={{ justifyContent: "center" }}>
            <Grid item xs={7}>
              <TextField
                label="Name"
                name="name"
                variant="outlined"
                sx={{ width: "100%" }}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.name && formik.touched.name}
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                label="Age"
                name="age"
                variant="outlined"
                sx={{ width: "100%" }}
                value={formik.values.age}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.age && formik.touched.age}
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                sx={{ width: "100%" }}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.email && formik.touched.email}
              />
            </Grid>
            <Grid item xs={7} className={classes.passwordField}>
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
                <div style={{ color: "red" }}>{formik.errors.password}</div>
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
            <Grid item xs={7} className={classes.passwordField}>
              <TextField
                label="Password"
                name="REpassword"
                type={showPassword ? "password" : "text"}
                onChange={formik.handleChange}
                sx={{ width: "100%" }}
                onBlur={formik.handleBlur}
                error={formik.touched.REpassword && formik.errors.REpassword}
                value={formik.values.REpassword}
              />

              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
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
            <Grid item xs={7}>
              <TextField
                id="outlined-select-currency"
                select
                label="Login Type"
                name="StudOrTeach"
                value={formik.values.StudOrTeach}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.StudOrTeach && formik.touched.StudOrTeach}
                variant="outlined"
                sx={{ width: "100%" }}
              >
                <MenuItem value="S">Student</MenuItem>
                <MenuItem value="T">Teacher</MenuItem>
              </TextField>
            </Grid>
            <Grid
              item
              xs={file === "" ? 6 : 7}
              className={classes.profileImageInput}
              sx={{ width: "100%", padding: "24px", marginTop: "10px" }}
            >
              {file === "" ? (
                <AccountCircleIcon />
              ) : (
                <img
                  src={avatarPreview}
                  className={classes.profileImage}
                  alt=""
                />
              )}
              <input
                accept="image/*"
                className="profileImageUpload"
                style={{ display: "none" }}
                name="logo"
                id="raised-button-file"
                type="file"
                onChange={handleChange}
              />
              <label htmlFor="raised-button-file">
                <Button
                  variant="raised"
                  component="span"
                  sx={{ width: "100%" }}
                >
                  <FileUploadIcon /> Upload Profile Photo
                </Button>
              </label>
            </Grid>
            <Grid
              item
              xs={7}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "end",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={formik.handleSubmit}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </div>
    </div>
  );
}
