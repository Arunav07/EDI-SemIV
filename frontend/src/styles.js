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
}
}));

export default useStyles;