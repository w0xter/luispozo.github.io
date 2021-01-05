import React from 'react'
import {List} from 'antd'
import { Project } from './Project'


export default function Recent(props){

    return(
        <List
        grid={{ gutter: 16, xs:1, md: 1, lg:1 }}
        dataSource={props.data}
        renderItem={ (project, idx) => (
                <List.Item key={idx}>
                    <Project uri={project.value} context={props.context}/>
                </List.Item>  
        )}
     />
    )
} 