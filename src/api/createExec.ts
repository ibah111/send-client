import store from "../Reducer";
import axios from "axios";
import server from "../utils/server";
export default async function createExec(value: number, old: any = {}) {
  const token = store.getState().User.token;
  const response = await axios.post<number | false>(server() + "/create_exec", {
    token,
    id: value,
    old,
  });
  return response.data;
}
