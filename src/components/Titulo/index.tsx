type Props = {
  children: string
}

const Titulo = (props: Props) => {
  return (
    <>
      <h2>{props.children}</h2>
    </>
  )
}

export default Titulo
