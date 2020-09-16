import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'react-confirm-alert/src/react-confirm-alert.css';
import DeleteBlog from './DeleteBlog';
import { DeleteProvider } from '../Context/ContextApi';
import {connect} from 'react-redux'
import { fetchPosts,searchPosts } from '../../actions/postAction'
import PropTypes from 'prop-types'


function HomePage(props) {
    const [blogs, setBlogs] = useState([]);
    const [filter, setFilter] = useState('')
    const [copyBlogs, setcopyBlogs] = useState([])
    useEffect(() => {
        
        loadBlogs()

    }, [])

    

    const loadBlogs = () => {
        props.fetchPosts();
        // setcopyBlogs(props.posts)
        // setBlogs(props.posts)
        // console.log(props.fetchPosts(),blogs)

    }

    const changeHandler = (event) => {
        setFilter(event.target.value)

       props.searchPosts(event.target.value)
        
    }
    return (
        <div style={{ overflow: "hidden" }}>
            <form className="form-inline my-2 my-lg-0" style={{ justifyContent: "center", alignSelf: "stretch", paddingTop: "1%" }}>
                <input className="form-control mr-sm-2 shadow"
                    type="search"
                    placeholder="Filter Post"
                    aria-label="Search"
                    value={filter}
                    onChange={changeHandler}
                    style={{backgroundColor:"#ffbf80"}}
                />

            </form>
            <div className="row">

                {props.posts.map((blog) => (
                    <div style={{ marginLeft: '4%', marginTop: '2%', marginBottom: '1%' }} key={blog.id}>
                        <div className="card  col-md-6 ml-3 shadow" style={{ maxWidth: '540px',backgroundColor:"#ffbf80"}} >
                            <div className="row no-gutters">


                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h5 className="card-title">{blog.title}</h5><small className="text-muted">By-{blog.author}</small>
                                        <p className="card-text" style={{ overflow: "hidden", height: "50px", width: "500px" }}>{blog.content}</p>
                                        <p className="card-text"><small className="text-muted">{blog.datetime}</small></p>
                                        <Link className="btn btn-primary" to={`/blog/${blog.id}`}>View Blog</Link>
                                        <Link className="btn btn-info" style={{ marginLeft: "2%" }} to={`/blog/edit/${blog.id}`}>Edit</Link>
                                        <DeleteProvider value={{ id : blog.id}}>
                                        <DeleteBlog  action={loadBlogs}/>
                                        </DeleteProvider>
                                        
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>



                ))}
            </div>
        </div>
    )
}

HomePage.propTypes = {
    fetchPosts : PropTypes.func.isRequired,
    posts : PropTypes.array.isRequired,
    newPost : PropTypes.object,
    searchPosts : PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    posts : state.posts.items ,
    newPost : state.posts.item
})

export default connect(mapStateToProps,{fetchPosts,searchPosts})(HomePage)
