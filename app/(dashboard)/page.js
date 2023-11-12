'use client'
// import node module libraries
import { Fragment } from "react";
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';

// import sub components
import { Display, Teams, 
    TasksPerformance 
} from "sub-components";


const Home = () => {
    return (
        <Fragment>
            <div className="bg-primary pt-10 pb-21"></div>
            <Container fluid className="mt-n22 px-6">
            </Container>
        </Fragment>
    )
}
export default Home;
