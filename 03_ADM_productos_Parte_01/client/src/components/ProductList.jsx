import useAxios from "../hooks/useAxios";

const PersonList = () => {

    const { data, isLoading, error } = useAxios("http://localhost:8000/api/product")
    
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }
    
    const { products } = data
    return (
        <table className="table table-striped table-hover mt-5">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Descripcion</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => (
                        <tr key={product._id}>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.descripcion}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default PersonList