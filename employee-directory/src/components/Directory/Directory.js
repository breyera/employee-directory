import React from "react";
import ListItem from "../../components/ListItem";

function Directory(props) {
  const users = props.search ? props.sortList : props.users;
  return (
    <div className="container-fluid">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Photo</th>
            <th scope="col">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="clickable"
                onClick={(e) => {
                  props.filter(e);
                }}
              >
                Name <span className={props.toggle}></span>
              </a>
            </th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <ListItem key={i} user={user} index={i + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Directory;
