import { getRandomNumberFromRange } from './domain/getRandomNumberFromRange';
import { selectCorrectAnswer } from './domain/selectCorrectAnswer';
import { getModeSpecificOptions } from './domain/getModeSpecificOptions';
import { fetchResource } from './controller';

export const getQuizQuestion = async (gameMode) => {
  const { maxValue, excludedValues, resourcePath, imagesPath } =
    getModeSpecificOptions(gameMode);
  const peopleIds = new Array(4)
    .fill(undefined)
    .map(() => getRandomNumberFromRange(maxValue, excludedValues));
  const peopleData = await Promise.all(
    [...peopleIds].map((id) => fetchResource(id, resourcePath)),
  );
  const { id: rightAnswerId, name: rightAnswer } =
    selectCorrectAnswer(peopleData);

  return {
    imagePath: `${imagesPath}${rightAnswerId}.jpg`,
    answers: peopleData.map((person) => person.name),
    rightAnswer,
  };
};
