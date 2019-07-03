import { createElement } from 'lwc';
import App from './modules/my/app/app';

const appEl = createElement('my-app', { is: App });
document.body.appendChild(appEl);

