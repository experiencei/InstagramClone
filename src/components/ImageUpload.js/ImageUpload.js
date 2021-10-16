import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import { storage , db } from '../firebase/Firebase';


function ImageUpload() {
  const [caption, setCaption] = useState('')
  const [progress, setProgress] = useState(0)
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
      if (e.target.files[0]) {
        setImage(e.target.files[0])
      }
  }

  const handleUpload = () => {
     const uploadTask = storage.ref(`images/${image.name}`).put(image)
     uploadTask.on("state_changed" , 
     (snapshot) => {
         const progress = Math.round(
             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
         );
         setProgress(progress)
     }
     )
  }

    return (
        <div>
        <input type="text" placeholder="Enter a caption..." onChange={event => setCaption(event.target.value)} value={caption}/>
         <input type="file" onChange={handleChange}/>   
         <Button onClick={handleUpload}>
             Upload
         </Button>
        </div>
    )
}

export default ImageUpload
