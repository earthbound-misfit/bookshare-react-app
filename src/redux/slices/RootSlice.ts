import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        title: 'Title',
        author: 'Author',
        isbn: 'ISBN',
        pages: 'Pages',
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload},
        chooseAuthor: (state, action) => { state.author = action.payload},
        chooseIsbn: (state, action) => { state.isbn = action.payload},
        choosePages: (state, action) => { state.pages = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, chooseIsbn, choosePages } = rootSlice.actions;