import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import { createPost,fetchPosts } from '../../actions/postAction'
import PropTypes from 'prop-types'

function AddBlog(props) {
    const history = useHistory();
    const [blog, setBlog] = useState({
        title: '',
        content: '',
        like: 0,
        dislike: 0,
        datetime: '',
        category: 'Food Blog',
        author: ''
    })
    const inputHandler = (event) => {
        setBlog({ ...blog, [event.target.name]: event.target.value })
    }
    const clickHandler = async (event) => {

        event.preventDefault()
        blog.datetime = new Date().toLocaleString();
       
        
        props.createPost(blog);
        props.fetchPosts()
        history.push('/')
    }
    return (
        <div style={{ overflow: "hidden",marginTop:"0.5%"}}>
            <div className="container" >
                <div className="w-75 mx-auto shadow p-4" style={{backgroundColor:"white"}}>
                    <h1 className="text-center mb-3"><b>ADD BLOG</b></h1>
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
                                autoComplete="off"
                                
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={blog.title}
                                placeholder="Title.."
                                onChange={inputHandler}
                                required
                                autoComplete="off"
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
                                <option value="other">Other</option>

                            </select>
                        </div>



                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <textarea className="form-control"
                                id="content"
                                name="content"
                                rows="3"
                                placeholder="Blog Content"
                                value={blog.content}
                                onChange={inputHandler}
                                autoComplete="off"
                                required
                            />
                        </div>
                        <button className="btn btn-success" type="submit">
                            Add Blog
                    </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
AddBlog.propTypes = {
    createPost : PropTypes.func.isRequired
}
export default connect(null, { createPost,fetchPosts })(AddBlog)
