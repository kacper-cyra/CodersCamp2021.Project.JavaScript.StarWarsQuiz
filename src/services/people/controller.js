import { PEOPLE_RESOURCE_PATH } from './config';
import { axiosInstance } from '../../infrastructure/axios/axios';

export const fetchPerson = async (id) => {
  try {
    const response = await axiosInstance.get(`${PEOPLE_RESOURCE_PATH}${id}/`);

    return { ...response.data, id };
  } catch (error) {
    console.error(`Failed to fetch person with id ${id}`, error);
  }
};
