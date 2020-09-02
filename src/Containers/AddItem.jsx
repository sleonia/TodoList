import { connect } from 'react-redux';
import { addItem } from '../Actions';
import AddItem from '../Components/AddItem';

const mapDispatchToProps = {
  addItem: addItem,
};

export default connect(null, mapDispatchToProps)(AddItem);
