import React, { useEffect, useState } from "react";
import "../userdata/userdata.scss";
import axios from "axios";
import DataTable from "react-data-table-component";

const UserData = () => {
  const column = [
    { name: "Id", selector: (row) => row.id },
    { name: "Name", selector: (row) => row.name },
    { name: "UserName", selector: (row) => row.username },
    { name: "Email", selector: (row) => row.email },
    { name: "City", selector: (row) => row.address.city },
    { name: "Phone", selector: (row) => row.phone },
    { name: "CompanyName", selector: (row) => row.company.name },
  ];
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setRecords(res.data))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  const [records, setRecords] = useState([]);

  const handleFilter=(e)=>{
  const newData=records.filter(row=>row.username.toLowerCase().includes(e.target.value.toLowerCase()))
setRecords(newData);
}

  return (
    <>
      <div className="user">
        <div className="fist-head">
          <h4>Users</h4>
          <select name="" id="">
            <option value="" selected>
              All Users
            </option>
            <option value="">Premium Users</option>
            <option value="">Silver Users</option>
            <option value="">Free Users</option>
          </select>
        </div>
        <br />
        <div>Search: <input type="text" onChange={handleFilter} placeholder="Search"/></div> <br />
        <div className="table-div">
        
          <DataTable columns={column} data={records} pagination className="data-table" style={{backgroundColor:'red'}}></DataTable>
        </div>
      </div>
    </>
  );
};

export default UserData;
