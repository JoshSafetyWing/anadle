type Props = {
  word: string
  message: String
}

export const WordMessage = ({ word, message }: Props) => {
  return (
    <div className="m-2 text-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
        Why {word}?
        </h3>
        <p className="text-s text-gray-900 dark:text-gray-100">{message}</p>
    </div>
  )
}
