import { BaseModal } from './BaseModal'
import {
  reward
} from '../../lib/reward'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const WinningModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Congratulations!" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
        You have won Anadle. Please enjoy your prize
      </p>
      <p className="text-m text-gray-500 dark:text-gray-300 mt-1 mb-4">
        Amazon code: { reward }
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
        Careful! If you close this modal your history will reset and you will lose access to the code
      </p>
    </BaseModal>
  )
}
