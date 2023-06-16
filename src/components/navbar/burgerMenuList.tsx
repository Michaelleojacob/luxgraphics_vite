import { Box, List, Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuItem from "./burgerMenuListItem";
import BugReportIcon from "@mui/icons-material/BugReport";
import PaletteIcon from "@mui/icons-material/Palette";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import TagIcon from "@mui/icons-material/Tag";
import EventIcon from "@mui/icons-material/Event";
import EmailIcon from "@mui/icons-material/Email";
import PhotoIcon from "@mui/icons-material/Photo";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";

const BurgerMenuList = () => {
  return (
    <Box>
      <List className="w-screen uppercase">
        <MenuItem to="/" text="home" icon={<HomeIcon />} />
        <Divider />
        <MenuItem to="/test" text="test" icon={<BugReportIcon />} />
        <Divider />
        <MenuItem to="/series" text="series" icon={<FolderCopyIcon />} />
        <Divider />
        <MenuItem to="/prints" text="prints" icon={<PhotoIcon />} />
        <Divider />
        <MenuItem to="/originals" text="originals" icon={<PaletteIcon />} />
        <Divider />
        <MenuItem to="/cart" text="cart" icon={<ShoppingCartIcon />} />
        <Divider />
        <MenuItem to="/about" text="about" icon={<InfoIcon />} />
        <Divider />
        <MenuItem to="/socials" text="socials" icon={<TagIcon />} />
        <Divider />
        <MenuItem to="/events" text="events" icon={<EventIcon />} />
        <Divider />
        <MenuItem to="/newletter" text="newletter" icon={<EmailIcon />} />
      </List>
    </Box>
  );
};

export default BurgerMenuList;
