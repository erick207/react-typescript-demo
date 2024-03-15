import { Name } from './Person.types'

type PersonListProps = {
  // Array of objects is specified as an object literal(or type) followed by square brackets
  names: Name[]
}

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        )
      })}
    </div>
  )
}
