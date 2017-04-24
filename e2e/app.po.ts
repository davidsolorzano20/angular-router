import { browser, element, by } from 'protractor';

export class AngularRoutePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('00-app-root h1')).getText();
  }
}
