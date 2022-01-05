const ONE_SECOND = 1000;

export const timer = (questionTime, callback) => {
  let leftTime = questionTime;

  const intervalId = setInterval(() => {
    leftTime -= 1;

    if (leftTime <= 0) {
      callback();
      console.log('intervalId', intervalId);
      clearInterval(intervalId);
    }
  }, ONE_SECOND);
};
