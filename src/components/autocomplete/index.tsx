import React, { Component } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import "./view.css";

class Autocomplete extends Component<any> {

  constructor( props: any ) {
  
    super( props );

    this.state = {
    
      isOpen: false,
    
    };

  }

  render() {

    const { 
            onChangeText,
            onChangeSelection,
            suggestions,
            text
          } = this.props as any;

    const {
            isOpen
          } = this.state as any;

    return (
      
      <div className="main-container">
      
        <div className="container-icon">
          
          <SearchIcon />

        </div>
      
        <InputBase
          placeholder="Search…"
          value={text}
          style={ { width: "100%" } }
          onChange={ 
                     ( event ) => {
            
                       const newText = event.target.value;

                       onChangeText( newText );

                        if ( !isOpen && newText)  {
                        
                          this.setState( { isOpen: true } );

                        }
                        else if ( isOpen && !newText ) {

                          this.setState( { isOpen: false } );

                        }

                     }

                   }
          
          onBlur={

                   () => {
                   
                     setTimeout( () => this.setState( { isOpen: false } ), 100 );

                   }

                 }
          
          onFocus={
                  
                    () => {
             
                      if (text) {
              
                        this.setState( { isOpen: true } );
            
                      }
                    }
                  
                  }

          onKeyPress={

                       ( event ) => {
            
                         if ( event.key === "Enter" && text ) {
                 
                           onChangeSelection( text );

                         }
                       
                       }
                    
                     }

        />

        { 
          isOpen && 
          (

            <Paper className="container-results" square>
              
              {
                suggestions.map(

                  ( suggestion: any ) => (
                
                    <MenuItem
                      key={suggestion.id}
                      component="div"
                      onClick={
                        
                        () => {
                      
                          onChangeSelection( suggestion.title );
                          this.setState( { isOpen: false } );

                        }
                      
                      }
                    >

                      { suggestion.title }

                    </MenuItem>
                  )

                )

              }
            
            </Paper>

          )

        }

      </div>

    );

  }
}

export default Autocomplete;
