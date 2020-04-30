import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import "./view.css";

import Autocomplete from '../autocomplete';

function View( props: any ) {

  return (
  
        <AppBar position="static">

            <Toolbar className="appbar">

                <Typography variant="h6" color="inherit">
                    SirLordT
                </Typography>

                <Autocomplete
                   text={ props.text }
                   suggestions={ props.suggestions }
                   onChangeText={ props.onChangeText }
                   onChangeSelection={ props.onChangeSelection } />

                <AccountCircle />

            </Toolbar>

        </AppBar>

  )

}

export default View;