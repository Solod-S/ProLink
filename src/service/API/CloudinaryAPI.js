import { cloudinaryAxiosInstance } from "../axios/axios";

export async function uploadFileToCloudinary(mediaFilePath) {
  const formData = new FormData();
  formData.append("file", mediaFilePath);
  formData.append("upload_preset", "prolink");
  try {
    const { data } = await cloudinaryAxiosInstance.post(`/image/upload`, formData);
    return data;
  } catch (error) {
    console.log(error);
  }
}
