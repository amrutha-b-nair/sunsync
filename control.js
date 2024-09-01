import delay from 'delay';
import { lightbulbs } from './connect.js';

async function blinkLightbulbs(lightID) {
  try {
    const numBlinks = 5;
    const interval = 1000;
    for (let i = 0; i < numBlinks; i++) {
      const light = lightbulbs[lightID].lightList[0];
      await light.toggle(); 
      await delay(interval); 
    }
    console.log('Blinking completed.');
  } catch (error) {
    console.error('Error while blinking the light:', error);
  }
}

export { blinkLightbulbs };
