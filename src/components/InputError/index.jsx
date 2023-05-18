import styles from './input-error.module.css'

export default function InputError({ children }){
    return (<span className={styles.error}>
        {children}
    </span>);
}