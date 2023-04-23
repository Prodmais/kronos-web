import styles from "../componentes/styles.module.css"
import ButtonsNav from "./Buttons"
import Cartoes from "./FieldsCards"
import CartoesDois from "./FieldsCardsTwo"
import CartoesTres from "./FieldsCardsThree"

const HomeScreen = () => {
  return (
    <div className={styles.container}>
      <header>
        <ButtonsNav />
        <Cartoes />
        <CartoesDois />
        <CartoesTres />
      </header>
      
     
    </div>
  )
}

export default HomeScreen