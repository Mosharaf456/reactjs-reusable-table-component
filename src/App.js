import React, { Component } from "react";
import axios from "axios";

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
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Poster</th>
              <th scope="col">Id</th>
              <th scope="col">Rank</th>
              <th scope="col">Full Title</th>
              <th scope="col">Imdb Rating</th>
              <th scope="col">Imdb Rating Count</th>
              <th scope="col">Your review</th>
            </tr>
          </thead>
          <tbody>
            { items.map( item => {
                  const imgUrl = item.image;
                  const id = item.id;
                  const rank = item.rank;
                  const fullTitle = item.fullTitle;
                  const  imDbRating = item.imDbRating;
                  const  imDbRatingCount = parseInt(item.imDbRatingCount);
                  return (    
                        <tr key = { id } >
                          <td> <img src={imgUrl} style={{height:'150px' , width:'140px'}}/></td>
                          <th scope="row"> {id}</th>
                          <td>{rank}</td>
                          <td>{fullTitle}</td>
                          <td>{imDbRating}</td>
                          <td>{imDbRatingCount}</td>
                          <td><i class="fa-solid fa-star"></i></td>
                        </tr>
                      )   
                }
              )
            }
          </tbody>
        </table>
      </div>
    )
    
  }
}
 
export default App;
 