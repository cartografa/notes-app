/** @jsxImportSource theme-ui */

const Note = () => {
    return (
      <div sx={{variant: 'containers.page'}}>
        <h1>Note: {id} </h1>
      </div>
    )
}
  
export default Note

export async function getServerSideProps({params, req, res}) {
    const response = await fetch(`http://localhost:3000/api/note/${params.id}`)

    // so much power!
    if (!response.ok) {
        res.writeHead(302, { Location: '/notes' })
        console.log('Error. Could not find note')
        res.end()
        return {props: {}}
    }

    const {data} = await response.json()

    if (data) {
        return {
            props: {note: data}
        }
    }
}