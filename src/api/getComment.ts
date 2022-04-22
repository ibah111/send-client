import store from "../Reducer";
import axios from "axios";
import server from "../utils/server";
export default async function getComment(data: {
  type: "law_act" | "law_exec";
  id: number;
}) {
  const token = store.getState().User.token;
  const response = await axios({
    method: "POST",
    url: server() + "/get_comment",
    data: { token, ...data },
  });
  return response.data;
}
