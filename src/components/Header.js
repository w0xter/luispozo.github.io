import React from 'react'
import {Menu} from 'antd'
import {Lnik, Link} from 'react-router-dom'
export default function Header(props){

    return(
        <Menu mode="horizontal" style={{ borderBottom: 'none', paddingTop: 16 }}>
        <Menu.Item key="home" style={{ float: 'left', borderBottom: 'none' }}>
          <Link to="/">Luis Pozo</Link>
        </Menu.Item>
        <Menu.Item key="portfolio" style={{ float: 'right' }}>
            <Link to="/portfolio">Portfolio</Link>
        </Menu.Item>
        <Menu.Item key="posts" style={{ float: 'right' }}>
          <Link to="/posts">Blog</Link>
        </Menu.Item>
        <Menu.Item key="home" style={{ float: 'right' }}>
          <Link to="/">Home</Link>
        </Menu.Item>        
      </Menu>

    )
}