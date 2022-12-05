import "./userlist.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { deleteUser, getUsers } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";

export default function UserList() {
  const { users , dispatch } = useContext(UserContext)


  useEffect(() => {
    getUsers(dispatch)
  },[dispatch])

  const handleDelete = (id) => {
    deleteUser(id,dispatch)
  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "profilePic",
      headerName: "ProfilePic",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.profilePic || '/avatar.jpeg'} alt="" /></div>
        );
      },
    },
    { field: "username", headerName: "Username", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id} state= {{user:params.row}}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userlist">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={6}
        getRowId={(row) => row._id}
        checkboxSelection
      />
    </div>
  );
}