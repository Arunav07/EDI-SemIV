import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Students, Teachers } from "../../Pages";
import { useNavigate } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import { SvgIcon, Typography, Button, Menu, MenuItem } from "@mui/material";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Index = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
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
          onClick={() => {
            navigate("/");
          }}
          xs={3}
        />
        <BottomNavigationAction
          label="Teachers"
          xs={3}
          icon={<AccountCircleIcon />}
          LinkComponent={Teachers}
          onClick={() => {
            navigate("/teachers");
          }}
          color="secondary"
        />
        <BottomNavigationAction
        xs={3}
          label="Students"
          icon={<SchoolIcon />}
          LinkComponent={Students}
          onClick={() => {
            navigate("/students");
          }}
          color="secondary"
        />
        <Button
        xs={3}
          variant="contained"
          color="primary"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{justifySelf: "flex-end"}}
        >
          
          <img src="" alt="" />
          <Typography variant="body3">John Doe</Typography>
        </Button>
      </BottomNavigation>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/profile");
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/my-account");
          }}
        >
          My account
        </MenuItem>
        <MenuItem
          onClick={() => {
           localStorage.removeItem("user");
            navigate("/login");
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </nav>
  );
};

export default Index;
