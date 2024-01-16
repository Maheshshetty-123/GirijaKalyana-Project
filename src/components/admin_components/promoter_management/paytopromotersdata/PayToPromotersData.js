import React, { useEffect, useState } from "react";
import "../../user_management/userdata/userdata.scss";
import axios from "axios";

const PayToPromotersData = () => {
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
          <h4>Pay To Promoters</h4>
        </div>
        <br />
        <div className="second-head">
          <div className="rows-per-page">
            <label>Show </label>
            <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <label>Entries</label>
          </div>

          <div className="search-div">
            <label htmlFor="search" id="search-id">Search : </label>
            <input type="text" id="search" onChange={searchhandle} placeholder="Search" autoComplete="off"/>
          </div>
        </div>
        <br />
        <div className="third-head">
          <table className="table-div">
            <thead>
              <tr>
                <th>ID</th>
                <th style={{width:'300px'}}>Name</th>
                <th>UserName</th>
                <th>Email Id</th>
                <th>City</th>
                <th>Phone</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {filterCurrentRowData.map((row, index) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td style={{ color: "#03a9f4" }}>{row.name}</td>
                  <td>{row.username}</td>
                  <td>{row.email}</td>
                  <td>{row.address.city}</td>
                  <td>{row.phone}</td>
                  <td>{row.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="fourth-div">
        <div className="pagination">
          <div>
          <h5>
          Showing {indexOfFirstRow + 1} to {indexOfLastRow} of {records.length}  Entries
          </h5>
          </div>
          <div className="btn-div">
            <button onClick={handlehandle} disabled={currentPage === 1}>
              Prev
            </button>...
            <button onClick={handlenext} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
        </div>
      </div>
    
  );
};

export default PayToPromotersData;
