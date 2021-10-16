import React, { useState , useEffect } from "react";
import './App.css';
import Posts from "./components/posts/Posts";
import{ db }from "./components/firebase/Firebase";

function App() {
  const [ posts , SetPosts] = useState([
    
  ]);

   useEffect(() => {
     db.collection("posts").onSnapshot( snapshot => {
      SetPosts( snapshot.docs.map( doc => ({
        id : doc.id,
        post : doc.data()
      })))
     })

   }, []);

  return (
    <div className="app">
     <div className="app__header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMsu2EDni57l9IyTLGTDeF9mxi-bSN3OD2UGje0Bl971KGzVW_xQdEr_GgocIfc9QBe2Q&usqp=CAU"
        className="app__headerImage"
        alt="instagram_logo"
      />
     </div>
     <h1> Hello Experience jr Ibrahim</h1>
     {
       posts.map(({ post , id}) => (
         <Posts key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
       ))
     }
    </div>
  );
}

export default App;
