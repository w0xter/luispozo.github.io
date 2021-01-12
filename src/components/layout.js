/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Row, Col, Divider} from 'antd'
import Header from "./header"
import 'antd/dist/antd.min.css'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
        <Row justify="center">
          <Col
          style={{
            marginTop:'2rem'
          }}
          xs={22}
          md={16}
          lg={14}
          >
          <main>{children}</main>
          <footer style={{
            marginTop: `2rem`,
            marginBottom:`2rem`
          }}>
            <Divider></Divider>
            © Luis Pozo-Gilo, {new Date().getFullYear()}
          </footer>
          </Col>
        </Row>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
