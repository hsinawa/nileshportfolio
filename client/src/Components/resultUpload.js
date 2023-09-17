//Firebase
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase";

import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { resultAddAction } from "../Actions/resultAction";

const UploadResult = () => {
  const [pdfUpload, setpdfUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [resultURL, setresultURL] = useState("");
  const [name, setname] = useState("");
  const [standard, setstandard] = useState("");
  const admin = localStorage.getItem("admin");
  const imagesListRef = ref(storage, "pdf/");
const dispatch = useDispatch()
  const AddResult = async (e) => {

    e.preventDefault();
    

    try {
        if (pdfUpload == null) return;
        const imageRef = ref(storage, `results/${pdfUpload.name}-${standard}`);
        const snapshot = await uploadBytes(imageRef, pdfUpload);
        const url = await getDownloadURL(snapshot.ref);
    
        setImageUrls((prev) => [...prev, url]);
        setresultURL(url);
    
        const data = {
          name: name,
          resultURL: url, // Use the URL from the previous await
          standard: standard,
        };
    
        await dispatch(resultAddAction(data));
      } catch (error) {
        alert( error);
      }
      

    
  };

  return (
    <React.Fragment>
      {admin && (
        <div>
          Upload Results here
          <form onSubmit={AddResult}>
            <TextField
              id="outlined-basic"
              label="Enter Name"
              variant="outlined"
              autoComplete="off"
              type="text"
              required
              value={name}
              style={{
                width: "90%",
              }}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />

            <br />
            <br />

            <TextField
              id="outlined-basic"
              label="Enter Standard"
              variant="outlined"
              autoComplete="off"
              type="text"
              required
              value={standard}
              style={{
                width: "90%",
              }}
              onChange={(e) => {
                setstandard(e.target.value);
              }}
            />
            <input
              type="file"
              onChange={(event) => {
                setpdfUpload(event.target.files[0]);
              }}
            />

            <button type="submit" value="submit">
              SUBMIT
            </button>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default UploadResult;
