import React, { useEffect, useState } from "react";
import "./onlinetransaction.scss";
import axios from "axios";

const OnlineTransactionData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = records.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(records.length / rowsPerPage);
  const [showActive,setShowActive]=useState(false)
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
      <div className="onlinetransaction-user">
        <div className="fist-head">
          <h4>Online Transaction</h4> 
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
        <div className="table-responsive third-head">
          <table className="table table-div">
            <thead>
              <tr>
                <th>Date</th>
                <th>UserName</th>
                <th>Registration No</th>
                <th>Bank Reference Number</th>
                <th>Mode Of Payment</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filterCurrentRowData.map((row, index) => (
                <tr key={row.id}>
                  <td>-</td>
                  <td>{row.username}</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Rs. </td>
                  <td className="online-trans-status">{showActive? <span className="online-status-span"><p id="online-success-status"></p>TXN_Success</span>:<span className="online-status-span" ><p id="online-pending-status"></p>TXN_Pending</span>}</td>
                  
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

export default OnlineTransactionData;
