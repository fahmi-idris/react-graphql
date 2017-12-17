import React, { Component } from 'react';
import { CardGroup, Row, Col } from 'reactstrap';
import CardComponent from './card';

import { graphql, withApollo } from 'react-apollo';
import gpl from 'graphql-tag';

const getAllPokemon = gpl `
    query getAllPokemon {
        allPokemon(offset: 0){
            id
            name
            desc
            avatar
        }
    }
`;

class CardWrapper extends Component {
  render() {
    const {allPokemon, loading} = this.props.data
    if(loading){
        return <span>Loading</span>
    }
    return (
        <CardGroup>
            <Row>
                {allPokemon.map(pokemon => (
                    <Col md="3" className="d-flex justify-content-center p-2">
                        <CardComponent {...pokemon} />
                    </Col>
                ))}
            </Row>
        </CardGroup>
    );
  }
}

export default graphql(getAllPokemon)(CardWrapper)