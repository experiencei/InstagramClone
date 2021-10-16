import React, { useState , useEffect } from 'react'
import "./Posts.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from '../firebase/Firebase';

function Posts({username , caption ,imageUrl , postId}) {
    const [comments , setComments] = useState([]);


    useEffect(() => {
       if(postId) {
       unsubscribe = db
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
        </div>
    )
}

export default Posts
