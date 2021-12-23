import { selectCorrectAnswer } from './selectCorrectAnswer';

const mockedAnswers = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Jack' },
  { id: 4, name: 'Jill' },
];

describe('selectCorrectAnswer', () => {
  it('should return one of options from given array', () => {
    // Given
    const answers = mockedAnswers;

    // When
    const selectedAnswer = selectCorrectAnswer(answers);

    // Then
    expect(selectedAnswer).toMatchObject(
      answers.find((answer) => answer.id === selectedAnswer.id),
    );
  });
});
