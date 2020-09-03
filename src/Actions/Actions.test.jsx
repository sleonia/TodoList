import { addItem, deleteItem, updateItem, toggleItem, setVisibilityFilter, } from '.';
import Actions from '../Constants/ActionTypes';

describe('Actions with different input', () => {

  describe('Add', () => {
    it('should add a todo', () => {
      const expectedAction = (text) => ({
        type: Actions.ADD_ITEM,
        payload: text
      })
      expect(addItem('Add')).toEqual(expectedAction('Add'))
    })
  })

  describe('deleteItem', () => {
    it('should delete a todo', () => {
      const expectedAction = (id) => ({
        type: Actions.DELETE_ITEM,
        payload: id
      })
      expect(deleteItem(12)).toEqual(expectedAction(12))
    })
  })

  describe('updateItem', () => {
    it('should update a todo', () => {
      const expectedAction = (text, id) => ({
        type: Actions.UPDATE_ITEM,
          payload: {
            text,
            id,
          },
      })
      expect(updateItem('123', 0)).toEqual(expectedAction('123', 0))
    })
  })

  describe('toggleItem', () => {
    it('should toggle a todo', () => {
      const expectedAction = (id) => ({
        type: Actions.TOGGLE_ITEM,
          payload: id,
      })
      expect(toggleItem(0)).toEqual(expectedAction(0))
    })
  })

  describe('setVisibilityFilter', () => {
    it('should setVisibilityFilter', () => {
      const expectedAction = (id) => ({
        type: Actions.SET_VISIBILITY_FILTER,
          payload: id,
      })
      expect(setVisibilityFilter(0)).toEqual(expectedAction(0))
    })
  })

});
