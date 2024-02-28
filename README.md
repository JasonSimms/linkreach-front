# LinkReach (formerly My Bitly) FrontEnd UI & Admin

-----DEPLOYED on Firebase---- [Visit LinkReach](https://link-reach.web.app)

This is a front end react UI for interacting with my-bitly Python API [My Bitly API](https://github.com/JasonSimms/my-bitly)

"Challenge: You've sent out your CV to numerous potential employers and you're left wondering if anyone is actually viewing your projects or CV.

Solution: Enter LinkReach - your personal tool for tracking engagement. With LinkReach, you can generate unique, shortened URLs to use as hyperlinks in your emails or embedded within your PDFs. These aren't just any URLs - they're smart URLs. They redirect your visitors while simultaneously capturing valuable tracking data. You can even personalize these URLs with tags such as the recipient's name or any other identifier.

Every time someone clicks on your LinkReach URL, the visit is logged along with any attached tags. You get real-time insights into who's engaging with your content, while your visitor is seamlessly redirected to your desired link. With LinkReach, you're no longer in the dark about who's viewing your CV or projects. Start making informed follow-ups today with LinkReach."

### TODO

- [x] Build Campaign Table - Heart of the app displays each Campaign and its click history. Collapsable Table
- [x] Build Link Form - User Input regarding a link that will be re-used in multiple campaigns.
- [x] Build Campaign Form - Let user input info and tags regarding a specific application to generate unique links
- [x] Build Campaign Card - Displays Generated Links for Consumption
- [x] Build modal editing of existing content
- [x] Add Auth
- [x] Style into a flow w/ Auth add navbar
- [ ] Build Error handling in modal or toast
- [ ] Add Visualization Graph
- [ ] Add backend or mock SQL

# React + TypeScript + Vite + Firebase

This is a vite project.

## Local Development

This project is currently deployed on Firebase with Auth. It may not have fallback if AuthContext does not configure correctly with a Firebase project .env. However, Landing('/') and Storybook ('/storybook') pages should be accessable.

Follow these steps to set up the project for local development:

1. Clone the repository to your local machine using Git. Open your terminal and run:

```bash
git clone https://github.com/JasonSimms/linkreach-front.git

cd linkreach-front

#Edit .env_template with firebase project config

npm install

npm run dev
```
