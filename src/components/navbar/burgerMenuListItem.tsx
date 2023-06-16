import * as React from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface MenuItemProps {
  to: string;
  text: string;
  icon: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, text, icon }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component={NavLink} to={to}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default MenuItem;
