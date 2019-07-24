import { fetchFilms, fetchUser, postNewUser} from './apiCalls';

describe('fetchFilms', () => {
  let mockFilmsResponse
  beforeEach( () => {
    mockFilmsResponse = [
      {title: 'movie 1',
      id: 1
    }];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve( {
        ok: true,
        json: () => Promise.resolve(mockFilmsResponse)
      })
    })
  });

  it('fetchFilms should be called with correct params', () => {
    const expected = ['https://api.themoviedb.org/3/movie/now_playing?api_key=faeff26a101acfb04b4ebb285bac57bf&language=en-US&page=1'];
    fetchFilms();
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  })

  it('fetchFilms should return a parsed response if status is ok', async () =>{
    const result = await fetchFilms();
    fetchFilms()
    expect(result).toEqual(mockFilmsResponse)
  })

  it('fetchFilms should return error if status is not ok', async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve( {
        ok: false,
      })
    })
    await expect(fetchFilms()).rejects.toEqual(Error('Error fetching films'))
  })

  describe('fetchUser', () => {
    let mockUser;

    beforeEach(() => {
      mockUser = {name: "someone"}
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockUser)
        })
      })
    })
    const URL = 'http://localhost:3000/api/users';

    it('should return a parsed response if everything is ok', async () => {
      const result = await fetchUser(
        URL,
        mockUser,
        'POST',
        'Error fetchingnpm user');
      expect(result).toEqual(mockUser)
    })

    it('shoud return an error if the response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })
      expect(fetchUser(URL, mockUser, 'POST', 'Error fetching a user')).rejects.toEqual(Error('Error fetching user'));
    })
  })

  describe('postNewUser', () => {
    let mockUser;

    beforeEach(() => {
      mockUser = {name: "someone"}
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockUser)
        })
      })
    })
    const URL = 'http://localhost:3000/api/users/new';

    it('should return a parsed response if everything is ok', async () => {
      const result = await postNewUser(
        URL,
        mockUser,
        'POST',
        'Error fetching new user');
      expect(result).toEqual(mockUser)
    })

    it('shoud return an error if the response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })
      expect(postNewUser(URL, mockUser, 'POST', 'Error fetching a user')).rejects.toEqual(Error('Error fetching new user'));
    })
  })
    
})