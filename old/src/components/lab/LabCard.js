import React from 'react'
import {Card, Row, Col, Typography} from 'antd'
export default function LabCard(props){
    return(
        <Card
            cover={props.data.image}
            actions={
                <a href={"/lab/" + props.data.id}>
                    Learn More
                </a>
            }
        >
            <Meta
            title={props.data.title}
            description={props.data.shortDescription}
            />
        </Card>
    )
}