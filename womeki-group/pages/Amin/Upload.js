import { useEffect } from "react";
import React, { useState } from "react";
// import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import styles from '../Amin/Admin.module.css'
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

function Upload() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, SetRedirect] = useState(false);
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      SetRedirect(true);
    }
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      const body = document.querySelector("body");
      body.style.backgroundColor = "white";
    }
  }, []);

  // if(redirect){
  //   return <Navigate to="/" />
  // }
  return (
    <div className=" pt-5 ">
      <div className=" container ">
        <div className=" row justify-content-center ">
          <div className="col-md-6">
            <form className="login pt-5" onSubmit={createNewPost}>
            <h3 className="text-center mb-4">Upload Data</h3>
            <div className="form-group mb-3">
              <input
                type="title"
                className="form-control"
                placeholder="Title"
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
              />
              </div>
              <div className="form-group mb-3">
              <input
                type="summary"
                className="form-control"
                placeholder="Summary"
                value={summary}
                onChange={(ev) => setSummary(ev.target.value)}
              />
              </div>
              <div className="form-group mb-3">
              <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
              </div>
              <ReactQuill value={content} onChange={setContent} />
              <div className="form-group text-center">
              <button className={` mt-3 ${styles.Explorebtn}`} style={{ marginTop: "5px" }}>Create post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default Upload;
