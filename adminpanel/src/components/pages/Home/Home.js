import React from "react";
import "./home.css";
import Chart from "../../Chart/Chart";
import WidgetSm from "../../WidgetSm/WidgetSm";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
function Home() {
  const Months = useMemo(
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
      "Dec",
    ],
    []
  );
  const [userstats, SetuserStats] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            authorization:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          SetuserStats((prev) => [
            ...prev,
            { name: Months[item._id - 1], "New User": item.total },
          ])
        );
      } catch (e) {
        console.log(e);
      }
    };
    getUsers();
  }, [Months]);
  console.log(userstats);
  return (
    <div className="homepage">
      <Chart title="User Analytics" data={userstats} grid dataKey="New User" />
      <div className="homewidgets">
        <WidgetSm />
      </div>
    </div>
  );
}

export default Home;
