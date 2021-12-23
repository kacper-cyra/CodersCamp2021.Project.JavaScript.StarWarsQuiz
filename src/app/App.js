import { HALL_OF_FAME_BUTTON_COMPONENT_NAME } from '../components/HallOfFameButton/HallOfFameButton';

export const App = ({ options: { rootNodeId } }) => {
    const rootNode = document.getElementById(rootNodeId);

    const hallOfFameButton = document.createElement(HALL_OF_FAME_BUTTON_COMPONENT_NAME);
    console.log(hallOfFameButton)
    hallOfFameButton.setParameters('../../static/assets/img/modes/icon/contacts_24px.png', "Hall of fame")
    rootNode.appendChild(hallOfFameButton)
};