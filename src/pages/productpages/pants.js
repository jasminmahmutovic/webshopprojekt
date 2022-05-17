import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PantsHeader from "../../assets/images/Produkt_headers/byxor.png";
import PantsExample from "../../assets/images/KATEGORIER/BYXOR/toa-heftiba-LSYrpn4vy-4-unsplash.jpg";
import FilterIcon from "../../assets/icons/filter.png";


const pantsHeader = {
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
            <div style={pantsHeader}>
                <img src={PantsHeader} style={{width: "100%", height:"20vh", objectFit: "cover"}} alt="pants header" />
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
                        }}>Pris</h4>
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
                            <Form>
                            {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Röd`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Orange`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Gul`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Grön`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Rosa`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Lila`}
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
                            label={`Blå`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Vit`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Grå`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Svart`}
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Brun`}
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
                <Card style={{ width: '15rem'}}>
                <Card.Img variant="top" src={PantsExample} />
                <Card.Body>
                <Card.Text>
                    1000:-
                </Card.Text>
                <Button variant="primary">Köp</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={PantsExample} />
                <Card.Body>
                <Card.Text>
                    1000:-
                </Card.Text>
                <Button variant="primary">Köp</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={PantsExample} />
                <Card.Body>
                <Card.Text>
                    1000:-
                </Card.Text>
                <Button variant="primary">Köp</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={PantsExample} />
                <Card.Body>
                <Card.Text>
                    1000:-
                </Card.Text>
                <Button variant="primary">Köp</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={PantsExample} />
                <Card.Body>
                <Card.Text>
                    1000:-
                </Card.Text>
                <Button variant="primary">Köp</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={PantsExample} />
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