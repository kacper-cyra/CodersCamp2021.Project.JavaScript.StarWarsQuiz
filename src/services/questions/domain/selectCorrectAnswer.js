export const selectCorrectAnswer = (answers) => {
  return answers[Math.floor(Math.random() * answers.length)];
};
