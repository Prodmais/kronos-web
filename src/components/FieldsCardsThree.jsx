import styles from "./styles.module.css"
import ActivityCard from "./activityCard"


function CartoesTres() {
  return (
    <div className={styles.fieldsTres}>
      <h1>Finalizado</h1>
      <div>
        <ActivityCard />
      </div>
    </div>
  )
}

export default CartoesTres