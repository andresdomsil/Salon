import { SalonPage } from './app.po';

describe('salon App', () => {
  let page: SalonPage;

  beforeEach(() => {
    page = new SalonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
