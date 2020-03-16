import React from 'react';
import { Row, Col, Card, CardImg, CardTitle, CardText } from 'reactstrap';
import "../bootstrap.min.css";

const RenderDish = (props) => {
    return (

        <Card key={props.dish.id}>
            <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
            <CardTitle>{props.dish.name}</CardTitle>
            <CardText>{props.dish.description}</CardText>
        </Card>
    );
}

const Comments = (props) => {
    return (
        <div>
            <h3>Comments</h3>
            {props.comment.map(e =>
                <Row key={e.id}>
                    <Row>{e.comment}</Row>
                    <Row>
                        <Col>--{e.author}</Col>
                        <Col>{e.date}</Col>
                    </Row>
                </Row>
            )}
        </div>
    );
}

class DishDetail extends React.Component {

    render() {
        return (
            <Row>
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={this.props.Dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <Comments comment={this.props.Dish.comments} />
                </div>
            </Row>
        );
    }
}
export default DishDetail;