import * as actionTypes from '../actions/actionTypes'

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
}, {
  id: 7,
  title: 'Nintendo Switch',
  img: 'https://i1.ytimg.com/vi/f5uik5fgIaI/maxresdefault.jpg',
  desc: 'Enterpreneur investor. Cofounder at AirBNB. Love football, books and cars.'
}, {
  id: 8,
  title: 'Voyage Americas',
  img: 'https://www.skydesigner.me/wp-content/uploads/2018/12/Voyage-logo.png',
  desc: 'Enterpreneur investor. Cofounder at AirBNB. Love football, books and cars.'
}, {
  id: 9,
  title: 'Japan Branding Awards 2019 - 1961',
  img: 'https://news.panasonic.com/global/images/01_Japan_Branding_Awards_2018_thumb.jpg',
  desc: 'Enterpreneur investor. Cofounder at AirBNB. Love football, books and cars.'
}, {
  id: 10,
  title: 'Anime ( Not a gay)',
  img: 'https://designiconic.com/maker/wp-content/uploads/2019/03/Anime-Logo.png',
  desc: 'Enterpreneur investor. Cofounder at AirBNB. Love football, books and cars.'
}, {
  id: 11,
  title: 'KINGDOM',
  img: 'https://cdn1.designhill.com/uploads/personal_designs/fa8df761b8e563bcf8bd60f74f2ea4ca-c31c9b35ef5d46e05e1b454ba5eb9cab15565412399598.png?ver=2.9.50',
  desc: 'Enterpreneur investor. Cofounder at AirBNB. Love football, books and cars.'
}];

const initialState = {
  clubs: allClubs,
  clubPosts: [{
      id: 1,
      text: 'bla bla'
    },
    {
      id: 2,
      text: 'bla bla bla bla'
    },
    {
      id: 3,
      text: 'bla bla bla blab la blabla bla'
    },
    {
      id: 5,
      text: 'bla bla bla blab la blabla bla bla bla bla blab la blabla bla bla bla bla blab la blabla bla bla bla bla blab la blabla bla bla bla bla blab la blabla blabla bla bla blab la blabla bla'
    },
    {
      id: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa eget egestas purus viverra accumsan in. Leo duis ut diam quam nulla. Eget duis at tellus at urna condimentum. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Placerat in egestas erat imperdiet sed euismod. Nunc pulvinar sapien et ligula ullamcorper malesuada. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Et netus et malesuada fames ac turpis egestas maecenas. Aliquet nibh praesent tristique magna sit amet. Netus et malesuada fames ac. Cras ornare arcu dui vivamus arcu. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. At tempor commodo ullamcorper a lacus vestibulum sed.'
    }
  ],
  errorList: [],
  user: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      return {
        ...state,
        clubPosts: [...state.clubPosts, action.newPost]
      };

    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.usedData
      };

    case actionTypes.FETCH_FAILED:
      return {
        ...state,
        errorList: [...state.errorList, action.error]
      };

    case actionTypes.CLEAR_ERROR_STACK:
      const updatedArray = state.errorList.filter(error => error.id !== action.index);
      return {
        ...state,
        errorList: updatedArray
      };

    default:
      return state
  }
};

export default reducer