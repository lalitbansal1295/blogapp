import React, { useContext,useEffect } from 'react'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {deleteButtonContext} from '../Context/ContextApi'
import {connect} from 'react-redux'
import { deletePost,fetchPosts } from '../../actions/postAction'
import PropTypes from 'prop-types'

function DeleteBlog(props) {
     const { id } = useContext(deleteButtonContext)
     
    const deleteBlog = (id) => {
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure you want to delete this blog.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        props.deletePost(id)
                        props.fetchPosts()
                        props.action()
                    }

                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });
    }

    return (
        <button className="btn btn-danger" style={{ marginLeft: "2%" }} onClick={() => deleteBlog(id)} >Delete</button>
    )
}

export default connect(null,{deletePost,fetchPosts})(DeleteBlog)
