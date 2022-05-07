import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <h2 className='text-center'>Welcome to our blog</h2>
            <div className='mt-3 border border-2 border-primary p-2 rounded-2'>
                <h4>Q1: What's the difference between Javascript and NodeJs?</h4>
                <p><b>Answer:</b></p>
                <p>there are many differences between javascript and nodejs. Some of them are given below: </p>
                <Table bordered hover striped>
                    <thead>
                        <tr>
                            <th>Sl No.</th>
                            <th>Javacript</th>
                            <th>NodeJs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Javascript is a scripting language to write script on the website</td>
                            <td>NodeJs is a Javacript runtime environment</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>It is used in client side</td>
                            <td>It is used in server side</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Javascript is able to add HTML tags with DOM</td>
                            <td>NodeJs is unable to add HTML tags</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='mt-3 border border-2 border-primary p-2 rounded-2'>
                <h4>Q2: When should we use "NodeJs" and when should we use "MongoDB"?</h4>
                <p><b>Answer:</b></p>
                <p><b>NodeJs uses: </b>NodeJs is used for non-blocking, event-driven servers because its nature is single threaded. It's used for traditional web sites and backend API services.</p>
                <p><b>MongoDB uses: </b> MongoDB is used for integrating a large amount of diverse data, describing complex data structure for evolve, delivering data in high-performance application etc.</p>
            </div>
            <div className='mt-3 border border-2 border-primary p-2 rounded-2'>
                <h4>Q3: What is the difference between "SQL" and "NoSQL" databases?</h4>
                <p><b>Answer: </b></p>
                <p>There are many differences between "SQL" and "NoSQL" databases. Some of them are given below:</p>
                <Table bordered hover striped >
                    <thead>
                        <tr>
                            <th>Sl No.</th>
                            <th>Area of Difference</th>
                            <th>SQL</th>
                            <th>NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Type</td>
                            <td>SQL Databases are Relational Database</td>
                            <td>NoSQL Databases are non-relational Database</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Scalability</td>
                            <td>SQL Databases are vertically scalable</td>
                            <td>NoSQL Databases are horizontally scalabe</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Structure</td>
                            <td>SQL Databases are table based</td>
                            <td>NoSQL Databases are either key-value pairs, document based, graph databases or wide-column stored</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Property followed</td>
                            <td>SQL Databases follow ACID(Atomicity, Consistency, Isolation and Durability)</td>
                            <td>NoSQL Databases follows CAP(Consistency, Availablity, Pertition-tolerance)</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='my-3 border border-2 border-primary p-2 rounded-2'>
                <h4>Q4: What is the purpose of `JWT` and how does it work?</h4>
                <p><b>Answer: </b></p>
                <p>THe full form of JWT is <b>JSON Web Token</b>. It is used to apply user authentication securely and share information. </p>
            </div>
        </Container>
    );
};

export default Blog;