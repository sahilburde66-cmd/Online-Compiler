// import axios from "axios";
// import { LANGUAGE_VERSIONS } from "./constants";

// const API = axios.create({
//   baseURL: "https://emkc.org/api/v2/piston",
//   timeout: 30000, // 30 second timeout
// });

// // Add request interceptor for error handling
// API.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Add response interceptor for error handling
// API.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.code === "ECONNABORTED") {
//       throw new Error("Request timeout - the code execution took too long");
//     }
//     if (error.response) {
//       // Server responded with error
//       throw new Error(
//         error.response.data.message || "Server error occurred"
//       );
//     } else if (error.request) {
//       // Request made but no response
//       throw new Error("No response from server - please check your connection");
//     } else {
//       // Something else happened
//       throw new Error(error.message || "An unexpected error occurred");
//     }
//   }
// );

// export const executeCode = async (language, sourceCode) => {
//   try {
//     const response = await API.post("/execute", {
//       language: language,
//       version: LANGUAGE_VERSIONS[language],
//       files: [
//         {
//           content: sourceCode,
//         },
//       ],
//     });
//     return response.data;
//   } catch (error) {
//     // Re-throw with more context
//     throw error;
//   }
// };

import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
  timeout: 30000, // 30 second timeout
});

// Add request interceptor for error handling
API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.code === "ECONNABORTED") {
      throw new Error("Request timeout - the code execution took too long");
    }
    if (error.response) {
      // Server responded with error
      throw new Error(
        error.response.data.message || "Server error occurred"
      );
    } else if (error.request) {
      // Request made but no response
      throw new Error("No response from server - please check your connection");
    } else {
      // Something else happened
      throw new Error(error.message || "An unexpected error occurred");
    }
  }
);

export const executeCode = async (language, sourceCode, stdin = "") => {
  try {
    const response = await API.post("/execute", {
      language: language,
      version: LANGUAGE_VERSIONS[language],
      files: [
        {
          content: sourceCode,
        },
      ],
      stdin: stdin, // Add stdin support for user input
    });
    return response.data;
  } catch (error) {
    // Re-throw with more context
    throw error;
  }
};