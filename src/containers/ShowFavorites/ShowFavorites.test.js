import React from 'react';
import {shallow} from 'enzyme';
import ShowFavorites from './ShowFavorite'

let favorites = [
  {
    id: 1,
    title: 'The Adventure of TronKat',
    poster_path: "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    release_date: '2019-01-26',
    vote_average: 9.9,
    overview: 'TronKat is the worlds greatest gamer. But when the world needed him most he vanished.',
    movie_id: 1
  },
  {
    id: 2,
    title: 'Booboo the Fool',
    poster_path: "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    release_date: '2019-11-26',
    vote_average: 4.9,
    overview: 'I aint one of your little friends',
    movie_id: 2
  },
  {
    id: 3,
    title: 'BlueFace Baby',
    poster_path: "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    release_date: '2019-01-26',
    vote_average: 7.9,
    overview: 'Mopped the floor and hid the wet sign just to catch them slipping.',
    movie_id: 3
  }
]

describe('Show Favorites', () => {
  let wrapper;

  beforeEach(function() {
    wrapper = shallow(
      <ShowFavorites favorites={favorites} />
    )
  })
  it('Should Match Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})