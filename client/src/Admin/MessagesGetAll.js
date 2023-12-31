import { CircularProgress } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllEnquiries } from "../Actions/messageAction";
import { GetAllEnqReducer } from "../Reducers/messageReducer";
import "./table.css";

const GetAllMessages = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(GetAllEnquiries());
  }, [dispatch]);

  var count = 0;
  const { loading, error, enquiries } = useSelector(
    (state) => state.GetAllEnqReducer
  );
  return (
    <div style={{marginBottom:'20%'}} >
      {loading && <CircularProgress />}
      {error && <h2 style={{ color: "red" }}>OOPS! Something went wrong</h2>}
      <table class="table">
        <thead>
          <th>S.No</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Comment</th>

          <th>Commented On</th>
        </thead>
        <tbody>
          {enquiries &&
            enquiries.map((i) => {
              return (
                <tr>
                  <td data-label='S.No' > {++count} </td>
                  <td data-label='Name' > {i.name} </td>
                  <td data-label='Phone Number' >
                    <a
                      herf={`tel:+91${i.contact}`}
                      style={{ textDecoration: "none" }}
                    >
                      {i.contact}
                    </a>{" "}
                  </td  >
                  <td data-label='Comment' > {i.comment} </td>

                  <td data-label='Date of Comment' > {i.createdAt?.substr(0, 10)} </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllMessages;
