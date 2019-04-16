/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import reduxStore from '../../store';
import ConnectedHomePage, { HomePage } from '../../components/HomePage';

const { store } = reduxStore;
const props = {
  getArticles: jest.fn(),
  getArticlesCategory: jest.fn(),
  articles: [
    {
      id: 24,
      title: 'Friendship',
      slug: 'friendship-c48ae02b-a074-44e2-810e-299230442341',
      body: 'Friendship is a relationship of mutual affection between people. Friendship is a stronger form of interpersonal bond than an association. Friendship has been studied in academic fields such as communication, sociology, social psychology, anthropology, and philosophy.',
      createdAt: '2019-04-07T11:34:15.318Z',
      description: 'Real Friendship',
      readTime: '1 minute read',
      updatedAt: '2019-04-07T11:34:15.318Z',
      deletedAt: null,
      image: 'https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2767&q=80',
      authorId: 8,
      categoryId: 5,
      User: {
        id: 8,
        Profile: {
          firstname: 'Alexandra',
          lastname: 'Collins',
          username: 'Andra',
          bio: 'Inspirational Author who lift people\'s spirit.',
          image: 'https://scontent-los2-1.xx.fbcdn.net/v/t1.0-9/34207310_1908101379260424_259720778377854976_o.jpg?_nc_cat=109&_nc_ht=scontent-los2-1.xx&oh=1e751ef6147a74567cfdd89f2896849f&oe=5D417E1F'
        }
      },
      tagList: [],
      articleCategory: {
        category: 'Health'
      },
      ratings: [
        {
          stars: 5,
          userId: 8
        }
      ]
    },
  ],
  articlesCategory: [
    { id: 1, category: 'Technology' },
    { id: 2, category: 'Business' },
    { id: 3, category: 'Health' },
    { id: 4, category: 'Sport' },
    { id: 5, category: 'History' },
    { id: 6, category: 'Food' },
    { id: 7, category: 'Entertainment' }
  ],
};

describe('<HomePage Test Suite>', () => {
  describe('<HomePage>', () => {
    it('It should render unconnected homepage succesfully', async () => {
      const spy = jest.spyOn(HomePage.prototype, 'componentDidMount');
      const wrapper = await shallow(<HomePage {...props} />);
      wrapper.setState({
        fiveStarAuthors: []
      });
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
      wrapper.setState({
        fiveStarAuthors: [{
          authorsProfile: {
            image: 'https://images.unsplash.com/photo-1478358161113-b0e11994a36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            firstname: 'Andra',
            lastname: 'Collins',
            bio: 'I love writing inspirational articles',
          }
        }],
      });
      expect(spy).toHaveBeenCalled();
      expect(wrapper.instance().props.getArticles).toHaveBeenCalled();
      expect(wrapper.instance().props.getArticlesCategory).toHaveBeenCalled();
      wrapper.instance().averageRatings(props.articles[0]);
    });
    it('It should render connected homepage succesfully', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <ConnectedHomePage {...props} />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper).toBeDefined();
      expect(wrapper.length).toBe(1);
      expect(wrapper.instance().state.storeState.articlesReducer).toEqual({
        articles: [],
        "error": "",
        "loading": "started",
        page:
        {
          first: 1,
          current: 1,
          last: 1,
          currentCount: 0,
          totalCount: 0,
          description: ''
        }
      });
    });
  });
});
