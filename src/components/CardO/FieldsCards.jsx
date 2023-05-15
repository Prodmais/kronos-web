import styles from "./card-o.module.css"
import ActivityCard from "./activityCard"


function Cartoes() {
  return(
    <div className={styles.field}>
      <h1>A Fazer</h1>
      <ActivityCard />
    </div>
  )
}


export default Cartoes;