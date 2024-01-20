import React, { useEffect, useState } from "react";
// import "../user_management/userdata/userdata.scss";
import "./notification.scss";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const NotificationData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = records.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(records.length / rowsPerPage);
  const [showAddNews, setShowAddNews] = useState(false);  
  const [showActive, setShowActive] = useState(false);


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

  // popup add news
  const handleClosepopup = () => setShowAddNews(false);
  const handleShowpopup = () => setShowAddNews(true);
  return (
    <>
      <div className="notification">
        <div className="fist-head">
          <h4>Notification</h4>
          <button onClick={handleShowpopup} id="btn">
            ADD
          </button>
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
            <label htmlFor="search" id="search-id">
              Search :{" "}
            </label>
            <input
              type="text"
              id="search"
              onChange={searchhandle}
              placeholder="Search"
              autoComplete="off"
            />
          </div>
        </div>
        <br />
        <div className="table-responsive third-head">
          <table className="table table-div">
            <thead>
              <tr>
                <th>News ID</th>
                <th>News Details</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Type Of News</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filterCurrentRowData.map((row, index) => (
                <tr key={row.id}>
                  <td>-</td>
                  <td >-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td className="notfy-status">
                  {showActive ? (
                    <span className="status-span">
                      <p id="active-status"></p>Active
                    </span>
                  ) : (
                    <span className="status-span">
                      <p id="pending-status"></p>Pending
                    </span>
                  )}</td>
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
              <button
                onClick={handlenext}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* add popup */}

      <Modal
        show={showAddNews}
        onHide={handleClosepopup}
        className="main-div-popup"
      >
        <Modal.Header closeButton className="head-div">
          <Modal.Title className="tittle">Add News</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="popup-main-div">
            <div className="first-div">
              <label htmlFor="">Descriptions</label> <br />
              <textarea name="" id="" cols="55" rows="5"></textarea>
            </div>
            <div className="second-div">
              <label htmlFor="">From Date</label>
              <input type="Date" />
            </div>
            <div className="third-div">
              <label htmlFor="">To Date</label>
              <input type="Date" />
            </div>
            <div className="fourth-div">
              <label htmlFor="">Type Of News</label>
              <select name="" id="">
                <option value="">Select News Type</option>
                <option value="">Premium</option>
                <option value="">Free</option>
                <option value="">Promoter</option>
              </select>
            </div>
            <div className="fifth-div">
              <button className="submit-btn">Submit</button>
              <button className="close-btn">Close</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NotificationData;
