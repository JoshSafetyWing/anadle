import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import {
  RefreshIcon,
} from '@heroicons/react/outline'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Happy anniversary!!!" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-left text-sm text-gray-500 dark:text-gray-300 mt-1">
        You know the rules! A couple caveats:
      </p>
      <p className="text-left text-sm text-gray-500 dark:text-gray-300 mt-1">
        1. If you press this icon on <RefreshIcon className="inline h-6 w-6 dark:stroke-white m-auto"/> the top right you immediately get a new letter.
      </p>
      <p className="text-left text-sm text-gray-500 dark:text-gray-300 mt-1 mb-1">
        2. Words can have 4, 5, or 6 letters!
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="P"
          status="correct"
        />
        <Cell value="R" />
        <Cell value="E" />
        <Cell value="T" />
        <Cell value="T" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter P is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="M" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="present"
        />
        <Cell value="R" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter A is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" />
        <Cell value="O" />
        <Cell value="V" />
        <Cell isRevealing={true} isCompleted={true} value="E" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
