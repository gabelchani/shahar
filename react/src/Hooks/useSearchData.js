//זה בשביל כל פונקציה שהולכת לשרת
import React from "react";
import axios from "axios";

class App extends React.Component {
    state = {
        parameter: null,
    };
      
    handleFile(e) {    
      // Getting the files from the input
      let parameter = e.target.value;
      this.setState({ parameter });
    }
      
    handleUpload(e) {
      let parameter = this.state.parameter;
      
      let formData = new FormData();
      
      // Adding files to the formdata
      formData.append("image", newfiles);
      formData.append("name", "Name");
      
      axios({
    
        // Endpoint to send files
        url: "http://localhost:8000/files",
        method: "POST",
        headers: {
    
          // Add any auth token here
          authorization: "your token comes here",
        },
    
        // Attaching the form data
        data: formData,
      })
    
        // Handle the response from backend here
        .then((res) => { })
    
        // Catch errors if any
        .catch((err) => { });
    }
      
    render() {
      return (
        <div>
          <h1>Select your files</h1>
          <input
            type="file"
    
            // To select multiple files
            multiple="multiple"
            onChange={(e) => this.handleFile(e)}
          />
          <button onClick={(e) => this.handleUpload(e)}>
            Send Files
          </button>
        </div>
      );
    }
  }
      
  export default App;