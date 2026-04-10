
const Titulo = ({
  text, 
  level= 1, //h1, h2, h3
  size = "xl",//controla el tamaño
  align = "left", //lef, center, right
  className = "", //clases extras opcionales
}) =>{
  const Tag = `h${level}`
  const sizes ={
    sm: "text-lg font-semibold",
    md: "text-2x1 font-bold",
    xl: "text-4x1 font-extrabold",
    
  }
  const aligns ={
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }

  return (
   <Tag className={`${sizes[size]} ${aligns[align]} ${className}`}>
    {text}
    </Tag>
  )
}


export default Titulo
