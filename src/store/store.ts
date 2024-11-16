import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

const initialSettingsState: { mode: 'light' | 'dark' } = { mode: 'dark' };



const settingsSlice = createSlice({ 
    name: 'settings',
    initialState: initialSettingsState,
    reducers: {
        toggleTheme(state, action: PayloadAction<'light' | 'dark'>) {
            state.mode = action.payload;
        }
    }
});

const { actions, reducer } = settingsSlice;
export const { toggleTheme } = actions;

export const store = configureStore({ reducer: reducer });
export type RootState = ReturnType<typeof store.getState>;