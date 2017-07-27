import { FreePage } from './app.po';

describe('free App', () => {
  let page: FreePage;

  beforeEach(() => {
    page = new FreePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
