import React, {useContext} from 'react'

//style
import "./scss/changeproducts.scss"

//Bootstrap
import Accordion from 'react-bootstrap/Accordion'
import { Card, useAccordionButton, AccordionContext } from 'react-bootstrap'
import NavbarAdmin from './components/NavbarAdmin'


const ChangeProducts = () => {
  function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
      <button
        type="button"
        style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  

    return (

      <div className='wrapperChangeProducts'>
        <NavbarAdmin></NavbarAdmin>

        <div className='wrapperAccordin'>
          <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey="0">Produkt 1</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey="1">Produkt 2</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey="2">Produkt 3</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey="3">Produkt 4</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey="4">Produkt 5</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        </div>

      </div>
     
    );

}

export default ChangeProducts