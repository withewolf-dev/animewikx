import React, { Component } from "react";
import axios from "axios";
import Display from "./Display";

export default class Axios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anime: [],
      search: "",
    };
   // console.log("anime", this.state.anime);
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
        `https://api.jikan.moe/v3/search/anime?q=${this.state.search} ` || "[]"
      )
      .then((response) => {
        console.log(response.data.results[0]);
        this.setState({ anime: [response.data.results[0]] });
      });
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.search}
              onChange={this.handleChange}
              placeholder="search for anime here "
              name="search"
            />
            <button> search </button>
          </form>
        </div>
        {this.state.anime.map((a) => (
          <Display title={a.title} key={a.mal_id} id={a.mal_id} />
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
