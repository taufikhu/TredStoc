import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/me",
          {
            withCredentials: true,
          }
        );

        if (data.success) {
          setUser(data.user);
        }
      } catch (error) {
        console.log("Not logged in");
        setUser(null);
      }
    };

    getUser();
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">

        <Link className="navbar-brand" to="/">
          <img
            src="Images/tred.png"
            style={{ width: "200px" }}
            alt="logo"
          />
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-lg-0">

            {user ? (
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  👤 {user.username}
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;