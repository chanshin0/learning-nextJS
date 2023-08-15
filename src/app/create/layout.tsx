export default function Layout(props : React.PropsWithChildren) {

  return (
    <form>
      <h2>Create Here!</h2>
      {props?.children}
    </form>
  ) 
}