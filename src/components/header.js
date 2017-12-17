import React, { Component } from 'react';
import '../App.css';

export default class HeaderComponent extends Component {
  render() {
    return (
      <div className="header" style={styles.headerStyle}>
        <div style={styles.headerTitle}>
          Pokedex
        </div>
      </div>
    );
  }
}

const styles = {
    headerStyle: {
        flexDirection: 'row',
        display: 'flex',
        padding: 20,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fff'
    },
    headerTitle : {
      fontSize: 18,
      fontWeight: '500'
    }
}