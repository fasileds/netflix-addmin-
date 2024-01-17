import {
  Email,
  Feedback,
  LineStyle,
  Message,
  PermIdentity,
  PlayCircleFilledOutlined,
  Receipt,
  Report,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@mui/icons-material";
import "./sideBar.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWraper">
        <div className="sideBarMnue">
          <h3 className="sideBarTitle">DashBord</h3>
          <ul className="sideBarList">
            <Link to="/" className="link">
              <li className="sidBarListItem ">
                <LineStyle className="sidBarIcons" /> Home
              </li>
            </Link>
            <li className="sidBarListItem">
              <Timeline className="sidBarIcons" /> Analtyics
            </li>
            <li className="sidBarListItem">
              <TrendingUp className="sidBarIcons" /> Sales
            </li>
          </ul>
        </div>
        <div className="sideBarMnue">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <ul className="sideBarList">
            <Link to="/users" className="link">
              <li className="sidBarListItem ">
                <PermIdentity className="sidBarIcons" /> User
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidBarListItem">
                <PlayCircleFilledOutlined className="sidBarIcons" /> Movies
              </li>
            </Link>
            <li className="sidBarListItem">
              <Receipt className="sidBarIcons" /> transaction
            </li>
            <li className="sidBarListItem">
              <Report className="sidBarIcons" /> Reports
            </li>
          </ul>
        </div>
        <div className="sideBarMnue">
          <h3 className="sideBarTitle">Notifications</h3>
          <ul className="sideBarList">
            <li className="sidBarListItem ">
              <Email className="sidBarIcons" /> Maile
            </li>
            <li className="sidBarListItem">
              <Feedback className="sidBarIcons" /> FeedBack
            </li>
            <li className="sidBarListItem">
              <Message className="sidBarIcons" /> Message
            </li>
          </ul>
        </div>
        <div className="sideBarMnue">
          <h3 className="sideBarTitle">Staf</h3>
          <ul className="sideBarList">
            <li className="sidBarListItem ">
              <WorkOutline className="sidBarIcons" /> Manage
            </li>
            <li className="sidBarListItem">
              <Timeline className="sidBarIcons" /> Analtyics
            </li>
            <li className="sidBarListItem">
              <Report className="sidBarIcons" /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
