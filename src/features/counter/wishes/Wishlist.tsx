import { useEffect, useState } from "react"

export default function WishList() {
  const [wishes, setWishes] = useState<String[]>([])
  useEffect(() => {
    fetch("https://wishlist-api-six.vercel.app/api/v1/wishes")
      .then((res) => res.json())
      .then((arr) => {
        console.log(arr)
        setWishes(arr)
      })
  }, [])
  return (
    <ul>
      {wishes.map((wish, index) => (
        <li key={index}>{wish}</li>
      ))}
    </ul>
  )
}
