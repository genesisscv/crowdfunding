import React, { useState, useEffect } from "react";

function UserDetail(props) {
  const { userId } = props;

  const [userData, setUserData] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/${userId}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }, [userId]);

  if (!userData) {
    return null;
  }

  return <span>{userData.username}</span>;
}

export default UserDetail;
