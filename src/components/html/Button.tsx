type ButtonProps = {
  variant: 'primary' | 'secondary'
  children: string /* (2) Specify the children type, but we see the type of children is now an intersection of string and ReactNode */
} & Omit<
  React.ComponentProps<'button'>,
  'children'
> /* (3) So we use the Omit keyword to specify which we want to omit */

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {/* (1) Let's say we want to restrict the children type to only strings... */}
      {children}
    </button>
  )
}
