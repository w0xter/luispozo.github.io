import React, {useEffect, useState} from 'react'
import { Carousel, Collapse, Image, Typography, Row, Col} from 'antd';
import {fetchExperiment} from '../api/requests'
import Layout from '../components/Layout';

const {Panel} = Collapse
const {Text, Title, Paragraph} = Typography
export default function Experiment(props){
    const [data, setData] = useState({})
    useEffect(async () => {
        const response = await  fetchExperiment(props.match.params.experimentid)
        setData(response);
    });
    return(
        <Layout>
            {Object.keys(data).length === 0 ? (
                <h1>Loading...</h1>
            ):(
                page(data)
            )}
        </Layout>
    )
}
function page(data){
    return(
        <>
            <Row gutter={16}>
                <Col>
                    <Title>{data.title}</Title>
                    <Paragraph>
                        {data.explanation}
                    </Paragraph>
                </Col>
                <Col>
                    <Carousel autoplay>
                        {data.images.map((image) => {
                            return(
                                <div>
                                    <Image src={image.url}/>
                                    <Row justify="center">
                                        <Col>
                                        <Title level={4}>{image.title}</Title>
                                        <Text>{image.caption}</Text>
                                        </Col>
                                    </Row>                                    
                                </div>
                            )
                        })}
                        <div>
                            
                        </div>
                    </Carousel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Collapse>
                        <Panel
                            header="Source Code"
                            key="1"
                        >
                            <p>CODIGO</p>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
        </>
    )
}