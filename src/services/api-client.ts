import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "007be82806bb497fa52c923066154a52",
  },
});
