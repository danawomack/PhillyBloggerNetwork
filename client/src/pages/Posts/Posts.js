import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Posts extends Component {
  state = {
    posts: [],
    title: "",
    author: "",
    body: ""
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    console.log('loading posts...');
    API.getPosts()
      .then(res => {
        console.log(res.data);
        this.setState({ posts: res.data, title: "", author: "", body: "" });
      }
      )
      .catch(err => console.log(err));
  };

  deletePost = id => {
    API.deletePost(id)
      .then(res => this.loadPosts())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.savePost({
        title: this.state.title,
        author: this.state.author,
        body: this.state.body
      })
        .then(res => this.loadPosts())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="container">

        <div className="col s12 m6">
          <Row>
            <p>Create your listing below </p>
            <Col size="md-6">
              {/* <Jumbotron>
                <h1>Philly Blogger Network</h1>
              </Jumbotron> */}

              <form>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
                <Input
                  value={this.state.author}
                  onChange={this.handleInputChange}
                  name="author"
                  placeholder="Author (required)"
                />
                <TextArea
                  value={this.state.body}
                  onChange={this.handleInputChange}
                  name="body"
                  placeholder="Body (required)"
                />
                <FormBtn
                  disabled={!(this.state.author && this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Post
              </FormBtn>
              </form>
            </Col>
            <Col size="md-6 sm-12">
             
                <p>Find what you're looking for below</p>
             
              {this.state.posts.length ? (
                <div class="row" >
                 {this.state.posts.map(post => (
                <div class="col s12 m6" key={post._id}>
                
                  <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                      <span class="card-title"><Link to={"/posts/" + post._id}>
                        <strong>
                          {post.title} by {post.author}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => this.deletePost(post._id)} />
                      </span>
                      
                    </div>
                   
                  </div>
                </div>
                ))}
              </div>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Posts;
