"use strict";

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBooks } from "../../actions/bookActions";
import { Panel, Well, Col, Row, Button } from "react-bootstrap";



class Cart extends React.Component{
    render(){
        if(this.props.cart[0]){
            return this.renderCart();
        }else{
            return this.renderEmpty();
        }
    }
    renderCart(){
        const cartItems = this.props.cart.map(function(cartArr){
            return (
                <Panel key = {cartArr.id}>
                    <Row>
                        <Col xs = {12} sm = {4} >
                            <h6>{cartArr.title}</h6>
                        </Col>
                    </Row>
                </Panel>
            )
        })
        
        return (
            <Panel header = "cart" bsStyle='primary'>
                {{cartItems}}
            </Panel>
        )
    }
    renderEmpty(){
        return (<div></div>);
    }
}
function mapStateToProps(state){
    return {
        cart: state.cart.cart
    }
}
export default connect(mapStateToProps)(Cart);