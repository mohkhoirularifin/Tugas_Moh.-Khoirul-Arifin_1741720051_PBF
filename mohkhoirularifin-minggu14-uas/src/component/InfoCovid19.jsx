import React, { Component } from "react";
import Post from "../stateless/PostInfoCovid19";

class InfoCovid19 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
    };
  }

  componentDidMount() {
    fetch("https://coronavirus-19-api.herokuapp.com/countries")
      .then((response) => response.json())
      .then(
        // handle the result
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result,
          });
        },

        // Handle error
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, posts } = this.state;

    if (error) {
      return <div>Error in loading</div>;
    } else if (!isLoaded) {
      return <div>Loading ...</div>;
    } else {
      return (
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto my-2 text-center text-title">
                  <h1 className="text-capitalize font-weight-bold">
                    Info Covid Terkini
                  </h1>
                </div>
              </div>
              <div className="row">
                {
                  // Looping dan masukan untuk setiap data yang ada di posts ke variabel artikel
                  this.state.posts.map((post) => {
                    return (
                        <Post
                        key={post.id}
                        negara={post.country}
                        positif={post.cases}
                        sembuh={post.recovered}
                        meninggal={post.deaths}
                        idArtikel={post.id}
                        hapusArtikel={this.handleHapusArtikel}
                        />
                    //   <li key={post.id} align="start">
                    //     <div>
                    //       <p className="title">Negara : {post.country}</p>
                    //       <p className="body">
                    //         Positif : <em>{post.cases}</em>
                    //       </p>
                    //       <p className="body">
                    //         Sembuh : <em>{post.recovered}</em>
                    //       </p>
                    //       <p className="body">
                    //         Meninggal : <em>{post.deaths}</em>
                    //       </p>
                    //     </div>
                    //   </li>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default InfoCovid19;
