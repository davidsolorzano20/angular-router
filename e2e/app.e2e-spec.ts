import { AngularRoutePage } from './app.po';

describe('angular-route App', () => {
  let page: AngularRoutePage;

  beforeEach(() => {
    page = new AngularRoutePage();
  });

  it('should display message saying 00-app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('00-app works!');
  });
});
