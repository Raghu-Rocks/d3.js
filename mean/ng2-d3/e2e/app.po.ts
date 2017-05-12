import { browser, element, by } from 'protractor';

export class HomePage {
  navigateTo(url) {
    return browser.get(url);
  }

  getHeadingText() {
    return element(by.css('app-root h1')).getText();
  }

  getNewPollBtnText(){
    return element(by.css("a.btn-default")).getText();
  }

  clickNewPollBtn(){
    element(by.css("a.btn-default")).click();
  }

  getCreateSurveyHeadingText(){
    return element(by.css('.mu-title h1')).getText();
  }

  enterNewPollText(){
    element(by.css('[name^="question"]')).sendKeys("Apple is a mobile");
  }

  enterNewPollChoicesText(){
    element(by.css('[placeholder^="Enter choice 1"]')).sendKeys("True");
    element(by.css('[placeholder^="Enter choice 2"]')).sendKeys("False");
  }


}
