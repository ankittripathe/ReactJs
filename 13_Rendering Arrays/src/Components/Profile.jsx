import React from "react";

const Profile = ({ features }) => {
  const list = features.map((item) => <li>{item}</li>);

  return (
    <div>
      <h1>{list}</h1>
    </div>
  );
};

export default Profile;
