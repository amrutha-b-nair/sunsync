import { TradfriClient, AccessoryTypes } from 'node-tradfri-client';
import { GATEWAY_IP, SECURITY_CODE } from './config.js';

const tradfri = new TradfriClient(GATEWAY_IP);
console.log(GATEWAY_IP, SECURITY_CODE)

const devices = {};
const lightbulbs = {};

const connectToGateway = async () => {
  try {
    const { identity, psk } = await tradfri.authenticate(SECURITY_CODE);

    await tradfri.connect(identity, psk);
    await tradfri
      .on('device updated', tradfriDeviceUpdated)
      .on('device removed', tradfriDeviceRemoved)
      .on('group updated', tradfriGroupUpdated)
      .observeDevices();

    console.log('Connected to gateway.');
  } catch (e) {
    console.log('Error connecting to gateway:', e);
  }
};

function tradfriDeviceUpdated(device) {
  devices[device.instanceId] = device;
  if (device.type === AccessoryTypes.lightbulb) {
    lightbulbs[device.instanceId] = device;
  }
}

function tradfriDeviceRemoved(instanceId) {
}

function tradfriGroupUpdated(group) {
}

export { connectToGateway, lightbulbs };
