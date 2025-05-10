import { GoogleGenAI } from "@google/genai";
import { OPENAI_KEY } from "../utils/constants";

console.log("API KEY:", OPENAI_KEY); 
const openai = new GoogleGenAI({ 
    apiKey: OPENAI_KEY,
    dangerouslyAllowBrowser : true
});
export default openai;
