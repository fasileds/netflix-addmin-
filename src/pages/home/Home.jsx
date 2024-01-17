import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
//import { userData } from "../../dumyData.js";
import WidegeLarge from "../../components/widgetLarge/WidegeLarge.jsx";
import WidegeSmall from "../../components/widgetSmallle/WidegeSmall.jsx";
import { useEffect, useState } from "react";
import { useMemo } from "react";
import axios from "axios";
export default function Home() {
  const mounth = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dce",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);
  useEffect(() => {
    const getStat = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/user/status", {
          headers: {
            token:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTg1NGRlNzM4MzVmNTY2M2U2YjdkOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMDQ2ODE1MiwiZXhwIjoxNzAwOTAwMTUyfQ.xx-hcuovBIw15vIvmAIbyUreshOzVD3rH0d2GPTpIqU",
          },
        });
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: mounth[item._id - 1], "New User": item.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getStat();
  }, [mounth]);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart title="user Analytics" data={userStats} grid dataKey="New User" />
      <div className="homeWideget">
        <WidegeSmall />
        <WidegeLarge />
      </div>
    </div>
  );
}
