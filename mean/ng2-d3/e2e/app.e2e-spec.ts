import { HomePage } from './app.po';

describe('App', () => {
  let homePage: HomePage;

  beforeEach(() => {
    homePage = new HomePage();
  });

  it('should display message saying \'Angular app with D3\'', () => {
    homePage.navigateTo('/');
    expect(homePage.getHeadingText()).toEqual('Angular app with D3');
  });

  it('should get NewPoll btn text', () => {
    expect(homePage.getNewPollBtnText()).toEqual('New Poll');
  });

  it('should click NewPoll btn', () => {
    homePage.clickNewPollBtn();
  });

  it('should enter new poll question text', () => {
    homePage.enterNewPollText();
  });

  it('should create new poll', () => {
    homePage.enterNewPollChoicesText();
  });

  it('should get head text', () => {
    expect(homePage.getCreateSurveyHeadingText()).toEqual('Create New Survey');
  });

  it('should get head text', () => {
    expect(homePage.getCreateSurveyHeadingText()).toEqual('Create New Survey');
  });




});
