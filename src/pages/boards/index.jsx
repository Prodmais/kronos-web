import styles from "./styles.module.css"
import ButtonsNav from "../../components/Buttons"
import Cartoes from "../../components/FieldsCards"
import CartoesDois from "../../components/FieldsCardsTwo"
import CartoesTres from "../../components/FieldsCardsThree"

const Boards = () => {
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

export default Boards;