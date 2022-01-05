import { GAME_CONTAINER_COMPONENT_NAME } from '../components/GameContainer/GameContainer.js';

export const App = ({ options: { rootNodeId } }) => {
  const rootNode = document.getElementById(rootNodeId);
  const GameContainer = document.createElement(GAME_CONTAINER_COMPONENT_NAME);
  rootNode.appendChild(GameContainer);
};
