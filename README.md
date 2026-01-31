# presidium.services
Home page for [Presidium](https://presidium.services/).

## Project Structure

```
presidium.services/
    lib/
        README.md
    public/
        react/
            ClickExample.js
        elements/
            LoadMoreButton.js
            TodoCardElements.js
        global.js
        global.css
        index.html
    config.js
    serve-local.sh
    update-pages
    deploy-aws-s3
    package.json
    README.md
```

### [public/react/](/public/react)

Put [React](https://react.dev/) components in this directory.

### [public/elements/](/public/elements)

Put [elements](https://developer.mozilla.org/en-US/docs/Web/API/Element) in this directory.

### [public/global.js](/public/global.js)

JavaScript in this file is run at the top of all HTML `.html` files in [config.publicDir](#configpublicdir). Define global variables and functions in this file, e.g. `window.myVariable = 1`.

### [public/global.css](/public/global.css)

CSS in this file is applied to all HTML `.html` files in [config.publicDir](#configpublicdir).

### [public/index.html](/public/index.html)

This page is served to requests for the home page `/`.

### [config.js](/config.js)

Stores data about the site's `domain`, `scripts`, `stylesheets`, `publicDir`, and `pages`.

#### config.domain

The [domain name](https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/) of the website, e.g. `example.com`. Register a new domain with [Amazon Route53](https://console.aws.amazon.com/route53/domains/home).

#### config.scripts

A list of [script tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) that will be loaded by every page.

#### config.stylesheets

A list of stylesheet [link tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link) that will be loaded by every page.

#### config.publicDir

The name of the directory that stores the website's HTML, JavaScript, and CSS files.

#### config.pages

A list of objects that specify the website's pages. Each object has four properties: `title`, `description`, `url`, and `filepath`.

  * `title` - the page's title, this will be used for the page's [metadata](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
  * `description` - the page's description, this will be used for the page's metadata
  * `url` - the page's relative url, this will be used with [config.domain](#configdomain) for the page's metadata
  * `filepath` - the location of the page within [config.publicDir](#configpublicdir)

### [serve-local.sh](/serve-local.sh)

Starts the local static web server.

### [update-pages](/update-pages)

Synchronizes the public HTML pages in `public/` with [config.js](#configjs).

### [deploy-aws-s3](/deploy-aws-s3)

Uploads all files in [config.publicDir](#configpublicdir) to an Amazon S3 Bucket for [config.domain](#configdomain). See [deployment](#deployment).

### [package.json](/package.json)

Stores metadata about this project including `name`, `version`, `dependencies`, and `scripts`. Read more about [package.json](https://docs.npmjs.com/cli/v11/configuring-npm/package-json).

### [README.md](/README.md)

You are reading this file.

### [lib/](/lib)

Make changes to the scaffolding of this project (advanced). Start hacking [here](/lib/README.md).

## Run it locally

1. Install dependencies

```
npm i
```

2. Start the local web server

```
./serve-local.sh
```

3. Navigate to `http://localhost:4507/` in your browser

## Deployment
Run the deployment script.

```
# uses your default aws configuration and credentials found in ~/.aws/config and ~/.aws/credentials
./deploy-aws-s3

# provide your aws profile
AWS_PROFILE=<your_aws_profile> ./deploy-aws-s3

# provide your aws credentials directly
AWS_ACCESS_KEY_ID=<your_aws_access_key_id> AWS_SECRET_ACCESS_KEY=<your_secret_access_key> AWS_REGION=<your_aws_region> ./deploy-aws-s3
```
