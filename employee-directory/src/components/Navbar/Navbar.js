import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
        <h1 className="navbar-brand">Employee Directory</h1>
      </div>
      <div className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Filter"
          onChange={(e) => {
            props.filter(e);
          }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
