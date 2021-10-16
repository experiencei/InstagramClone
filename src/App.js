import React, { useState } from "react"
import './App.css';
import Posts from "./components/posts/Posts";

function App() {
  const [ posts , SetPosts] = useState([
    {username : "Experince" ,
     caption : " I love coding , sounds weird?",
     imageUrl : "https://images.pexels.com/photos/4348405/pexels-photo-4348405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
     
     {username : "ExperinceIq" ,
     caption : " I love programming and autonomous"
    ,imageUrl : "https://images.pexels.com/photos/7241625/pexels-photo-7241625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
  ]);

  return (
    <div className="app">
     <div className="app__header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMsu2EDni57l9IyTLGTDeF9mxi-bSN3OD2UGje0Bl971KGzVW_xQdEr_GgocIfc9QBe2Q&usqp=CAU"
        className="app__headerImage"
        alt="instagram_logo"
      />
     </div>
     <Posts username="Experience" caption="Now it works" imageUrl="https://images.pexels.com/photos/4348078/pexels-photo-4348078.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
     <Posts username="Faruk" caption="what the hell" imageUrl="https://images.pexels.com/photos/4348079/pexels-photo-4348079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
     <Posts username="Rildwan" caption="what the fuck" imageUrl="https://images.pexels.com/photos/7772770/pexels-photo-7772770.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    </div>
  );
}

export default App;
