import React, { useState , useEffect } from "react";
import './App.css';
import Posts from "./components/posts/Posts";
import{ db }from "./components/firebase/Firebase";
import { Button, makeStyles, Modal } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top : `${top}%`,
    left : `${left}%`,
    transform : `translate(-${top}% ,${left}% )`,
  }
}


const useStyles = makeStyles((theme) => ({
  paper : {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border : "2px solid #00",
    boxShadow : theme.shadows[5],
    padding: theme.spacing(2,4,3),
  },
}))

function App() {
  const classes = useStyles();
  const[modalStyle] = useState(getModalStyle);
  const [ posts , setPosts] = useState([]);
  const [ open  , setOpen] = useState(false);

   useEffect(() => {
     db.collection("posts").onSnapshot( snapshot => {
      setPosts( snapshot.docs.map( doc => ({
        id : doc.id,
        post : doc.data()
      })))
     })

   }, []);

  return (
    <div className="app">
    <Modal
     open={open}
     onClose={() =>setOpen(false)}
  
    >
      <div style={modalStyle} className={mergeClasses.paper}>

      </div>
    </Modal>
     <div className="app__header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMsu2EDni57l9IyTLGTDeF9mxi-bSN3OD2UGje0Bl971KGzVW_xQdEr_GgocIfc9QBe2Q&usqp=CAU"
        className="app__headerImage"
        alt="instagram_logo"
      />
     </div>
     <Button onClick={() => setOpen(true)}>Sign Up</Button>
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
