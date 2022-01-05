import { getQuizQuestion } from '../questions/questions';
import { timer } from './application/timer';

const QUESTION_TIME = 120;

async function gameStart(gameMode) {
  const timer = timer(QUESTION_TIME);
  const questions = await Promise.all(
    new Array(20).fill(undefined).map(() => getQuizQuestion(gameMode)),
  );
}
