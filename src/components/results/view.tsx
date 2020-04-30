import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CssBaseline, Typography } from '@material-ui/core';

import AppBar from '../appBar';
import './view.css';

export default function View( props: any ) {
  
  const {

    results,
    goTo,    

  } = props;

  const isEmpty = results.length === 0;

  return (
  
    <Fragment>

      <CssBaseline />
       
      <AppBar />

      <div className="results-page">  

        {
          
          isEmpty ? 
            <Typography variant="h5" component="h3" className="page-message">
              There are no results
            </Typography>
          :
          results.map( ( item: any ) => 
              <div
                key={item.id}
                className="card-container"
              >
                <Card
                    className="card"
                    onClick={() => goTo(`/details/${item.id}`)}
                >
                    <CardActionArea>
                        <CardMedia
                            className="card-media"
                            image={item.image}
                            title={item.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.title}
                            </Typography>
                            <Typography component="p">
                                {item.content}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
              </div> 
          )

        }

      </div>

    </Fragment>

  )

}
