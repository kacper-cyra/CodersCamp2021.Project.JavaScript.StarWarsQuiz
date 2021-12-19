import { getRandomPersonId } from './domain/getRandomPersonId';
import { selectCorrectAnswer } from './domain/selectCorrectAnswer';
import { fetchPerson } from './controller';
import { PEOPLE_IMAGES_PATH } from './config';

export const getPeopleQuizQuestion = async () => {
  const peopleIds = new Array(4).fill(undefined).map(getRandomPersonId);
  const peopleData = await Promise.all(
    [...peopleIds].map((id) => fetchPerson(id)),
  );
  const { id: rightAnswerId, name: rightAnswer } =
    selectCorrectAnswer(peopleData);

  return {
    imagePath: `${PEOPLE_IMAGES_PATH}${rightAnswerId}.jpg`,
    answers: peopleData.map((person) => person.name),
    rightAnswer,
  };
};
