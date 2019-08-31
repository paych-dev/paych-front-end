import * as actionTypes from './actions'

let allClubs = [{
  id: 1,
  title: 'The GRIMMS',
  img: 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/Band-Logo.png',
  desc: 'Enterpreneur investor. Cofounder at AirBNB. Love football, books and cars.'
}, {
  id: 2,
  title: 'Nintendo Switch',
  img: 'https://i1.ytimg.com/vi/f5uik5fgIaI/maxresdefault.jpg',
  desc: 'Enterpreneur investor. Cofounder at AirBNB. Love football, books and cars.'
}, {
  id: 3,
  title: 'Voyage Americas',
  img: 'https://www.skydesigner.me/wp-content/uploads/2018/12/Voyage-logo.png',
  desc: 'Enterpreneur investor. Cofounder at AirBNB. Love football, books and cars.'
}, {
  id: 4,
  title: 'Japan Branding Awards 2019 - 1961',
  img: 'https://news.panasonic.com/global/images/01_Japan_Branding_Awards_2018_thumb.jpg',
  desc: 'Enterpreneur investor. Cofounder at AirBNB. Love football, books and cars.'
}, {
  id: 5,
  title: 'Anime ( Not a gay)',
  img: 'https://designiconic.com/maker/wp-content/uploads/2019/03/Anime-Logo.png',
  desc: 'Enterpreneur investor. Cofounder at AirBNB. Love football, books and cars.'
}, {
  id: 6,
  title: 'KINGDOM',
  img: 'https://cdn1.designhill.com/uploads/personal_designs/fa8df761b8e563bcf8bd60f74f2ea4ca-c31c9b35ef5d46e05e1b454ba5eb9cab15565412399598.png?ver=2.9.50',
  desc: 'Enterpreneur investor. Cofounder at AirBNB. Love football, books and cars.'
}];

const initialState = {
  clubs: allClubs,
  clubPosts: [{
    id: 1,
    text: 'bla bla'
  }],
  jwTokem: null,
  user: {
    name: null
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      return {
        ...state,
        clubPosts: [...state.clubPosts, action.newPost]
      };
    default:
      return state
  }
};

export default reducer