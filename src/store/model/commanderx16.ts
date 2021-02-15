import {Store} from './store';

export const CommanderX16: Store = {
  name: 'commanderx16',
  currency: '$',
  labels: {
    inStock: {
      // ATM, this is an empty menu
      //container: '*[@id="elCategories_menu"]/ul',
      container: 'div[data-role=categorySidebar] ul.ipsSideMenu_list',
      //We want to match any text that shows up as a category as there are no
      //examples presently.  Unsure if regex supported.
      text: ['e'],
    },
    /*
    maxPrice: {
      container:
        '[data-sticky-media-gallery] .priceView-price .priceView-hero-price span',
    },
     */
  },
  links: [
    {
      brand: 'commander',
      model: 'x16',
      series: 'x16',
      url: 'https://www.commanderx16.com/forum/index.php?/store/',
    },
  ],
};
