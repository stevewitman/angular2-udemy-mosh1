import { UdemyMosh1Page } from './app.po';

describe('udemy-mosh1 App', () => {
  let page: UdemyMosh1Page;

  beforeEach(() => {
    page = new UdemyMosh1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
