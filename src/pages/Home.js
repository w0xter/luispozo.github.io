import React from 'react'
import Layout from '../components/Layout'
import {getInfo} from '../api/solid'
import {Row, Col,Typography, Space, Divider, Spin} from 'antd'
import { TwitterOutlined, GithubOutlined, LinkedinOutlined, MailOutlined, LoadingOutlined} from '@ant-design/icons'
import RecentProjects from '../components/Recent'
const {Paragraph} = Typography
const {Title} = Typography

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data:{},
            context:{}
        }
    }

    componentDidMount(){
        getInfo("LUIS").then((response) => this.setState({data:response.data, context:response.context})).catch((err) => console.log(err))

    }
    componentDidUpdate(){
        if(Object.keys(this.state.data).length === 0)
            getInfo("LUIS").then((response) => this.setState({data:response.data, context:response.context})).catch((err) => console.log(err))
    }
    render(){
        console.log(this.state.data)
    return(
        <Layout>
            {Object.keys(this.state.data).length !== 0?(
            <span  resource={this.state.context.LUIS["@id"]} typeof={this.state.context.Person}>
            <Row align="middle" justify="center">
            <Col xs={24} md={8} align="center">
                <Space size="small" direction="vertical">
                    <img className="imgHome" property={this.state.context.img} src={this.state.data.img} alt=""/>
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
                        <a href={"mailto:" + this.state.data.email} property={this.state.context.email}>
                            <MailOutlined  style={{ fontSize: '1.5em'}} />
                        </a>
                        </Col>

                    </Row>
                </Space>
            </Col>
            <Col xs={24} md={12}>
                <Title level={2}>
                    <span property={this.state.context.name}>
                        {this.state.data.name}
                    </span></Title>
                <span property={this.state.context.description}>
                <Paragraph style={{textAlign:'justify'}}>
                    {this.state.data.description}
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
        <RecentProjects data={this.state.data.currentProject} context={this.state.context}></RecentProjects>
        <Divider></Divider>  
        </span>
            ):(
                <div className="fullScreen">
                <Row justify="center">
                    <Col>
                        <Spin indicator={<LoadingOutlined style={{fontSize:'6em'}}/>}/>                    
                    </Col>
                </Row>
                </div>
            )}
       
        </Layout>
 
    )
}
}