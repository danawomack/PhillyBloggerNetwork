import axios from "axios";

export default {
    // Gets all books
    getUser: function () {
        return axios.get("/auth/check");
    },
    loginUser: function (loginData) {
        return axios.post("/auth/login/", loginData);
    },
    // Saves a book to the database
    registerUser: function (registerData) {
        return axios.post("/auth/register", registerData);
    },
    logoutUser: function () {
        return axios.get("/auth/logout/");
    },

    // Gets all posts
    getPosts: function() {
        return axios.get("/api/posts");
    },
    // Gets the post with the given id
    getPost: function(id) {
        return axios.get("/api/posts/" + id);
    },
    // Deletes the post with the given id
    deletePost: function(id) {
        return axios.delete("/api/posts/" + id);
    },
    // Saves a post to the database
    savePost: function(postData) {
        return axios.post("/api/posts", postData);
    }
};
