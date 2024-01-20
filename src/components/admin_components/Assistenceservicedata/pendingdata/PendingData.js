import React, { useEffect, useState } from "react";
import "./pendingdata.scss";
import axios from "axios";
import { FaCheck } from "react-icons/fa6";
const PendingData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearchData, setShowSearchData] = useState(false);
  const [submit, setSubmit] = useState(false);
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
  //filter the currentrow data
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

  //filte the currentrow after submit data
  const aftersubmit = currentRows.filter((data) => {
    if (submit) {
      return (
        search === null ||
        data.id.toString().includes(showSearchData.toString()) ||
        data.name.toLowerCase().includes(showSearchData.toLowerCase()) ||
        data.username.toLowerCase().includes(showSearchData.toLowerCase()) ||
        data.email.toLowerCase().includes(showSearchData.toLowerCase()) ||
        data.phone.toLowerCase().includes(showSearchData.toLowerCase()) ||
        data.address.city.toLowerCase().includes(showSearchData.toLowerCase())
      );
    }
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

  function showsearchdata(e) {
    setShowSearchData(e.target.value);
    setSubmit(false);
  }
  function submitresult() {
    setSubmit(true);
  }
  return (
    <div className="pending-user">
      <div className="fist-head">
        <h4>Search For Email ID</h4>
        <div id="email-div">
          <input
            type="email"
            placeholder="Enter Email ID"
            onChange={showsearchdata}
          />
          <button onClick={submitresult}>SEARCH</button>
        </div>
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
              <th>Registration No</th>
              <th>Name</th>
              <th>Email Id</th>
              <th>Mobile No</th>
              <th>Caste</th>
              <th>User type</th>
              <th>Assistance</th>
            </tr>
          </thead>
          <tbody>
            {submit ? (
              <>
                {aftersubmit.map((row, index) => (
                  <tr key={row.id}>
                    <td>-</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.phone}</td>
                    <td>caste here</td>
                    <td>free/silver users</td>
                    <td className="assistance-active">
                      <button className="btn">
                        <FaCheck /> <br />
                        ACTIVE
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <>
                {filterCurrentRowData.map((row, index) => (
                  <tr key={row.id}>
                  <td>-</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.phone}</td>
                    <td>caste here</td>
                    <td>free/silver users</td>
                    <td className="assistance-active">
                      <button className="btn">
                        <FaCheck /> <br />
                        ACTIVE
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            )}
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

export default PendingData;
