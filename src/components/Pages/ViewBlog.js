import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import DeleteBlog from './DeleteBlog';
import { DeleteProvider } from '../Context/ContextApi';
import {connect} from 'react-redux'
import { fetchPosts } from '../../actions/postAction'
import PropTypes from 'prop-types'

function ViewBlog() {
    const history = useHistory();
    const [blog, setBlog] = useState({
        title: '',
        content: '',
        like: 0,
        dislike: 0
    });


    useEffect(() => {
        loadBlogs()
        
}, [])

    useEffect(()=>{
        saveChanges()
    },[blog])
    const { id } = useParams();

    const loadBlogs = async () => {
        const result = await axios.get(`http://localhost:3010/blogs/${id}`);
        setBlog(result.data);


    }
    const redirectToHome = () => {
        history.push('/')
    }
    const addLike = async () => {
        setBlog((prevstate) => { return { ...prevstate, like: prevstate.like + 1 } })

        
    }
    const saveChanges = async () => {
        await axios.patch(`http://localhost:3010/blogs/${id}`, blog);
    }
    const addDislike = () => {
        setBlog((prevstate) => { return { ...prevstate, dislike: prevstate.dislike + 1 } })
        
    }
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container" >
                    <div className="d-flex flex-row-reverse">
                        <small>{blog.dislike} DisLike</small>&nbsp;
                        <i className="material-icons" onClick={addDislike} style={{ cursor: "pointer" }}>thumb_down</i>&nbsp;
                        <small>{blog.like} Likes</small>&nbsp;
                        <i className="material-icons" onClick={addLike} style={{ cursor: "pointer" }}>thumb_up</i>

                    </div>
                    <h1 className="display-4">{blog.title}</h1>
                    <small className="text-muted"><b>By-{blog.author} on {blog.datetime}</b></small><br />
                    <small className="text-muted"><b>Category-{blog.category}</b></small>


                    <p className="lead">{blog.content}</p>
                    <Link className="btn btn-link" style={{ marginLeft: "2%" }} to={`/blog/edit/${blog.id}`}>Edit</Link>
                    <DeleteProvider value={{id}}>
                    <DeleteBlog action={redirectToHome} />
                    </DeleteProvider>
                </div>
            </div>
        </div>
    )
}

export default ViewBlog;
