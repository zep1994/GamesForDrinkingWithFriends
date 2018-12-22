export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_GAME': {
            return state.concat(action.game)
        }

        case 'REMOVE_GAME': {
            const idx = state.findIndex(game => game.id === action.gameId);
            return [...state.slice(0, idx), ...state.slice(idx + 1)]
          }
      
          case 'SET_GAME': {
            return action.games;
          }

    default: {
        return state
      }
    }
}