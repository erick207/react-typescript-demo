// we create separate types for the attributes
type RandomNumberType = {
  value: number
}
// with the restricted attributes in each case being optional and flagged as never
type PositiveNumber = RandomNumberType & {
  isPositive: boolean
  isNegative?: never
  isZero?: never
}

type NegativeNumber = RandomNumberType & {
  isNegative: boolean
  isPositive?: never
  isZero?: never
}

type Zero = RandomNumberType & {
  isZero: boolean
  isPositive?: never
  isNegative?: never
}

// Lastly, for the prop type we set it as an union type of the above
type RandomNumberProps = PositiveNumber | NegativeNumber | Zero

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
      {isZero && 'zero'}
    </div>
  )
}
