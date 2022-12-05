import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function WidgetsSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("/user?new=true", {
          headers: {
            authorization:
              "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
          },
        });
        console.log(res.data);
        setUsers(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getUsers();
  }, []);
  return (
    <div className="widgetSm">
      <div className="widgetSmTitle">New join members</div>
      <table className="widgetsSmList">
        <tr>
          <th className="widgetSmTh">Image</th>
          <th className="widgetSmTh">User</th>
          <th className="widgetSmTh">Email</th>
          <th className="widgetSmTh">Action</th>
        </tr>
        {users.map((user) => (
          <tr>
            <td>
              <img
                src={
                  user.profilePic ||
                  "/avatar.jpeg"
                }
                alt=""
                className="widgetSmImg"
              />
            </td>

            <td className="widgetSmUser">
              <span className="widgetSmUserName">{user.username}</span>
            </td>
            <td className="widgetSmUser">
              <span className="widgetSmUserName">{user.email}</span>
            </td>
            <td>
              <Link className="link" to={"/user/" + user._id} state={user}>
                <button className="widgetSmButton">
                  <Visibility />
                  display
                </button>
              </Link>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}