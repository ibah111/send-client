import store from "../Reducer";
import axios from "axios";
import server from "../utils/server";
export default async function addComment(id: number, value: string) {
  const token = store.getState().User.token;
  const response = await axios({
    method: "POST",
    url: server() + "/add_comment",
    data: { token, id, value },
  });
  return response.data;
}
