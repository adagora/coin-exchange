import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';


const Section = styled.section`
    border: 1px solid red;
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;
const Button = styled.button`
    margin 0 8px;

`;
export default function AccountBalance(props) {
    
    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
    const buttonClass = 'btn' + (props.showBalance ? 'btn-warning' : 'btn-info');
    if ( props.showBalance ) {
        content = <>Balance: ${props.amount}</>;
    }
    return (
        <Section>
            {content}
            <Button 
                onClick={props.handleBalanceVisibilityChange}
                className={buttonClass}>
                {buttonText}
            </Button>
            <Button className="btn btn-success">
                <i className='fa fa-helicopter'></i>
            </Button>
        </Section>
    );
}

AccountBalance.propTypes = {
    amount: propTypes.string.isRequired,
}