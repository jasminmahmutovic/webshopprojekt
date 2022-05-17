import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ShirtsHeader from "../../assets/images/Produkt_headers/skjortor.png";
import ShirtsExample from "../../assets/images/KATEGORIER/SKJORTOR/stow-kelly-WGy0P9bJZcM-unsplash.jpg";
import FilterIcon from "../../assets/icons/filter.png";
import Checkbox from "../../components/Checkbox";

const shirtsHeader = {
    width: "100%",
    height: "auto",
}

const sidebar = {
    marginTop: "10px",
    padding: "2rem",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#E1FFA3",
    position: "absolute",
    left: "50px",
}

const colorGroup = {
    width: "auto",
    height: "auto",
    display: "flex",
    gap: "15px",
    flexDirection: "row",
}

const colorGroupLeftSide = {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
}

const colorGroupRightSide = {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
}

const container = {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#E1FFA3"
}

const containerRightSide = {
    height: "100%",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gridGap: "50px",
    marginTop: "2rem",
    padding: "5px",
    margin: "2rem 2rem 3rem 25rem"
}

const filterIconStyle = {
    width: "50px",
    height: "50px",
}

const filterStyle = {
    display: "flex",
    flexDirection: "row",
    fontWeight: "bold",
}

const Pants = () => {
    return (
        <div style={{width:"auto", height:"auto"}}>
            <div style={shirtsHeader}>
                <img src={ShirtsHeader} style={{width: "100%", height:"auto", objectFit: "cover"}} alt="shirts header" />
            </div>
            <div style={container}>
            <div style={sidebar}>
                    <h1 style={filterStyle}>
                        <img src={FilterIcon} alt="Filter icon" style={filterIconStyle} />
                            FILTER
                    </h1>
                    <br />
                    <div >
                        <h4 style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                        }}>
                        Pris</h4>
                        <Form>
                            {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`10kr - 20kr`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`20kr - 30kr`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`30kr - 40kr`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`40kr - 50kr`}
                        />
                        </div>
                            ))}
                        </Form>
                            <hr />
                        <h4 style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                        }}>
                            Färg
                        </h4>
                        <div style={colorGroup}>
                            <div style={colorGroupLeftSide}>
                            <Checkbox color="#D10000">
                                    Röd
                                </Checkbox>
                                <Checkbox color="#E36D00">
                                    Orange
                                </Checkbox>
                                <Checkbox color="#DFC900">
                                    Gul
                                </Checkbox>
                                <Checkbox color="#01890E">
                                    Grön
                                </Checkbox>
                                <Checkbox color="#D7009B">
                                    Rosa
                                </Checkbox>
                                <Checkbox color="#6100DD">
                                    Lila
                                </Checkbox>
                            </div>
                            <div style={colorGroupRightSide}>
                            <Checkbox color="#0065AE">
                                    Blå
                                </Checkbox>
                                <Checkbox color="#FFFFFF">
                                    Vit
                                </Checkbox>
                                <Checkbox color="#828282">
                                    Grå
                                </Checkbox>
                                <Checkbox color="#000000">
                                    Svart
                                </Checkbox>
                                <Checkbox color="#482115">
                                    Brun
                                </Checkbox>
                                <Checkbox color="#C4C4C4">
                                    Multi
                                </Checkbox>
                            </div>
                            </div>
                            <hr />
                        <h4 style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                        }}>
                            Storlek
                        </h4>
                            <Form>
                            {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`3XS`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`2XS`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`XS`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`S`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`M`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`L`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`XL`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`2XL`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`3XL`}
                        />
                        </div>
                            ))}
                        </Form>
                </div>
            </div>
            <div style={containerRightSide}>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={ShirtsExample} />
                <Card.Body>
                <Card.Text>
                    1000:-
                </Card.Text>
                <Button variant="primary">Köp</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={ShirtsExample} />
                <Card.Body>
                <Card.Text>
                    1000:-
                </Card.Text>
                <Button variant="primary">Köp</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={ShirtsExample} />
                <Card.Body>
                <Card.Text>
                    1000:-
                </Card.Text>
                <Button variant="primary">Köp</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={ShirtsExample} />
                <Card.Body>
                <Card.Text>
                    1000:-
                </Card.Text>
                <Button variant="primary">Köp</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={ShirtsExample} />
                <Card.Body>
                <Card.Text>
                    1000:-
                </Card.Text>
                <Button variant="primary">Köp</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={ShirtsExample} />
                <Card.Body>
                <Card.Text>
                    1000:-
                </Card.Text>
                <Button variant="primary">Köp</Button>
                </Card.Body>
                </Card>
                </div>  
                </div>  
            </div>
    )
};

export default Pants;