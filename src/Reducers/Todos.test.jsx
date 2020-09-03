import reducer from './Todos';
import Actions from '../Constants/ActionTypes';

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
        type: Actions.ADD_ITEM,
        payload: '123'
      })
    ).toEqual([item])

    expect(
      reducer(
        [
          item
        ],
        {
          type: Actions.ADD_ITEM,
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
        type: Actions.TOGGLE_ITEM,
        payload: 0
      })
    ).toEqual([])

    expect(
      reducer(
        [
          item
        ],
        {
          type: Actions.TOGGLE_ITEM,
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
          type: Actions.TOGGLE_ITEM,
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
          type: Actions.TOGGLE_ITEM,
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
        type: Actions.DELETE_ITEM,
        payload: 1
      })
    ).toEqual([])

    expect(
      reducer(
        [
          item
        ],
        {
          type: Actions.DELETE_ITEM,
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
          type: Actions.DELETE_ITEM,
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
        type: Actions.UPDATE_ITEM,
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
          type: Actions.UPDATE_ITEM,
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