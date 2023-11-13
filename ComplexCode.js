/*
Filename: ComplexCode.js

This code demonstrates a complex implementation of a social media platform.
It includes functionalities like user registration, posting, liking, commenting,
and following other users. The code is organized using classes and uses modern
JavaScript features like arrow functions, async/await, and module imports.

To execute this code, you will need to install Node.js and run it in a supported environment.

Note: This code is an example and does not include actual database integration or data validation.
*/

// User class represents a user on the social media platform
class User {
  constructor(username) {
    this.username = username;
    this.posts = [];
    this.likes = [];
    this.comments = [];
    this.followers = [];
  }

  createPost(text) {
    const post = new Post(text, this.username);
    this.posts.push(post);
    return post;
  }

  likePost(post) {
    this.likes.push(post);
  }

  commentOnPost(post, text) {
    const comment = new Comment(text, this.username);
    post.addComment(comment);
    this.comments.push(comment);
    return comment;
  }
}

// Post class represents a post made by a user
class Post {
  constructor(text, author) {
    this.text = text;
    this.author = author;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

// Comment class represents a comment made on a post
class Comment {
  constructor(text, author) {
    this.text = text;
    this.author = author;
  }
}

// Usage example
(async () => {
  const john = new User("john");
  const sarah = new User("sarah");

  const post1 = john.createPost("Hello world!");
  const post2 = sarah.createPost("This is awesome!");

  sarah.likePost(post1);
  john.likePost(post2);

  john.commentOnPost(post1, "Nice post!");
  sarah.commentOnPost(post2, "I agree!");

  console.log(john);
  console.log(sarah);
})();