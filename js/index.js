const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navBar = document.querySelectorAll('nav')[0]
console.log(navBar)

let navAnchors = document.querySelectorAll('nav a')
console.log(navAnchors)

navAnchors.forEach((anchor, index) => {
  anchor.textContent = siteContent['nav']['nav-item-' + (index + 1)]
})

let cta = document.querySelector('.cta')
console.log(cta)

let h1 = cta.querySelector('h1')
h1.textContent = siteContent['cta']['h1']

let button = cta.querySelector('button')
button.textContent = siteContent['cta']['button']

let imgHeader = document.getElementById('cta-img')
console.log(imgHeader)
imgHeader.setAttribute('src', siteContent['cta']['img-src'])

let topContent = document.querySelector('.main-content .top-content')
console.log(topContent)

let featuresH4 = topContent.querySelectorAll('.text-content h4')[0]
console.log(featuresH4)
featuresH4.textContent = siteContent['main-content']['features-h4']

let featuresContent = topContent.querySelectorAll('.text-content p')[0]
console.log(featuresContent)
featuresContent.textContent = siteContent['main-content']['features-content']

let aboutH4 = topContent.querySelectorAll('h4')[1]
aboutH4.textContent = siteContent['main-content']['about-h4']

let aboutContent = topContent.querySelectorAll('p')[1]
aboutContent.textContent = siteContent['main-content']['about-content']

let middleImg = document.getElementById('middle-img')
console.log(middleImg)
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let bottomContent = document.querySelector('.main-content .bottom-content')
console.log(bottomContent)

let servicesH4 = bottomContent.querySelectorAll('h4')[0]
servicesH4.textContent = siteContent['main-content']['services-h4']

let servicesContent = bottomContent.querySelectorAll('p')[0]
servicesContent.textContent = siteContent['main-content']['services-content']

let productH4 = bottomContent.querySelectorAll('h4')[1]
productH4.textContent = siteContent['main-content']['product-h4']

let productContent = bottomContent.querySelectorAll('p')[1]
productContent.textContent = siteContent['main-content']['product-content']

let visionH4 = bottomContent.querySelectorAll('h4')[2]
visionH4.textContent = siteContent['main-content']['vision-h4']

let visionContent = bottomContent.querySelectorAll('p')[2]
visionContent.textContent = siteContent['main-content']['vision-content']

let contact = document.querySelector('.contact')
console.log(contact)

let contactH4 = contact.querySelectorAll('h4')[0]
contactH4.textContent = siteContent['contact']['contact-h4']

let address = contact.querySelectorAll('p')[0]
address.textContent = siteContent['contact']['address']

let phone = contact.querySelectorAll('p')[1]
phone.textContent = siteContent['contact']['phone']

let email = contact.querySelectorAll('p')[2]
email.textContent = siteContent['contact']['email']

let footer = document.querySelector('footer p')
console.log(footer)
footer.textContent = siteContent['footer']['copyright']


//completed mvp