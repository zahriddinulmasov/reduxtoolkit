import { useParams } from "react-router-dom"
import "./singleAmount.scss"

export const SingleAmount = () => {
    const params = useParams()
    return (
        <h1>Single Amount {params.amountId}</h1>
    )
}