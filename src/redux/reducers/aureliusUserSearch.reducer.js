const aureliusUserSearch = (state = [], action) => {
    switch (action.type) {
      case 'SET_AURELIUS_USERS_SEARCH':
        return action.payload;
      case 'CLEAR_USER_SEARCH':
        return state = [];
      default:
        return state;
    }
};

export default aureliusUserSearch;