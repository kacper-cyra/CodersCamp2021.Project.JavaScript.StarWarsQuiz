import { axiosInstance } from '../../infrastructure/axios/axios';

export const fetchResource = async (id, resourceName) => {
  try {
    const response = await axiosInstance.get(`${resourceName}${id}/`);

    return { ...response.data, id };
  } catch (error) {
    console.error(`Failed to fetch ${resourceName} with id ${id}`, error);
  }
};
