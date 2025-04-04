import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';


export interface IPageTitle {
  title:string
}

const initialState: IPageTitle = {
  title:'Dashboard'
};

export const pageTitleSlice = createSlice({
  name: 'page-title',
  initialState,
  reducers: {
   
    setPageTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setPageTitle } =
pageTitleSlice.actions;

export const selectPageTitle = (state: RootState) => state.pageTitle.title;
