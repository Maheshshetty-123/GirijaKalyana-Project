import React from "react";
import { FaUsers } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./dashboard.scss";

function DashBoard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((data) => setData(data))
      .then((err) => console.log(err));
  }, []);

  return (
    <div className="dashboard-content-main">
      <div className="card-div">
        {/* Free Users card */}
        <div className="main-div">
          <div>
            <div className="left-div">
              <div className="heading-div">
                <h1>3162</h1>
                <p>Free Users</p>
              </div>
              <div className="right-div">
                <FaUsers style={{ fontSize: "50", color: "#ED7014" }} />
              </div>
            </div>
            <div className="view-all-div">
              <Link>View All</Link>
            </div>
          </div>
        </div>
        {/* Silver Users card */}
        <div className="main-div">
          <div className="left-div">
            <div className="heading-div">
              <h1>0</h1>
              <p>Silver Users</p>
            </div>
            <div className="right-div">
              <FaUsers style={{ fontSize: "50px", color: "#ED7014" }} />
            </div>
          </div>
          <div className="view-all-div">
            <Link>View All</Link>
          </div>
        </div>
        {/* Premium Users card */}
        <div className="main-div">
          <div className="left-div">
            <div className="heading-div">
              <h1>1</h1>
              <p>Premium Users</p>
            </div>
            <div className="right-div">
              <FaUsers style={{ fontSize: "50px", color: "#ED7014" }} />
            </div>
          </div>
          <div className="view-all-div">
            <Link>View All</Link>
          </div>
        </div>
        {/* Total Paid Users card */}
        <div className="main-div">
          <div className="left-div">
            <div className="heading-div">
              <h1>1</h1>
              <p style={{ width: "90px" }}>Total Paid Users</p>
            </div>
            <div className="right-div">
              <FaUsers style={{ fontSize: "50px", color: "#ED7014" }} />
            </div>
          </div>
          <div className="view-all-div">
            <Link to="/admin/onlinetransaction">View All</Link>
          </div>
        </div>
        {/* Assistance Pending card */}
        <div className="main-div">
          <div className="left-div">
            <div className="heading-div">
              <h1>3725</h1>
              <p>Assistance Pending</p>
            </div>
            <div className="right-div">
              <FaUsers style={{ fontSize: "50px", color: "#ED7014" }} />
            </div>
          </div>
          <div className="view-all-div">
            <Link to="/admin/assistencepending" >View All</Link>
          </div>
        </div>
        {/* Assistance Success card */}
        <div className="main-div">
          <div className="left-div">
            <div className="heading-div">
              <h1>2</h1>
              <p>Assistance Success</p>
            </div>
            <div className="right-div">
              <FaUsers style={{ fontSize: "50px", color: "#ED7014" }} />
            </div>
          </div>
          <div className="view-all-div">
            <Link to="/admin/assistencesuccess" >View All</Link>
          </div>
        </div>
        {/* Paid User Receipts card */}
        <div className="main-div">
          <div className="left-div">
            <div className="heading-div">
              <h1>1133432.86</h1>
              <p>Paid User Receipts</p>
            </div>
            <div className="right-div">
              <MdCurrencyRupee style={{ fontSize: "50px", color: "#ED7014" }} />
            </div>
          </div>
          <div className="view-all-div">
            <Link to="/admin/onlinetransaction" >View All</Link>
          </div>
        </div>
        {/* Assistance Receipts card */}
        <div className="main-div">
          <div className="left-div">
            <div className="heading-div">
              <h1>153373.88</h1>
              <p>Assistance Receipts</p>
            </div>
            <div className="right-div">
              <MdCurrencyRupee style={{ fontSize: "50px", color: "#ED7014" }} />
            </div>
          </div>
          <div className="view-all-div">
            <Link to="/admin/assistanceonlinetransaction" >View All</Link>
          </div>
        </div>
        {/* Renewal Receipts card */}
        <div className="main-div">
          <div className="left-div">
            <div className="heading-div">
              <h1>6646.0</h1>
              <p style={{ width: "90px" }}>Renewal Receipts</p>
            </div>
            <div className="right-div">
              <MdCurrencyRupee style={{ fontSize: "50px", color: "#ED7014" }} />
            </div>
          </div>
          <div className="view-all-div">
            <Link to="/admin/onlinetransaction" >View All</Link>
          </div>
        </div>
        {/* Total Online Receipts card */}

        <div className="main-div">
          <div className="left-div">
            <div className="heading-div">
              <h1>1296051.8</h1>
              <p>Total Online Receipts</p>
            </div>
            <div className="right-div">
              <MdCurrencyRupee style={{ fontSize: "50px", color: "#ED7014" }} />
            </div>
          </div>
          <div className="view-all-div">
            <Link to="#">View All</Link>
          </div>
        </div>
      </div>

      {/* bottom portion */}

      <div className="dash-board-bottom">
        {/* Recent Register */}
        <div className="dash-board-bottom-main">
          <div className="heading-div">
            <p>Recent Register</p>
          </div>
          <div className="list-div">
            <p>Registration No</p>
            <p>Name </p>
            <p>Mobile</p>
            <p>Status</p>
          </div>
          <div className="data-fetching">
            <div className="data-div">
              {data.map((data, index) => (
                <ul key={index}>
                  <li>{data.id}</li>
                  <li>{data.username}</li>
                  <li>{data.email}</li>
                  <li>{data.phone}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Online Transaction */}

        <div className="dash-board-bottom-main">
          <div className="heading-div">
            <p>Recent Online Transaction</p>
          </div>
          <div className="list-div">
            <p>Date</p>
            <p>Registration No</p>
            <p>Mode Of Payment</p>
            <p>Amount</p>
          </div>
          <div className="data-fetching">
            <div className="data-div">
              {data.map((data, index) => (
                <ul key={index}>
                  <li>{data.id}</li>
                  <li>{data.username}</li>
                  <li>{data.email}</li>
                  <li>{data.phone}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Assistance Register */}
        <div className="dash-board-bottom-main">
          <div className="heading-div">
            <p>Recent Assistance Register</p>
          </div>
          <div className="list-div">
            <p>Registration No</p>
            <p>Name</p>
            <p>Mobile</p>
            <p>Status</p>
          </div>
          <div className="data-fetching">
            <div className="data-div">
              {data.map((data, index) => (
                <ul key={index}>
                  <li>{data.id}</li>
                  <li>{data.username}</li>
                  <li>{data.email}</li>
                  <li>{data.phone}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Assistance Online Transaction */}
        <div className="dash-board-bottom-main">
          <div className="heading-div">
            <p>Recent Assistance Online Transaction</p>
          </div>
          <div className="list-div">
            <p>Date</p>
            <p>Registration No</p>
            <p>Mode Of Payment</p>
            <p>Amount</p>
          </div>
          <div className="data-fetching">
            <div className="data-div">
              {data.map((data, index) => (
                <ul key={index}>
                  <li>{data.id}</li>
                  <li>{data.username}</li>
                  <li>{data.email}</li>
                  <li>{data.phone}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
