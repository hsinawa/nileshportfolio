import axios from "axios";

const Task_Req = "Task_Req";
const Task_Suc = "Task_Suc";
const Task_Fail = "Task_Fail";
const Task_API = "/api/task";

export const TaskAddAction = (data) => (dispatch) => {
  dispatch({ type: Task_Req });
  axios
    .post(`${Task_API}/addtask`, data)
    .then((res) => {
      dispatch({ type: Task_Suc });
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: Task_Fail, payload: err });

      window.location.href = "/error";
    });
};