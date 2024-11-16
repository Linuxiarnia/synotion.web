import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

const initialSettingsState: { mode: 'light' | 'dark' } = { mode: 'dark' };

interface userCombo{
    jwtoken: string | null,
    login: string | null
}

const initialLoginState: userCombo = { jwtoken: null, login: null };

const loginSlice = createSlice({
    name: 'login',
    initialState: initialLoginState,
    reducers: {
        changeToken(state, action: PayloadAction<string>){
            state.jwtoken = action.payload;
        },
        changeLogin(state, action: PayloadAction<string>){
            state.login = action.payload;
        }
    }
});

const settingsSlice = createSlice({ 
    name: 'settings',
    initialState: initialSettingsState,
    reducers: {
        toggleTheme(state, action: PayloadAction<'light' | 'dark'>) {
            state.mode = action.payload;
        }
    }
});

const settingsAction = settingsSlice.actions;
const loginAction = loginSlice.actions;

export const { toggleTheme } = settingsSlice.actions;

export const  { changeToken, changeLogin } = loginSlice.actions;

export const store = configureStore({ reducer: { settings: settingsSlice.reducer, login: loginSlice.reducer }});
export type RootState = ReturnType<typeof store.getState>;