export default function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer>
      <p>Sebastián Morales Fuentes © {anio}</p>
    </footer>
  )
}