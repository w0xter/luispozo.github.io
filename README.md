## How does it works?
This is my personal site, it is also a proof of concept to demonstrate that it is possible to generate personal websites that get the data from a [Solid POD](https://solid.mit.edu/).  
### How to create your own website:  
1.  Create your own [Solid POD](https://solid.mit.edu/).   
2.  Fill your profile card with the information you want to show. Here is my [profile card](https://luispozo.inrupt.net/profile/card#me).  
3.  Fetch your POD's data. You can use [GraphQL-LD](https://github.com/rubensworks/GraphQL-LD.js) to make things easier. Here is an [example](https://github.com/w0xter/website/blob/master/src/api/solid.js).  
4.  Add [json-ld](https://json-ld.org/) or [RDFa](https://www.w3.org/TR/rdfa-primer/) to make your website more accessible.  


