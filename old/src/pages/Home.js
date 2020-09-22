import React from 'react'
import Layout from '../components/Layout'
import {Row, Col,Typography, Space, Divider, Spin} from 'antd'
import { TwitterOutlined, GithubOutlined, LinkedinOutlined, MailOutlined, LoadingOutlined} from '@ant-design/icons'
import RecentProjects from '../components/Recent'
import { useLDflexValue, useLDflexList} from '@solid/react';
import {context as jsonLdContext } from '../api/solid'
const context = jsonLdContext["@context"]
const {Paragraph} = Typography
const {Title} = Typography



export default function Home(props){
    const webId = "https://luispozo.inrupt.net/profile/card#me"
    const uri = `[${webId}]`
    const name = useLDflexValue(uri +'.schema_name') || 'unknown';
    const description = useLDflexValue(uri +'.schema_description') || 'unknown'
    const image =  useLDflexValue(uri +'.schema_image') || 'unknown'
    const email =  useLDflexValue(uri +'.schema_email') || 'unknown'
    const currentProject =  useLDflexList(uri +'[foaf:currentProject]') || 'unknown'
    return(
        <Layout>
            <span  resource={webId} typeof='http://schema.org/Person'>
            <Row align="middle" justify="center">
            <Col xs={24} md={8} align="center">
                <Space size="small" direction="vertical">
                    <img className="imgHome" property={context.image} src={image.value} alt=""/>
                    <Row gutter={[16, 16] } justify="center">
                        <Col>
                        <a href="http://github.com/w0xter">
                            <GithubOutlined  style={{ fontSize: '1.5em'}} />
                        </a>
                        </Col>
                        <Col>
                        <a href="http://www.linkedin.com/in/luis-pozo-472b6317a">
                            <LinkedinOutlined  style={{ fontSize: '1.5em'}} />
                        </a>
                        </Col>
                        <Col>
                        <a href="http://twitter.com/luispozodev">
                            <TwitterOutlined  style={{ fontSize: '1.5em'}} />
                        </a>
                        </Col>
                        <Col>
                        <a href={"mailto:" + email} property={context.email}>
                            <MailOutlined  style={{ fontSize: '1.5em'}} />
                        </a>
                        </Col>

                    </Row>
                </Space>
            </Col>
            <Col xs={24} md={12}>
                <Title level={2}>
                    <span property={context.name}>
                        {name.value}
                    </span></Title>
                <span property={context.description}>
                <Paragraph style={{textAlign:'justify'}}>
                    {description.value}
                </Paragraph>
                </span>
            </Col>
        </Row>
        <Divider></Divider>
        <Row>
            <Col>
            <Title level={2}>Recent Projects:</Title>
            </Col>
        </Row>
        <RecentProjects data={currentProject} context={context}></RecentProjects>
        <Divider></Divider>  
        </span>
        </Layout>
 
    )
}