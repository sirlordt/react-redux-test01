import React, { Component } from 'react';
import { connect } from 'react-redux';
import View from './view';

export class Results extends Component {
  
  render() {
  
    const { results } = this.props as any;

    //console.log( suggestions );

    return (
  
      <View results={ results } />
      
    )
  
  }

}

const mapStateToProps = ( state: any ) => {

  return {
           results: state.results,
         }  

}

const wrapper = connect( mapStateToProps );
const component = wrapper( Results )

export default component;