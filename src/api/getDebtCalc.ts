import { DebtCalc } from "@contact/models";
import axios from "axios";
import store from "../Reducer";
import server from "../utils/server";

export default async function getDebtCalc() {
  const token = store.getState().User.token;
  const id = store.getState().Send.id;
  const response = await axios.post<DebtCalc[]>(server() + "/debt_calc", {
    token,
    id,
  });
  return response.data;
}
