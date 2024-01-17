import { Visibility } from "@mui/icons-material";
import "./widgetSmall.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidegeSmall() {
  const [newUser, setNewUser] = useState([]);
  useEffect(() => {
    const getNewUser = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/user?new=true", {
          headers: {
            token:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTg1NGRlNzM4MzVmNTY2M2U2YjdkOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMDQ2ODE1MiwiZXhwIjoxNzAwOTAwMTUyfQ.xx-hcuovBIw15vIvmAIbyUreshOzVD3rH0d2GPTpIqU",
          },
        });
        setNewUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUser();
  });
  return (
    <div className="widgedSmalle">
      <span className="widsmTitle">new joined Members</span>
      <ul className="wigsmList">
        {newUser.map((user) => (
          <li className="widgSmListItem">
            <img
              src={
                user.profilePicture ||
                "https://th.bing.com/th/id/OIP.vyuDDCSbE5jPjWXXFK3JtAHaEK?rs=1&pid=ImgDetMain"
              }
              alt=""
              className="widgsmImage"
            />
            <div className="WidgedSmUser">
              <span className="wigSmUserName">{user.userName}</span>
            </div>
            <button className="widgesmBotton">
              <Visibility className="wigsmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
