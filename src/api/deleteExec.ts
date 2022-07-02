import store from "../Reducer";
import axios from "axios";
import server from "../utils/server";
export default async function deleteExec(value: number) {
  const token = store.getState().User.token;
  const response = await axios.post<false | number>(server() + "/delete_exec", {
    token,
    id: value,
  });
  return response.data;
}
