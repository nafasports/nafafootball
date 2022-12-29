import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";

import { FaCheck, FaEdit, FaTimes, FaTrash } from "react-icons/fa";
import BasicExample from "../../../../components/navbar/NavBar";
import AdminLayout from "../../AdminLayout";

const NewAdmin = ({ spanish }) => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          background: "rgb(255, 255, 255)",
          height: "auto",
        }}
      >
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>POST IMAGE</th>
              <th>POST CAPTION</th>
              <th>POST DESC</th>
              <th>POST CONTENT</th>
              <th>POST CATEGORY</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {spanish?.map((usery) => (
              <tr key={usery._id}>
                <td>
                  <img
                    src={usery?.image}
                    alt="jj"
                    style={{ width: "auto", height: "8vh" }}
                  />
                </td>
                <td>{usery?.caption}</td>
                <td>{usery?.desc}</td>
                <td>{usery?.content}</td>
                <td>{usery?.category}</td>
                <td>
                  <Link to={`/admin/post/${usery._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <FaEdit />
                    </Button>
                  </Link>
                  <Button variant="danger" className="btn-sm">
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default NewAdmin;
