import { ABSNPMPage } from './app.po';

describe('absnpm App', () => {
  let page: ABSNPMPage;

  beforeEach(() => {
    page = new ABSNPMPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
