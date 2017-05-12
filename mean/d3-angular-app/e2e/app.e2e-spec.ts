import { D3AngularAppPage } from './app.po';

describe('d3-angular-app App', () => {
  let page: D3AngularAppPage;

  beforeEach(() => {
    page = new D3AngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
