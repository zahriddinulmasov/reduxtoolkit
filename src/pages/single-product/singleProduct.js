import React from "react"
import { useParams } from "react-router-dom"
import "./singleProduct.scss"

function SingleProduct() {
    const params = useParams()

    return (
        <>
        <h1>SingleProduct {params.productId}</h1>
        </>
    )
}

export default SingleProduct