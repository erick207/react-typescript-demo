/* Let's say this component needs the exact same props as the Greet.tsx component,
 let's assume we can't not export the Props type(i.e. it's part of a library)
 in this case we can use React.ComponentProps to extract them */

import { Greet } from '../Greet'

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div></div>
}

export default CustomComponent
