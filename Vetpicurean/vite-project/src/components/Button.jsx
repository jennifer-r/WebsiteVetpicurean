import React, {useState} from 'react'
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';

const ButtonInterface = {
  children: PropTypes.node,
  onClick: PropTypes.func
}

ButtonPrimary.propTypes = ButtonInterface;
ButtonSecondary.propTypes = ButtonInterface;

export function ButtonPrimary({ children, onClick, style }) {
  return (
    <>
      <style type="text/css">
        {
          `
            .btn-primary-custom {
              width: 110px;
              font-weight: bold;
              border-color: '#8eb98c';
              color: '#6BF584';
              background-color: '#8eb98c';
              transition: 0.3s;
              text-decoration: none;
            }
            .btn-primary-custom:hover {
              color: #FFFFFF;
              border-color: #8eb98c;
              background-color: #8eb98c; 
            }
          .btn-primary-custom:not(:hover) {
            color: #000000;
          }              
          `
        }
      </style>
      <Button 
        variant="link" 
        className="btn-primary-custom"
        onClick={onClick}
        style={style}
      >
        {children}
      </Button>
    </>
  )
}

export function ButtonSecondary({ children, onClick }) {
  return (
    <>
      <style type="text/css">
        {
          `
            .btn-secondary-custom {
              width: 110px;
              font-weight: bold;
              border-color: #6BF584;
              color: #FFFFFF;
              background-color: #6BF584;
              transition: 0.3s;
              text-decoration: none;
            }
            .btn-secondary-custom:hover {
              color: #6BF584;
              background-color: #FFFFFF;
              border-color: #6BF584;
            }
          `
        }
      </style>
      <Button variant="link" className="btn-secondary-custom" onClick={onClick}>{children}</Button>
    </>
  )
}