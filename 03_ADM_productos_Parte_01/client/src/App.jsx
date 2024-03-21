import './App.css'
import ProductForm from './components/ProductForm'


function App() {

    return (
        <div className='container text-center'>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>
                    <h3 className='mt-5'>Product Manager</h3>
                    <hr />
                    <ProductForm />
                </div>
                <div className='col-3'></div>
            </div>
        </div>
    )
}

export default App
