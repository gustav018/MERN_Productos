import { useState } from "react"
import useForm from "../hooks/useForm"
import axios from "axios"
import Swal from 'sweetalert2'


const PersonForm = () => {

    const initialValues = {
        title:'',
        price: '',
        descripcion: ''
        
    }
    const {values: products, handleChange, clearData} = useForm(initialValues)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/product', products)
            .then(res => {
                console.log(res)
                clearData()
                Swal.fire({
                    icon: "success",
                    title: "Genial!",
                    text: "Agregaste un producto!!",
                });
                setError("")
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data.error.message)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="text-danger">{error}</div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Title </label>
                <div className="col-sm-10">
                <input type="text" className="form-control" name="title" value={products.title} onChange={handleChange} />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Price </label>
                <div className="col-sm-10">
                <input type="number" className="form-control" name="price" value={products.price} onChange={handleChange} />
                </div>
                
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Descripcion: </label>
                <div className="col-sm-10">
                <input type="text" className="form-control" name="descripcion" value={products.descripcion} onChange={handleChange} />
                </div>
                
            </div>
            <button type="submit" className="btn btn-secondary mt-3">Create</button>
        </form>
    )
}

export default PersonForm