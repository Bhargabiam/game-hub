import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "aaf57ac71ca741c69493d959cd24eb4e",
  },
});
