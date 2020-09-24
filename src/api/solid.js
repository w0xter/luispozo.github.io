import {Client} from "graphql-ld";
import {QueryEngineComunica} from "graphql-ld-comunica";
 
// Define a JSON-LD context
const uris = {
    foaf:"http://xmlns.com/foaf/0.1/",
    schem:"http://schema.org/",
    ldp:"http://www.w3.org/ns/ldp#",
    sioc:"http://rdfs.org/sioc/ns#"
}
export const context = {
    "@context": {
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "label": "rdfs:label",
      "Person":`${uris.schem}Person`,
      "foaf": "http://xmlns.com/foaf/0.1/",
      "name":`${uris.schem}name`,
      "description":`${uris.schem}description`,
      "img": `${uris.foaf}img`,
      "image":`${uris.schem}image`,
      "about":`${uris.schem}about`,
      "codeRepository":`${uris.schem}codeRepository`,
      "url":`${uris.schem}url`,
      "email":`${uris.schem}email`,
      "rdftype":"http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
      "currentProject":`${uris.foaf}currentProject`,
      "interests": "foaf:topic_interest",
      "LUIS": { "@id": "https://luispozo.inrupt.net/profile/card#me" },
      "POSTS":{"@id":"https://luispozo.inrupt.net/public/posts/#"}
    }
  };
 
const comunicaConfig = {
  sources: [
    {type:"file", value:"https://luispozo.inrupt.net/profile/card#me"}
  ],
};
const client = new Client({ context, queryEngine: new QueryEngineComunica(comunicaConfig) });
 
// Define a query
const getPerson = (id) => (`
  query @single {
    id(_:${id})  @single
    name @single
    image @single
    description @single
    email @single
    currentProject {
        id @single
        name @single
        about @single
        url @single @optional
        image @single
        codeRepository @single
        rdftype @single
    }
    
  }`);
  const getArticles = () => (`
    query @single {
      id
      a
    }
  `)
 
// Execute the query
export function getInfo(person){
    return new Promise(async (resolve, reject) => {
        const queryPerson = getPerson(person) 
        const response = await client.query({query:queryPerson}).catch(err => reject(err));
        resolve({data:response.data, context:context["@context"]})
    });
}
export function getPosts(){
  return new Promise(async (resolve, reject) => {
      const articles = getArticles() 
      const response = await client.query({query:articles}).catch(err => reject(err));
      resolve({data:response.data, context:context["@context"]})
  });
}