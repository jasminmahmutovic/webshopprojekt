import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import OuterwearHeader from "../../assets/images/Produkt_headers/ytterkläder.png";
import OuterwearExample from "../../assets/images/KATEGORIER/YTTERKLÄDER/joshua-rondeau-fm1od4mv3Ls-unsplash(1).jpg";
import FilterIcon from "../../assets/icons/filter.png";


const outerwearHeader = {
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
    display: "grid",
    gridTemplateColumns: "auto auto 1fr",
    gridGap: "15rem",
    marginTop: "2rem",
    marginLeft: "15rem",
    padding: "5px",
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
            <div style={outerwearHeader}>
                <img src={OuterwearHeader} style={{width: "100%", height:"auto", objectFit: "cover"}} alt="outerwear header" />
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
                        Price Range</h4>
                        <Form>
                            {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`$10 - $20`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`$20 - $30`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`$30 - $40`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`$40 - $50`}
                        />
                        </div>
                            ))}
                        </Form>
                            <hr />
                        <h4 style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                        }}>
                            Color
                        </h4>
                        <div style={colorGroup}>
                            <div style={colorGroupLeftSide}>
                            <Form>
                            {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Red`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Orange`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Yellow`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Green`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Pink`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Purple`}
                        />
                        </div>
                            ))}
                        </Form>
                            </div>
                            <div style={colorGroupRightSide}>
                            <Form>
                            {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Blue`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`White`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Grey`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Black`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Brown`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Multi`}
                        />
                        </div>
                            ))}
                        </Form>
                            </div>
                            </div>
                            <hr />
                        <h4 style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                        }}>
                            Sizes
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
                <Card.Img variant="top" src={OuterwearExample} />
                <Card.Body>
                <Card.Text>
                    1000:-
                </Card.Text>
                <Button variant="primary">Köp</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={OuterwearExample} />
                <Card.Body>
                <Card.Text>
                    1000:-
                </Card.Text>
                <Button variant="primary">Köp</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={OuterwearExample} />
                <Card.Body>
                <Card.Text>
                    1000:-
                </Card.Text>
                <Button variant="primary">Köp</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={OuterwearExample} />
                <Card.Body>
                <Card.Text>
                    1000:-
                </Card.Text>
                <Button variant="primary">Köp</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={OuterwearExample} />
                <Card.Body>
                <Card.Text>
                    1000:-
                </Card.Text>
                <Button variant="primary">Köp</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={OuterwearExample} />
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