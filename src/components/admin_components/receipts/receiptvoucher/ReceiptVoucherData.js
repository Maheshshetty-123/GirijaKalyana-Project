import React, { useEffect, useState } from "react";
import "../../user_management/userdata/userdata.scss";
import axios from "axios";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import './receiptsdata.scss'

const ReceiptVoucherData = () => {
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
          <h4>Receipt Voucher</h4>
        </div>
        <div className="card-div">
        <div className="main-div">
          <div>
            <div className="left-div">
              <div className="heading-div">
                <h1>6</h1>
                <p>Free Users</p>
              </div>
              <div className="right-div">
                <FaUsers className="icons-class" />
              </div>
            </div>
            <div className="view-all-div">
              <Link>View All</Link>
            </div>
          </div>
        </div>
        <div className="main-div">
          <div>
            <div className="left-div">
              <div className="heading-div">
                <h1>2</h1>
                <p>Premium Users</p>
              </div>
              <div className="right-div">
                <FaUsers className="icons-class" />
              </div>
            </div>
            <div className="view-all-div">
              <Link>View All</Link>
            </div>
          </div>
        </div>
        <div className="main-div">
          <div>
            <div className="left-div">
              <div className="heading-div">
                <h1>$1</h1>
                <p>Online Receipts</p>
              </div>
              <div className="right-div">
                <FaUsers className="icons-class" />
              </div>
            </div>
            <div className="view-all-div">
              <Link>View All</Link>
            </div>
          </div>
        </div>
        <div className="main-div">
          <div>
            <div className="left-div">
              <div className="heading-div">
                <h1>6</h1>
                <p>Renewals</p>
              </div>
              <div className="right-div">
                <FaUsers className="icons-class" />
              </div>
            </div>
            <div className="view-all-div">
              <Link>View All</Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    
  );
};

export default ReceiptVoucherData;
