import React from 'react';
import {Movie, mapStateToProps, mapDispatchToProps} from './Movie';
import { addFavorite, getFavorites, removeFavorite} from '..//../Thunks/favoriteThunk'
import {shallow, mount} from 'enzyme';

let favorites = [
  {
    id: 2,
    title: 'Booboo the Fool',
    poster_path: "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    release_date: '2019-11-26',
    vote_average: 4.9,
    overview: 'I aint one of your little friends'
  },
  {
    id: 3,
    title: 'BlueFace Baby',
    poster_path: "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    release_date: '2019-01-26',
    vote_average: 7.9,
    overview: 'Mopped the floor and hid the wet sign just to catch them slipping.'
  }
]

let favoritesTwo = [
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

const movie = {
  id: 1,
  title: 'The Adventure of TronKat',
  poster_path: "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
  release_date: '2019-01-26',
  vote_average: 9.9,
  overview: 'TronKat is the worlds greatest gamer. But when the world needed him most he vanished.',
  movie_id: 1
}

const currentUser1 = {
  loggedIn: false,
  userDetails: {}
}

const currentUser2 = {
  loggedIn: true,
  userDetail: {
    id: 12
  }
}

describe('Movie', () => {
  let wrapper;
  let handleClick;
  let getFavorites;
  let favMovie;
  let removeFavorite;
  
  beforeEach(function() { 
    handleClick = jest.fn();
    getFavorites = jest.fn();
    removeFavorite = jest.fn();
    favMovie = {
      movie_id: 1,
      user_id: 12,
      title: 'The Adventure of TronKat',
      poster_path: "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
      release_date: '2019-01-26',
      vote_average: 9.9,
      overview: 'TronKat is the worlds greatest gamer. But when the world needed him most he vanished.'
    }
    
    wrapper = shallow(
      <Movie movie={movie}
            currentUser={currentUser2} 
            handleClick={handleClick}
            getFavorites={getFavorites}
            favorites={favorites}
            removeFavorite={removeFavorite}
            />
    )
  })

  it('Should match Logged Out Snapshot', () => {
    wrapper = shallow(
      <Movie movie={movie}
            currentUser={currentUser1} 
            handleClick={handleClick}
            getFavorites={getFavorites}/>
    )
    expect(wrapper).toMatchSnapshot();
  })

  it('Should match Logged In Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call checkIfLoggedIn when button is clicked', () => {
    wrapper.instance().checkIfLoggedIn = jest.fn();
    wrapper.find('button').simulate('click');
    expect(wrapper.instance().checkIfLoggedIn).toHaveBeenCalled();
  })

  it('should call two other functions', () => {
    wrapper.instance().checkIfLoggedIn();
    expect(wrapper.instance().props.handleClick).toHaveBeenCalled();
    expect(wrapper.instance().props.getFavorites).toHaveBeenCalled();
  })

  it('handleClick should pass in an object when called', () => {
    wrapper.instance().checkIfLoggedIn();
    expect(wrapper.instance().props.handleClick).toHaveBeenCalledWith(favMovie, 12)
  })

  it('getFavorite should pass in an id when called', () => {
    let id = 12
    wrapper.instance().checkIfLoggedIn();
    expect(wrapper.instance().props.getFavorites).toHaveBeenCalledWith(id);
  })

  it('should have a base url', () => {
    expect(wrapper.instance().url).toEqual('https://image.tmdb.org/t/p/w500')
  })

  it('should call checkIfLoggedIn when button is clicked', () => {
    wrapper = shallow(
      <Movie movie={movie}
            currentUser={currentUser2} 
            handleClick={handleClick}
            getFavorites={getFavorites}
            favorites={favoritesTwo}
            removeFavorite={removeFavorite}
            />
    )
    
    wrapper.find('button').simulate('click');
    expect(wrapper.instance().props.removeFavorite).toHaveBeenCalledWith(12, 1);
  })

  describe('mapDispatchToProps', () => {
    let favMovie = {
      movie_id: 1,
      user_id: 12,
      title: 'The Adventure of TronKat',
      poster_path: "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
      release_date: '2019-01-26',
      vote_average: 9.9,
      overview: 'TronKat is the worlds greatest gamer. But when the world needed him most he vanished.'
    }
    // it('calls dispatch with an addFavorite action when handleSubmit is called', () => {
    //   const mockDispatch = jest.fn();
    //   const actionToDispatch = addFavorite(favMovie, 12);
    //   const mappedProps = mapDispatchToProps(mockDispatch);
    //   mappedProps.handleClick('Something', 12);
    //   expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    // })

    // it('calls dispatch with an addFavorite action when handleSubmit is called', () => {
    //   const mockDispatch = jest.fn();
    //   const actionToDispatch = getFavorites(favoritesTwo);
    //   const mappedProps = mapDispatchToProps(mockDispatch);
    //   mappedProps.getFavorites(favoritesTwo);
    //   expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    // })
  })
})