// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react';

import { shallow } from 'enzyme';
import App from './App';

<<<<<<< HEAD
describe('App', () => {
  it('should leave the the hell alone', () => {
    //crazy
  })
})
=======
describe.skip('App', ()=> {

  it('should match the snapshot', ()=> {
    let wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  }) 

});
>>>>>>> 0cc9468affde138ffc38ad22691a248259ae17ad
