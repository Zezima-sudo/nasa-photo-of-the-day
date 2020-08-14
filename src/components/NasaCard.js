import React from "react"
import styled from 'styled-components'
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button, Jumbotron
  } from 'reactstrap';


  const Wrapper = styled.div`
    
  background: linear-gradient(-45deg, #000000, #e73c7e, #23a6d5);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  border: 1px solid black;
  margin-right: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;`
 
  

function NasaCard(props) {


    return (
    
       

        
              <Wrapper className="wrapper">
            <h1 className="display-3">{props.title}</h1>
            <p className="lead">{props.date}</p>
            <img className="my-2" src={props.url}/>
            <CardText>{props.explanation}</CardText>
            <p className="lead">
                <CardTitle>This data is sourced from NASA's image of the day API</CardTitle>
              <Button color="primary">Learn More</Button>
            </p>
            </Wrapper>
          
          
          
    )
}

export default NasaCard

