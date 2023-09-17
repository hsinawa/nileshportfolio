//Firebase
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase";

import React, { useState , useEffect} from "react";

const UploadResult = () => {
  const [pdfUpload, setpdfUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [resultURL, setresultURL] = useState("");
  const [name, setname] = useState("");
  const [standard, setstandard] = useState("");

  const imagesListRef = ref(storage, "pdf/");
  
  const AddResult = (e)=>{
      e.preventDefault();
      if (pdfUpload == null) return;
      const imageRef = ref(storage, `results/${pdfUpload.name}-${standard}`);
      uploadBytes(imageRef, pdfUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
          alert('Added')
   });
      });
  }


  return (
    <React.Fragment>
      Upload Results here

      <form onSubmit={AddResult} >
      <input
        type="file"
        onChange={(event) => {
          setpdfUpload(event.target.files[0]);
        }}
      />

      <button type='submit' value='submit' >SUBMIT</button>

          </form>
     
      {/* <button onClick={uploadFile}> Upload Report</button> */}

      {imageUrls.map((url) => {
        return <img src={url} />;
      })}

    </React.Fragment>
  );
};

export default UploadResult;
