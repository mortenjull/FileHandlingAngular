import { FileHandlingAngularPage } from './app.po';

describe('file-handling-angular App', () => {
  let page: FileHandlingAngularPage;

  beforeEach(() => {
    page = new FileHandlingAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
