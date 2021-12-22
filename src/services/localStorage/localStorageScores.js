export const localStorageScores = ({ gameMode }) => {
  return {
    saveScore({ playerName, score }) {
      const save = { playerName, score };
      const previousSave = JSON.parse(localStorage.getItem(gameMode));

      if (!previousSave) {
        localStorage.setItem(gameMode, JSON.stringify([save]));
      } else {
        localStorage.setItem(gameMode, JSON.stringify([...previousSave, save]));
      }
    },
    readScore() {
      return JSON.parse(localStorage.getItem(gameMode));
    },
  };
};