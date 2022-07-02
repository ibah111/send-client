import store from "../Reducer";
import axios from "axios";
import server from "../utils/server";
import { Dict } from "@contact/models";
export default async function getDict(value: number) {
  const token = store.getState().User.token;
  const response = await axios.post<Dict[]>(server() + "/dict", {
    token,
    id: value,
  });
  return response.data;
}
