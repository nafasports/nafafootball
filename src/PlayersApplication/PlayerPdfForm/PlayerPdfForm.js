import React, { useEffect, useState, useRef } from "react";
import nssfl3 from "../../assets/images/nssfl3.jpg";
import "./PlayerPdf.css";
import FileDownload from "js-file-download";
import Axios from "axios";
import Modal from "react-bootstrap/Modal";
import BasicExample from "../../components/navbar/NavBar";
import { Button } from "react-bootstrap";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import ReactToPrint from "react-to-print";
import { ComponentToPrint } from "./ComponentToPrint";
import Footer from "../../components/Footer/Footer";
const PlayerPdfForm = (props) => {
  const [modal, setModal] = useState(false);
  const componentRef = useRef();
  //   const handlePrint = () => {
  //     useReactToPrint({
  //       content: () => componentRef.current,
  //     });
  //   };
  const handleClose = () => {
    setModal(false);
  };
  const [show, setShow] = useState(false);

  const handlesClose = () => setShow(false);
  const handlesShow = () => setShow(true);

  // const click = () => {
  //   setModal(!modal);
  // };

  useEffect(() => {
    setModal(!modal);
  }, []);

  const downloads = (e) => {
    e.preventDefault();
    Axios({
      url: "https://nafasports.herokuapp.com/api/pdf",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      FileDownload(res.data, "nafaPlayerRegisterationForm.doc.pdf");
    });
  };

  return (
    <div>
      <BasicExample />
      {/* /// */}

      {/* /// */}
      <div
        style={{
          backgroundImage: `url(${nssfl3})`,
        }}
        className="reg-p-main-div"
      >
        {/* <button onClick={(e) => downloads(e)}>download</button> */}
        {modal ? (
          <div>
            <div>
              <div
                className="modal show"
                style={{ display: "block", position: "initial" }}
              >
                <Modal.Dialog>
                  <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title
                      style={{
                        width: "80%",
                        fontSize: "large",
                        fontWeight: "600",
                      }}
                    >
                      THE NIGERIAN SECONDARY SCHOOL FLAG FOOTBALL LEAGUE(NSSFFL)
                    </Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>
                      <BsFileEarmarkPdfFill
                        style={{
                          fontSize: "50px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      />
                      {/* <ComponentToPrint ref={componentRef} /> */}
                    </p>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button
                      variant="primary"
                      onClick={(e) => downloads(e)}
                      className="bn-btn-dif"
                    >
                      Download Form
                    </Button>
                    <>
                      <Button
                        variant="primary"
                        onClick={handlesShow}
                        className="bn-btn-dif"
                      >
                        Print Form
                      </Button>

                      <Modal
                        show={show}
                        onHide={handlesClose}
                        className="mp-divs"
                      >
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>
                          {" "}
                          <ComponentToPrint ref={componentRef} />{" "}
                        </Modal.Body>
                        <Modal.Footer>
                          <div>
                            <ReactToPrint
                              trigger={() => (
                                <Button
                                  variant="primary"
                                  className="bn-btn-dif"
                                >
                                  Print
                                </Button>
                              )}
                              content={() => componentRef.current}
                            />
                          </div>
                        </Modal.Footer>
                      </Modal>
                    </>
                    {/* <div>
                      <ReactToPrint
                        trigger={() => (
                          <Button variant="primary">Print Form</Button>
                        )}
                        content={() => componentRef.current}
                      />
                    </div> */}
                    {/* <Button variant="primary">Print Form</Button> */}
                  </Modal.Footer>
                </Modal.Dialog>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PlayerPdfForm;
