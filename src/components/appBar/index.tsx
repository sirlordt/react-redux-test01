import React, { Component } from 'react';

import { connect } from 'react-redux';

import View from './view';

import findSuggestions from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';

class IAppBar extends Component<any> {

  constructor( props: any ) {

    super( props );

    this.state = { 
      text: ''
    };

    this.onChangeText = this.onChangeText.bind( this );
    this.onChangeSelection = this.onChangeSelection.bind( this );

  }

  onChangeText( text: string ) {

    this.setState( { text: text } );

    this.props.findSuggestions( text );

  }

  onChangeSelection( text: string ) {

    this.setState( { text: text } );

    this.props.findResults( text );

  }

  render() {
  
    const { text } = this.state as any;
    const { suggestions } = this.props; //this.state as any;

    return (
  
      <View 
        text={ text }
        suggestions={ suggestions }
        onChangeText={ this.onChangeText }
        onChangeSelection={ this.onChangeSelection }/>

    )
  
  }
  
}

const mapStateToProps = ( state: any ) => {

  return {
      
    suggestions: state.suggestions,
    //results: state.results,

  }

}

/*
//Long form

const mapDispatchToProps = ( dispatch: any ) => {

  return {
     
    findSuggestions: ( text: string ) => dispatch( findSuggestions( text ) ),
    findResults: ( text: string ) => dispatch( findResults( text ) ),

  }

}
*/

const mapDispatchToProps = {

  findSuggestions,
  findResults,

}

const wrapper = connect( mapStateToProps, mapDispatchToProps )
const component = wrapper( IAppBar );

export default component;