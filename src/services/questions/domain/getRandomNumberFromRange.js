export const getRandomNumberFromRange = (maxValue, valuesToExclude) => {
  const randomId = Math.floor(Math.random() * maxValue);

  if (!valuesToExclude.includes(randomId)) {
    valuesToExclude.push(randomId);

    return randomId;
  }

  return getRandomNumberFromRange(maxValue, valuesToExclude);
};
