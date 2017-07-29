import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	state: (state = {}, actions) => {
		switch (actions.type) {
			case 'EDITAR_PROYECTO':
				return { ...state, proyecto: { ...state.proyecto, ...actions.data } }
				break;
			default:
				break;
		}
		return state;
	}
});

export default rootReducer;
