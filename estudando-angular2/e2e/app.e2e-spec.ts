import { EstudandoAngular2Page } from './app.po';

describe('estudando-angular2 App', function() {
  let page: EstudandoAngular2Page;

  beforeEach(() => {
    page = new EstudandoAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
