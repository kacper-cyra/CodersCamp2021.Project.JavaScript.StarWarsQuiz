import 'regenerator-runtime/runtime'; //async/await with Parcel
import { App } from './app/App';
import './theme/style.scss'; // Import scss

const ONE_SECOND_MILLIS = 1000;
const SW_API_BASE_URL = process.env.SW_API_BASE_URL || 'https://swapi.dev/api';
const QUIZ_MAX_TIME = process.env.QUIZ_MAX_TIME_SECONDS
  ? process.env.QUIZ_MAX_TIME_SECONDS * ONE_SECOND_MILLIS
  : 120 * ONE_SECOND_MILLIS;
const ROOT_NODE_ID = 'swquiz-app';

window.onload = () => {
  App({
    options: {
      swApiBaseUrl: SW_API_BASE_URL,
      quizMaxTime: QUIZ_MAX_TIME,
      rootNodeId: ROOT_NODE_ID,
    },
  });
};
