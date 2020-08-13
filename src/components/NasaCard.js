import React from "react"
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import styled from 'styled-components'

function NasaCard(props) {
    

    const Header = styled.h1`
    color: red;`

    const Wrapper = styled.body`
    
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;`
    
    
    

    return (
        <div className="body">
            <img src={props.url} />
            
            <Wrapper>
                
          
            <Button>{props.title}</Button>
            {props.date}
            
            {props.explanation}
            </Wrapper>
           
        </div>
    )
}

export default NasaCard

