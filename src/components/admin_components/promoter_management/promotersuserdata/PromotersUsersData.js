import React, { useEffect, useState } from "react";
import "../../user_management/userdata/userdata.scss";
import axios from "axios";

const PromotersUsersData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = records.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(records.length / rowsPerPage);

  //Data fetching
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setRecords(res.data))
        .catch((err) => console.log(err));
    };
    fetchData();
    console.warn(1);
  }, []);

  //set the search state
  const searchhandle = (event) => {
    setSearch(event.target.value);
  };
  //filte the currentrow data
  const filterCurrentRowData = currentRows.filter((data) => {
    return (
      search === null ||
      data.id.toString().includes(search.toString()) ||
      data.name.toLowerCase().includes(search.toLowerCase()) ||
      data.username.toLowerCase().includes(search.toLowerCase()) ||
      data.email.toLowerCase().includes(search.toLowerCase()) ||
      data.phone.toLowerCase().includes(search.toLowerCase()) ||
      data.address.city.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };
  function handlehandle() {
    setCurrentPage(currentPage - 1);
  }

  function handlenext() {
    setCurrentPage(currentPage + 1);
  }
  return (
    <div className="user">
      <div className="fist-head">
        <h4>PromoterUsers</h4>
      </div>
      <br />
      <br />
      <div className="third-head">
        <table className="table-div">
          <thead>
            <tr>
              <th>promoters name</th>
              <th>Promocode</th>
              <th>Mobile</th>
              <th>Assistance Users</th>
              <th>Total Users</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filterCurrentRowData.map((row, index) => (
              <tr key={row.id}>
                <td>promoters name</td>
                <td style={{ color: "#03a9f4" }}>Promocode Nos</td>
                <td>{row.phone}</td>
                <td>users Nos</td>
                <td>users Nos</td>
                <td className="action-button">
                  <button id="action-btn">DETAILS</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="fourth-div">
        <div className="pagination">
          <div>
            <h5>
              Showing {indexOfFirstRow + 1} to {indexOfLastRow} of{" "}
              {records.length} Entries
            </h5>
          </div>
          <div className="btn-div">
            <button onClick={handlehandle} disabled={currentPage === 1}>
              Prev
            </button>
            ...
            <button onClick={handlenext} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotersUsersData;
