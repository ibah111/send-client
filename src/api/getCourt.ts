import store from "../Reducer";
import axios from "axios";
import server from "../utils/server";
export default async function getCourt(
  data: { name: string } | { id: number }
) {
  const token = store.getState().User.token;
  const response = await axios({
    method: "POST",
    url: server() + "/court",
    data: { token, ...data },
  });
  return response.data;
}
