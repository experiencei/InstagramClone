import React, { useState , useEffect } from 'react'
import "./Posts.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from '../firebase/Firebase';

function Posts({username , caption ,imageUrl , postId}) {
    const [comments , setComments] = useState([]);


    useEffect(() => {
        let unsubscribe;
       if(postId) {
       unsubscribe = db
          .collection("posts")
          .doc(postId)
          .collection("comments")
          .onSnapshot( (snapshot) => {
              setComments(snapshot.docs.map( (doc) => doc.data()));
          })
       }
        return () => {
            unsubscribe();
        }
    }, [postId]);

    const postComment = (event) => {

    }
    return (
        <div className="post">
        <div className="post__header">
        <Avatar
            className="post__avatar"
            alt="Experience"
            src="/static/images/avatar/1.jpg"
        />
            <h3>{username}</h3>
        </div>
            <img 
                className="post__image"
                alt="post"
                src={imageUrl}
                />
            <h4 className="post__text"> <strong>{username}</strong>  {caption}</h4>

            <form className="post__commentBox">
              <input
                className="post__input"
                type="text"
                placeholder="Add a comment..."
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
              <button
              disabled={!comments}
              className="post__button"
              type="submit"
              onClick={postComment}
              >
                Posts
              </button>
            </form>
        </div>
    )
}

export default Posts
