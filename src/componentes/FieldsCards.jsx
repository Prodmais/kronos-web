import styles from "../componentes/styles.module.css"
import ActivityCard from "./activityCard"


function Cartoes() {
  return(
    <div className={styles.field}>
      <h1>A Fazer</h1>
      <ActivityCard />
    </div>
  )
}


export default Cartoes