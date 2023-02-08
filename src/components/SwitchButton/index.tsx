import Switch from '@mui/material/Switch'
import styles from './styles.module.scss'

type SwitchButtonProps = {
  handleButton: () => void
}

const SwitchButton = ({ handleButton }: SwitchButtonProps) => {
  return (
    <div className={styles.switchButton}>
      <span>🌞</span>
      <Switch onClick={handleButton} />
      <span>🌚</span>
    </div>
  )
}

export default SwitchButton
