import { D3angularPage } from './app.po';

describe('d3angular App', () => {
  let page: D3angularPage;

  beforeEach(() => {
    page = new D3angularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
