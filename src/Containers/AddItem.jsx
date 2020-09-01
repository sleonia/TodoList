import { connect } from 'react-redux';
import { addItem } from '../Actions';
import AddItem from '../Components/AddItem';

const mapDispatchToProps = (dispatch) => ({
  addItem: (text) => dispatch(addItem(text)),
});

export default connect(null, mapDispatchToProps)(AddItem);
