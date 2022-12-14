import React from "react";
import { Create } from "react-admin";
const AdminPost = (props) => {
  return (
    <div>
      <Create title="Create a Post" {...props}></Create>
    </div>
  );
};

export default AdminPost;
