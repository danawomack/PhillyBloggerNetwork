import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    post: {}
  };
  // When this component mounts, grab the post with the _id of this.props.match.params.id
  // e.g. localhost:3000/posts/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getPost(this.props.match.params.id)
      .then(res => this.setState({ post: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div class="container">
        {/* <Row>
              <h3>
                {this.state.post.title} by {this.state.post.author}
              </h3>
        </Row> */}

        <div class="row">
    <div class="col s12 m12">
      <div class="card white darken-1">
        <div class="card-content black-text">
          <span class="card-title"> {this.state.post.title} by {this.state.post.author} </span>
          <p> {this.state.post.body}</p>
        </div>
        
      </div>
    </div>
  </div>

       
        <Row>
          <Col size="md-2">
            <Link to="/posts">← Back to Posts</Link>
          </Col>
        </Row>
    </div>
    );
  }
}

export default Detail;
