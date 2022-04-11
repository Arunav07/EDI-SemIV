import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Students, Teachers } from "../../Pages";
import { SvgIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SchoolIcon from '@mui/icons-material/School';
import MyApp from "../../router/Theme"
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Index = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        onClick={()=>{navigate("/")}}
      />
      <BottomNavigationAction
        label="Teachers"
        icon={<AccountCircleIcon />}
        LinkComponent={Teachers}
        onClick={()=>{navigate("/teachers")}}
        color="secondary"
      />
      <BottomNavigationAction
        label="Students"
        icon={<SchoolIcon />}
        LinkComponent={Students}
        onClick={()=>{navigate("/students")}}
        color="secondary"
      />
      <MyApp />
    </BottomNavigation>
  );
};

export default Index;
