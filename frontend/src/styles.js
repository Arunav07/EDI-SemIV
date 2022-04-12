import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
passwordField: {
    position: "relative",
},
eyeIcon: {
    position: "absolute",
    right: "10px",
    top: "50%",
},
bottomText: {
    marginTop: "10%",
},
profileImage: {
width: "80px",
height: "80px",
borderRadius: "50%",
},
profileImageInput: {
    display: "flex",
    border: "1px solid #C4C4C4 !important",
    alignItems: "center"
  },
}));

export default useStyles;