import { Cell } from './Cell'

type Props = {
  size: number
}

export const EmptyRow = ({ size }: Props)  => {
  const emptyCells = Array.from(Array(size))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
