type ListProps<T> = {
  items: T[]
  onClick: (value: T) => void
}

// if we want to be more specific on types we can replace this for <T extends string | null>:
export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {JSON.stringify(item)}
          </div>
        )
      })}
    </div>
  )
}
