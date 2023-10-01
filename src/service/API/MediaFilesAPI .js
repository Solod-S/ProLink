import { socialNetworkAxiosInstance } from "../axios/axios";

export async function createMediaFile(body) {
  try {
    const { data } = await socialNetworkAxiosInstance.post(`/media-files/add`, body);
    return data;
  } catch (error) {
    console.log(error);
  }
}
