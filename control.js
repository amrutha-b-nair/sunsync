import delay from 'delay';
import { lightbulbs } from './connect.js';

async function blinkLightbulbs(lightID) {
  try {
    const numBlinks = 5;
    const interval = 1000;
    const light = lightbulbs[lightID]?.lightList[0];

    if (!light) {
      console.error('Light not found.');
      return;
    }

    for (let i = 0; i < numBlinks; i++) {
      await light.toggle();
      await delay(interval);
    }
    console.log('Blinking completed.');
  } catch (error) {
    console.error('Error while blinking the light:', error);
  }
}

export { blinkLightbulbs };
