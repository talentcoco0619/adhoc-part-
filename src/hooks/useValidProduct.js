import { useParams } from 'react-router-dom'

function useValidProductURL() {
  const { productId } = useParams()
  const url = new URL(window.location)
  const uuid = url.searchParams.toString().slice(0, -1)

  return productId && uuid
}

export default useValidProductURL
