import React, { useState, useEffect } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import { editPost,fetchPosts } from '../../actions/postAction'

function EditBlog(props) {
    const history = useHistory();
    const { id } = useParams();

    const [blog, setBlog] = useState({
        title: '',
        content: '',
        like: 0,
        dislike: 0,
        datetime: '',
        category: '',
        author: ''
    })
    useEffect(() => {
        setInputFields()
    }, [])
    const setInputFields = async () => {
        const result = await axios.get(`http://localhost:3010/blogs/${id}`)
        
        setBlog(result.data)
    }
    const inputHandler = (event) => {
        setBlog({ ...blog, [event.target.name]: event.target.value })
    }
    const clickHandler = async (event) => { 
        event.preventDefault()
        props.editPost(id,blog)
        props.fetchPosts()
        history.push('/')
    }
    return (
        <div style={{ overflow: "hidden",marginTop:"0.1%"}}>
        <div className="container" >
            <div className="w-75 mx-auto shadow p-4" style={{backgroundColor:"white"}}>
                <h1 className="text-center mb-4"><b>EDIT BLOG</b></h1>
                <form onSubmit={clickHandler}>
                <div className="form-group">
                            <label htmlFor="title">Author</label>
                            <input type="text"
                                className="form-control"
                                id="author"
                                name="author"
                                value={blog.author}
                                placeholder="Author Name"
                                onChange={inputHandler}
                                required
                                style={{}}
                            />
                        </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={blog.title}
                            onChange={inputHandler}
                            required
                        />
                    </div>
                    <div className="form-group">
                            <label htmlFor="title">Blog Category</label>

                            <select className="form-control"
                                id="category"
                                name="category"
                                value={blog.category}
                                required
                                onChange={inputHandler}>
                                <option value="Food Blog">Food Blog</option>
                                <option value="Travel Blog">Travel Blog</option>
                                <option value="other">other</option>

                            </select>
                        </div>


                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea className="form-control"
                            id="content"
                            name="content"
                            rows="3"
                            value={blog.content}
                            onChange={inputHandler}
                            required
                        />
                    </div>
                    <button className="btn btn-warning" type="submit">
                        Update Blog
                    </button>
                    <Link to="/" style={{ marginLeft: "2%" }}>Back to Home</Link>
                </form>
            </div>
        </div>
        </div>
    )
}

export default connect(null,{editPost,fetchPosts})(EditBlog)
