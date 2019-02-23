import React from 'react';
import { shallow, mount } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Root from 'Root';
import { Link } from 'react-router';

let wrapped;

beforeEach(() => {
  const initialState = {
    auth: true
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <App />
    </Root>
  );
  // <Root initialState={initialState}>
  //     <App />
  //   </Root>
  // wrapped = shallow(<App store={mockStore(initialState)}/>);
  console.log('1212wrap', wrapped)
});

it('shows a comment box', () => { 
  expect(wrapped.find(Link).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(Route).length).toEqual(1);
});
