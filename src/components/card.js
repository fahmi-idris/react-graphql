import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import CardModal from './cardModal';

import { graphql, withApollo, compose } from 'react-apollo';
import gpl from 'graphql-tag';

const pokemonQuery = gpl `
    query getDetailPokemon($slug: String!) {
        getPokemon(slug: $slug){
            data {
                name
                value
            }
            stats {
                name
                value
            }
        }
    }
`;

class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            detailPokemon: {

            }
        };
    }

    handleModal = () => {
        this.props.client.query({
            query: pokemonQuery,
            variables: {
                slug: this.props.name.toLowerCase()
            }
        }).then(res => {
            console.log(res)
            this.setState({ 
                modal: !this.state.modal,
                detailPokemon: {...res.data.getPokemon}
            });
        })
        // this.setState({ modal: !this.state.modal});
    }

    render() {
        return (
            <div>
                <Card style={{ marginTop: 30 }}>
                    <CardImg top width="100%" src={this.props.avatar} alt={this.props.name} />
                    <CardBody>
                        <CardTitle>{this.props.name}</CardTitle>
                        <CardText>
                            {this.props.desc}
                        </CardText>
                        <Button onClick={this.handleModal}>Detail</Button>
                    </CardBody>
                </Card>
                <CardModal
                    modal={this.state.modal}
                    toggle={this.handleModal}
                    detailPokemon={this.state.detailPokemon}
                    // {...this.state.detailPokemon}
                />
            </div>
        );
    }
}

export default withApollo(CardComponent)