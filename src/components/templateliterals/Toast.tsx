/**
 * Position prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */

// we could hardcode every option, but here we will pass template literals. It is a good approach for when we want to combine values to create a new value.

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
    | 'center'
  // typescript infers all the possible combinations
}

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>
}
