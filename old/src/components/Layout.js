import React from 'react'
import Footer from './Footer'
import {Row, Col} from 'antd'
export default function Layout(props){
    return(
    <Row justify="center">
        <Col
          xs={{span:22}}
          md={{ span: 15 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
        >
          <div style={{marginTop:30}}>
            {props.children}
          </div>
          <Footer></Footer>
        </Col>
    </Row>
    )
}