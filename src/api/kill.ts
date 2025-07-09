import axios from "axios";

const route = '/kill';
export default async function kill() {
  try {
    const response = await axios.post(route);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
