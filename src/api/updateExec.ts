import store from "../Reducer";
import axios from "axios";
import server from "../utils/server";
export default async function updateExec() {
  const token = store.getState().User.token;
  const data = store.getState().Send;
  const response = await axios({
    method: "POST",
    url: server() + "/update_exec",
    data: { token, ...data },
  });
  return response.data;
}
