import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap';
import Rating from "../components/Rating";
import Products from "../Products";


const ProductScreen = () =>{
    const {id : productId} = useParams();
    const Product = Products.find((p) => p._id === productId);
    console.log(Product);
    return(
        <>
            <Link className="btn btn-light my-3" to="/">Go Back</Link>
            <Row>
                <Col md={5}>
                    <Image src={Product.image} alt= {Product.name} fluid/>
                </Col>
                <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroup.Item><h3>{Product.name}</h3></ListGroup.Item>
                    <ListGroup.Item><Rating value={Product.rating} text={`${Product.numReviews} reviews`}/></ListGroup.Item>
                    <ListGroup.Item>Price:${Product.price}</ListGroup.Item>
                    <ListGroup.Item>Description:${Product.description}</ListGroup.Item>
                </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                        <ListGroup.Item>
                        <Row>
                            <col>Price:</col>
                            <col><strong>${Product.price}</strong></col>
                        </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Row>
                            <col>Status:</col>
                            <col>
                                <strong>{Product.countINStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                            </col>
                        </Row>
                        </ListGroup.Item>
                        </ListGroup>
                       </Card>
                </Col>
            </Row>
            <ListGroup.Item>
                <Button className='btn-block' type = 'button' disabled={Product.CountInStock === 0}></Button>
            </ListGroup.Item>
        </>
    );
};
export default ProductScreen;