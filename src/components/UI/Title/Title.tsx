import img from "../../../helper/favicon.svg"
import styles from "./Title.module.css"

const Title: React.FC = () => {
  return (
    <p className={styles.title}>
      Arrow game <img src={img} alt="logo" />
    </p>
  )
}

export default Title
