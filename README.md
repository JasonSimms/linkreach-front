# LinkReach (formerly My Bitly) FrontEnd UI & Admin

This is a front end react UI for interacting with my-bitly API [INSERT LINK HERE]('INSERT LINK HERE')

Problem : You have mass emailed your CV out and want to know if anyone is looing at your projects or CV.

Solution: LinkReach generates unique shortened URL's for you to use as Hyperlinks in email or embedded in .PDF. The unique urls are redirected and capture provided tracker data.  This can be the name of who you sent it or any string.  When LinkReach gets a request it logs the visit and any attached tags for you to view and the visitor gets immediately redirected to your desired link.



### TODO
- [x] Build Campaign Table - Heart of the app displays each Campaign and its click history. Collapsable Table
- [ ] Build Link Form - User Input  regarding a link that will be re-used in multiple campaigns. 
- [ ] Build Campaign Form - Let user input info and tags regarding a specific application to generate unique links
- [ ] Build Campaign Card - Displays Generated Links for Consumption
- [ ] Build modal editing of existing content
- [ ] Build Error handling in modal or toast
- [ ] Add Visualization Graph
- [ ] Style into a flow w/ Auth add navbar
- [ ] Add Auth
- [ ] Add backend or mock SQL



# React + TypeScript + Vite

This is a vite project. And currently not deployed.  TO view locally clone repository navigate in and use 

## Local Development

Follow these steps to set up the project for local development:

1. Clone the repository to your local machine using Git. Open your terminal and run:

```bash
git clone https://github.com/JasonSimms/linkreach-front.git

cd linkreach

npm install

npm run dev
```