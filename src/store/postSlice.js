import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    portfolios: [{id: 1, title: "Title text", content: "Content text", featuredimage: "#", status: "true", userid: "1" }]
}
const PostService = createSlice({
    name: "portfolio",
    initialState,
    reducers: {

    }
})