import styles from "./Titulo.module.css"

const Titulo = ({
  text,
  level= 1,
  size = "xl",
  align = "left",
  className = "",
}) =>{
  const Tag = `h${level}`

  return (
    <Tag className={`${styles[size]} ${styles[align]} ${className}`}>
      {text}
    </Tag>
  )
}


export default Titulo
