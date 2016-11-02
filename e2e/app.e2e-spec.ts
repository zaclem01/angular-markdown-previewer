import { AngularRecipeBoxPage } from './app.po';

describe('angular-recipe-box App', function() {
  let page: AngularRecipeBoxPage;

  beforeEach(() => {
    page = new AngularRecipeBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
