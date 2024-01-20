import React, { useEffect, useState } from "react";
import "./promoterdata.scss";
import { FaCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import axios from "axios";

const PromotersData = () => {
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
    <div className="promoterdata-user">
      <div className="fist-head">
        <h4>Promoters</h4>
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
      <div className="radio-input-div">
        <input type="radio" id="all" name="select-one" required/>All
        <input type="radio" id="active" name="select-one"/>Active
        <input type="radio" id="inactive" name="select-one"/>Inactive
        <input type="radio" id="Pending" name="select-one"/>Pending
      </div>
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
        <table className=" table table-div">
          <thead>
            <tr>
              <th>Promoter Name</th>
              <th >Promoter Code</th>
              <th>Mobile</th>
              <th>Email Id</th>
              <th>Promoter Type</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            {filterCurrentRowData.map((row, index) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>-</td>
                <td>{row.phone}</td>
                <td>{row.email}</td>
                <td>-</td>
                <td className="promoter-status">{showActive? <span className="promoter-status-span"><p id="active-status"></p>Active</span>:<span className="promoter-status-span" ><p id="pending-status"></p>Pending</span>}</td>
                  <td className="promoter-status-change-btn">{showActive? <button className="promoter-pending-status-btn"><MdDelete /> <br />INACTIVE</button>:<button className="promoter-active-status-btn"><FaCheck/> <br />ACTIVE</button>}</td>
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

export default PromotersData;
