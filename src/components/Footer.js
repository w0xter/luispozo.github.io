import React from 'react'
import { Row, Col, Typography} from 'antd'
const {Text} = Typography
export default function Footer(props){
    return(
        <Row justify="center">
            <Col style={{textAlign:'center'}}>
                <Text  type="secondary">This website looks very simple but it's powered by many technologies of the <a href="https://www.w3.org/standards/semanticweb/">Semantic web.</a> You can learn more <a href="http://github.com/w0xter/website">here.</a> </Text>
            </Col>
        </Row>
    )
}