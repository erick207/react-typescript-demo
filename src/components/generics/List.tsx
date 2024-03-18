type ListProps<T> = {
  items: T[]
  onClick: (value: T) => void
}

// if we want to be more specific on types we can replace this for <T extends string | number>:
// another useful constraint is mentioning each object must contain an id property: <T extends {id: number}>, then we would return <div key={item.id}....
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
