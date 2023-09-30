import { socialNetworkAxiosInstance } from "../axios/axios";

export async function fetchMyPosts() {
  const { data } = await socialNetworkAxiosInstance.get(`/own-posts`);
  return data;
}

export async function deleteMyPost(id) {
  const { data } = await socialNetworkAxiosInstance.delete(`/own-posts/remove/${id}`);
  return data;
}

export async function createMyPost(body) {
  const { data } = await socialNetworkAxiosInstance.post(`/own-posts/add`, body);
  return data;
}

export async function updateMyPost({ id, body }) {
  const { data } = await socialNetworkAxiosInstance.patch(`/own-posts/update/${id}`, body);
  return data;
}
