import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';

const ButtonInterface = {
  children: PropTypes.node,
  onClick: PropTypes.func
}

ButtonPrimary.propTypes = ButtonInterface;
ButtonSecondary.propTypes = ButtonInterface;

export function ButtonPrimary({ children, onClick }) {
  return (
    <>
      <style type="text/css">
        {
          `
            .btn-primary-custom {
              width: 110px;
              font-weight: bold;
              border-color: #6BF584;
              color: #6BF584;
              background-color: #FFFFFF; 
              transition: 0.3s;
              text-decoration: none;
            }
            .btn-primary-custom:hover {
              color: #FFFFFF;
              border-color: #6BF584;
              background-color: #6BF584; 
            }
          `
        }
      </style>
      <Button variant="link" className="btn-primary-custom" onClick={onClick}>{children}</Button>
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