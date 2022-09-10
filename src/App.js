import React, { Component } from "react";
import axios from "axios";
import Table from "./components/common/table.component";
import StudentList from "./student.list.component";

class App extends Component {
  state = {
    data : {}
  }
  componentDidMount = () => {
    const key = "k_5v1nu3wp";
    const baseurl = `https://imdb-api.com/API/Top250Movies/${key}`;
    axios.get(baseurl)
      .then(response => this.setState({...this.state, data: response.data }))
      .catch(error => console.log(error));
  }
  
  render() {  
    const items =  this.state.data.items || [];
  
    return (
      <div className="container">
        <br/>
        {/* <Table  items={ items } /> */}
        <StudentList />
      </div>
    );
    
  }
}
 
export default App;
 