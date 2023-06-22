import { Outlet, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { List, ListItem, ListItemButton } from "@mui/material";

const Series = () => {
  const location = useLocation();
  return (
    <div className="flex">
      <div
        className="w-64 flex flex-col gap-4 bg-gray-500 h-screen sticky right-0 z-10"
        style={{ top: "82px" }}
      >
        <List sx={{ mt: "5rem" }}>
          <NavLink
            className="text-4xl hover:text-blue-500"
            to="/series/killers"
          >
            <ListItemButton
              selected={location.pathname === "/series/killers"}
              sx={{
                justifyContent: "center",
                color: "black",
                "&:hover": {
                  backgroundColor:
                    location.pathname === "/series/killers"
                      ? undefined
                      : "#037fff",
                },
                "&.Mui-selected": {
                  backgroundColor: "#eab308", // Change to your desired selected background color
                  color: "black", // Change to your desired selected text color
                  "&:hover": {
                    backgroundColor: "#eab308", // Change to your desired selected background color
                  },
                },
              }}
            >
              killers
            </ListItemButton>
          </NavLink>
          <NavLink className="text-4xl hover:text-blue-500" to="/series/others">
            <ListItemButton
              selected={location.pathname === "/series/others"}
              sx={{
                justifyContent: "center",
                color: "black",
                "&:hover": {
                  backgroundColor:
                    location.pathname === "/series/others"
                      ? undefined
                      : "#037fff",
                },
                "&.Mui-selected": {
                  backgroundColor: "#eab308", // Change to your desired selected background color
                  color: "black", // Change to your desired selected text color
                  "&:hover": {
                    backgroundColor: "#eab308", // Change to your desired selected background color
                  },
                },
              }}
            >
              others
            </ListItemButton>
          </NavLink>
        </List>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Series;
