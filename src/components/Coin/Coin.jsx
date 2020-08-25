import React from 'react'
import propTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid #cccccc;
    width: 22vh;
`;

const TdControls = styled(Td)`
    width: 36 vw;
`;
const Button = styled.button`
    font-size: 11px;
    width: 64px;
    margin: 3px 5px 0;
`;

export default function Coin(props) {

   const handleRefresh = (event) => {
       //Prevent the default action of submitting the form
       event.preventDefault();
       props.handleRefresh(props.tickerId);
   }
        return (
           <tr>
               <Td>{props.name}</Td>
               <Td>{props.ticker}</Td>
               <Td>${props.price}</Td>
               {props.showBalance ? <Td>{props.balance}</Td> : null}
               <TdControls>
                    <form action="#" method="POST">
                        <Button className="btn btn-info" onClick={handleRefresh}>
                            Refresh
                        </Button>
                    </form>
               </TdControls> 
           </tr>
        );
    }

Coin.propTypes = {
    name: propTypes.string.isRequired,
    ticker: propTypes.string.isRequired,
    price: propTypes.number.isRequired
}

