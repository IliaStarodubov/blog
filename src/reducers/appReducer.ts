import { ACTION_TYPE } from '../actions';

export interface AppState {
	wasLogout: boolean;
}

const initialState: AppState = {
	wasLogout: false,
};

// Тип для действия LOGOUT
interface LogoutAction {
	type: typeof ACTION_TYPE.LOGOUT;
}

// Объединяем все возможные типы действий
type AppActionTypes = LogoutAction;

export const appReducer = (
	state: AppState = initialState,
	action: AppActionTypes,
): AppState => {
	switch (action.type) {
		case ACTION_TYPE.LOGOUT:
			return {
				...state,
				wasLogout: !state.wasLogout,
			};

		default:
			return state;
	}
};
