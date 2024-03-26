import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import PropTypes from 'prop-types';
import DeletePerson from "./DeletePerson";


const PersonList = ({ products, setProducts }) => {

    const successDelete = (productId) => {
        Swal.fire({
            icon: "success",
            title: "Eliminado!",
            text: "Eliminaste una product!!",
        });
        setProducts(products.filter(product => product._id !== productId))
    }

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/product")
            .then((response) => {
                console.log(response.data.products)
                setProducts(response.data.products);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false);
            });
    }, [setProducts]);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <table className="table table-striped table-hover mt-5">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => (
                        <tr key={product._id}>
                            <td>{product.firstName}</td>
                            <td>{product.lastName}</td>
                            <td>{product.age}</td>
                            <td>
                                <Link to={`/product/${product._id}`} className="btn btn-outline-primary btn-sm me-1">Detalle</Link>
                                <Link to={`/product/${product._id}/update`} className="btn btn-outline-warning btn-sm me-1">Actualizar</Link>
                                <DeletePerson productId={product._id} successCallback={successDelete} />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

PersonList.propTypes = {
    products: PropTypes.array,
    setProducts: PropTypes.func.isRequired
}

export default PersonList