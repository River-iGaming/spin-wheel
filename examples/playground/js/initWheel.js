import {Wheel} from '../../../dist/spin-wheel-esm.js';

const props = {
  items: [
    {
      label: '1 Spin',
    },
    {
      label: '20 Spins',
    },
    {
      label: '50 Spins',
    },
    {
      label: 'Jackpot',
    },
    {
      label: 'Midi Jackpot',
    },
    {
      label: 'Mini Jackpot',
    },
  ],
  itemBackgroundColors: ['#fff', '#eee', '#ddd'],
		isInteractive: false,
		borderWidth: 0,
		radius: 0.94,
		pointerAngle: 90,
		itemLabelRotation: 0,
		lineWidth: 0,
		itemLabelAlign: 'left',
		itemLabelRadius: 0.4,
		itemLabelRadiusMax: 0,
		rotationSpeedMax: 40000,
};

const container = document.querySelector('.wheel-wrapper');

// Save object globally for easy debugging.
window.wheel = new Wheel(container, props);

// Log events for easy debugging:
wheel.onCurrentIndexChange = e => console.log(e);
wheel.onRest = e => console.log(e);
wheel.onSpin = e => console.log(e);