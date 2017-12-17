import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

class CardModal extends Component {
    render() {
        console.log(this.props)
        const { detailPokemon }  = this.props
        if(!Object.keys(detailPokemon).length) return null
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Title</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md="12">
                            <h3>Pokemon Data</h3>
                            <Row>
                                <Col md="12">
                                    <ul>
                                        {detailPokemon.data.map(data=>(
                                            <li>{data.name} : {data.value}</li>
                                        ))}
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <h3>Pokemon Stats</h3>
                            <Row>
                                <Col md="12">
                                    <ul>
                                        {detailPokemon.stats.map(data=>(
                                            <li>{data.name} : {data.value}</li>
                                        ))}
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.props.toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default CardModal