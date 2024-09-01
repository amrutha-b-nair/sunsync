import { connectToGateway } from './connect.js';
import { blinkLightbulbs } from './control.js';

const lightID = 65541;

const run = async () => {
  await connectToGateway();
  await new Promise(resolve => setTimeout(resolve, 3000)); 
  blinkLightbulbs(lightID);
};

run();
