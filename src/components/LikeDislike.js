import React, { Fragment } from 'react';

const Button = ({className, handleClick, children}) => <button className={className} onClick={handleClick}>{children}</button>;

export default class LikeDislike extends React.Component {
  state = {
    likes: 100,
    liked: false,
    dislikes: 25,
    disliked: false
  };

  handleLike() {
    this.setState({
      likes: (!this.state.liked) ? ++this.state.likes : --this.state.likes,
      liked: !this.state.liked
    });
    if(this.state.disliked) this.handleDislike();
  }

  handleDislike() {
    this.setState({
      dislikes: (!this.state.disliked) ? ++this.state.dislikes : --this.state.dislikes,
      disliked: !this.state.disliked
    });
    if(this.state.liked) this.handleLike();
  }

  render () {
    return (
      <Fragment>
        <div className="App">
          <h2>Like/Dislike</h2>
          <Button className={`like-button ${this.state.liked && 'liked'}`} handleClick={() => this.handleLike()}>
            Likes | <span>{this.state.likes}</span>
          </Button>
          <Button className={`dislike-button ${this.state.disliked && 'disliked'}`} handleClick={() => this.handleDislike()}>
            Dislikes | <span>{this.state.dislikes}</span>
          </Button>
        </div>
        <style>
          {`
            .like-button, .dislike-button {
              display: inline-block;
              border: 1px solid #000;
              width: 100px;
            }
            .liked, .disliked {
              color: blue;
              border: 1px solid blue;
              font-weight: bold;
            }
          `}
        </style>
      </Fragment>
    )
  }
}