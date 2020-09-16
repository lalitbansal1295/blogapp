import { FETCH_POSTS,NEW_POST,VIEW_POST} from './types';
import axios from 'axios'

export function fetchPosts() {
    return async function(dispatch){
        console.log("action");
        const result = await axios.get("http://localhost:3010/blogs");
        dispatch({
            type: FETCH_POSTS,
            payload : result.data
        })
    }
}

export function createPost(postData) {
    return async function(dispatch){
        await axios.post("http://localhost:3010/blogs", postData)
        dispatch({
            type: NEW_POST,
            payload : postData
        })
    }
}
export function deletePost(id) {
    return async function(dispatch){
        await axios.delete(`http://localhost:3010/blogs/${id}`)

        
    }
}

export function editPost(id,blog) {
    return async function(dispatch){
        await axios.patch(`http://localhost:3010/blogs/${id}`,blog)

        
    }
}



export function searchPosts(searchString) {
    return async function(dispatch){
        console.log("action");
        const result = await axios.get("http://localhost:3010/blogs");
        let filteredBlogs = result.data.filter((blog) => {
            return blog.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
        })
        console.log(filteredBlogs)
        dispatch({
            type: FETCH_POSTS,
            payload : filteredBlogs
        })
    }
}