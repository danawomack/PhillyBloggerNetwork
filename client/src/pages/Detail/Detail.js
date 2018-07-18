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
      <Container fluid>
        <Row>
              <h1>
                {this.state.post.title} by {this.state.post.author}
              </h1>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Body</h1>
              <p>
                {this.state.post.body}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/posts">← Back to Posts</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
