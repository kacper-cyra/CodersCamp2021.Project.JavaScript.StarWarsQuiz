import * as config from '../config';

export const getModeSpecificOptions = (mode) => {
  switch (mode) {
    case process.env.PEOPLE_GAME_MODE:
      return {
        maxValue: config.NUMBER_OF_AVAILABLE_PEOPLE,
        excludedValues: config.excludedPeopleIds,
        resourcePath: config.PEOPLE_RESOURCE_PATH,
        imagesPath: config.PEOPLE_IMAGES_PATH,
      };
    case process.env.STARSHIPS_GAME_MODE:
      return {
        maxValue: config.NUMBER_OF_AVAILABLE_STARSHIPS,
        excludedValues: config.excludedStarshipsIds,
        resourcePath: config.STARSHIP_RESOURCE_PATH,
        imagesPath: config.STARSHIP_IMAGES_PATH,
      };
    case process.env.VEHICLES_GAME_MODE:
      return {
        maxValue: config.NUMBER_OF_AVAILABLE_VEHICLES,
        excludedValues: config.excludedVehiclesId,
        resourcePath: config.VEHICLE_RESOURCE_PATH,
        imagesPath: config.VEHICLE_IMAGES_PATH,
      };
    default:
      return null;
  }
};
