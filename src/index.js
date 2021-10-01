import PropTypew, { string } from 'prop-types';
// import React from 'react';
import ReactDOM from "react-dom";

const elem1 = <span>Hello</span>;
// const elem1 = React.createElement('span', { children: 'Hello' });
const elem2 = <span>world!</span>;
// const elem2 = React.createElement('span', { children: 'world!' });
const element = (
  <div>
    {elem1}
    {elem2}
  </div>
);
// const element = React.createElement('div', { children: [elem1, ' ', elem2], });

console.log(element);

// ReactDOM.render(element, document.querySelector('#root'));


const data = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

// function Profile({ avatar, name, tag, location, stats.followers, stats.views, stats.likes, }) {
//   return <div class="profile">
//     <div class="description">
//       <img
//         src={avatar}
//         alt="Аватар пользователя"
//         class="avatar"
//       />
//       <p class="name">{name}</p>
//       <p class="tag">@{tag}</p>
//       <p class="location">{location}</p>
//     </div>

//     <ul class="stats">
//       <li>
//         <span class="label">{stats.followers}</span>
//         <span class="quantity">1000</span>
//       </li>
//       <li>
//         <span class="label">{stats.views}</span>
//         <span class="quantity">2000</span>
//       </li>
//       <li>
//         <span class="label">{stats.likes}</span>
//         <span class="quantity">3000</span>
//       </li>
//     </ul>
//   </div>
// }

ReactDOM.render(<Profile />, document.querySelector('#root'));


// Profile.propTypes = {
//   avatar: PropTypes.string,
//   name: PropTypes.string,
//   tag: PropTypes.string,
//   location: PropTypes.string,
//   stats.followers: PropTypes.number,
//   stats.views: PropTypes.number,
//   stats.likes: PropTypes.number,
// }