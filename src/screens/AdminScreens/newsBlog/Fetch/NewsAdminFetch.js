import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import AdminDashboard from "../../AdminDashboard";
import { FaCheck, FaEdit, FaTimes, FaTrash } from "react-icons/fa";
import BasicExample from "../../../../components/navbar/NavBar";

const NewsAdminFetch = ({ poster }) => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          background: "rgb(255, 255, 255)",
          height: "auto",
        }}
      >
        <h1 style={{ fontSize: "25px" }}>LATEST NEWS </h1>

        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>POST IMAGE</th>
              <th>POST CAPTION</th>
              <th>POST DESC</th>
              <th>POST CONTENT</th>
              <th>POST CATEGORY</th>
            </tr>
          </thead>
          <tbody>
            {poster?.map((usery) => (
              <tr key={usery._id}>
                <td>{usery?._id}</td>
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

export default NewsAdminFetch;
