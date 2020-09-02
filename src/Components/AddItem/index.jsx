import React from 'react';
import PropTypes from 'prop-types';

class AddItem extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {
      value: '',  
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state.value);
    this.setState({ value :  ''});
  }

  handleChange(e) {
    this.setState({ value : e.target.value });
  }

  render () {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit.bind(this)}
        >
          <input onChange={this.handleChange.bind(this)} value={this.state.value} />
          <button type="submit">Add Item</button>
        </form>
      </div>
    )
  }
}

AddItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default AddItem;
