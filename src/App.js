import React from "react"
import './App.css';
import Posts from "./components/posts/Posts";

function App() {
  return (
    <div className="app">
     <div className="app__header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMsu2EDni57l9IyTLGTDeF9mxi-bSN3OD2UGje0Bl971KGzVW_xQdEr_GgocIfc9QBe2Q&usqp=CAU"
        className="app__headerImage"
        alt="instagram_logo"
      />
     </div>
     <Posts/>
    </div>
  );
}

export default App;
