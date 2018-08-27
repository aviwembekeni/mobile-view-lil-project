import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className>
      <nav class="navbar navbar-expand-sm navbar-dark bg-pink ">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <a class="navbar-brand" href="landing.html">
            Create a HI5
          </a>
          <br />
          <p className="small-text">3 left</p>

          <div class="collapse navbar-collapse" id="mobile-nav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="profiles.html">
                  {" "}
                  Developers
                </a>
              </li>
            </ul>

            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="register.html">
                  Sign Up
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="login.html">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SearchBox;
/*<input
        className=""
        type="search"
        placeholder="search users"
        onChange={searchChange}
      />*/
