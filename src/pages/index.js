import React from "react"
// import { Link } from "gatsby"
import {Row,Col, Card,Typography, Space, Divider, Button} from 'antd'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Helmet} from 'react-helmet'
import {VscGithubAlt} from '@react-icons/all-files/vsc/VscGithubAlt'
import {AiOutlineLinkedin} from '@react-icons/all-files/ai/AiOutlineLinkedin'
import {FiTwitter} from '@react-icons/all-files/fi/FiTwitter'
import {AiOutlineMail} from '@react-icons/all-files/ai/AiOutlineMail'

const {Title, Text, Paragraph} = Typography
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Helmet>
      <script type="application/ld+json">
        {
          `
          [{"@id":"http://schema.org/Person"},{"@id":"http://schema.org/SoftwareSourceCode"},{"@id":"http://xmlns.com/foaf/0.1/Person"},{"@id":"https://github.com/oeg-upm/mapeathor"},{"@id":"https://github.com/oeg-upm/morph-csv"},{"@id":"https://github.com/w0xter/Drugs4CovidSearchEngine"},{"@id":"https://luispozo.es/#d4csearchengine","@type":["http://schema.org/SoftwareSourceCode"],"http://schema.org/about":[{"@value":"An open web service to exploit the existing scientific literature about coronavirus (more than 60,000 papers) identifying drugs, diseases and articles."}],"http://schema.org/codeRepository":[{"@id":"https://github.com/w0xter/Drugs4CovidSearchEngine"}],"http://schema.org/image":[{"@id":"https://luispozo.es/d4c.png"}],"http://schema.org/name":[{"@value":"Drugs4Covid Search Engine"}],"http://schema.org/url":[{"@id":"https://search.drugs4covid.oeg-upm.net/"}]},{"@id":"https://luispozo.es/#mapeathor","@type":["http://schema.org/SoftwareSourceCode"],"http://schema.org/about":[{"@value":"Mapeathor translates your mapping rules specified in spreadsheets to a mapping language. Mapeathor is a simple spreadsheet parser able to generate mapping rules in three mapping languages: R2RML, RML (with extension to functions from FnO) and YARRRML. It takes the mapping rules expressed in a spreadsheet and transforms them into the desired language."}],"http://schema.org/codeRepository":[{"@id":"https://github.com/oeg-upm/mapeathor"}],"http://schema.org/name":[{"@value":"Mapeathor"}],"http://schema.org/image":[{"@id":"https://luispozo.es/mapeathor.png"}]},{"@id":"https://luispozo.es/#me","@type":["http://schema.org/Person","http://xmlns.com/foaf/0.1/Person"],"http://schema.org/affiliation":[{"@value":"https://oeg-upm.net/"}],"http://schema.org/description":[{"@value":"Hi!, I'm Luis. I'm a Full-stack developer. Currently I'm working as research assistant at the Ontology Engineering Group. My work is mainly focused on the development of new tools to improve the generation of Knowledge Graphs."}],"http://schema.org/email":[{"@value":"hello@luispozo.es"}],"http://schema.org/familyName":[{"@value":"Pozo Gilo"}],"http://schema.org/givenName":[{"@value":"Luis"}],"http://schema.org/image":[{"@id":"https://luispozo.es/luispozo.png"}],"http://schema.org/jobTitle":[{"@value":"Full Stack Developer and semantic web researcher"}],"http://schema.org/memberOf":[{"@value":"https://oeg-upm.net/"}],"http://schema.org/name":[{"@value":"Luis Pozo"}],"http://schema.org/nationality":[{"@value":"spanish"}],"http://schema.org/url":[{"@value":"https://luispozo.es/"}],"http://schema.org/worksFor":[{"@value":"https://oeg-upm.net/"}]},{"@id":"https://luispozo.es/#morphcsv","@type":["http://schema.org/SoftwareSourceCode"],"http://schema.org/about":[{"@value":"Morph-CSV is an open source tool for querying tabular data sources using SPARQL. It exploits the information from the query, RML+FnO mappings and CSVW metadata to enhance the performance and completness of traditional OBDA systems."}],"http://schema.org/codeRepository":[{"@id":"https://github.com/oeg-upm/morph-csv"}],"http://schema.org/image":[{"@id":"https://luispozo.es/morphcsv.png"}],"http://schema.org/name":[{"@value":"Morph CSV"}]},{"@id":"https://luispozo.es/d4c.png"},{"@id":"https://luispozo.es/luispozo.png"},{"@id":"https://luispozo.es/mapeathor.png"},{"@id":"https://luispozo.es/morphcsv.png"},{"@id":"https://search.drugs4covid.oeg-upm.net/"}]
          `
        } 
        
      </script>
    </Helmet>
    <Row align="middle" justify="start" gutter={[32,32]}>
      <Col
      xs={24}
      md={12}
      >
      <img src="/luispozo.png" alt="Luis Pozo-Gilo Portrait" className="imgResponsive"/>
      </Col>
      <Col xs={24} md={12}>
        <div>
          <Title level={1} className="m-0">Luis Pozo-Gilo</Title>
          <Text strong>Full Stack Developer & Semantic Web Researcher.</Text>
          <Paragraph className="text-justify mt-2">
          Hi!, I'm Luis. I'm a Full-stack developer. Currently I'm working as research assistant at the Ontology Engineering Group. My work is mainly focused on the development of new tools to improve the generation of Knowledge Graphs.
          </Paragraph>
        </div>
      <Title level={3} className="mt-2">Contact</Title>
      <Row gutter={16}>
        <Col>
        <Space direction="vertical">
          <a href="mailto:hello@luispozo.es"><AiOutlineMail/> hello@luispozo.es</a>
          <a href="http://twitter.com/luispozodev"><FiTwitter/> @luispozodev</a>
          </Space>
        </Col>
        <Col>
        <Space direction="vertical">
          <a href="http://github.com/w0xter"><VscGithubAlt /> @w0xter</a>
          <a href="http://www.linkedin.com/in/luis-pozo-472b6317a"><AiOutlineLinkedin/> luis-pozo-1234</a>
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

            <Button href="https://www.researchgate.net/profile/David_Chaves-Fraga/publication/345602766_Morph-CSV_Virtual_Knowledge_Graph_Access_for_Tabular_Data/links/5fa919a6458515157bf732fc/Morph-CSV-Virtual-Knowledge-Graph-Access-for-Tabular-Data.pdf" type="primary" className="shadow">Continue Reading</Button>
            </div>
          </div>
        </Col>
        <Col span={24}>
          <div className="customCard">
            <div className="p-2">
            <Row gutter={[32,32]} justify="space-between" align="middle">
              <Col>
                <Title level={4}>Mapeathor: Simplifying the Specificationof Declarative Rules for KnowledgeGraph Construction</Title>
              </Col>
              <Col>
                <Text type="secondary">ISWC 2020</Text>
              </Col>
            </Row>

            <Paragraph className="text-justify">
              In this paper we present a user-friendly mapping-language-independent tool, Mapeathor, to declare transformation rulesbased  on  spreadsheets  and  translate  them  into  two  different  mappinglanguages with the purpose of easing the mappings creation process. [...]
            </Paragraph>

            <Button href="http://ceur-ws.org/Vol-2721/paper488.pdf" type="primary" className="shadow">Continue Reading</Button>
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
        cover={<img alt="Morph-csv's architecture" src="/morphcsv.png"/>}
        actions={[
          <a  href="https://morph.oeg.fi.upm.es/tool/morph-csv" className="text-white">Learn More</a>,
          <a href="https://github.com/oeg-upm/morph-csv" className="text-white ">Source Code</a>
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
        cover={<img alt="Mapeathor's architecture" src="/mapeathor.png"/>}
        actions={[
          <a  href="https://morph.oeg.fi.upm.es/tool/mapeathor" className="text-white">Learn More</a>,
          <a href="https://github.com/oeg-upm/Mapeathor" className="text-white ">Source Code</a>
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
        cover={<img alt="Man searching drugs for specific disease" src="/d4c.png"/>}
        actions={[
          <a  href="https://drugs4covid.oeg.fi.upm.es/" className="text-white">Learn More</a>,
          <a href="https://github.com/w0xter/Drugs4CovidSearchEngine" className="text-white ">Source Code</a>
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
