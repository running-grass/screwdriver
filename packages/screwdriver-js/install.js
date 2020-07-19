import * as sd from './src/index';

for (const key in sd) {
  if (Object.prototype.hasOwnProperty.call(sd, key) && !window[key]) {
    const element = sd[key];
    window[key] = element
  }
}

window['S'] = sd;