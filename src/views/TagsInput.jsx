/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class TagsInput extends React.Component {
  state = {
    tags: [
      { id: 'Business', text: 'Business' },
      { id: 'Technology', text: 'Technology' }
    ],
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.tags !== prevState.tags) {
      this.handleUpdate();
    }
  }

  handleDelete = (i) => {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition = (tag) => {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleUpdate = () => {
    const updatedTags = this.state.tags;
    this.props.tagsUpdateHandler(updatedTags);
  }

  handleDrag = (tag, currPos, newPos) => {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  render() {
    const { tags } = this.state;
    return (
      <div>
        <ReactTags
          tags={tags}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          delimiters={delimiters} />
      </div>
    );
  }
}

export default TagsInput;
