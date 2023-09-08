import {Row,Col} from 'react-bootstrap';
import Product from '../components/Product';
import Products from '../Products';
const Homescreen = () =>{
    return (
    <>
        <h1>Latest products</h1>
        <Row>
           {Products.map((product) =>(
            <Col key={product._id} sm={12} md={6} lg={4} l={3}>
                
                <Product product={product}/>
            </Col>
           ))}
        </Row>
    </>
    )
}
export default Homescreen;