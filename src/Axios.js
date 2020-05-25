import React, { Component } from "react";
import axios from "axios";
import Display from "./Display";
import { Button } from '@material-ui/core';

export default class Axios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anime: [],
      search: "",
      errorMessage: undefined
    };
  
  }

  componentDidMount() {}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
    .get(
      `https://api.jikan.moe/v3/search/anime?q=${this.state.search}` || "[]"
    )
    .then(response => {
      //In our request we made sure that we are getting data we can use
      //the api returns blank array sometimes so we gotta make sure there is something
      // in it. We do this simply by checking length.
      if (response.data.results.length < 1) {
        //We will throw an error here to our catch
        throw new Error("No anime found");
      }
      console.log(response.data.results);
      this.setState({
        anime: response.data.results
      });
    })
    .catch(err => {
      //Our catch sets the error message in our state.
      this.setState({
        error: err.toString()
      });
    });
      
  };
  
  
  render() {  
    return (
      <div>
      { this.state.errorMessage &&
      <h3 > { this.state.errorMessage } </h3> }
        <div>
          <form >
            <input
              type="text"
              value={this.state.search}
              onChange={this.handleChange}
              placeholder="search for anime here "
              name="search"
            />
            <Button onClick={this.handleSubmit}
            size='small' color='primary' variant='contained'
            disabled={this.state.search.trim() !== '' ? false : true}
            > searcs </Button>
          </form>
        </div>
        {/*Here we just added our error handler in our view*/}
        {this.state.error !== undefined ? <h1>{this.state.error}</h1> : false}
        {this.state.anime.map((a) => (
          <Display title={a.title} 
          key={a.mal_id} id={a.mal_id}
          img={a.image_url}
          epsd={a.episodes}
          rated={a.rated}
          score={a.score}
          synopsis={a.synopsis}
          airing={a.airing}
          end_date={a.end_date}
          start_date={a.start_date}
           />
        ))}
      </div>
    );
  }
}


// import React, { Component } from 'react';
// import axios from 'axios';
// import Display from './Display';

// export default class Axios extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       anime: [],
//       search: '',
//     };
//   }

//   componentDidMount() {}

//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     axios
//       .get(
//         `https://api.jikan.moe/v3/search/anime?q=${this.state.search}` || '[]'
//       )
//       .then(response => {
//         console.log(response.data.results);
//         this.setState({
//           anime: response.data.results,
//         });
//       });
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <form onSubmit={this.handleSubmit}>
//             <input
//               type="text"
//               value={this.state.search}
//               onChange={this.handleChange}
//               placeholder="search for anime here "
//               name="search"
//             />
//             <button> search </button>
//           </form>
//         </div>
//         {this.state.anime.map(a => (
//           <Display
//             title={a.title}
//             imgUrl={a.image_url}
//             key={a.mal_id}
//             id={a.mal_id}
//           />
//         ))}
//       </div>
//     );
//   }
// }
