import React from "react"
// import { Link } from "gatsby"
import {Row,Col, Card,Typography, Space, Divider, Button} from 'antd'
import Layout from "../components/layout"
import SEO from "../components/seo"

const {Title, Text, Paragraph} = Typography
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row align="middle" justify="start" gutter={[16,16]}>
      <Col
      xs={24}
      md={12}
      >
      <img src="/Luispozo.png" alt="Luis Pozo-Gilo Portrait" className="blurred"/>
      </Col>
      <Col xs={24} md={12}>
        <div>
          <Title level={1}>Luis Pozo-Gilo</Title>
          <Text>Full Stack Developer & Semantic Web Researcher.</Text>
        </div>
      <Title level={2}>Contact</Title>
      <Row gutter={16}>
        <Col>
        <Space direction="vertical">
          <Text>hello@luispozo.es</Text>
          <Text>@luispozodev</Text>
          </Space>
        </Col>
        <Col>
        <Space direction="vertical">
          <Text>@w0xter</Text>
          <Text>luis-pozo-1234</Text>
          </Space>
        </Col>
      </Row>
      </Col>
    </Row>

    <Divider></Divider>
    <div id="github-statistics">

    </div>
    <div id="articles">
      <Title level={2}>Latest Publications</Title>
      <Row gutter={[16,16]}>
        <Col span={24}>
          <div className="customCard">
            <div className="p-2">
            <Row gutter={[16,16]} justify="space-between" align="middle">
              <Col>
                <Title level={3}>Morph-CSV: Virtual Knowledge Graph Access for Tabular Data</Title>
              </Col>
              <Col>
                <Text type="secondary">ISWC 2020</Text>
              </Col>
            </Row>

            <Paragraph className="text-justify">
              In this paper we present Morph-CSV, a frameworkfor enhancing virtual knowledge graph access over a set of CSV files
              by using a combination of CSVW annotations and RML mappings withFnO transformation functions. Exploiting these
              inputs, the frameworkcreates an enriched RDB representation of the CSV files together withthe corresponding R2RML
              mappings, enabling the use of existing querytranslation (SPARQL-to-SQL) techniques and tools. [...]
            </Paragraph>

            <Button type="primary" className="shadow">Continue Reading</Button>
            </div>
          </div>
        </Col>
        <Col span={24}>
          <div className="customCard">
            <div className="p-2">
            <Row gutter={[16,16]} justify="space-between" align="middle">
              <Col>
                <Title level={3}>Morph-CSV: Virtual Knowledge Graph Access for Tabular Data</Title>
              </Col>
              <Col>
                <Text type="secondary">ISWC 2020</Text>
              </Col>
            </Row>

            <Paragraph className="text-justify">
              In this paper we present Morph-CSV, a frameworkfor enhancing virtual knowledge graph access over a set of CSV files
              by using a combination of CSVW annotations and RML mappings withFnO transformation functions. Exploiting these
              inputs, the frameworkcreates an enriched RDB representation of the CSV files together withthe corresponding R2RML
              mappings, enabling the use of existing querytranslation (SPARQL-to-SQL) techniques and tools. [...]
            </Paragraph>

            <Button type="primary" className="shadow">Continue Reading</Button>
            </div>
          </div>
        </Col>
      </Row>
      <button class="blockButton mt-2">
            Check All My Articles
          </button>
    </div>
    <div id="tools" className="mt-5">
      <Title level={2}>Recent Projects</Title>
      <Row>
        <Col span={8}>
        <Card></Card>
        </Col>
      </Row>
    </div>
  </Layout>
)

export default IndexPage
