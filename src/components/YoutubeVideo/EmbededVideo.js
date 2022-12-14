import React from "react";
import { Container } from "react-bootstrap";

const EmbededVideo = () => {
  return (
    <div>
      <Container>
        <div className="ratio ratio-21x9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/sDUmVprZ43M?start=10"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            autoPlay
            muted
          ></iframe>
          {/* <iframe
            src=""
            title="YouTube video"
            allowfullscreen
          ></iframe> */}
        </div>
      </Container>
    </div>
  );
};

export default EmbededVideo;
