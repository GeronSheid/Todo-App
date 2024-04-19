export interface ITodo {
    id: string,
    title: string,
    isFulfilled: boolean
}

export interface IList {
    todos: ITodo[] | []
  }