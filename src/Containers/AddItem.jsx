import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem } from '../Actions/index';

const AddItem = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addItem(input.value));
          input.value = '';
        }}
      >
        <input ref={(node) => { input = node; }} />
        {/*<button type="submit" onClick={() => {dispatch(addItem("123"))}}>Add Item</button>*/}
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

AddItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddItem);
