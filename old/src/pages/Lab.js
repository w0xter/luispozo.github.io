import React from 'react'
import { Typography, Row, Col } from 'antd'
import {ExperimentOutlined} from '@ant-design/icons'

import Layout from '../components/Layout'
const {Text, Title, Paragraph} = Typography
export default function Lab(){
    return(
        <Layout>
        <Row>
            <Col>
            <Title level={1}>Welcome to The Lab! <ExperimentOutlined /></Title>
            <Title type="secondary" level={4}>
                Welcome to The Lab! Here I try to do cool stuff with the code. Everything it's open source, so you can run the experiments by your own. 
            </Title>
            </Col>
            
        </Row>
        </Layout>
    )
}