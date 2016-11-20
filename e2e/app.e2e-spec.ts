import { CraftsvillaPage } from './app.po';

describe('craftsvilla App', function() {
  let page: CraftsvillaPage;

  beforeEach(() => {
    page = new CraftsvillaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
