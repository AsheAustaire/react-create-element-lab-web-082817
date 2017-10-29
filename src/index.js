import React from 'react';
import ReactDOM from 'react-dom';


const title = React.createElement('h1', {}, 'An Awesome Person')
const tagline = React.createElement('p',{}, 'Who is learning React')
const childOne = React.createElement('li', {}, 'JavaScript')
const childTwo = React.createElement('li', {}, 'React')
const childThree = React.createElement('li', {}, 'Movies')
const childFour = React.createElement('li', {}, 'Ice cream')
const interests = React.createElement('ul', {className: 'my-interests'}, [childOne, childTwo, childThree, childFour])
const meInReact = React.createElement('div', {'className': 'me'}, [title, tagline, interests])


// IMPORTANT!!!! uncomment the lines below to make your tests work

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
