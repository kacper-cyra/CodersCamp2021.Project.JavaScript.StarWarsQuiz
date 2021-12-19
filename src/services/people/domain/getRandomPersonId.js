import { NUMBER_OF_AVAILABLE_PEOPLE, excludedPeopleIds } from '../config';

export const getRandomPersonId = () => {
  const randomId = Math.floor(Math.random() * NUMBER_OF_AVAILABLE_PEOPLE);

  return excludedPeopleIds.includes(randomId) ? getRandomPersonId() : randomId;
};
