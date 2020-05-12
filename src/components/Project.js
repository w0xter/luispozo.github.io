import React from 'react'
import {useLDflexValue} from '@solid/react'
import {GithubOutlined} from '@ant-design/icons'
import {Card} from 'antd'
const {Meta} = Card

export function Project(props){
    const uri = `[${props.uri}]`
    const name = useLDflexValue(uri +'.schema_name') || 'unknown';
    const about = useLDflexValue(uri +'.schema_about') || 'unknown'
    const image =  useLDflexValue(uri +'.schema_image') || 'unknown'
    const codeRepository = useLDflexValue(uri +'.schema_codeRepository') || 'unknown'
    const url  = useLDflexValue(uri +'.schema_url') || 'unknown'
    const rdftype = useLDflexValue(uri + `['${props.context.rdftype}']`) || 'unknown'
    const actions = [
        <a property={props.context.codeRepository} href={codeRepository.value}>
        <GithubOutlined/>
        </a>
    ]
    if(url !== 'unknown')
        actions.push(
            <a property={props.context.url} href={url.value}>
            Try it
            </a>
        )
        const isLoading = (image === 'unknown' || name === 'unknown' || about === 'unknown' || codeRepository === 'unknown' || rdftype === 'unknown')
    return(
        <Card
            loading = {isLoading} 
            typeof={rdftype.value}
            resource={props.uri}
            className="shadowEffect"
            style={{heigth:'100%',minHeigth:'100%'}}
            cover={
            <img
                alt=""
                property={props.context.image}
                src={image.value}
            />
            }
            actions={actions}
        >
            <Meta
            title={<span property={props.context.name}>{name.value}</span>}
            description={<span property={props.context.about}>{about.value}</span>}
            />
        </Card>
    )}