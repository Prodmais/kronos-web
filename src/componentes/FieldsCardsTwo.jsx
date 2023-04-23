import styles from "../componentes/styles.module.css"
import ActivityCard from "./activityCard"

function CartoesDois() {
  return(
    <div className={styles.fieldsDois}>
      <h1>Fazendo</h1>
      <div>
      <ActivityCard />
      </div>
    </div>
  )
}

export default CartoesDois