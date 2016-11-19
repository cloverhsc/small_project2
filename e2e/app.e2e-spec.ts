import { SmallProject2Page } from './app.po';

describe('small-project2 App', function() {
  let page: SmallProject2Page;

  beforeEach(() => {
    page = new SmallProject2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
