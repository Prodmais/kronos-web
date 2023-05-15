import styles from "./card-o.module.css";


 function ButtonsNav() {
  return (
    <>
      <nav className = {styles.nav}>
        <label>
          <h5>Buscar</h5>
        </label>
        <input type="text" name="" id="" className={styles.searchBar} placeholder="Buscar Atividade" />
        <button className={styles.Btn}>
          <p>+ Criar Atividade</p>
        </button>
        <a href="https://www.google.com/" className={styles.link}>
          <p>Filtros</p>
        </a>
        <button className={styles.login}>
          <h5>login</h5>
        </button>
      </nav>
    </>
    
  )
}

export default ButtonsNav;