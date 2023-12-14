import { Api } from "./interceptor";

const fetcher = async (url) => {
    try {
        if (!url) throw new Error("URL is required.");
      const res = await Api.get(url);
      return res.data;
    } catch (err) {
      throw err;
    }
  };
  
export default fetcher  