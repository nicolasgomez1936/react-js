import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
    text-align: center;
    font-size: large;
    font-weight: 800;
    color: #34495E;

`

const ItemListContainer = ({childen}) => {
  return (
    
    <Div>
        <h2>{childen}</h2>
    </Div>
 );
  
}

export default ItemListContainer