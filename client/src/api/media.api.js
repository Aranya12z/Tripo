import api from "./axios";

export const uploadMedia = async (formData) => {
  return api.post("/media/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
