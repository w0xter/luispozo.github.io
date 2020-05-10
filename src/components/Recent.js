import React from 'react'
import {Card,List} from 'antd'
import {GithubOutlined} from '@ant-design/icons'

const {Meta} = Card

export default function Recent(props){

    return(
        <List
        grid={{ gutter: 16, xs:1, md: 3, lg:3 }}
        dataSource={props.data}
        renderItem={ (project) => {
            const actions = [
                <a property={props.context.codeRepository} href={project.codeRepository}>
                <GithubOutlined/>
                </a>
            ]
            if(Object.keys(project).includes('url'))
                actions.push(
                    <a property={props.context.url} href={project.url}>
                    Try it
                    </a>
                )
            return(
                <List.Item>
                <Card 
                    property={project.rdftype}
                    className="shadowEffect"
                    style={{heigth:'100%',minHeigth:'100%'}}
                    cover={
                    <img
                        alt=""
                        property={props.context.image}
                        src={project.image}
                    />
                    }
                    actions={actions}
                >
                    <Meta
                    title={<span property={props.context.name}>{project.name}</span>}
                    description={<span property={props.context.about}>{project.about}</span>}
                    />
                </Card>
                </List.Item>  
          )
        }}
     />
    )
} 