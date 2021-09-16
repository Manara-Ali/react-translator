// 1. IMPORT AXIOS
import axios from "axios";

// 2. CREATE AXIOS BASE SETTINGS
const api = axios.create({
  baseURL: "https://translation.googleapis.com/language/translate/v2",
  params: {
    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
  },
});

// 3. EXPORT AXIOS
export default api;
