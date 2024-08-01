import React from "react";

const UserLogo = ({ name }) => {
  return <p className="user-logo">{name[0] || "-"}</p>;
};

export default UserLogo;
