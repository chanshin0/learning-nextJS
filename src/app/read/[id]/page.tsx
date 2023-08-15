type ReadProps = {
  params: {
    id: string;
  };
}

export default function Read(props : ReadProps) {
  console.log(props)
  return (
    <>
      <h2>Read</h2>
      parameter : {props.params.id}
    </>
  )
}