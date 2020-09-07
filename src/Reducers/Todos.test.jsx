import reducer from './Todos';
import { ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM, UPDATE_ITEM } from '../Constants/ActionTypes';

describe('todos reducer', () => {

  beforeEach(() => {
    localStorage.clear();
  });

  const item = {
    id: 0,
    isCompleted: false,
    text: '123',
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle ADD_ITEM', () => {
    expect(
      reducer([], {
        type: ADD_ITEM,
        payload: '123'
      })
    ).toEqual([item])

    expect(
      reducer(
        [
          item
        ],
        {
          type: ADD_ITEM,
          payload: '123'
        }
      )
    ).toEqual([
      item,
      {
        text: '123',
        isCompleted: false,
        id: 1
      },
    ])
  })

	it('should handle TOGGLE_ITEM', () => {
    expect(
      reducer([], {
        type: TOGGLE_ITEM,
        payload: 0
      })
    ).toEqual([])

    expect(
      reducer(
        [
          item
        ],
        {
          type: TOGGLE_ITEM,
          payload: 0
        }
      )
    ).toEqual([
      {
        id: 0,
        isCompleted: true,
        text: '123',
      }
    ])

    expect(
      reducer(
        [
          {
            id: 0,
            isCompleted: true,
            text: '123',
          }
        ],
        {
          type: TOGGLE_ITEM,
          payload: 0
        })
    ).toEqual([
      {
        id: 0,
        isCompleted: false,
        text: '123',
      }
    ])

    expect(
      reducer(
        [
          {
            id: 0,
            isCompleted: true,
            text: '123',
          }
        ],
        {
          type: TOGGLE_ITEM,
          payload: 1
        })
    ).toEqual([
      {
        id: 0,
        isCompleted: true,
        text: '123',
      }
    ])
  })

  it('should handle DELETE_ITEM', () => {
    expect(
      reducer([], {
        type: DELETE_ITEM,
        payload: 1
      })
    ).toEqual([])

    expect(
      reducer(
        [
          item
        ],
        {
          type: DELETE_ITEM,
          payload: 0
        }
      )
    ).toEqual([])

    expect(
      reducer(
        [
          item,
          {
            id: 1,
            isCompleted: true,
            text: '1234',
          }
        ],
        {
          type: DELETE_ITEM,
          payload: 0
        }
      )
    ).toEqual([
      {
        id: 1,
        isCompleted: true,
        text: '1234',
      }
    ])
  })

  it('should handle UPDATE_ITEM', () => {
    expect(
      reducer([], {
        type: UPDATE_ITEM,
        payload: {
            text: '45678',
            id: 0,
        }
      })
    ).toEqual([])

    expect(
      reducer(
        [
          item
        ],
        {
          type: UPDATE_ITEM,
          payload: {
            text: '45678',
            id: 0,
          }
        }
      )
    ).toEqual([
      {
        id: 0,
        isCompleted: false,
        text: '45678',
      }
    ])
  })
})