import NotificationsIcon from "@mui/icons-material/Notifications";
import "./topBar.css";
import { Language, Settings } from "@mui/icons-material";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topbarWraper">
        <div className="topLeft">
          <span className="logo">fasilAdmin</span>
        </div>
        <div className="topBarRight">
          <div className="TopBarIconsContiner">
            <NotificationsIcon />
            <span className="topIconBag">2</span>
          </div>
          <div className="TopBarIconsContiner">
            <Language />
            <span className="topIconBag">2</span>
          </div>
          <div className="TopBarIconsContiner">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/13871600/pexels-photo-13871600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="topbarAvata"
          />
        </div>
      </div>
    </div>
  );
}
