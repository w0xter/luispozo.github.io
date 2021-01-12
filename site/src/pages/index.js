import React from "react"
// import { Link } from "gatsby"
import {Row,Col, Card,Typography, Space, Divider, Button} from 'antd'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {VscGithubAlt} from '@react-icons/all-files/vsc/VscGithubAlt'
import {AiOutlineLinkedin} from '@react-icons/all-files/ai/AiOutlineLinkedin'
import {FiTwitter} from '@react-icons/all-files/fi/FiTwitter'
import {AiOutlineMail} from '@react-icons/all-files/ai/AiOutlineMail'

const {Title, Text, Paragraph} = Typography
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row align="middle" justify="start" gutter={[32,32]}>
      <Col
      xs={24}
      md={12}
      >
      <img src="/Luispozo.png" alt="Luis Pozo-Gilo Portrait" className="blurred"/>
      </Col>
      <Col xs={24} md={12}>
        <div>
          <Title level={1} className="m-0">Luis Pozo-Gilo</Title>
          <Text>Full Stack Developer & Semantic Web Researcher.</Text>
        </div>
      <Title level={3} className="mt-2">Contact</Title>
      <Row gutter={16}>
        <Col>
        <Space direction="vertical">
          <Text className=""><AiOutlineMail/> hello@luispozo.es</Text>
          <Text className=""><FiTwitter/> @luispozodev</Text>
          </Space>
        </Col>
        <Col>
        <Space direction="vertical">
          <Text className=""><VscGithubAlt /> @w0xter</Text>
          <Text className=""><AiOutlineLinkedin/> luis-pozo-1234</Text>
          </Space>
        </Col>
      </Row>
      </Col>
    </Row>

    <Divider></Divider>
    <div id="github-statistics">

    </div>
    <div id="articles">
      <Title level={2}>Scientific Publications</Title>
      <Row gutter={[32,32]}>
        <Col span={24}>
          <div className="customCard">
            <div className="p-2">
            <Row gutter={[32,32]} justify="space-between" align="middle">
              <Col>
                <Title level={4}>Morph-CSV: Virtual Knowledge Graph Access for Tabular Data</Title>
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
            <Row gutter={[32,32]} justify="space-between" align="middle">
              <Col>
                <Title level={4}>Morph-CSV: Virtual Knowledge Graph Access for Tabular Data</Title>
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
      {/* <button class="blockButton mt-2">
            Check All My Articles
          </button> */}
    </div>
    <div id="tools" className="mt-5">
      <Title level={2}>Recent Projects</Title>
      <Row gutter={[32,32]} justify="center">
        <Col xs={18} md={8}>
        <Card
        className="roundedCorners shadow cardBg"
        cover={<img alt="Morph-csv architecture" src="/architecture.png"/>}
        actions={[
          <a  href="http://localhost:8000" className="text-white">Learn More</a>,
          <a href="http://localhost:8000" className="text-white ">Source Code</a>
        ]}
        >
        <Title level={4}>Morph-CSV</Title>
        <Paragraph className="text-justify">
        Morph-CSV is an open source tool for querying tabular data sources using SPARQL.
        </Paragraph>

        </Card>
        </Col>
        <Col xs={18} md={8}>
        <Card
        className="roundedCorners shadow cardBg"
        cover={<img alt="Morph-csv architecture" src="/architecture.png"/>}
        actions={[
          <a  href="http://localhost:8000" className="text-white">Learn More</a>,
          <a href="http://localhost:8000" className="text-white ">Source Code</a>
        ]}
        >
        <Title level={4}>Mapeathor</Title>
        <Paragraph className="text-justify">
          Mapeathor translates your mapping rules specified in spreadsheets to a mapping language.
        </Paragraph>

        </Card>
        </Col>
        <Col xs={18} md={8}>
        <Card
        className="roundedCorners shadow cardBg"
        cover={<img alt="Morph-csv architecture" src="/architecture.png"/>}
        actions={[
          <a  href="http://localhost:8000" className="text-white">Learn More</a>,
          <a href="http://localhost:8000" className="text-white ">Source Code</a>
        ]}
        >
        <Title level={4}>Drugs4Covid</Title>
        <Paragraph className="text-justify">
        An open web service to exploit the existing scientific literature about coronavirus identifying drugs, diseases and articles.        
        </Paragraph>
        </Card>
        </Col>
      </Row>
    </div>
  </Layout>
)

export default IndexPage
