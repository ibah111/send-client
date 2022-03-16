import store from "../Reducer";
import axios from "axios";
import server from "../utils/server";
export default async function getDict(value: number) {
  const token = store.getState().User.token;
  const response = await axios({
    method: "POST",
    url: server() + "/dict",
    data: { token, id: value },
  });
  return response.data;
}
