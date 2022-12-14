import React, { useState } from "react";
import axios from "axios";

const VideoUpload = ({ getAllMedias }) => {
  const [caption, setCaption] = useState("");
  const [desc, setDesc] = useState("");
  const [videos, setVideos] = useState([]);

  const hadleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    for (let key in videos) {
      formdata.append("videos", videos[key]);
    }

    formdata.append("caption", caption);
    formdata.append("desc", desc);

    axios
      .post("http://localhost:5000/api/v1/media/create", formdata)
      .then((success) => {
        setCaption("");
        setDesc("");
        setVideos("");

        // getAllMedias();

        alert("Submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error happened!");
      });
  };

  return (
    <>
      <form onSubmit={hadleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Caption</label>
          <input
            type="text"
            caption="name"
            id="name"
            className="form-control"
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Content</label>
          <input
            type="text"
            desc="desc"
            id="name"
            className="form-control"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="videos">Upload Videos</label>
          <input
            type="file"
            name="videos"
            id="videos"
            multiple
            className="form-control"
            accept=".mp4, .mkv"
            onChange={(e) => {
              setVideos(e.target.files);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default VideoUpload;
