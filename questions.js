const questions = [
    {
        question: "What does ARPANET stand for?",
        options: [
            "Advanced Research Projects Agency Network",
            "American Research Projects Agency Network",
            "Automated Research Projects Agency Network",
            "Advanced Research Protocol Agency Network"
        ],
        correct: 0,
        explanation: "ARPANET stands for Advanced Research Projects Agency Network, which was the first operational packet-switching network and the predecessor of the internet."
    },
    {
        question: "Who sent the first email?",
        options: [
            "Bill Gates",
            "Ray Tomlinson",
            "Tim Berners-Lee",
            "Vint Cerf"
        ],
        correct: 1,
        explanation: "Ray Tomlinson sent the first email in 1971 and chose the @ symbol for email addresses."
    },
    {
        question: "What was the first domain name ever registered?",
        options: [
            "IBM.com",
            "Microsoft.com",
            "Symbolics.com",
            "Google.com"
        ],
        correct: 2,
        explanation: "Symbolics.com was the first domain name registered on March 15, 1985."
    },
    {
        question: "What is packet switching?",
        options: [
            "A method of grouping data for transmission across networks",
            "A way to switch between computers",
            "A type of email system",
            "A security protocol"
        ],
        correct: 0,
        explanation: "Packet switching is a method where data is broken into smaller packets, transmitted independently, and reassembled at the destination."
    },
    {
        question: "What is the primary purpose of DNS?",
        options: [
            "To secure websites",
            "To transfer files",
            "To convert domain names to IP addresses",
            "To send emails"
        ],
        correct: 2,
        explanation: "DNS (Domain Name System) translates human-readable domain names into IP addresses that computers can understand."
    },
    {
        question: "What does TCP/IP stand for?",
        options: [
            "Transfer Control Protocol/Internet Protocol",
            "Transmission Control Protocol/Internet Protocol",
            "Technical Control Protocol/Internet Protocol",
            "Transport Control Protocol/Internet Protocol"
        ],
        correct: 1,
        explanation: "TCP/IP stands for Transmission Control Protocol/Internet Protocol, the fundamental communication protocol of the internet."
    },
    {
        question: "Who is credited with inventing the World Wide Web?",
        options: [
            "Steve Jobs",
            "Bill Gates",
            "Tim Berners-Lee",
            "Mark Zuckerberg"
        ],
        correct: 2,
        explanation: "Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN."
    },
    {
        question: "What are the main service models in cloud computing?",
        options: [
            "IaaS, PaaS, and SaaS",
            "Hardware, Software, and Network",
            "Storage, Computing, and Database",
            "Public, Private, and Hybrid"
        ],
        correct: 0,
        explanation: "The main service models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS)."
    },
    {
        question: "What is the primary characteristic of IaaS?",
        options: [
            "Provides software applications",
            "Offers development platforms",
            "Provides virtualized computing resources",
            "Manages databases only"
        ],
        correct: 2,
        explanation: "IaaS provides virtualized computing resources like virtual machines, storage, and networking over the internet."
    },
    {
        question: "What are the deployment models in cloud computing?",
        options: [
            "Public, Private, Hybrid, and Community",
            "Open, Closed, and Mixed",
            "Internal, External, and Combined",
            "Basic, Standard, and Premium"
        ],
        correct: 0,
        explanation: "Cloud deployment models include Public (available to all), Private (for single organization), Hybrid (mix of public/private), and Community (shared by specific community)."
    },
    {
        question: "What is cloud elasticity?",
        options: [
            "Cloud security feature",
            "Ability to scale resources up/down as needed",
            "Network speed measurement",
            "Data backup process"
        ],
        correct: 1,
        explanation: "Cloud elasticity refers to the ability to automatically scale resources up or down based on demand."
    },
    {
        question: "What is a key benefit of cloud computing?",
        options: [
            "Pay-per-use pricing model",
            "Limited scalability",
            "Increased maintenance",
            "Higher upfront costs"
        ],
        correct: 0,
        explanation: "Pay-per-use pricing allows organizations to pay only for resources they actually use, reducing capital expenditure."
    },
    {
        question: "What is cloud orchestration?",
        options: [
            "Playing music in the cloud",
            "Automated arrangement and coordination of cloud services",
            "Cloud security",
            "Data backup"
        ],
        correct: 1,
        explanation: "Cloud orchestration involves automating the arrangement, coordination, and management of complex cloud systems, services, and middleware."
    },
    {
        question: "What is a container in cloud computing?",
        options: [
            "Storage unit",
            "Standardized unit of software packaging",
            "Network protocol",
            "Security measure"
        ],
        correct: 1,
        explanation: "Containers package application code and dependencies together, ensuring consistent operation across different computing environments."
    },
    {
        question: "What is cloud migration?",
        options: [
            "Moving birds in the sky",
            "Process of moving applications/data to cloud",
            "Creating cloud backups",
            "Cloud network setup"
        ],
        correct: 1,
        explanation: "Cloud migration is the process of moving applications, data, and other business elements from on-premises to cloud environments."
    },
    {
        question: "What is multi-cloud strategy?",
        options: [
            "Using multiple computer screens",
            "Using services from multiple cloud providers",
            "Multiple backups",
            "Multiple networks"
        ],
        correct: 1,
        explanation: "Multi-cloud involves using cloud services from multiple providers to optimize resources, reduce dependency, and improve reliability."
    },
    {
        question: "What is serverless computing?",
        options: [
            "Computing without any servers",
            "Model where provider manages infrastructure",
            "Offline computing",
            "Local computing"
        ],
        correct: 1,
        explanation: "Serverless computing lets developers build applications without managing servers, as the provider handles infrastructure management."
    },
    {
        question: "What is cloud bursting?",
        options: [
            "When cloud servers fail",
            "Deploying to public cloud when private cloud reaches capacity",
            "Data breach in cloud",
            "Cloud backup process"
        ],
        correct: 1,
        explanation: "Cloud bursting is when an application runs in a private cloud and bursts into a public cloud when demand increases."
    },
    {
        question: "What is edge computing in relation to cloud?",
        options: [
            "Computing at network edges near data source",
            "High-performance computing",
            "Cloud security feature",
            "Cloud storage type"
        ],
        correct: 0,
        explanation: "Edge computing processes data near the source rather than sending it to centralized cloud data centers."
    },
    {
        question: "What is cloud load balancing?",
        options: [
            "Measuring cloud weight",
            "Distribution of workloads across resources",
            "Cloud cost calculation",
            "Data backup method"
        ],
        correct: 1,
        explanation: "Load balancing distributes workloads across multiple computing resources to optimize resource use and performance."
    },
    {
        question: "What is a semantic HTML element?",
        options: [
        "Any HTML element that looks good",
        "An element that describes its meaning to both browser and developer",
        "An element with CSS styling",
        "An element used only for layout"
        ],
        correct: 1,
        explanation: "Semantic HTML elements clearly describe their purpose in their names, like <article>, <header>, <nav>, making code more meaningful and accessible."
        },
        {
            question: "What is the purpose of the 'viewport' meta tag?",
            options: [
            "To add images to a webpage",
            "To control layout and scaling on mobile devices",
            "To change text color",
            "To add animations"
            ],
            correct: 1,
            explanation: "The viewport meta tag helps control how a webpage is displayed on mobile devices by setting the viewport width and initial scale."
            },
            {
                question: "What does CSS stand for?",
                options: [
                "Computer Style Sheets",
                "Creative Style System",
                "Cascading Style Sheets",
                "Colorful Style Sheets"
                ],
                correct: 2,
                explanation: "CSS stands for Cascading Style Sheets, which is used to style and format HTML documents."
                },
                {
                    question: "What is the correct CSS syntax for padding on all sides?",
                    options: [
                    "padding: 10;",
                    "padding: 10px 10px 10px 10px;",
                    "all-padding: 10px;",
                    "padding-all: 10px;"
                    ],
                    correct: 1,
                    explanation: "Padding can be set using either 'padding: 10px;' for all sides or 'padding: 10px 10px 10px 10px;' for individual sides."
                    },
                    
                    {
                    question: "How do you make a list display without bullets?",
                    options: [
                    "list-style: none;",
                    "list-type: no-bullet;",
                    "bullet-style: none;",
                    "list: no-bullets;"
                    ],
                    correct: 0,
                    explanation: "list-style: none; removes bullets or numbering from lists."
                    },
                    {
                        "question": "Which keyword is used to declare a variable that cannot be reassigned?",
                        "options": [
                          "let",
                          "var",
                          "const",
                          "immutable"
                        ],
                        "correct": 2,
                        "explanation": "The 'const' keyword is used to declare variables whose values cannot be reassigned after initialization."
                      },
                      {
                        "question": "Which keyword is used to declare a block-scoped variable that can be reassigned?",
                        "options": [
                          "var",
                          "let",
                          "constant",
                          "mutable"
                        ],
                        "correct": 1,
                        "explanation": "The 'let' keyword is used to declare a block-scoped variable that can be reassigned."
                      },
                      {
                        "question": "Which keyword declares a variable that is function-scoped?",
                        "options": [
                          "let",
                          "var",
                          "const",
                          "scope"
                        ],
                        "correct": 1,
                        "explanation": "The 'var' keyword is used to declare a variable that is function-scoped, meaning it is available within the function it is declared in."
                      },
                      {
                        "question": "Which of the following variables can be reassigned within the same scope?",
                        "options": [
                          "let",
                          "const",
                          "var",
                          "all of the above"
                        ],
                        "correct": 3,
                        "explanation": "Both 'let' and 'var' can be reassigned within the same scope, but 'const' cannot."
                      },
                      {
                        "question": "Which keyword is used to declare a variable with a block scope that cannot be reassigned?",
                        "options": [
                          "let",
                          "var",
                          "const",
                          "immutable"
                        ],
                        "correct": 2,
                        "explanation": "The 'const' keyword is used to declare a block-scoped variable that cannot be reassigned after initialization."
                      },
                      {
                        "question": "Which keyword is used to declare a variable with function scope in JavaScript?",
                        "options": [
                          "var",
                          "let",
                          "const",
                          "scope"
                        ],
                        "correct": 0,
                        "explanation": "The 'var' keyword is used to declare a function-scoped variable, meaning it is accessible throughout the function where it is declared."
                      },
                      {
                        "question": "What will happen if you try to reassign a value to a variable declared with 'const'?",
                        "options": [
                          "The reassignment will succeed.",
                          "An error will occur.",
                          "The value will change but the variable name will remain constant.",
                          "The variable will be automatically redeclared."
                        ],
                        "correct": 1,
                        "explanation": "You cannot reassign a value to a variable declared with 'const'. Doing so will throw an error."
                      },
                      {
                        "question": "Which of the following is true about variables declared with 'let'?",
                        "options": [
                          "They are function-scoped.",
                          "They are block-scoped.",
                          "They cannot be reassigned.",
                          "They are hoisted and initialized with 'undefined'."
                        ],
                        "correct": 1,
                        "explanation": "'let' variables are block-scoped, meaning they are only accessible within the block in which they are declared."
                      },
                      {
                        "question": "What is the result of using 'var' in a loop in JavaScript?",
                        "options": [
                          "The variable will be scoped to the loop block.",
                          "The variable will be scoped to the function.",
                          "The variable will be globally scoped.",
                          "The variable will not be accessible outside the loop."
                        ],
                        "correct": 1,
                        "explanation": "'var' is function-scoped, so the variable will be accessible anywhere within the function, including outside the loop."
                      },
                      {
                        "question": "Which keyword is used to declare a variable that is accessible globally if declared outside of any function?",
                        "options": [
                          "let",
                          "var",
                          "const",
                          "global"
                        ],
                        "correct": 1,
                        "explanation": "Variables declared with 'var' outside of any function are globally scoped, meaning they are accessible anywhere in the program."
                      },
                      {
                        "question": "What is a key difference between 'let' and 'var' in JavaScript?",
                        "options": [
                          "'let' is function-scoped, while 'var' is block-scoped.",
                          "'let' is block-scoped, while 'var' is function-scoped.",
                          "'let' and 'var' are exactly the same.",
                          "'let' cannot be used in loops."
                        ],
                        "correct": 1,
                        "explanation": "'let' is block-scoped, while 'var' is function-scoped, meaning 'let' has a more limited scope compared to 'var'."
                      },
                      {
                        "question": "What will happen if you declare a variable with 'let' inside a loop and try to access it outside the loop?",
                        "options": [
                          "The variable will be accessible outside the loop.",
                          "The variable will throw an error when accessed outside the loop.",
                          "The variable will be hoisted to the top of the function.",
                          "The variable will be undefined outside the loop."
                        ],
                        "correct": 1,
                        "explanation": "Variables declared with 'let' inside a loop are block-scoped, meaning they are not accessible outside the loop."
                      },
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                        
                      
                    
                    {
                    question: "Which property is used to create rounded corners?",
                    options: [
                    "corner-radius",
                    "border-round",
                    "border-radius",
                    "rounded-corners"
                    ],
                    correct: 2,
                    explanation: "border-radius is used to create rounded corners on elements."
                    },
                    
                    {
                    question: "How do you make an element transparent?",
                    options: [
                    "opacity: 0.5;",
                    "transparent: 50%;",
                    "visibility: 50%;",
                    "alpha: 50%;"
                    ],
                    correct: 0,
                    explanation: "opacity property controls the transparency of elements, with values from 0 (fully transparent) to 1 (fully opaque)."
                    },
                    
                    {
                    question: "Which value of display makes an element disappear?",
                    options: [
                    "display: invisible;",
                    "display: none;",
                    "display: hidden;",
                    "display: off;"
                    ],
                    correct: 1,
                    explanation: "display: none; removes the element from the document flow and hides it completely."
                    },
                    
                    {
                    question: "How do you set multiple background colors?",
                    options: [
                    "background: linear-gradient(red, blue);",
                    "background-color: red, blue;",
                    "background-multi: red blue;",
                    "colors: red blue;"
                    ],
                    correct: 0,
                    explanation: "linear-gradient is used to create gradients or multiple color transitions."
                    },
                    
                    {
                    question: "Which property controls text indentation?",
                    options: [
                    "paragraph-indent",
                    "text-indent",
                    "indent",
                    "spacing-left"
                    ],
                    correct: 1,
                    explanation: "text-indent property specifies the indentation of the first line in a text block."
                    },
                    
                    {
                    question: "How do you make text italic in CSS?",
                    options: [
                    "font-style: italic;",
                    "text-style: italic;",
                    "style: italic;",
                    "italic: true;"
                    ],
                    correct: 0,
                    explanation: "font-style: italic; is used to make text appear in italic style."
                    },
                    
                    {
                    question: "Which property sets the width of an element's border?",
                    options: [
                    "border-width",
                    "border-size",
                    "border-thickness",
                    "border-weight"
                    ],
                    correct: 0,
                    explanation: "border-width sets the thickness of an element's border."
                    },
                    
                    {
                    question: "How do you align elements side by side?",
                    options: [
                    "align: horizontal;",
                    "display: inline;",
                    "float: left;",
                    "position: side;"
                    ],
                    correct: 1,
                    explanation: "display: inline; or display: inline-block; allows elements to appear side by side."
                    },
                    
                    {
                    question: "Which property is used to create shadow effects on text?",
                    options: [
                    "text-shadow",
                    "font-shadow",
                    "letter-shadow",
                    "shadow-effect"
                    ],
                    correct: 0,
                    explanation: "text-shadow adds shadow effects to text."
                    },
                    
                    {
                    question: "How do you change the mouse cursor style?",
                    options: [
                    "cursor: pointer;",
                    "mouse: hand;",
                    "cursor-style: pointer;",
                    "mouse-cursor: hand;"
                    ],
                    correct: 0,
                    explanation: "cursor property changes how the mouse cursor appears when hovering over an element."
                    },
                    
                    {
                    question: "Which property controls the spacing between letters?",
                    options: [
                    "letter-spacing",
                    "text-spacing",
                    "character-spacing",
                    "font-spacing"
                    ],
                    correct: 0,
                    explanation: "letter-spacing controls the space between characters in text."
                    },
                    
                    {
                    question: "How do you make an element take up the full height of its parent?",
                    options: [
                    "height: full;",
                    "height: 100%;",
                    "full-height: true;",
                    "size: maximum;"
                    ],
                    correct: 1,
                    explanation: "height: 100%; makes an element take up the full height of its parent container."
                    },    
                {
                question: "Which property is used to change the text color?",
                options: [
                "text-color",
                "color",
                "font-color",
                "text-style"
                ],
                correct: 1,
                explanation: "The 'color' property is used to set the color of text in CSS."
                },
                
                {
                question: "How do you add a background color in CSS?",
                options: [
                "color-background: yellow;",
                "bg-color: yellow;",
                "background-color: yellow;",
                "background: yellow-color;"
                ],
                correct: 2,
                explanation: "The 'background-color' property is used to set the background color of an element."
                },
                
                {
                question: "Which property is used to change the font size?",
                options: [
                "text-size",
                "font-size",
                "text-style",
                "size"
                ],
                correct: 1,
                explanation: "The 'font-size' property is used to specify the size of text."
                },
                
                {
                question: "How do you select an element with class 'header' in CSS?",
                options: [
                "#header",
                ".header",
                "*header",
                "@header"
                ],
                correct: 1,
                explanation: "A dot (.) followed by the class name is used to select elements with a specific class in CSS."
                },
                
                {
                question: "Which property is used to add a border to an element?",
                options: [
                "border-line",
                "border",
                "outline",
                "border-style"
                ],
                correct: 1,
                explanation: "The 'border' property is used to add a border around an element."
                },
                
                {
                question: "How do you make text bold in CSS?",
                options: [
                "text-bold: true;",
                "font-bold: true;",
                "font-weight: bold;",
                "bold: true;"
                ],
                correct: 2,
                explanation: "The 'font-weight: bold' property is used to make text bold."
                },
                
                {
                question: "Which CSS property controls the space between lines?",
                options: [
                "line-spacing",
                "line-height",
                "spacing",
                "text-spacing"
                ],
                correct: 1,
                explanation: "The 'line-height' property controls the space between lines of text."
                },
                
                {
                question: "How do you center align text?",
                options: [
                "align: center;",
                "text-align: center;",
                "center-text: true;",
                "text: center;"
                ],
                correct: 1,
                explanation: "The 'text-align: center' property is used to center-align text."
                },
                
                {
                question: "Which property is used to change the font of text?",
                options: [
                "font-style",
                "text-font",
                "font-family",
                "text-style"
                ],
                correct: 2,
                explanation: "The 'font-family' property is used to specify the font for text."
                },
                
                {
                question: "How do you make text uppercase in CSS?",
                options: [
                "text-style: uppercase;",
                "text-transform: uppercase;",
                "text-case: upper;",
                "font-case: uppercase;"
                ],
                correct: 1,
                explanation: "The 'text-transform: uppercase' property is used to convert text to uppercase."
                },
                
                {
                question: "Which property adds space between elements?",
                options: [
                "spacing",
                "margin",
                "padding",
                "gap"
                ],
                correct: 1,
                explanation: "The 'margin' property adds space outside elements, between elements."
                },
                
                
            
            {
            question: "What is the CSS Box Model?",
            options: [
            "A 3D modeling tool",
            "A layout method for social media",
            "The concept that describes content, padding, border, and margin of elements",
            "A type of CSS framework"
            ],
            correct: 2,
            explanation: "The CSS Box Model is a fundamental concept that describes how elements are structured with content, padding, border, and margin areas."
            },
            
            {
            question: "What is AJAX?",
            options: [
            "A cleaning product",
            "A JavaScript framework",
            "A technique for making asynchronous web requests without page reload",
            "A CSS property"
            ],
            correct: 2,
            explanation: "AJAX (Asynchronous JavaScript and XML) allows web pages to update content dynamically without requiring a full page reload."
            },
            
            {
            question: "What is the purpose of localStorage in web browsers?",
            options: [
            "To store CSS styles",
            "To cache images",
            "To store key-value pairs in the browser with no expiration time",
            "To improve internet speed"
            ],
            correct: 2,
            explanation: "localStorage provides a way to store data persistently in a web browser, with data remaining even after the browser is closed."
            },
            
            {
            question: "What is a CSS Grid?",
            options: [
            "A social media platform",
            "A two-dimensional layout system for creating complex web layouts",
            "A type of image format",
            "A JavaScript library"
            ],
            correct: 1,
            explanation: "CSS Grid is a powerful layout system that allows for creation of complex two-dimensional layouts with rows and columns."
            },
            
            {
            question: "What is the purpose of the 'alt' attribute in HTML images?",
            options: [
            "To make images load faster",
            "To provide alternative text description for images",
            "To change image size",
            "To add image effects"
            ],
            correct: 1,
            explanation: "The alt attribute provides alternative text for images, improving accessibility and displaying when images fail to load."
            },
            
            {
            question: "What is a RESTful API?",
            options: [
            "A sleeping application",
            "A type of website design",
            "An architectural style for designing networked applications",
            "A database system"
            ],
            correct: 2,
            explanation: "REST (Representational State Transfer) is an architectural style for designing networked applications, commonly used for web services."
            },
            
            {
            question: "What is WebSocket?",
            options: [
            "A type of electrical socket",
            "A protocol providing full-duplex communication channels over TCP",
            "A CSS framework",
            "A type of web browser"
            ],
            correct: 1,
            explanation: "WebSocket is a protocol that enables two-way interactive communication between a client and a server over a persistent connection."
            },
            
            {
            question: "What is the purpose of media queries in CSS?",
            options: [
            "To play videos",
            "To create responsive designs that adapt to different screen sizes",
            "To query databases",
            "To load images"
            ],
            correct: 1,
            explanation: "Media queries allow CSS to apply different styles based on device characteristics like screen size, enabling responsive web design."
            },
            
            {
            question: "What is Cross-Origin Resource Sharing (CORS)?",
            options: [
            "A web design pattern",
            "A security feature that controls how web pages access resources from different domains",
            "A type of web hosting",
            "A CSS property"
            ],
            correct: 1,
            explanation: "CORS is a security mechanism that allows or restricts web page requests to resources from different domains."
            },
        
        {
        question: "What is CSS specificity?",
        options: [
        "The size of CSS file",
        "A method to make CSS load faster",
        "The weight or importance given to CSS rules to determine which styles are applied",
        "A CSS framework"
        ],
        correct: 2,
        explanation: "CSS specificity is a weight that determines which CSS rules take precedence when multiple rules target the same element."
        },
        
        {
        question: "What is a Progressive Web App (PWA)?",
        options: [
        "Any website with animations",
        "A mobile app from app store",
        "A web application that can function like a native app with features like offline access",
        "A desktop application"
        ],
        correct: 2,
        explanation: "PWAs are web applications that use modern web capabilities to deliver app-like experiences with features like offline functionality and push notifications."
        },
        
        {
        question: "What is the purpose of a CSS preprocessor?",
        options: [
        "To make websites load faster",
        "To add images to websites",
        "To extend CSS with additional features like variables and nesting",
        "To compress HTML code"
        ],
        correct: 2,
        explanation: "CSS preprocessors like Sass and Less extend CSS functionality by adding features like variables, nesting, and mixins, making CSS code more maintainable."
        },
        
        {
        question: "What is the role of DOCTYPE in HTML?",
        options: [
        "To make text bold",
        "To declare the HTML version and document type being used",
        "To add CSS styles",
        "To include JavaScript"
        ],
        correct: 1,
        explanation: "DOCTYPE declaration tells the browser which version of HTML the page is using, ensuring proper rendering of the content."
        },
    {
        question: "What is a cloud-native application?",
        options: [
            "Any application in cloud",
            "Application designed specifically for cloud environment",
            "Mobile application",
            "Web application"
        ],
        correct: 1,
        explanation: "Cloud-native applications are specifically designed to take advantage of cloud computing frameworks and features."
    },
    {
        question: "What is cloud compliance?",
        options: [
            "Cloud speed measurement",
            "Meeting regulatory requirements for cloud services",
            "Cloud installation process",
            "Cloud maintenance"
        ],
        correct: 1,
        explanation: "Cloud compliance ensures cloud services meet industry and regulatory requirements for data security and privacy."
    },
    {
        question: "When was the internet opened for commercial use?",
        options: [
            "Early 1990s",
            "Late 1980s",
            "Mid 1970s",
            "Early 2000s"
        ],
        correct: 0,
        explanation: "The internet was opened for commercial use in the early 1990s when the National Science Foundation lifted restrictions on commercial use."
    },
    {
        question: "What was the first web browser?",
        options: [
            "Internet Explorer",
            "Mosaic",
            "WorldWideWeb",
            "Netscape"
        ],
        correct: 2,
        explanation: "WorldWideWeb (later renamed Nexus) was the first web browser, created by Tim Berners-Lee in 1990."
    },
    {
        question: "What does HTML element <p> represent?",
        options: [
            "Paragraph",
            "Picture",
            "Print",
            "Page"
        ],
        correct: 0,
        explanation: "The <p> element in HTML represents a paragraph of text."
    },
    {
        question: "Which CSS property changes text color?",
        options: [
            "text-style",
            "font-color",
            "color",
            "text-color"
        ],
        correct: 2,
        explanation: "The 'color' property in CSS is used to change the color of text."
    },
    {
        question: "What year was ARPANET created?",
        options: [
            "1969",
            "1975",
            "1982",
            "1965"
        ],
        correct: 0,
        explanation: "ARPANET was created in 1969 with its first node at UCLA."
    },
    {
        question: "Which symbol is used in email addresses?",
        options: [
            "#",
            "@",
            "&",
            "*"
        ],
        correct: 1,
        explanation: "The @ (at) symbol is used in email addresses to separate the username from the domain name."
    },
    {
        question: "What does WWW stand for?",
        options: [
            "World Wide Web",
            "World Web Width",
            "Wide World Web",
            "World Web Wireless"
        ],
        correct: 0,
        explanation: "WWW stands for World Wide Web, the system of interlinked hypertext documents accessed via the internet."
    },
    
        {
            question: "What is the purpose of an IP address?",
            options: [
                "To encrypt data",
                "To identify devices on a network",
                "To store web pages",
                "To block spam emails"
            ],
            correct: 1,
            explanation: "An IP address uniquely identifies devices on a network, allowing them to send and receive data."
        },
        {
            question: "Which IP version is most widely used today?",
            options: [
                "IPv2",
                "IPv4",
                "IPv6",
                "IPv8"
            ],
            correct: 1,
            explanation: "IPv4 is still the most widely used IP version, although IPv6 is gradually being adopted to address IPv4 address exhaustion."
        },
        {
            question: "What is a domain name?",
            options: [
                "A type of web browser",
                "A human-readable web address",
                "A security protocol",
                "A type of email service"
            ],
            correct: 1,
            explanation: "A domain name is a human-readable address that represents the numeric IP address of a website."
        },
        {
            question: "Which is a characteristic of information retrieval services?",
            options: [
                "Real-time communication",
                "Access to stored information",
                "Online gaming",
                "Social networking"
            ],
            correct: 1,
            explanation: "Information retrieval services allow users to access stored information and data from various sources on the Internet."
        },
        {
            question: "What is the primary function of HTTP?",
            options: [
                "To store web pages",
                "To transfer hypertext documents",
                "To manage email",
                "To encrypt data"
            ],
            correct: 1,
            explanation: "HTTP (Hypertext Transfer Protocol) is used to transfer hypertext documents between servers and clients on the web."
        },
        {
            question: "What characterizes Web 3.0 technologies?",
            options: [
                "Static web pages",
                "Centralized control",
                "Semantic understanding",
                "Limited user interaction"
            ],
            correct: 2,
            explanation: "Web 3.0 is characterized by semantic understanding, where machines can interpret and process information more like humans."
        },
        {
            question: "What is a key feature of entertainment services on the Internet?",
            options: [
                "Business communications",
                "File storage",
                "Streaming media",
                "Network security"
            ],
            correct: 2,
            explanation: "Entertainment services primarily offer streaming media, including video, music, and gaming content."
        },
        {
            question: "Which is NOT a typical educational service on the Internet?",
            options: [
                "Online courses",
                "Digital libraries",
                "Hardware manufacturing",
                "Virtual classrooms"
            ],
            correct: 2,
            explanation: "Hardware manufacturing is not an educational service; educational services include online courses, digital libraries, and virtual classrooms."
        },
        {
            question: "What is the main advantage of cloud computing for businesses?",
            options: [
                "Increased physical security",
                "Reduced cost and scalability",
                "Faster internet speed",
                "Better website design"
            ],
            correct: 1,
            explanation: "Cloud computing offers businesses reduced costs and scalability by eliminating the need for physical infrastructure."
        },
        {
            question: "What distinguishes an Extranet from an Intranet?",
            options: [
                "Speed of connection",
                "Access for external partners",
                "Physical location",
                "Cost of implementation"
            ],
            correct: 1,
            explanation: "An Extranet differs from an Intranet by providing controlled access to external partners, suppliers, or customers."
        },
        {
            question: "Which is a key component of network security?",
            options: [
                "Social media integration",
                "Firewall protection",
                "Website design",
                "Content creation"
            ],
            correct: 1,
            explanation: "Firewall protection is a key component of network security, helping to prevent unauthorized access."
        },
        {
            question: "What is the purpose of SSL/TLS?",
            options: [
                "To speed up internet connection",
                "To encrypt data transmission",
                "To store web pages",
                "To manage email"
            ],
            correct: 1,
            explanation: "SSL/TLS protocols encrypt data transmission between clients and servers to ensure secure communication."
        },
        {
            question: "What is a URL?",
            options: [
                "Universal Resource Locator",
                "Uniform Resource Locator",
                "Unified Resource Link",
                "Universal Reference Link"
            ],
            correct: 1,
            explanation: "URL stands for Uniform Resource Locator, which is the address used to locate resources on the web."
        },
        {
            question: "Which component is NOT typically part of a URL structure?",
            options: [
                "Protocol",
                "Domain name",
                "CPU speed",
                "Path"
            ],
            correct: 2,
            explanation: "CPU speed is not a component of URL structure. URLs typically contain protocol, domain name, path, and optional parameters."
        },
        {
            question: "What is the main function of a web browser?",
            options: [
                "To create web pages",
                "To store emails",
                "To retrieve and display web content",
                "To manage network security"
            ],
            correct: 2,
            explanation: "A web browser's main function is to retrieve web content from servers and display it to users in a readable format."
        },
        {
            question: "Which of these is a communication service provided by the Internet?",
            options: [
                "Microsoft Word",
                "Email",
                "Local disk storage",
                "Printer drivers"
            ],
            correct: 1,
            explanation: "Email is a communication service provided by the Internet that allows users to send and receive digital messages."
        },
        {
            question: "What is e-commerce?",
            options: [
                "Electronic mail system",
                "Online gaming",
                "Digital buying and selling",
                "Social networking"
            ],
            correct: 2,
            explanation: "E-commerce refers to the buying and selling of goods and services over the Internet."
        },
        {
            question: "Which is an example of a social networking service?",
            options: [
                "Microsoft Excel",
                "Adobe Photoshop",
                "Facebook",
                "Windows Media Player"
            ],
            correct: 2,
            explanation: "Facebook is a social networking service that allows users to connect and share content with others online."
        },
        {
            question: "What characterizes cloud services?",
            options: [
                "They only work offline",
                "They require special hardware",
                "They provide resources over the Internet",
                "They are free from security concerns"
            ],
            correct: 2,
            explanation: "Cloud services provide computing resources, storage, and applications over the Internet without requiring local hardware or software installation."
        },
        {
            question: "How does the World Wide Web work?",
            options: [
                "Through physical mail delivery",
                "Using hypertext links",
                "Via telephone lines only",
                "Through radio signals only"
            ],
            correct: 1,
            explanation: "The World Wide Web works through hypertext links that connect documents and resources across the Internet."
        },
        {
            question: "What makes dynamic web pages 'dynamic'?",
            options: [
                "They load faster",
                "They change content based on user interaction or other factors",
                "They use less bandwidth",
                "They are more secure"
            ],
            correct: 1,
            explanation: "Dynamic web pages can change their content based on user interaction, database content, or other factors without manual modification."
        },
        {
            question: "Which is NOT a common security feature of web browsers?",
            options: [
                "Password manager",
                "SSL/TLS encryption",
                "Physical firewall",
                "Private browsing mode"
            ],
            correct: 2,
            explanation: "Physical firewall is not a browser security feature; it's a separate network security device or software."
        },
        {
            question: "What is a key aspect of Search Engine Optimization (SEO)?",
            options: [
                "Paying search engines for rankings",
                "Improving website visibility in search results",
                "Creating social media accounts",
                "Building physical servers"
            ],
            correct: 1,
            explanation: "SEO involves improving a website's visibility in search engine results through various optimization techniques."
        },
        {
            question: "Which Internet service allows file storage and sharing online?",
            options: [
                "Email",
                "VoIP",
                "Cloud storage",
                "Web browsing"
            ],
            correct: 2,
            explanation: "Cloud storage services allow users to store and share files online, accessible from any device with Internet access."
        },
        {
            question: "What was one of the key features that characterized Web 2.0?",
            options: [
                "Static web pages",
                "Limited user interaction",
                "User-generated content",
                "Text-only websites"
            ],
            correct: 2,
            explanation: "Web 2.0 was characterized by user-generated content, allowing users to actively contribute to websites through features like blogs, wikis, and social networking platforms."
        },
        {
            question: "What technology is the foundation for cryptocurrencies?",
            options: [
                "Cloud computing",
                "Blockchain",
                "5G networks",
                "Artificial Intelligence"
            ],
            correct: 1,
            explanation: "Blockchain technology serves as the foundation for cryptocurrencies like Bitcoin, providing a decentralized ledger for recording transactions."
        },
        {
            question: "What is packet switching?",
            options: [
                "A method of routing physical mail",
                "A way to switch between different internet providers",
                "A method of grouping data transmitted over digital networks",
                "A type of network security protocol"
            ],
            correct: 2,
            explanation: "Packet switching is a method of grouping data that is transmitted over a digital network where data is divided into packets before being sent."
        },
        {
            question: "Which decade saw the rise of smartphones and mobile Internet?",
            options: [
                "1990s",
                "2000s",
                "2010s",
                "2020s"
            ],
            correct: 2,
            explanation: "The 2010s saw the rise of smartphones and mobile Internet, with mobile becoming the dominant form of Internet access."
        },
        {
            question: "What is an Extranet?",
            options: [
                "A public network accessible to everyone",
                "A private network within an organization",
                "A network that allows controlled access to external users",
                "A network exclusively for government use"
            ],
            correct: 2,
            explanation: "An Extranet is a network that extends beyond an organization's intranet to allow controlled access to external users like suppliers or customers."
        },
        {
            question: "Which technology enables everyday devices to connect to the Internet?",
            options: [
                "Web 3.0",
                "Internet of Things (IoT)",
                "Cloud Computing",
                "Blockchain"
            ],
            correct: 1,
            explanation: "The Internet of Things (IoT) connects everyday devices, such as smart appliances, cars, and wearable technology, to the Internet."
        },
        {
            question: "What is the primary purpose of cloud computing?",
            options: [
                "To provide weather forecasts",
                "To store and process data over the Internet",
                "To improve internet speed",
                "To block malicious websites"
            ],
            correct: 1,
            explanation: "Cloud computing enables users and businesses to store and process data over the Internet, offering scalable and cost-effective solutions."
        },
        {
            question: "Which occurred first chronologically?",
            options: [
                "Introduction of DNS",
                "Invention of Email",
                "Creation of World Wide Web",
                "Launch of Mosaic browser"
            ],
            correct: 1,
            explanation: "Email was invented by Ray Tomlinson in 1971, preceding DNS (1984), WWW (1989), and Mosaic browser (1993)."
        },
        {
            question: "What is a key feature of Web 3.0?",
            options: [
                "Static web pages",
                "Centralized control",
                "Decentralized Internet",
                "Limited user interaction"
            ],
            correct: 2,
            explanation: "Web 3.0 envisions a decentralized Internet where data and services are not controlled by a few large corporations but distributed across a network of users."
        },
        {
            question: "What is the primary advantage of 5G networks?",
            options: [
                "Lower cost",
                "Better security",
                "Faster data transfer speeds",
                "Simplified networking"
            ],
            correct: 2,
            explanation: "5G networks provide faster data transfer speeds, lower latency, and greater connectivity compared to previous generations."
        },
        {
            question: "What distinguishes static web pages from dynamic web pages?",
            options: [
                "Static pages load faster",
                "Static pages don't change unless manually modified",
                "Static pages are more secure",
                "Static pages use more bandwidth"
            ],
            correct: 1,
            explanation: "Static web pages display the same content to all users and don't change unless manually modified by the website developer."
        },
        {
            question: "When did TCP/IP become the standard protocol for ARPANET?",
            options: [
                "1981",
                "1982",
                "1983",
                "1984"
            ],
            correct: 2,
            explanation: "TCP/IP became the standard protocol for ARPANET in 1983, replacing the previous Network Control Protocol (NCP)."
        },
        {
            question: "What was one of the key features that characterized Web 2.0?",
            options: [
                "Static web pages",
                "Limited user interaction",
                "User-generated content",
                "Text-only websites"
            ],
            correct: 2,
            explanation: "Web 2.0 was characterized by user-generated content, allowing users to actively contribute to websites through features like blogs, wikis, and social networking platforms."
        },
        {
            question: "What technology is the foundation for cryptocurrencies?",
            options: [
                "Cloud computing",
                "Blockchain",
                "5G networks",
                "Artificial Intelligence"
            ],
            correct: 1,
            explanation: "Blockchain technology serves as the foundation for cryptocurrencies like Bitcoin, providing a decentralized ledger for recording transactions."
        },
        {
            question: "What is packet switching?",
            options: [
                "A method of routing physical mail",
                "A way to switch between different internet providers",
                "A method of grouping data transmitted over digital networks",
                "A type of network security protocol"
            ],
            correct: 2,
            explanation: "Packet switching is a method of grouping data that is transmitted over a digital network where data is divided into packets before being sent."
        },
        {
            question: "Which decade saw the rise of smartphones and mobile Internet?",
            options: [
                "1990s",
                "2000s",
                "2010s",
                "2020s"
            ],
            correct: 2,
            explanation: "The 2010s saw the rise of smartphones and mobile Internet, with mobile becoming the dominant form of Internet access."
        },
        {
            question: "What is an Extranet?",
            options: [
                "A public network accessible to everyone",
                "A private network within an organization",
                "A network that allows controlled access to external users",
                "A network exclusively for government use"
            ],
            correct: 2,
            explanation: "An Extranet is a network that extends beyond an organization's intranet to allow controlled access to external users like suppliers or customers."
        },
        {
            question: "Which technology enables everyday devices to connect to the Internet?",
            options: [
                "Web 3.0",
                "Internet of Things (IoT)",
                "Cloud Computing",
                "Blockchain"
            ],
            correct: 1,
            explanation: "The Internet of Things (IoT) connects everyday devices, such as smart appliances, cars, and wearable technology, to the Internet."
        },
        {
            question: "What is the primary purpose of cloud computing?",
            options: [
                "To provide weather forecasts",
                "To store and process data over the Internet",
                "To improve internet speed",
                "To block malicious websites"
            ],
            correct: 1,
            explanation: "Cloud computing enables users and businesses to store and process data over the Internet, offering scalable and cost-effective solutions."
        },
        {
            question: "Which occurred first chronologically?",
            options: [
                "Introduction of DNS",
                "Invention of Email",
                "Creation of World Wide Web",
                "Launch of Mosaic browser"
            ],
            correct: 1,
            explanation: "Email was invented by Ray Tomlinson in 1971, preceding DNS (1984), WWW (1989), and Mosaic browser (1993)."
        },
        {
            question: "What is a key feature of Web 3.0?",
            options: [
                "Static web pages",
                "Centralized control",
                "Decentralized Internet",
                "Limited user interaction"
            ],
            correct: 2,
            explanation: "Web 3.0 envisions a decentralized Internet where data and services are not controlled by a few large corporations but distributed across a network of users."
        },
        {
            question: "What is the primary advantage of 5G networks?",
            options: [
                "Lower cost",
                "Better security",
                "Faster data transfer speeds",
                "Simplified networking"
            ],
            correct: 2,
            explanation: "5G networks provide faster data transfer speeds, lower latency, and greater connectivity compared to previous generations."
        },
        {
            question: "What distinguishes static web pages from dynamic web pages?",
            options: [
                "Static pages load faster",
                "Static pages don't change unless manually modified",
                "Static pages are more secure",
                "Static pages use more bandwidth"
            ],
            correct: 1,
            explanation: "Static web pages display the same content to all users and don't change unless manually modified by the website developer."
        },
        {
            question: "When did TCP/IP become the standard protocol for ARPANET?",
            options: [
                "1981",
                "1982",
                "1983",
                "1984"
            ],
            correct: 2,
            explanation: "TCP/IP became the standard protocol for ARPANET in 1983, replacing the previous Network Control Protocol (NCP)."
        }
,
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style System",
            "Cascading Style Sheets",
            "Creative Style Software",
            "Coded Style Sheets"
        ],
        correct: 1,
        explanation: "CSS stands for Cascading Style Sheets, used for styling web pages."
    },
    {
        question: "Which organization standardizes the internet protocols?",
        options: [
            "IETF",
            "WHO",
            "UNESCO",
            "UNICEF"
        ],
        correct: 0,
        explanation: "The Internet Engineering Task Force (IETF) develops and promotes internet standards."
    },
    {
        question: "What was the first social media site?",
        options: [
            "Facebook",
            "MySpace",
            "Six Degrees",
            "Friendster"
        ],
        correct: 2,
        explanation: "Six Degrees, launched in 1997, is considered the first modern social media site."
    },
    {
        question: "What type of markup language is HTML?",
        options: [
            "Programming Language",
            "Scripting Language",
            "Styling Language",
            "Markup Language"
        ],
        correct: 3,
        explanation: "HTML is a markup language that defines the structure and presentation of web content."
    },
    {
        question: "Which company created the first commercial web browser?",
        options: [
            "Microsoft",
            "Netscape",
            "Apple",
            "IBM"
        ],
        correct: 1,
        explanation: "Netscape created the first commercial web browser, Netscape Navigator, in 1994."
    },
      {
            question: "In the URL 'https://www.example.com:443/path/page.html?name=value#section', what does 'https' represent?",
            options: [
                "The protocol",
                "The domain name",
                "The port number",
                "The file extension"
            ],
            correct: 0,
            explanation: "HTTPS (Hypertext Transfer Protocol Secure) is the protocol, which defines how data is transmitted between your browser and the website."
        },
        {
            question: "In the URL 'https://shop.example.com/products?id=123', what is 'shop'?",
            options: [
                "The path",
                "A subdomain",
                "A query parameter",
                "The domain name"
            ],
            correct: 1,
            explanation: "Shop is a subdomain of example.com. Subdomains appear before the main domain name."
        },
        {
            question: "What does the '443' represent in 'https://www.example.com:443/index.html'?",
            options: [
                "The protocol version",
                "The page number",
                "The port number",
                "The server ID"
            ],
            correct: 2,
            explanation: "443 is the port number, which is the default port for HTTPS connections. It's usually not visible in URLs as browsers assume it by default."
        },
        {
            question: "In the URL 'https://example.com/blog/post.html?id=123&author=john', what is '?id=123&author=john'?",
            options: [
                "The path parameters",
                "The query string",
                "The fragment identifier",
                "The file extension"
            ],
            correct: 1,
            explanation: "This is the query string, containing parameters (id and author) that are passed to the web server."
        },
        {
            question: "What is the purpose of '#section' in 'https://example.com/page.html#section'?",
            options: [
                "To define the page style",
                "To specify the file type",
                "To indicate a fragment or bookmark on the page",
                "To show the page version"
            ],
            correct: 2,
            explanation: "The # symbol indicates a fragment identifier, which links to a specific section or element within the webpage."
        },
        {
            question: "In the URL 'https://api.example.com/v1/users', what does '/v1/users' represent?",
            options: [
                "The path",
                "The protocol",
                "The query parameters",
                "The domain name"
            ],
            correct: 0,
            explanation: "This is the path component of the URL, indicating the specific resource location on the server."
        },
        {
            question: "What's wrong with this URL: 'http://example.com/my file.html'?",
            options: [
                "The protocol is incorrect",
                "The domain is invalid",
                "It contains a space in the filename",
                "The extension is wrong"
            ],
            correct: 2,
            explanation: "URLs cannot contain spaces. Spaces should be encoded as '%20' or replaced with hyphens/underscores."
        },
        {
            question: "In 'mailto:user@example.com', what is 'mailto'?",
            options: [
                "A domain name",
                "A protocol",
                "An email service",
                "A prefix"
            ],
            correct: 1,
            explanation: "mailto: is a protocol that indicates this URL will open the default email client."
        },
        {
            question: "What component is highlighted in 'https://www.example.com/products/search?category=books'?",
            options: [
                "www.example.com",
                "/products/search",
                "?category=books",
                "https://"
            ],
            correct: 1,
            explanation: "/products/search is the path component, indicating the resource location on the server."
        },
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Technical Modern Language",
                "Hyper Transfer Method Language",
                "Hyperlink Text Management Language"
            ],
            correct: 0,
            explanation: "HTML (Hyper Text Markup Language) is the standard markup language used to create web pages."
        },
        {
            question: "Which tag is used for creating a hyperlink?",
            options: [
                "&lt;link&gt;",
                "&lt;href&gt;",
                "&lt;a&gt;",
                "&lt;url&gt;"
            ],
            correct: 2,
            explanation: "The &lt;a&gt; (anchor) tag is used to create hyperlinks, typically with an href attribute specifying the destination URL."
        },
        {
            question: "Which tag is used for the largest heading?",
            options: [
                "&lt;heading&gt;",
                "&lt;h6&gt;",
                "&lt;head&gt;",
                "&lt;h1&gt;"
            ],
            correct: 3,
            explanation: "&lt;h1&gt; represents the largest heading in HTML, with heading sizes ranging from h1 to h6 (smallest)."
        },
        {
            question: "What is the correct way to create a paragraph in HTML?",
            options: [
                "&lt;paragraph&gt;",
                "&lt;p&gt;",
                "&lt;para&gt;",
                "&lt;text&gt;"
            ],
            correct: 1,
            explanation: "The &lt;p&gt; tag is used to define a paragraph in HTML."
        },
        {
            question: "Which tag is used to insert an image?",
            options: [
                "&lt;picture&gt;",
                "&lt;img&gt;",
                "&lt;image&gt;",
                "&lt;photo&gt;"
            ],
            correct: 1,
            explanation: "The &lt;img&gt; tag is used to embed images in HTML, requiring a src attribute to specify the image source."
        },
        {
            question: "What is the purpose of the &lt;body&gt; tag?",
            options: [
                "To define document metadata",
                "To contain the main content of the webpage",
                "To create a table",
                "To define navigation links"
            ],
            correct: 1,
            explanation: "The &lt;body&gt; tag contains the main content of the HTML document that is visible to users."
        },
        {
            question: "Which tag is used to create an unordered list?",
            options: [
                "&lt;list&gt;",
                "&lt;ol&gt;",
                "&lt;ul&gt;",
                "&lt;dl&gt;"
            ],
            correct: 2,
            explanation: "The &lt;ul&gt; tag creates an unordered list, typically displayed with bullet points."
        },
        {
            question: "What is the correct HTML for creating a text input field?",
            options: [
                "&lt;textfield&gt;",
                "&lt;input type='text'&gt;",
                "&lt;text&gt;",
                "&lt;input='text'&gt;"
            ],
            correct: 1,
            explanation: "The &lt;input type='text'&gt; creates a single-line text input field in HTML forms."
        },
        {
            question: "Which tag is used to define a table row?",
            options: [
                "&lt;tr&gt;",
                "&lt;td&gt;",
                "&lt;table-row&gt;",
                "&lt;row&gt;"
            ],
            correct: 0,
            explanation: "The &lt;tr&gt; tag defines a row in an HTML table, containing table data cells (&lt;td&gt;) or header cells (&lt;th&gt;)."
        },
        {
            question: "What is the purpose of the &lt;head&gt; tag?",
            options: [
                "To create a header section",
                "To contain metadata about the document",
                "To make text bold",
                "To create navigation"
            ],
            correct: 1,
            explanation: "The &lt;head&gt; tag contains metadata about the HTML document, including title, scripts, and style definitions."
        },
      
            {
                question: "What does the &lt;section&gt; tag represent?",
                options: [
                    "A thematic grouping of content",
                    "A navigation menu",
                    "A sidebar container",
                    "A header content"
                ],
                correct: 0,
                explanation: "The &lt;section&gt; tag defines a thematic grouping of content, typically with its own heading."
            },
            {
                question: "What is the purpose of the &lt;main&gt; tag?",
                options: [
                    "Defines main navigation",
                    "Contains the dominant content of the document",
                    "Highlights important text",
                    "Creates a main menu"
                ],
                correct: 1,
                explanation: "The &lt;main&gt; tag specifies the dominant content of a document, excluding repeated content like sidebars or navigation."
            },
            {
                question: "Which HTML tag is used to create a dropdown list?",
                options: [
                    "&lt;dropdown&gt;",
                    "&lt;select&gt;",
                    "&lt;option&gt;",
                    "&lt;list&gt;"
                ],
                correct: 1,
                explanation: "The &lt;select&gt; tag creates a dropdown list, with individual options defined using &lt;option&gt;."
            },
            {
                question: "What does the &lt;template&gt; tag do?",
                options: [
                    "Defines reusable code templates",
                    "Creates dynamic content",
                    "Defines hidden HTML content for later use",
                    "Designs a webpage layout"
                ],
                correct: 2,
                explanation: "The &lt;template&gt; tag contains hidden HTML content that is not displayed directly but can be reused dynamically via JavaScript."
            },
            {
                question: "What is the use of the &lt;canvas&gt; tag?",
                options: [
                    "To add audio",
                    "To create a drawing surface for graphics",
                    "To embed videos",
                    "To display HTML tables"
                ],
                correct: 1,
                explanation: "The &lt;canvas&gt; tag provides a surface for drawing graphics using JavaScript, such as charts or animations."
            },
            {
                question: "Which attribute is used to link an external stylesheet?",
                options: [
                    "src",
                    "link",
                    "rel",
                    "href"
                ],
                correct: 3,
                explanation: "The href attribute in the &lt;link&gt; tag specifies the path to an external stylesheet."
            },
            {
                question: "What is the purpose of the &lt;noscript&gt; tag?",
                options: [
                    "To define fallback content for unsupported JavaScript",
                    "To disable JavaScript on a page",
                    "To add comments in scripts",
                    "To debug JavaScript"
                ],
                correct: 0,
                explanation: "The &lt;noscript&gt; tag provides fallback content for users whose browsers do not support JavaScript."
            },
            {
                question: "What does the &lt;audio&gt; tag do?",
                options: [
                    "Embeds audio content",
                    "Displays text as sound",
                    "Creates sound effects",
                    "Generates audio data"
                ],
                correct: 0,
                explanation: "The &lt;audio&gt; tag embeds audio content in a webpage, often with controls for playback."
            },
            {
                question: "Which tag is used to define a list of terms and descriptions?",
                options: [
                    "&lt;dl&gt;",
                    "&lt;dt&gt;",
                    "&lt;dd&gt;",
                    "All of the above"
                ],
                correct: 3,
                explanation: "The &lt;dl&gt; tag defines a description list, with &lt;dt&gt; for terms and &lt;dd&gt; for their descriptions."
            },
            {
                question: "What is the purpose of the &lt;code&gt; tag?",
                options: [
                    "Adds a script to the document",
                    "Displays programming code",
                    "Highlights important text",
                    "Executes JavaScript"
                ],
                correct: 1,
                explanation: "The &lt;code&gt; tag is used to display programming code, typically in a monospace font."
            },
            {
                question: "What does the &lt;base&gt; tag define?",
                options: [
                    "Default URL for relative links",
                    "Basic structure of a webpage",
                    "A container for metadata",
                    "The base size of text"
                ],
                correct: 0,
                explanation: "The &lt;base&gt; tag specifies the default URL for all relative links in a document."
            },
            {
                question: "What is the use of the &lt;blockquote&gt; tag?",
                options: [
                    "Displays bold text",
                    "Creates a block-level quotation",
                    "Highlights a quote",
                    "Indents a paragraph"
                ],
                correct: 1,
                explanation: "The &lt;blockquote&gt; tag is used for block-level quotations, typically indented or styled differently."
            },
            {
                question: "What does the &lt;embed&gt; tag do?",
                options: [
                    "Embeds external content, such as multimedia",
                    "Inserts inline images",
                    "Creates a text embed",
                    "Links to external scripts"
                ],
                correct: 0,
                explanation: "The &lt;embed&gt; tag embeds external content like videos, audio, or plugins into a webpage."
            },
            {
                question: "What is the role of the &lt;track&gt; tag in videos?",
                options: [
                    "Adds video effects",
                    "Defines subtitles or captions for videos",
                    "Controls video playback speed",
                    "Sets video resolution"
                ],
                correct: 1,
                explanation: "The &lt;track&gt; tag provides subtitles, captions, or other text tracks for the &lt;video&gt; element."
            },
            {
                question: "What does the &lt;data&gt; tag represent?",
                options: [
                    "Metadata for images",
                    "Machine-readable value for human-readable text",
                    "Data input fields",
                    "Database connection"
                ],
                correct: 1,
                explanation: "The &lt;data&gt; tag links human-readable content with machine-readable data."
            },
                {
                    question: "Which tag is used to define a section in HTML?",
                    options: [
                        "&lt;section&gt;",
                        "&lt;div&gt;",
                        "&lt;part&gt;",
                        "&lt;header&gt;"
                    ],
                    correct: 0,
                    explanation: "The &lt;section&gt; tag defines a thematic grouping of content, typically with a heading."
                },
                {
                    question: "Which HTML tag is used to create a table?",
                    options: [
                        "&lt;table&gt;",
                        "&lt;td&gt;",
                        "&lt;tr&gt;",
                        "&lt;tab&gt;"
                    ],
                    correct: 0,
                    explanation: "The &lt;table&gt; tag is used to define a table, with rows (&lt;tr&gt;) and cells (&lt;td&gt; or &lt;th&gt;)."
                },
                {
                    question: "Which tag is used to create a description list?",
                    options: [
                        "&lt;dl&gt;",
                        "&lt;ol&gt;",
                        "&lt;list&gt;",
                        "&lt;desc&gt;"
                    ],
                    correct: 0,
                    explanation: "The &lt;dl&gt; tag creates a description list, with &lt;dt&gt; for terms and &lt;dd&gt; for descriptions."
                },
                {
                    question: "What does the &lt;meta&gt; tag do?",
                    options: [
                        "Provides metadata about the HTML document",
                        "Creates a paragraph",
                        "Defines navigation links",
                        "Adds a table"
                    ],
                    correct: 0,
                    explanation: "The &lt;meta&gt; tag provides metadata like character set, viewport settings, and keywords."
                },
                {
                    question: "What is the primary purpose of wireframing in web design?",
                    options: [
                        "To define the placement of key elements and structure",
                        "To test website performance",
                        "To create a content strategy",
                        "To add CSS styling"
                    ],
                    correct: 0,
                    explanation: "Wireframing focuses on defining the structure and placement of elements on a webpage before detailed design begins."
                },
                {
                    question: "Which phase of the website development process focuses on identifying business goals?",
                    options: [
                        "Content Writing Phase",
                        "Information Gathering Phase",
                        "Design Phase",
                        "Testing Phase"
                    ],
                    correct: 1,
                    explanation: "The Information Gathering phase focuses on identifying the website’s purpose and aligning business goals with the project."
                },
                {
                    question: "What is the role of a project manager in website development?",
                    options: [
                        "To write and review website content",
                        "To coordinate the project, manage timelines, and resolve conflicts",
                        "To design the website layout and user interface",
                        "To test the website for bugs and issues"
                    ],
                    correct: 1,
                    explanation: "A project manager ensures the project runs smoothly by managing resources, timelines, and communication between stakeholders."
                },
                {
                    question: "What is the purpose of accessibility testing in web development?",
                    options: [
                        "To test the website’s loading speed",
                        "To ensure the website is usable for individuals with disabilities",
                        "To improve website navigation",
                        "To identify SEO issues"
                    ],
                    correct: 1,
                    explanation: "Accessibility testing ensures the website is usable for individuals with disabilities by adhering to standards like WCAG."
                },
                {
                    question: "Which of the following is an example of a dynamic website?",
                    options: [
                        "A personal portfolio website",
                        "An e-commerce website with product updates",
                        "A simple brochure website",
                        "A single-page landing site"
                    ],
                    correct: 1,
                    explanation: "Dynamic websites feature content that changes based on user interactions, such as an e-commerce site with frequent updates."
                },
                {
                    question: "What is the main purpose of a sitemap in web development?",
                    options: [
                        "To define the visual design of the website",
                        "To plan the navigation structure and hierarchy of the website",
                        "To create user input forms",
                        "To test website functionality"
                    ],
                    correct: 1,
                    explanation: "A sitemap helps plan the navigation structure and hierarchy, ensuring the website is organized and user-friendly."
                },
                {
                    question: "Which of the following tools is commonly used for wireframing?",
                    options: [
                        "Figma",
                        "Visual Studio Code",
                        "Google Analytics",
                        "Node.js"
                    ],
                    correct: 0,
                    explanation: "Figma is a popular tool for wireframing and creating prototypes during the design phase."
                },
                {
                    question: "What is the role of backend development in website creation?",
                    options: [
                        "To design the user interface",
                        "To handle server-side logic and database management",
                        "To write content for the website",
                        "To test for accessibility compliance"
                    ],
                    correct: 1,
                    explanation: "Backend development focuses on server-side programming and database management to ensure website functionality."
                },
                {
                    question: "What does SEO stand for in website development?",
                    options: [
                        "Search Engine Optimization",
                        "Software Efficiency Operations",
                        "Secure Environment Options",
                        "Server Engagement Optimization"
                    ],
                    correct: 0,
                    explanation: "SEO stands for Search Engine Optimization, which improves a website’s visibility on search engines."
                },
                {
                    question: "Which phase involves defining short-term and long-term business goals?",
                    options: [
                        "Content Creation",
                        "Testing and Review",
                        "Information Gathering",
                        "Coding"
                    ],
                    correct: 2,
                    explanation: "The Information Gathering phase includes analyzing business goals to ensure the website aligns with strategic objectives."
                },
                {
                    question: "What is the purpose of usability testing?",
                    options: [
                        "To identify performance issues in the backend",
                        "To ensure the website is user-friendly and intuitive",
                        "To test database performance",
                        "To optimize CSS and JavaScript files"
                    ],
                    correct: 1,
                    explanation: "Usability testing ensures the website is user-friendly, intuitive, and provides a seamless user experience."
                },
                {
                    question: "What is the key focus of frontend development?",
                    options: [
                        "Creating the website’s server-side logic",
                        "Designing the database schema",
                        "Developing the parts of the website users interact with",
                        "Managing security protocols"
                    ],
                    correct: 2,
                    explanation: "Frontend development focuses on creating the parts of the website that users see and interact with, using HTML, CSS, and JavaScript."
                },
                {
                    question: "What is a major benefit of creating a style guide in web design?",
                    options: [
                        "To ensure consistency in design elements across the website",
                        "To speed up server-side programming",
                        "To enhance website testing processes",
                        "To reduce the size of image files"
                    ],
                    correct: 0,
                    explanation: "A style guide ensures consistency in design elements like fonts, colors, and components across the website."
                },
                {
                    question: "Which of the following is an example of performance optimization?",
                    options: [
                        "Writing detailed meta descriptions",
                        "Minifying CSS, JavaScript, and HTML files",
                        "Conducting accessibility testing",
                        "Adding interactive animations to the website"
                    ],
                    correct: 1,
                    explanation: "Performance optimization includes techniques like minifying files to improve website load speed."
                },
                {
                    question: "Why is version control important in web development?",
                    options: [
                        "To organize content on the website",
                        "To track and manage changes to the codebase",
                        "To test website responsiveness",
                        "To ensure accessibility compliance"
                    ],
                    correct: 1,
                    explanation: "Version control helps developers track and manage changes to the codebase, enabling collaboration and reducing errors."
                },
                {
                    question: "What is the purpose of functional testing in website development?",
                    options: [
                        "To check if the website is visually appealing",
                        "To ensure all features and functionalities work as intended",
                        "To improve the website's SEO performance",
                        "To identify accessibility issues"
                    ],
                    correct: 1,
                    explanation: "Functional testing ensures that all features and functionalities of the website work as intended, such as forms, links, and navigation."
                },
                {
                    question: "What does the term 'responsive design' mean?",
                    options: [
                        "Designing a website that responds quickly to user queries",
                        "Creating a design that adjusts seamlessly to different screen sizes and devices",
                        "Adding animations to improve website interactivity",
                        "Testing the website for bugs and errors"
                    ],
                    correct: 1,
                    explanation: "Responsive design ensures the website adapts seamlessly to different screen sizes and devices for a consistent user experience."
                },
                {
                    question: "What is the role of content proofreading in website development?",
                    options: [
                        "To verify code functionality",
                        "To ensure content is free from errors and meets quality standards",
                        "To organize website content into logical sections",
                        "To add metadata for SEO purposes"
                    ],
                    correct: 1,
                    explanation: "Content proofreading eliminates errors and ensures the content is clear, accurate, and aligned with quality standards."
                },
                {
                    question: "Which of the following is a key goal of user experience (UX) design?",
                    options: [
                        "To make the website visually appealing",
                        "To create an intuitive and enjoyable interaction for users",
                        "To optimize backend server performance",
                        "To implement database management systems"
                    ],
                    correct: 1,
                    explanation: "User experience (UX) design focuses on creating an intuitive, efficient, and enjoyable interaction between the user and the website."
                },
                {
                    question: "What is the main purpose of the 'Information Gathering' phase?",
                    options: [
                        "To collect requirements, goals, and audience details for the website",
                        "To write and publish website content",
                        "To test the website for performance issues",
                        "To create the website’s backend infrastructure"
                    ],
                    correct: 0,
                    explanation: "The Information Gathering phase involves collecting requirements, business goals, and audience details to guide the development process."
                },
                {
                    question: "Why is accessibility important in web development?",
                    options: [
                        "To improve the website's SEO rankings",
                        "To ensure the website can be used by individuals with disabilities",
                        "To make the website visually appealing",
                        "To optimize database queries"
                    ],
                    correct: 1,
                    explanation: "Accessibility ensures the website can be used effectively by individuals with disabilities, adhering to guidelines like WCAG."
                },
                {
                    question: "What is the purpose of the 'deployment process' in web development?",
                    options: [
                        "To move the website from the development environment to the live server",
                        "To create wireframes for the website design",
                        "To write the website’s content strategy",
                        "To test the website’s performance under load"
                    ],
                    correct: 0,
                    explanation: "The deployment process involves moving the website from the development environment to the live server, making it accessible to users."
                },
                {
                    question: "Which of the following is a benefit of using a content management system (CMS)?",
                    options: [
                        "It helps in writing clean and optimized backend code",
                        "It simplifies the process of creating, managing, and updating website content",
                        "It ensures the website’s database performs efficiently",
                        "It reduces the need for frontend frameworks"
                    ],
                    correct: 1,
                    explanation: "A CMS simplifies the process of creating, managing, and updating website content without requiring technical expertise."
                },
                {
                    question: "What is the primary function of backend optimization?",
                    options: [
                        "To improve server-side performance and data handling",
                        "To design an engaging user interface",
                        "To enhance SEO integration on the website",
                        "To create wireframes for the website"
                    ],
                    correct: 0,
                    explanation: "Backend optimization focuses on improving server-side performance, such as optimizing database queries and caching data."
                },
                {
                    question: "What is the purpose of performance testing?",
                    options: [
                        "To verify that all website features work as intended",
                        "To ensure the website loads quickly and can handle expected traffic",
                        "To test the website’s visual design and branding",
                        "To validate content organization and placement"
                    ],
                    correct: 1,
                    explanation: "Performance testing ensures the website loads quickly, operates efficiently, and can handle expected traffic without issues."
                },
                {
                    question: "What is the purpose of a project scope in website development?",
                    options: [
                        "To identify target audience preferences",
                        "To define the features, functionalities, and limitations of the project",
                        "To test the website’s cross-browser compatibility",
                        "To organize website content into categories"
                    ],
                    correct: 1,
                    explanation: "Project scope defines the features, functionalities, and limitations of the website to ensure clear boundaries and prevent scope creep."
                },
                {
                    question: "What is the key purpose of database management in web development?",
                    options: [
                        "To store and manage website data securely and efficiently",
                        "To create user interfaces for the website",
                        "To test website performance under heavy traffic",
                        "To optimize CSS and JavaScript files"
                    ],
                    correct: 0,
                    explanation: "Database management involves storing and managing website data securely and efficiently for seamless functionality."
                },
                {
                    question: "Which of the following is an example of frontend optimization?",
                    options: [
                        "Using lazy loading for images",
                        "Implementing secure login systems",
                        "Minimizing database queries",
                        "Conducting accessibility testing"
                    ],
                    correct: 0,
                    explanation: "Frontend optimization techniques like lazy loading for images help improve page load times and enhance user experience."
                },
                {
                    question: "What does 'version control' help developers achieve?",
                    options: [
                        "To track and manage changes to the codebase over time",
                        "To organize the website content logically",
                        "To ensure consistent visual design",
                        "To improve search engine rankings"
                    ],
                    correct: 0,
                    explanation: "Version control helps developers track and manage changes to the codebase, enabling collaboration and maintaining code history."
                },
                {
                    question: "Which of the following is a best practice for accessibility?",
                    options: [
                        "Using high-resolution images without compression",
                        "Providing descriptive alt text for images",
                        "Designing websites with only bright colors",
                        "Testing websites only on desktop devices"
                    ],
                    correct: 1,
                    explanation: "Providing descriptive alt text for images ensures that visually impaired users can understand the content using screen readers."
                },
                {
                    question: "What is the primary purpose of wireframing?",
                    options: [
                        "To create the final visual design of the website",
                        "To provide a blueprint of the website’s structure and layout",
                        "To test the website for bugs and performance issues",
                        "To write content for the website’s pages"
                    ],
                    correct: 1,
                    explanation: "Wireframing provides a basic blueprint of the website’s structure and layout, focusing on functionality rather than aesthetics."
                },
                {
                    question: "Why is user feedback important in the website development process?",
                    options: [
                        "To identify usability issues and areas for improvement",
                        "To optimize backend server performance",
                        "To validate coding standards",
                        "To reduce project scope"
                    ],
                    correct: 0,
                    explanation: "User feedback helps identify usability issues and areas for improvement, ensuring the final website meets user needs."
                },
                {
                    question: "What is the role of quality assurance (QA) in website development?",
                    options: [
                        "To write and manage website content",
                        "To test the website for bugs, errors, and functionality issues",
                        "To optimize the database for better performance",
                        "To develop backend server logic"
                    ],
                    correct: 1,
                    explanation: "The QA team tests the website for bugs, errors, and functionality issues to ensure everything works as intended before launch."
                },
                {
                    question: "Which tool is commonly used for accessibility testing?",
                    options: [
                        "Lighthouse",
                        "Figma",
                        "Bootstrap",
                        "GitHub"
                    ],
                    correct: 0,
                    explanation: "Lighthouse is a tool that audits website performance, accessibility, and SEO compliance."
                },
                {
                    question: "What is the main benefit of performance monitoring post-launch?",
                    options: [
                        "To track and improve website loading times and uptime",
                        "To write content for blog updates",
                        "To gather client approval for the project",
                        "To enhance visual elements on the website"
                    ],
                    correct: 0,
                    explanation: "Performance monitoring ensures the website operates efficiently post-launch by tracking loading times, uptime, and resource usage."
                },
                {
                    question: "What is the main purpose of SEO in website development?",
                    options: [
                        "To improve the website’s search engine visibility",
                        "To test the website’s functionality",
                        "To manage website security protocols",
                        "To design the website layout"
                    ],
                    correct: 0,
                    explanation: "SEO (Search Engine Optimization) improves a website’s visibility on search engines, increasing traffic and discoverability."
                },
                {
                    question: "Which of the following ensures a website is mobile-friendly?",
                    options: [
                        "Backend optimization",
                        "Responsive design",
                        "Wireframing",
                        "Database management"
                    ],
                    correct: 1,
                    explanation: "Responsive design ensures a website adapts to different screen sizes, making it mobile-friendly and user-friendly."
                },
                {
                    question: "What is the purpose of unit testing during the coding phase?",
                    options: [
                        "To test individual components or functions of the code",
                        "To ensure website content is error-free",
                        "To gather user feedback on design",
                        "To improve SEO rankings"
                    ],
                    correct: 0,
                    explanation: "Unit testing verifies individual components or functions to ensure they work as intended, reducing bugs during development."
                },
                {
                    question: "Why is a disaster recovery plan important for a website?",
                    options: [
                        "To provide quick restoration in case of failures or emergencies",
                        "To test user interactions on the website",
                        "To gather analytics on website traffic",
                        "To improve the website’s visual hierarchy"
                    ],
                    correct: 0,
                    explanation: "A disaster recovery plan ensures quick restoration of a website in case of failures, minimizing downtime and data loss."
                },
                {
                    question: "What is the purpose of a content strategy in web development?",
                    options: [
                        "To ensure content aligns with audience needs and business goals",
                        "To test website responsiveness on mobile devices",
                        "To manage server-side logic and databases",
                        "To reduce website load times"
                    ],
                    correct: 0,
                    explanation: "A content strategy ensures the content is relevant, engaging, and aligned with audience needs and business goals."
                },
                {
                    question: "What is the purpose of using alt text for images?",
                    options: [
                        "To improve the website's SEO ranking",
                        "To describe images for visually impaired users using screen readers",
                        "To reduce the file size of images",
                        "To make the website load faster"
                    ],
                    correct: 1,
                    explanation: "Alt text provides descriptions of images, ensuring visually impaired users can understand the content through screen readers."
                },
                {
                    question: "Which of the following is a key accessibility practice?",
                    options: [
                        "Using small font sizes for compact design",
                        "Providing sufficient color contrast between text and background",
                        "Using high-resolution videos without captions",
                        "Designing interactive elements without keyboard support"
                    ],
                    correct: 1,
                    explanation: "Providing sufficient color contrast ensures text is readable for users with visual impairments."
                },
                {
                    question: "Why is keyboard navigation important for accessibility?",
                    options: [
                        "It helps users navigate a website without using a mouse",
                        "It reduces website load time",
                        "It improves the visual appeal of the website",
                        "It optimizes server-side performance"
                    ],
                    correct: 0,
                    explanation: "Keyboard navigation allows users who cannot use a mouse to interact with and navigate a website effectively."
                },
                {
                    question: "What does WCAG stand for in web accessibility?",
                    options: [
                        "Web Content Accessibility Guidelines",
                        "Website Code and Graphics",
                        "Web Configuration and Accessibility Goals",
                        "Web Compliance and Accessibility Guidelines"
                    ],
                    correct: 0,
                    explanation: "WCAG stands for Web Content Accessibility Guidelines, which provide standards for making web content accessible to all users."
                },
                {
                    question: "Why are captions important for video content on a website?",
                    options: [
                        "To improve the video loading speed",
                        "To provide text descriptions for users with hearing impairments",
                        "To reduce the video file size",
                        "To enhance the video’s visual quality"
                    ],
                    correct: 1,
                    explanation: "Captions ensure users with hearing impairments can understand video content by providing text descriptions of the audio."
                },
                {
                    question: "What is the primary purpose of performance monitoring in website maintenance?",
                    options: [
                        "To track page load speed, uptime, and resource usage",
                        "To redesign the user interface for modern trends",
                        "To update content and publish new articles",
                        "To optimize backend server logic"
                    ],
                    correct: 0,
                    explanation: "Performance monitoring helps track metrics like page load speed, uptime, and resource usage to ensure the website operates efficiently."
                },
                {
                    question: "Why are regular content updates important in website maintenance?",
                    options: [
                        "To improve SEO rankings and keep users engaged",
                        "To redesign the website structure",
                        "To test the website for security vulnerabilities",
                        "To monitor database performance"
                    ],
                    correct: 0,
                    explanation: "Regular content updates improve SEO rankings, attract new visitors, and keep existing users engaged with fresh information."
                },
                {
                    question: "What is the purpose of a backup and recovery plan in website maintenance?",
                    options: [
                        "To prevent unauthorized access to the website",
                        "To restore the website quickly in case of data loss or failures",
                        "To optimize the website’s visual hierarchy",
                        "To improve the loading speed of the website"
                    ],
                    correct: 1,
                    explanation: "A backup and recovery plan ensures the website can be restored quickly in case of data loss, cyberattacks, or technical failures."
                },
                {
                    question: "Why is software updating a critical part of website maintenance?",
                    options: [
                        "To enhance the visual design of the website",
                        "To fix bugs, improve security, and ensure compatibility with new technologies",
                        "To optimize database queries",
                        "To test the website’s user experience"
                    ],
                    correct: 1,
                    explanation: "Software updates fix bugs, improve security, and ensure the website remains compatible with the latest technologies."
                },
                {
                    question: "What is the purpose of security monitoring in website maintenance?",
                    options: [
                        "To improve the visual design and content organization",
                        "To test for user engagement and interaction",
                        "To detect and prevent security vulnerabilities like malware and unauthorized access",
                        "To reduce the website’s loading time"
                    ],
                    correct: 2,
                    explanation: "Security monitoring ensures the website is protected by detecting vulnerabilities, malware, and unauthorized access attempts."
                },
                {
                    question: "Why is it important to monitor website uptime?",
                    options: [
                        "To ensure the website is always accessible to users",
                        "To track the number of website visitors",
                        "To optimize image file sizes",
                        "To reduce the number of bugs in the code"
                    ],
                    correct: 0,
                    explanation: "Monitoring uptime ensures the website is always accessible to users, helping prevent disruptions in service."
                },
                {
                    question: "What is the main reason for fixing broken links on a website?",
                    options: [
                        "To improve SEO and enhance user experience",
                        "To increase website loading speed",
                        "To improve backend database performance",
                        "To reduce content creation time"
                    ],
                    correct: 0,
                    explanation: "Fixing broken links improves user experience and boosts SEO by ensuring all links lead to valid pages."
                },
                {
                    question: "What is the benefit of analyzing website analytics regularly?",
                    options: [
                        "To identify user behavior and improve content strategy",
                        "To update the website's visual design",
                        "To fix security vulnerabilities in the code",
                        "To ensure website files are backed up"
                    ],
                    correct: 0,
                    explanation: "Regularly analyzing website analytics helps identify user behavior patterns and informs content and design improvements."
                },
                {
                    question: "Why should website backups be stored in multiple locations?",
                    options: [
                        "To prevent loss of data due to hardware failure or cyberattacks",
                        "To improve the website's visual design",
                        "To optimize the page load speed",
                        "To enhance user interface performance"
                    ],
                    correct: 0,
                    explanation: "Storing backups in multiple locations ensures data recovery is possible in case of hardware failure, cyberattacks, or technical issues."
                },
                {
                    question: "What is a common purpose of running security audits on a website?",
                    options: [
                        "To detect vulnerabilities and protect against potential cyber threats",
                        "To enhance website design and layout",
                        "To improve content placement",
                        "To optimize frontend animations"
                    ],
                    correct: 0,
                    explanation: "Security audits detect vulnerabilities and ensure protection against cyber threats like malware and unauthorized access."
                },
                {
                    question: "Why is it essential to update plugins and third-party tools regularly?",
                    options: [
                        "To ensure compatibility, fix bugs, and improve security",
                        "To improve the website's visual design",
                        "To track the website's user analytics",
                        "To create new content for the website"
                    ],
                    correct: 0,
                    explanation: "Regularly updating plugins ensures compatibility with new technologies, fixes bugs, and addresses security vulnerabilities."
                },
                {
                    question: "What does optimizing database queries help achieve in website maintenance?",
                    options: [
                        "Faster website performance and reduced server load",
                        "Improved website aesthetics and visual hierarchy",
                        "Enhanced security monitoring",
                        "Better user experience on mobile devices"
                    ],
                    correct: 0,
                    explanation: "Optimizing database queries improves website performance by reducing server load and speeding up data retrieval."
                },
                {
                    question: "Why is user feedback monitoring important during maintenance?",
                    options: [
                        "To identify usability issues and improve user experience",
                        "To enhance backend performance",
                        "To reduce the website’s hosting costs",
                        "To optimize visual content like images and videos"
                    ],
                    correct: 0,
                    explanation: "User feedback monitoring helps identify usability issues and areas for improvement to enhance the overall user experience."
                },
                {
                    question: "What is a key benefit of regular SEO maintenance?",
                    options: [
                        "To sustain or improve the website’s search engine rankings",
                        "To reduce the cost of hosting the website",
                        "To improve backend server security",
                        "To enhance website animations and visuals"
                    ],
                    correct: 0,
                    explanation: "Regular SEO maintenance ensures the website stays optimized for search engines, improving visibility and traffic."
                },
                {
                    question: "Why should website performance be tested regularly during maintenance?",
                    options: [
                        "To identify slow load times and improve user experience",
                        "To update the visual content regularly",
                        "To fix grammar issues in website text",
                        "To optimize third-party plugins"
                    ],
                    correct: 0,
                    explanation: "Regular performance testing helps identify slow load times and bottlenecks, ensuring a smooth user experience."
                },
                {
                    question: "What is the primary purpose of Cloudflare in web development?",
                    options: [
                        "To host backend code for applications",
                        "To improve website performance and security through a CDN and DDoS protection",
                        "To manage databases for dynamic websites",
                        "To write server-side JavaScript code"
                    ],
                    correct: 1,
                    explanation: "Cloudflare provides a Content Delivery Network (CDN) and DDoS protection to improve website performance and security."
                },
                {
                    question: "What is Node.js primarily used for?",
                    options: [
                        "To manage SQL databases",
                        "To create and run server-side JavaScript applications",
                        "To optimize frontend animations",
                        "To deploy static websites to the cloud"
                    ],
                    correct: 1,
                    explanation: "Node.js is a JavaScript runtime that allows developers to build and run server-side applications."
                },
                {
                    question: "Which of the following describes the role of SQL in web development?",
                    options: [
                        "To manage and query relational databases",
                        "To host and deploy static websites",
                        "To secure websites against DDoS attacks",
                        "To optimize CSS and JavaScript files"
                    ],
                    correct: 0,
                    explanation: "SQL (Structured Query Language) is used to manage and query data in relational databases."
                },
                {
                    question: "What is Netlify commonly used for in web development?",
                    options: [
                        "To deploy and host static websites with continuous integration",
                        "To write backend server-side code",
                        "To create database schemas",
                        "To secure web applications from malware"
                    ],
                    correct: 0,
                    explanation: "Netlify is a platform for deploying and hosting static websites with features like continuous integration and automated builds."
                },
                {
                    question: "How does Cloudflare's CDN improve website performance?",
                    options: [
                        "By optimizing the website's database queries",
                        "By caching content and delivering it from servers closer to the user",
                        "By providing server-side JavaScript functionality",
                        "By hosting static website content on the cloud"
                    ],
                    correct: 1,
                    explanation: "Cloudflare’s CDN caches website content and delivers it from the nearest servers to reduce load times."
                },
                {
                    question: "What type of tool is React?",
                    options: [
                        "A framework for building full-stack applications",
                        "A JavaScript library for building user interfaces",
                        "A database management system",
                        "A tool for optimizing CSS"
                    ],
                    correct: 1,
                    explanation: "React is a JavaScript library used for building user interfaces, especially single-page applications."
                },
                {
                    question: "What is Vue.js primarily used for?",
                    options: [
                        "Backend development",
                        "Building user interfaces and single-page applications",
                        "Database management",
                        "Writing server-side logic"
                    ],
                    correct: 1,
                    explanation: "Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications."
                },
                {
                    question: "Which of the following is a key feature of Angular?",
                    options: [
                        "It is a backend framework for server-side applications",
                        "It is a JavaScript library for animations",
                        "It is a full-fledged framework for building dynamic web applications",
                        "It is a tool for database management"
                    ],
                    correct: 2,
                    explanation: "Angular is a full-fledged framework that provides a comprehensive solution for building dynamic web applications."
                },
                {
                    question: "What is the main purpose of Node.js in the JavaScript ecosystem?",
                    options: [
                        "To run JavaScript code in the browser",
                        "To run JavaScript code on the server-side",
                        "To manage JavaScript libraries",
                        "To optimize CSS performance"
                    ],
                    correct: 1,
                    explanation: "Node.js allows JavaScript to be run on the server-side, enabling full-stack JavaScript development."
                },
                {
                    question: "Which tool is used to manage packages and dependencies in JavaScript projects?",
                    options: [
                        "NPM (Node Package Manager)",
                        "React",
                        "Vue CLI",
                        "Angular CLI"
                    ],
                    correct: 0,
                    explanation: "NPM (Node Package Manager) is used to manage packages and dependencies in JavaScript projects."
                },
                {
                    question: "Which of the following is NOT a JavaScript framework?",
                    options: [
                        "React",
                        "Angular",
                        "Vue",
                        "jQuery"
                    ],
                    correct: 3,
                    explanation: "jQuery is a JavaScript library, not a framework. React, Angular, and Vue are all JavaScript frameworks or libraries."
                },
                {
                    question: "What is the purpose of Redux in React applications?",
                    options: [
                        "To manage the server-side logic",
                        "To manage application state in a predictable way",
                        "To build the user interface",
                        "To handle HTTP requests"
                    ],
                    correct: 1,
                    explanation: "Redux is a library used to manage the state of React applications in a predictable and centralized manner."
                },
                {
                    question: "Which JavaScript tool is commonly used for building and bundling projects?",
                    options: [
                        "Webpack",
                        "Node.js",
                        "Express",
                        "jQuery"
                    ],
                    correct: 0,
                    explanation: "Webpack is a module bundler used to bundle JavaScript files, CSS, and other assets in a project."
                },
                {
                    question: "Which of the following is true about TypeScript?",
                    options: [
                        "It is a superset of JavaScript that adds static typing",
                        "It is a JavaScript library for DOM manipulation",
                        "It is a framework for building mobile applications",
                        "It is used for backend server-side scripting"
                    ],
                    correct: 0,
                    explanation: "TypeScript is a superset of JavaScript that introduces static typing and other features to improve code quality and development efficiency."
                },
                {
                    question: "Which of the following tools is used to create single-page applications (SPAs) in JavaScript?",
                    options: [
                        "React",
                        "SQL",
                        "Bootstrap",
                        "Node.js"
                    ],
                    correct: 0,
                    explanation: "React is widely used for creating single-page applications (SPAs) due to its component-based architecture."
                },
                {
                    question: "What is Express.js primarily used for?",
                    options: [
                        "Frontend development for building user interfaces",
                        "Server-side routing and middleware handling in Node.js applications",
                        "Database management for SQL databases",
                        "Optimizing CSS and JavaScript files"
                    ],
                    correct: 1,
                    explanation: "Express.js is a minimal and flexible Node.js web application framework used for handling routing and middleware on the server-side."
                },
                {
                    question: "Which of the following is a NoSQL database commonly used in backend development?",
                    options: [
                        "MySQL",
                        "PostgreSQL",
                        "MongoDB",
                        "SQLite"
                    ],
                    correct: 2,
                    explanation: "MongoDB is a popular NoSQL database used in backend development, particularly for handling unstructured or semi-structured data."
                },
                {
                    question: "What is the main role of a backend framework like Django?",
                    options: [
                        "To build dynamic web pages and manage frontend logic",
                        "To handle the server-side logic, database interaction, and URL routing",
                        "To optimize images and static files",
                        "To write frontend JavaScript code"
                    ],
                    correct: 1,
                    explanation: "Django is a high-level Python web framework that focuses on handling backend logic, including database interaction, server-side routing, and URL management."
                },
                {
                    question: "What does the term 'RESTful API' refer to in backend development?",
                    options: [
                        "A type of database query language",
                        "A standard for building APIs based on HTTP methods and resources",
                        "A tool for managing user authentication",
                        "A frontend framework for building user interfaces"
                    ],
                    correct: 1,
                    explanation: "A RESTful API is a set of web services based on HTTP methods (GET, POST, PUT, DELETE) that allows communication between client and server by manipulating resources."
                },
                {
                    question: "Which of the following is used to handle asynchronous operations in Node.js?",
                    options: [
                        "Callbacks, Promises, and Async/Await",
                        "SQL queries",
                        "Express middleware",
                        "HTML forms"
                    ],
                    correct: 0,
                    explanation: "Node.js handles asynchronous operations using callbacks, Promises, and Async/Await to allow non-blocking execution."
                },
                {
                    question: "What is the purpose of a SQL database in backend development?",
                    options: [
                        "To store structured data and allow complex queries",
                        "To build user interfaces",
                        "To manage authentication and user sessions",
                        "To handle server-side routing"
                    ],
                    correct: 0,
                    explanation: "SQL databases are used to store structured data in tables and allow complex queries using SQL to manipulate and retrieve data."
                },
                {
                    question: "Which backend framework is built using Python?",
                    options: [
                        "Express.js",
                        "Django",
                        "Spring",
                        "Laravel"
                    ],
                    correct: 1,
                    explanation: "Django is a backend framework built using Python, providing tools for building robust web applications with features like ORM and URL routing."
                },
                {
                    question: "What is the primary use of Redis in backend development?",
                    options: [
                        "To store and manage structured data in tables",
                        "To handle session management and caching for fast data retrieval",
                        "To write server-side JavaScript",
                        "To handle user authentication"
                    ],
                    correct: 1,
                    explanation: "Redis is an in-memory data store commonly used for caching and session management to speed up data retrieval in backend applications."
                },
                {
                    question: "Which of the following is a backend language commonly used for web development?",
                    options: [
                        "JavaScript",
                        "Python",
                        "HTML",
                        "CSS"
                    ],
                    correct: 1,
                    explanation: "Python is a backend programming language often used with frameworks like Django and Flask to build web applications."
                },
                {
                    question: "What is the role of WebSockets in backend development?",
                    options: [
                        "To enable two-way communication between the client and server in real-time",
                        "To store user data in a database",
                        "To optimize website images",
                        "To write SQL queries for databases"
                    ],
                    correct: 0,
                    explanation: "WebSockets enable real-time, two-way communication between the client and server, making it ideal for applications like chat systems and live updates."
                },
                {
                    question: "What is the purpose of a website's information architecture?",
                    options: [
                        "To create the visual design of the website",
                        "To organize and structure content for easy navigation",
                        "To write backend server code",
                        "To manage database queries"
                    ],
                    correct: 1,
                    explanation: "Information architecture focuses on organizing and structuring content on a website to make it easy for users to navigate and find information."
                },
                {
                    question: "What does a wireframe represent in website design?",
                    options: [
                        "A fully styled, interactive webpage",
                        "The layout and structure of a webpage without design elements",
                        "The backend database structure",
                        "A user flow diagram"
                    ],
                    correct: 1,
                    explanation: "A wireframe is a low-fidelity visual representation of a webpage's layout and structure, focusing on functionality rather than design."
                },
                {
                    question: "What is the purpose of a style guide in web design?",
                    options: [
                        "To ensure consistency in design elements like colors, fonts, and spacing",
                        "To optimize images for faster load times",
                        "To manage database schemas",
                        "To write backend API code"
                    ],
                    correct: 0,
                    explanation: "A style guide ensures that design elements like colors, fonts, and spacing are consistent across the website for a cohesive user experience."
                },
                {
                    question: "Which of the following is an example of a website’s wireframe?",
                    options: [
                        "A flowchart of user interactions",
                        "A sketch showing the layout of a webpage without detailed design",
                        "A final, fully styled webpage",
                        "A code file for the website"
                    ],
                    correct: 1,
                    explanation: "A wireframe is a sketch or blueprint of a webpage layout, used to plan the structure before adding design elements."
                },
                {
                    question: "What does responsive design ensure for a website?",
                    options: [
                        "It makes the website load faster on desktop devices",
                        "It ensures the website adapts to different screen sizes and devices",
                        "It reduces the amount of content on mobile devices",
                        "It improves the website’s SEO ranking"
                    ],
                    correct: 1,
                    explanation: "Responsive design ensures that the website layout and content adapt to different screen sizes, providing a seamless experience across devices."
                },
                {
                    question: "What is the role of navigation in website structure?",
                    options: [
                        "To organize content and help users find information easily",
                        "To write the HTML code for the website",
                        "To optimize backend server performance",
                        "To handle security and user authentication"
                    ],
                    correct: 0,
                    explanation: "Navigation organizes the website's content into categories and provides users with an intuitive way to access different pages and sections."
                },
                {
                    question: "What is the purpose of a sitemap in website design?",
                    options: [
                        "To create the website’s layout and color scheme",
                        "To define the website’s information architecture and page hierarchy",
                        "To write backend code for user authentication",
                        "To test website performance"
                    ],
                    correct: 1,
                    explanation: "A sitemap outlines the structure of a website, showing how pages are organized and linked, which helps with planning navigation and SEO."
                },
                {
                    question: "What is a key benefit of using a grid system in web design?",
                    options: [
                        "To make the website content align consistently across different screen sizes",
                        "To improve the website’s SEO performance",
                        "To reduce server load",
                        "To write cleaner CSS code"
                    ],
                    correct: 0,
                    explanation: "A grid system ensures that website content is aligned consistently, creating a visually appealing and structured layout across devices."
                },
                {
                    question: "What is the purpose of usability testing in website design?",
                    options: [
                        "To ensure the website is accessible to users with disabilities",
                        "To identify and resolve issues with website performance",
                        "To test the website's user interface and identify usability issues",
                        "To improve SEO rankings"
                    ],
                    correct: 2,
                    explanation: "Usability testing focuses on evaluating the user interface and identifying potential issues to improve the overall user experience."
                },
                {
                    question: "What is a user flow in website design?",
                    options: [
                        "A map showing the path users take to complete specific tasks on the website",
                        "A tool for optimizing the website’s load time",
                        "A list of all the design elements used on the website",
                        "A report on website traffic and analytics"
                    ],
                    correct: 0,
                    explanation: "A user flow represents the steps users take to complete specific tasks on a website, helping designers optimize the user experience."
                },
                {
                    question: "What is the primary use of Nginx in web development?",
                    options: [
                        "To manage JavaScript dependencies",
                        "To serve static content and act as a reverse proxy server",
                        "To write server-side JavaScript code",
                        "To handle database queries"
                    ],
                    correct: 1,
                    explanation: "Nginx is a web server used for serving static content, acting as a reverse proxy, and load balancing for web applications."
                },
                {
                    question: "Which of the following is a key feature of Apache HTTP Server?",
                    options: [
                        "It serves dynamic content through JavaScript frameworks",
                        "It is a database management system",
                        "It is a highly customizable open-source web server",
                        "It handles real-time communication between clients and servers"
                    ],
                    correct: 2,
                    explanation: "Apache HTTP Server is a highly customizable, open-source web server used to serve static and dynamic content."
                },
                {
                    question: "What is the purpose of Node.js in backend development?",
                    options: [
                        "To handle HTTP requests and server-side logic using JavaScript",
                        "To manage frontend dependencies",
                        "To serve static files to the browser",
                        "To store and manage data in relational databases"
                    ],
                    correct: 0,
                    explanation: "Node.js allows developers to use JavaScript for server-side logic, handling HTTP requests and building backend applications."
                },
                {
                    question: "Which open-source tool is used to manage packages and dependencies in Node.js projects?",
                    options: [
                        "Webpack",
                        "Nginx",
                        "npm (Node Package Manager)",
                        "Docker"
                    ],
                    correct: 2,
                    explanation: "npm (Node Package Manager) is the default package manager for Node.js, used to manage dependencies and libraries in JavaScript projects."
                },
                {
                    question: "What is the primary function of Docker in web development?",
                    options: [
                        "To handle server-side logic and API requests",
                        "To create containerized environments for applications",
                        "To serve static website content",
                        "To optimize website images"
                    ],
                    correct: 1,
                    explanation: "Docker allows developers to create containerized environments for applications, ensuring consistency across development, testing, and production."
                },
                {
                    question: "Which of the following tools is used to bundle and optimize JavaScript code for production?",
                    options: [
                        "Node.js",
                        "Webpack",
                        "Apache",
                        "Redis"
                    ],
                    correct: 1,
                    explanation: "Webpack is a popular tool for bundling and optimizing JavaScript, CSS, and other assets for production environments."
                },
                {
                    question: "What is the role of Redis in web development?",
                    options: [
                        "It is a relational database management system",
                        "It is an in-memory data store used for caching and session management",
                        "It is a web server",
                        "It is a JavaScript framework"
                    ],
                    correct: 1,
                    explanation: "Redis is an in-memory data store often used for caching, session management, and improving performance by reducing database load."
                },
                {
                    question: "Which of the following open-source tools is commonly used to monitor web server performance?",
                    options: [
                        "Prometheus",
                        "MongoDB",
                        "Vue.js",
                        "Express"
                    ],
                    correct: 0,
                    explanation: "Prometheus is an open-source monitoring and alerting toolkit often used for tracking the performance of web servers and applications."
                },
                {
                    question: "What is the role of the Express.js framework in Node.js applications?",
                    options: [
                        "To handle routing and middleware for building web applications",
                        "To optimize website performance and load balancing",
                        "To serve static files to the client",
                        "To manage user authentication"
                    ],
                    correct: 0,
                    explanation: "Express.js is a minimal web application framework for Node.js that handles routing and middleware, simplifying backend development."
                },
                {
                    question: "What is the primary use of the open-source tool Nginx as a reverse proxy?",
                    options: [
                        "To serve JavaScript code to the client",
                        "To distribute incoming traffic across multiple backend servers",
                        "To manage server-side rendering of content",
                        "To handle user authentication and authorization"
                    ],
                    correct: 1,
                    explanation: "Nginx as a reverse proxy distributes incoming traffic across multiple backend servers, improving performance and scalability."
                },
                {
                    question: "Which of the following JavaScript tools is used for task automation in web development?",
                    options: [
                        "Webpack",
                        "Grunt",
                        "MongoDB",
                        "Vue.js"
                    ],
                    correct: 1,
                    explanation: "Grunt is an open-source JavaScript task runner that automates repetitive tasks like minification, compilation, and testing in web development."
                },
                {
                    question: "What is the purpose of Babel in JavaScript development?",
                    options: [
                        "To bundle and optimize JavaScript code for production",
                        "To transpile modern JavaScript code into backward-compatible versions",
                        "To handle database queries in JavaScript",
                        "To optimize image files for faster loading"
                    ],
                    correct: 1,
                    explanation: "Babel is a JavaScript compiler that transpiles modern JavaScript code into backward-compatible versions for older browsers."
                },
                {
                    question: "What does the JavaScript library jQuery simplify in web development?",
                    options: [
                        "Managing server-side logic",
                        "Writing database queries",
                        "DOM manipulation and event handling",
                        "Building web server applications"
                    ],
                    correct: 2,
                    explanation: "jQuery simplifies DOM manipulation, event handling, and AJAX calls, making it easier to interact with HTML and CSS in web development."
                },
                {
                    question: "Which JavaScript tool is used to manage the build process, bundling, and code splitting?",
                    options: [
                        "Gulp",
                        "Webpack",
                        "Node.js",
                        "Express"
                    ],
                    correct: 1,
                    explanation: "Webpack is a module bundler that helps manage the build process, including bundling, code splitting, and optimizing assets for production."
                },
                {
                    question: "What is the primary purpose of the Node Package Manager (npm)?",
                    options: [
                        "To compile JavaScript code into machine code",
                        "To manage dependencies and packages in JavaScript projects",
                        "To handle server-side routing in Node.js",
                        "To store user data in a database"
                    ],
                    correct: 1,
                    explanation: "npm is the default package manager for Node.js, used to manage dependencies, libraries, and packages in JavaScript projects."
                },
                {
                    question: "What does the tool Postman help developers with in web development?",
                    options: [
                        "Automating frontend build processes",
                        "Testing APIs by sending requests and inspecting responses",
                        "Minifying JavaScript code",
                        "Managing version control in JavaScript projects"
                    ],
                    correct: 1,
                    explanation: "Postman is a popular tool used for testing APIs, allowing developers to send requests, inspect responses, and manage API documentation."
                },
                {
                    question: "Which of the following JavaScript libraries is used for building user interfaces in a declarative way?",
                    options: [
                        "React",
                        "D3.js",
                        "Express",
                        "MongoDB"
                    ],
                    correct: 0,
                    explanation: "React is a JavaScript library used for building user interfaces, allowing developers to build reusable UI components in a declarative way."
                },
                {
                    question: "What is the primary use of the Vue CLI in web development?",
                    options: [
                        "To build and manage user interfaces in Vue.js applications",
                        "To optimize JavaScript performance",
                        "To create static websites",
                        "To handle database migrations"
                    ],
                    correct: 0,
                    explanation: "Vue CLI is a command-line interface used for setting up, developing, and managing Vue.js applications, including building and running development servers."
                },
                {
                    question: "Which of the following tools is used for end-to-end testing of JavaScript applications?",
                    options: [
                        "Mocha",
                        "Jest",
                        "Cypress",
                        "npm"
                    ],
                    correct: 2,
                    explanation: "Cypress is an end-to-end testing tool that provides fast, reliable testing for web applications, including JavaScript-based applications."
                },
                {
                    question: "What is the role of the Express.js framework in the Node.js ecosystem?",
                    options: [
                        "To handle server-side logic and HTTP requests",
                        "To build static websites",
                        "To manage database connections",
                        "To optimize the front-end user interface"
                    ],
                    correct: 0,
                    explanation: "Express.js is a minimal web application framework for Node.js that helps developers handle server-side logic, HTTP requests, and routing in backend development."
                },
                {
                    question: "What is the purpose of using a Content Delivery Network (CDN)?",
                    options: [
                        "To reduce website loading time by serving content from geographically distributed servers",
                        "To store user data securely in a central location",
                        "To handle database queries for the website",
                        "To optimize JavaScript code for production"
                    ],
                    correct: 0,
                    explanation: "A CDN reduces website loading time by caching content on servers that are geographically closer to the user, improving performance."
                },
                {
                    question: "What does SSL/TLS encryption do for a website?",
                    options: [
                        "It speeds up the website’s loading time",
                        "It encrypts data between the client and the server to secure communication",
                        "It optimizes images and static content",
                        "It manages user authentication"
                    ],
                    correct: 1,
                    explanation: "SSL/TLS encryption secures data transmitted between the client and server, ensuring that sensitive information like passwords and credit card numbers remain protected."
                },
                {
                    question: "What is the main advantage of using cloud computing services like AWS or Azure?",
                    options: [
                        "It allows businesses to manage their data locally",
                        "It provides scalable infrastructure with pay-as-you-go pricing",
                        "It improves website design aesthetics",
                        "It automates the process of writing backend code"
                    ],
                    correct: 1,
                    explanation: "Cloud computing services like AWS or Azure offer scalable infrastructure and pay-as-you-go pricing, allowing businesses to expand or reduce resources based on demand."
                },
                {
                    question: "Which of the following is an example of a Single Page Application (SPA)?",
                    options: [
                        "A static website that does not update its content",
                        "A website that reloads every time the user navigates to a new page",
                        "A web application that dynamically loads content without refreshing the page",
                        "A website with multiple subdomains"
                    ],
                    correct: 2,
                    explanation: "A Single Page Application (SPA) loads content dynamically without refreshing the entire page, offering a more seamless user experience."
                },
                {
                    question: "What is the role of a Reverse Proxy in web architecture?",
                    options: [
                        "To forward requests to a backend server and return responses to the client",
                        "To manage database queries for the server",
                        "To create user interfaces for web applications",
                        "To optimize image and video content for faster loading"
                    ],
                    correct: 0,
                    explanation: "A reverse proxy forwards client requests to backend servers, improving security, load balancing, and performance by acting as an intermediary between clients and servers."
                },
                {
                    question: "What is a major advantage of Progressive Web Apps (PWAs)?",
                    options: [
                        "They can only be accessed through desktop browsers",
                        "They can be installed on a device like a native mobile app and work offline",
                        "They require constant internet connectivity",
                        "They rely on server-side rendering only"
                    ],
                    correct: 1,
                    explanation: "Progressive Web Apps (PWAs) combine the best of web and mobile apps, allowing users to install them on their device and use them offline."
                },
                {
                    question: "What does the term 'mobile-first design' mean in web development?",
                    options: [
                        "Designing a website first for mobile devices, then scaling up for desktop",
                        "Building mobile apps before developing websites",
                        "Creating separate websites for mobile and desktop",
                        "Designing for desktop devices and then adapting for mobile"
                    ],
                    correct: 0,
                    explanation: "Mobile-first design means creating a website with mobile users in mind first and then scaling the design up for larger screens like tablets and desktops."
                },
                {
                    question: "What is the primary purpose of caching in web development?",
                    options: [
                        "To store frequently accessed data temporarily for faster retrieval",
                        "To create secure passwords for user authentication",
                        "To prevent unauthorized access to a website",
                        "To manage user data in databases"
                    ],
                    correct: 0,
                    explanation: "Caching stores frequently accessed data temporarily to reduce load times and improve website performance."
                },
                {
                    question: "Which of the following best describes the concept of 'Responsive Web Design'?",
                    options: [
                        "Designing websites that adapt to different screen sizes and orientations",
                        "Designing separate websites for mobile and desktop",
                        "Designing websites that load faster on mobile devices",
                        "Creating websites with only mobile features"
                    ],
                    correct: 0,
                    explanation: "Responsive web design ensures that websites adapt to various screen sizes, providing a seamless experience on all devices, including desktops, tablets, and smartphones."
                },
                {
                    question: "What is the purpose of an HTTP Status Code of 404?",
                    options: [
                        "The request was successful and the server is returning data",
                        "The server could not find the requested resource",
                        "The server is redirecting the client to another page",
                        "The client is unauthorized to access the resource"
                    ],
                    correct: 1,
                    explanation: "An HTTP 404 status code indicates that the server could not find the requested resource, commonly known as a 'Page Not Found' error."
                },
                {
                    question: "What is the purpose of WebSockets in web development?",
                    options: [
                        "To provide real-time, bidirectional communication between the client and server",
                        "To handle database queries",
                        "To improve website loading times by caching assets",
                        "To manage user authentication"
                    ],
                    correct: 0,
                    explanation: "WebSockets provide a protocol for real-time, bidirectional communication between the client and server, often used in chat apps, live notifications, and multiplayer games."
                },
                {
                    question: "What is the main advantage of using a microservices architecture in web development?",
                    options: [
                        "It allows applications to be built as a collection of loosely coupled, independently deployable services",
                        "It simplifies database management",
                        "It focuses on monolithic development patterns",
                        "It enhances static file hosting"
                    ],
                    correct: 0,
                    explanation: "Microservices architecture breaks down applications into smaller, independently deployable services, making them more scalable, maintainable, and resilient."
                },
                {
                    question: "What does the term 'containerization' mean in the context of web development?",
                    options: [
                        "Bundling JavaScript files for deployment",
                        "Packaging an application and its dependencies into a single unit for consistent deployment across environments",
                        "Creating responsive web pages for different devices",
                        "Storing user data in containers for security"
                    ],
                    correct: 1,
                    explanation: "Containerization involves packaging an application and its dependencies into containers, ensuring that it runs consistently across different environments."
                },
                {
                    question: "What is the purpose of the Open Web Application Security Project (OWASP)?",
                    options: [
                        "To create open-source web applications",
                        "To provide resources and guidelines for improving web application security",
                        "To develop backend frameworks for security",
                        "To manage web hosting services"
                    ],
                    correct: 1,
                    explanation: "OWASP is a nonprofit organization that provides open resources and guidelines for improving web application security, including the OWASP Top 10 security risks."
                },
                {
                    question: "What is a CDN (Content Delivery Network) primarily used for?",
                    options: [
                        "To serve website content from geographically distributed servers for faster delivery",
                        "To manage user authentication and authorization",
                        "To store user data in a central database",
                        "To provide security against SQL injection attacks"
                    ],
                    correct: 0,
                    explanation: "A CDN caches website content on multiple servers located worldwide, improving content delivery speed by serving it from the closest server to the user."
                },
                {
                    question: "What is the main role of API Gateway in microservices architecture?",
                    options: [
                        "To serve as a load balancer for microservices",
                        "To provide a single entry point for client requests and manage communication between microservices",
                        "To handle database queries for all services",
                        "To optimize image files for faster load times"
                    ],
                    correct: 1,
                    explanation: "An API Gateway acts as a single entry point for client requests, routing them to the appropriate microservices and managing tasks like load balancing, security, and authentication."
                },
                {
                    question: "What is the role of a Content Management System (CMS) in website development?",
                    options: [
                        "To provide an easy way for users to manage and publish content without needing to write code",
                        "To create backend APIs for database interaction",
                        "To design user interfaces for web applications",
                        "To optimize website performance"
                    ],
                    correct: 0,
                    explanation: "A CMS allows users to manage and publish website content easily, without requiring coding knowledge, making it ideal for non-technical users."
                },
                {
                    question: "What is the purpose of load balancing in web development?",
                    options: [
                        "To divide traffic across multiple servers to ensure no single server is overwhelmed",
                        "To store session data for users",
                        "To handle HTTP requests from the client",
                        "To manage server-side routing in web applications"
                    ],
                    correct: 0,
                    explanation: "Load balancing distributes incoming traffic across multiple servers, ensuring high availability, reliability, and preventing any server from becoming overloaded."
                },
                {
                    question: "What is a key feature of serverless architecture?",
                    options: [
                        "It requires dedicated server management for each application",
                        "It automatically scales resources based on demand without server management",
                        "It stores data on-premises",
                        "It uses a single server for all applications"
                    ],
                    correct: 1,
                    explanation: "Serverless architecture allows developers to build and deploy applications without managing the underlying infrastructure, as the cloud provider handles scaling and resource management."
                },
                {
                    question: "What is the role of an ORM (Object-Relational Mapping) tool in web development?",
                    options: [
                        "To map and manage database queries as objects in code, simplifying data manipulation",
                        "To optimize frontend design for mobile devices",
                        "To handle user authentication and authorization",
                        "To manage server-side routing in web applications"
                    ],
                    correct: 0,
                    explanation: "An ORM tool allows developers to interact with databases using object-oriented programming, mapping database tables to objects in code, making data manipulation easier."
                },
                
                
                
                
                
                
                
                {
                    question: "What is Render used for in web development?",
                    options: [
                        "To deploy and host web applications, static sites, and backend servers",
                        "To manage and query relational databases",
                        "To provide DDoS protection for websites",
                        "To test websites for accessibility compliance"
                    ],
                    correct: 0,
                    explanation: "Render is a platform for deploying and hosting web applications, static websites, and backend servers."
                },
                {
                    question: "Which of the following tools would you use to create a server-side application?",
                    options: [
                        "Node.js",
                        "Cloudflare",
                        "Netlify",
                        "SQL"
                    ],
                    correct: 0,
                    explanation: "Node.js is used to create server-side applications using JavaScript."
                },
                {
                    question: "What role does SQL play in dynamic websites?",
                    options: [
                        "It manages and retrieves data stored in relational databases",
                        "It hosts static website files for deployment",
                        "It optimizes the security of web servers",
                        "It improves frontend user experience"
                    ],
                    correct: 0,
                    explanation: "SQL is used to manage and retrieve data stored in relational databases for dynamic websites."
                },
                {
                    question: "What is a key benefit of using Netlify for static websites?",
                    options: [
                        "It provides automated builds and deployment through continuous integration",
                        "It manages server-side logic and databases",
                        "It provides CDN caching for dynamic websites",
                        "It enables writing backend code with JavaScript"
                    ],
                    correct: 0,
                    explanation: "Netlify provides automated builds, deployment, and continuous integration for static websites."
                },
                {
                    question: "How does Render simplify application deployment?",
                    options: [
                        "By providing server hosting with automatic builds and scaling",
                        "By managing SQL database queries for applications",
                        "By delivering static content through a global CDN",
                        "By enabling frontend animations and styling"
                    ],
                    correct: 0,
                    explanation: "Render simplifies deployment by offering server hosting, automatic builds, and scalable infrastructure for applications."
                },

                
                

                
                
                
                
                
                
                
                {
                    question: "What is the purpose of the &lt;form&gt; tag?",
                    options: [
                        "To collect user input",
                        "To display images",
                        "To create a header",
                        "To add CSS styles"
                    ],
                    correct: 0,
                    explanation: "The &lt;form&gt; tag is used to collect user input through fields like text, buttons, and checkboxes."
                },
                {
                    question: "Which input type is used to create a password field?",
                    options: [
                        "text",
                        "password",
                        "secure",
                        "private"
                    ],
                    correct: 1,
                    explanation: "The input type 'password' masks the entered text for security."
                },
                {
                    question: "How do you include JavaScript in an HTML file?",
                    options: [
                        "&lt;script&gt; inside the &lt;head&gt; or &lt;body&gt;",
                        "&lt;js&gt; at the top of the page",
                        "Directly in &lt;meta&gt;",
                        "JavaScript cannot be added to HTML"
                    ],
                    correct: 0,
                    explanation: "JavaScript is included using the &lt;script&gt; tag, either in the &lt;head&gt; or &lt;body&gt; section."
                },
                {
                    question: "How do you link an external CSS file to an HTML document?",
                    options: [
                        "&lt;link rel='stylesheet' href='style.css'&gt;",
                        "&lt;css&gt;style.css&lt;/css&gt;",
                        "&lt;style&gt;link style.css&lt;/style&gt;",
                        "&lt;file&gt;style.css&lt;/file&gt;"
                    ],
                    correct: 0,
                    explanation: "The &lt;link&gt; tag with 'rel=stylesheet' is used to link an external CSS file."
                },
                {
                    question: "Which input type is used for selecting a date?",
                    options: [
                        "text",
                        "date",
                        "datetime-local",
                        "calendar"
                    ],
                    correct: 1,
                    explanation: "The input type 'date' is used to create a date picker in forms."
                },
                {
                    question: "What does the 'method' attribute in a form define?",
                    options: [
                    "The way data is submitted (GET or POST)",
                    "The type of input field",
                    "The color of the form",
                    "The style of the form"
                    ],
                    correct: 0,
                    explanation: "The 'method' attribute specifies how data is sent to the server, either as a URL parameter (GET) or in the request body (POST)."
                    },
                    {
                    question: "In PHP, how do you access form data submitted via POST method?",
                    options: [
                    "$_POST['fieldname']",
                    "$POST['fieldname']",
                    "POST.fieldname",
                    "$data['fieldname']"
                    ],
                    correct: 0,
                    explanation: "$_POST is a PHP superglobal used to collect form data sent with the POST method."
                    },
                    {
                    question: "What attribute is required in a form element to specify where the form data should be sent?",
                    options: [
                    "action",
                    "method",
                    "target",
                    "destination"
                    ],
                    correct: 0,
                    explanation: "The 'action' attribute specifies the URL where the form data should be sent when submitted."
                    },
                    {
                    question: "Which PHP variable is used to collect form data sent with GET method?",
                    options: [
                    "$_GET",
                    "$GET",
                    "GET()",
                    "$_FORM"
                    ],
                    correct: 0,
                    explanation: "$_GET is a PHP superglobal used to collect form data sent via URL parameters."
                    },
                    {
                    question: "What attribute makes an input field required before form submission?",
                    options: [
                    "required",
                    "mandatory",
                    "important",
                    "validate"
                    ],
                    correct: 0,
                    explanation: "The 'required' attribute is used to make an input field mandatory before form submission."
                    },
                    {
                    question: "In PHP, which function is used to check if a form has been submitted?",
                    options: [
                    "isset()",
                    "issubmit()",
                    "submitted()",
                    "checkform()"
                    ],
                    correct: 0,
                    explanation: "isset() function is used to check if a variable is set and not null, commonly used to check form submission."
                    },
                    {
                    question: "What is the purpose of the 'enctype' attribute in forms?",
                    options: [
                    "To specify how form data should be encoded",
                    "To encrypt form data",
                    "To style form elements",
                    "To validate form data"
                    ],
                    correct: 0,
                    explanation: "The 'enctype' attribute specifies how form data should be encoded before sending to the server, especially important for file uploads."
                    },
                    {
                    question: "Which PHP function removes HTML tags from user input?",
                    options: [
                    "strip_tags()",
                    "remove_html()",
                    "clean_input()",
                    "sanitize()"
                    ],
                    correct: 0,
                    explanation: "strip_tags() function strips HTML and PHP tags from a string, useful for cleaning user input."
                    },
                    {
                    question: "What is the purpose of the 'name' attribute in form elements?",
                    options: [
                    "To identify form data in server-side processing",
                    "To style the form element",
                    "To validate form data",
                    "To set placeholder text"
                    ],
                    correct: 0,
                    explanation: "The 'name' attribute is used to identify form fields when the data is sent to the server."
                    },
                    {
                    question: "How do you start a PHP block?",
                    options: [
                        "&lt;?php",
                        "&lt;php&gt;",
                        "&lt;?",
                        "&lt;script php&gt;"
                    ],
                    correct: 0,
                    explanation: "&lt;?php is the standard way to start a PHP code block."
                },
                    {
                    question: "Which attribute in form is used for client-side validation pattern?",
                    options: [
                    "pattern",
                    "validate",
                    "regexp",
                    "check"
                    ],
                    correct: 0,
                    explanation: "The 'pattern' attribute specifies a regular expression pattern for input validation."
                    },
                    {
                    question: "In PHP, which function is used to escape special characters in form input?",
                    options: [
                    "htmlspecialchars()",
                    "escape_string()",
                    "clean_input()",
                    "sanitize()"
                    ],
                    correct: 0,
                    explanation: "htmlspecialchars() converts special characters to HTML entities, preventing XSS attacks."
                    },
                    {
                    question: "What is the default value of the 'method' attribute in HTML forms?",
                    options: [
                    "GET",
                    "POST",
                    "PUT",
                    "None"
                    ],
                    correct: 0,
                    explanation: "If the method attribute is not specified, GET is the default method for form submission."
                    },
                    
                        {
                            question: "What does the 'method' attribute in a form define?",
                            options: [
                                "The way data is submitted (GET or POST)",
                                "The type of input field",
                                "The color of the form",
                                "The style of the form"
                            ],
                            correct: 0,
                            explanation: "The 'method' attribute specifies how data is sent to the server, either as a URL parameter (GET) or in the request body (POST)."
                        },
                        {
                            question: "How do you start a PHP block?",
                            options: [
                                "&lt;?php",
                                "&lt;php&gt;",
                                "&lt;?",
                                "&lt;script php&gt;"
                            ],
                            correct: 0,
                            explanation: "&lt;?php is the standard way to start a PHP code block."
                        },
                        {
                            question: "How do you create a hidden input field in HTML?",
                            options: [
                                "&lt;input type='hidden'&gt;",
                                "&lt;input type='invisible'&gt;",
                                "&lt;hidden&gt;",
                                "&lt;input style='display:none'&gt;"
                            ],
                            correct: 0,
                            explanation: "The type='hidden' attribute creates an invisible input field that stores data."
                        },
                        {
                            question: "How do you create a dropdown list in HTML?",
                            options: [
                                "&lt;select&gt;&lt;option&gt;&lt;/select&gt;",
                                "&lt;dropdown&gt;",
                                "&lt;list&gt;",
                                "&lt;input type='dropdown'&gt;"
                            ],
                            correct: 0,
                            explanation: "The &lt;select&gt; element with &lt;option&gt; elements creates a dropdown list."
                        },
                        {
                            question: "What is the correct way to create a submit button?",
                            options: [
                                "&lt;input type='submit'&gt;",
                                "&lt;submit&gt;",
                                "&lt;button&gt;Submit&lt;/button&gt;",
                                "&lt;input submit&gt;"
                            ],
                            correct: 0,
                            explanation: "&lt;input type='submit'&gt; or &lt;button type='submit'&gt; creates a submit button."
                        },
                        {
                            question: "How do you create a text area in HTML?",
                            options: [
                                "&lt;textarea&gt;&lt;/textarea&gt;",
                                "&lt;input type='textarea'&gt;",
                                "&lt;textbox&gt;",
                                "&lt;input type='textbox'&gt;"
                            ],
                            correct: 0,
                            explanation: "The &lt;textarea&gt; element creates a multi-line text input field."
                        },
                        {
                            question: "How do you create a checkbox in HTML?",
                            options: [
                                "&lt;input type='checkbox'&gt;",
                                "&lt;checkbox&gt;",
                                "&lt;check&gt;",
                                "&lt;input check&gt;"
                            ],
                            correct: 0,
                            explanation: "&lt;input type='checkbox'&gt; creates a checkbox input element."
                        },
                        {
                            question: "What's the correct way to create a form?",
                            options: [
                                "&lt;form action='process.php' method='post'&gt;",
                                "&lt;form&gt;",
                                "&lt;makeform&gt;",
                                "&lt;newform&gt;"
                            ],
                            correct: 0,
                            explanation: "A form requires the action attribute to specify where to send the data and method to specify how to send it."
                        },
                        {
                            question: "How do you create a radio button?",
                            options: [
                                "&lt;input type='radio' name='group1'&gt;",
                                "&lt;radio&gt;",
                                "&lt;input radio&gt;",
                                "&lt;radiobutton&gt;"
                            ],
                            correct: 0,
                            explanation: "&lt;input type='radio'&gt; creates a radio button, name attribute groups related buttons."
                        },
                        {
                            question: "How do you create a password field?",
                            options: [
                                "&lt;input type='password'&gt;",
                                "&lt;password&gt;",
                                "&lt;input password&gt;",
                                "&lt;passcode&gt;"
                            ],
                            correct: 0,
                            explanation: "&lt;input type='password'&gt; creates a password field that masks input."
                        },
                        
                                {
                                    "question": "What's the correct way to create a form?",
                                    "options": [
                                        "&lt;form action='process.php' method='post'&gt;",
                                        "&lt;form&gt;",
                                        "&lt;makeform&gt;",
                                        "&lt;newform&gt;"
                                    ],
                                    "correct": 0,
                                    "explanation": "A form requires the action attribute to specify where to send the data and method to specify how to send it."
                                },
                                {
                                    "question": "Which input type is used for password fields that mask characters?",
                                    "options": [
                                        "&lt;input type='text'&gt;",
                                        "&lt;input type='password'&gt;",
                                        "&lt;input type='secure'&gt;",
                                        "&lt;input type='hidden'&gt;"
                                    ],
                                    "correct": 1,
                                    "explanation": "The 'password' type ensures that characters are replaced with asterisks or dots for security when typing."
                                },
                                {
                                    "question": "What PHP function is used to retrieve form data sent via POST method?",
                                    "options": [
                                        "get_form_data()",
                                        "$_GET[]",
                                        "$_POST[]",
                                        "retrieve_post()"
                                    ],
                                    "correct": 2,
                                    "explanation": "$_POST is a superglobal array in PHP that contains all data sent through a POST request."
                                },
                                {
                                    "question": "Which attribute makes a form field mandatory?",
                                    "options": [
                                        "required",
                                        "mandatory",
                                        "needed",
                                        "must-fill"
                                    ],
                                    "correct": 0,
                                    "explanation": "The 'required' attribute prevents form submission if the field is empty, ensuring data completeness."
                                },
                                {
                                    "question": "In PHP, how do you validate if a form field is not empty?",
                                    "options": [
                                        "if (form_field != '')",
                                        "if (!empty($form_field))",
                                        "if (isset($form_field))",
                                        "if (length($form_field) > 0)"
                                    ],
                                    "correct": 1,
                                    "explanation": "The empty() function checks if a variable is empty, which includes null, false, 0, '', and unset variables."
                                },
                                {
                                    "question": "Which method is generally more secure for sending sensitive information?",
                                    "options": [
                                        "GET",
                                        "POST",
                                        "HEAD",
                                        "PUT"
                                    ],
                                    "correct": 1,
                                    "explanation": "POST method sends data in the HTTP request body, making it less visible and more secure than GET, which sends data in the URL."
                                },
                                {
                                    "question": "What PHP function sanitizes user input to prevent SQL injection?",
                                    "options": [
                                        "clean_input()",
                                        "mysqli_real_escape_string()",
                                        "sanitize_data()",
                                        "protect_query()"
                                    ],
                                    "correct": 1,
                                    "explanation": "mysqli_real_escape_string() escapes special characters in a string for use in an SQL statement, helping prevent SQL injection."
                                },
                                    {
                                        question: "What is the difference between GET and POST methods in form submission?",
                                        options: [
                                            "GET sends data in URL, POST sends in request body",
                                            "GET is faster than POST",
                                            "POST is only for text data",
                                            "GET can send more data than POST"
                                        ],
                                        correct: 0,
                                        explanation: "GET method appends form data to the URL, making it visible and limited in length. POST sends data in the HTTP request body, allowing larger, more secure data transmission. Use GET for non-sensitive, small data and POST for sensitive or large data submissions."
                                    },
                                    {
                                        question: "How do you validate email input in HTML5?",
                                        options: [
                                            "&lt;input type='email'&gt;",
                                            "&lt;input type='text' pattern='email'&gt;",
                                            "&lt;email-input&gt;",
                                            "&lt;input validate='email'&gt;"
                                        ],
                                        correct: 0,
                                        explanation: "The type='email' attribute provides built-in email validation in HTML5. It checks for a basic email format (contains @ and domain) and works across modern browsers, providing both client-side validation and semantic meaning to the input."
                                    },
                                    {
                                        question: "What is XSS (Cross-Site Scripting) in web forms?",
                                        options: [
                                            "A security vulnerability where malicious scripts can be injected",
                                            "A type of form validation",
                                            "A database protection method",
                                            "A CSS styling technique"
                                        ],
                                        correct: 0,
                                        explanation: "XSS is a security exploit where attackers inject malicious client-side scripts into web pages. In form contexts, users might input scripts that execute in other users' browsers, potentially stealing data or performing unauthorized actions. Prevention involves input sanitization and using functions like htmlspecialchars()."
                                    },
                                    {
                                        question: "How do you prevent SQL injection in PHP form processing?",
                                        options: [
                                            "Use prepared statements",
                                            "Always use md5() for passwords",
                                            "Disable all user inputs",
                                            "Use global variables"
                                        ],
                                        correct: 0,
                                        explanation: "Prepared statements separate SQL logic from data, using parameterized queries. This approach prevents attackers from manipulating SQL queries by inserting malicious code. PDO and mysqli offer prepared statement support, creating a safer database interaction method."
                                    },
                                    {
                                        question: "What does the 'filter_var()' function do in PHP?",
                                        options: [
                                            "Validate and sanitize variables",
                                            "Create random variables",
                                            "Encrypt variables",
                                            "Compare variables"
                                        ],
                                        correct: 0,
                                        explanation: "filter_var() is a powerful PHP function for validating and sanitizing variables. It can check email formats, integer ranges, URL validity, and more. For example, filter_var($email, FILTER_VALIDATE_EMAIL) checks if an email is correctly formatted."
                                    },
                                    {
                                        question: "What is CSRF (Cross-Site Request Forgery)?",
                                        options: [
                                            "An attack that tricks users into performing unwanted actions",
                                            "A form validation method",
                                            "A PHP security function",
                                            "A type of database protection"
                                        ],
                                        correct: 0,
                                        explanation: "CSRF is an attack where malicious websites force users to execute unwanted actions on another site where they're authenticated. Prevention involves using unique tokens with each form submission, ensuring the request originates from your actual form."
                                    },
                                    {
                                        question: "How do you handle file uploads securely in PHP?",
                                        options: [
                                            "Use $_FILES superglobal and validate file types",
                                            "Allow all file uploads",
                                            "Store files directly in web root",
                                            "Use GET method for uploads"
                                        ],
                                        correct: 0,
                                        explanation: "Secure file uploads involve: using $_FILES to access uploaded files, checking file types/extensions, limiting file size, generating unique filenames, and storing files outside web root. Always validate and sanitize uploaded files to prevent security risks."
                                    },
                                    {
                                        question: "What is the purpose of 'autocomplete' attribute in form inputs?",
                                        options: [
                                            "Help browsers suggest previous input values",
                                            "Automatically fill form with default values",
                                            "Create dropdown suggestions",
                                            "Validate form inputs"
                                        ],
                                        correct: 0,
                                        explanation: "The autocomplete attribute allows browsers to remember and suggest previous input values. It can be set to 'on' or 'off', helping users fill forms faster while providing control over data persistence."
                                    },
                                    {
                                        question: "How do you handle multiple file uploads in HTML?",
                                        options: [
                                            "&lt;input type='file' multiple&gt;",
                                            "&lt;input type='file' array&gt;",
                                            "&lt;file-upload multiple&gt;",
                                            "&lt;input type='files'&gt;"
                                        ],
                                        correct: 0,
                                        explanation: "The 'multiple' attribute on file input allows selecting multiple files in a single upload. In PHP, this creates an array in $_FILES that you can iterate through, enabling complex file upload scenarios."
                                    },
                                    {
                                        question: "What is form accessibility in web development?",
                                        options: [
                                            "Designing forms usable by people with disabilities",
                                            "Making forms load faster",
                                            "Reducing form complexity",
                                            "Encrypting form data"
                                        ],
                                        correct: 0,
                                        explanation: "Form accessibility ensures people with disabilities can understand and interact with forms. Key practices include using proper labels, providing clear error messages, supporting screen readers, and ensuring keyboard navigation works seamlessly."
                                    },
                                        {
                                            question: "What is the purpose of the 'novalidate' attribute in HTML5 forms?",
                                            options: [
                                                "Disable browser's built-in form validation",
                                                "Make form fields invisible",
                                                "Prevent form submission",
                                                "Create a read-only form"
                                            ],
                                            correct: 0,
                                            explanation: "The 'novalidate' attribute tells the browser to skip its default validation checks. This is useful when you want to implement custom JavaScript validation or need to bypass browser-specific validation constraints. It gives developers more control over form validation logic."
                                        },
                                        {
                                            question: "How do you implement file upload size limits in PHP?",
                                            options: [
                                                "Check php.ini settings and $_FILES['filesize']",
                                                "Use file_get_size() function",
                                                "Always limit to 2MB",
                                                "Disable file uploads"
                                            ],
                                            correct: 0,
                                            explanation: "File upload size limits are controlled by PHP configuration settings like upload_max_filesize and post_max_size in php.ini. In code, you can check $_FILES['userfile']['size'] to verify the uploaded file's size before processing, preventing oversized file uploads."
                                        },
                                        {
                                            question: "What is the purpose of the 'accept' attribute in file input?",
                                            options: [
                                                "Restrict file types users can upload",
                                                "Increase upload speed",
                                                "Encrypt file uploads",
                                                "Create file preview"
                                            ],
                                            correct: 0,
                                            explanation: "The 'accept' attribute provides a hint to the browser about acceptable file types. For example, accept='image/*' suggests only image files, or accept='.pdf' limits to PDF files. However, it's not a security measure and should be combined with server-side validation."
                                        },
                                        {
                                            question: "What is form serialization in web development?",
                                            options: [
                                                "Converting form data into a string format",
                                                "Encrypting form data",
                                                "Validating form inputs",
                                                "Creating form templates"
                                            ],
                                            correct: 0,
                                            explanation: "Form serialization is the process of converting form data into a format that can be easily transmitted or stored, typically as a string or JSON. In jQuery, $('.form').serialize() converts form data, while in PHP, json_encode() can serialize form data for storage or AJAX transmission."
                                        },
                                        {
                                            question: "How do you implement client-side form validation using HTML5 and JavaScript?",
                                            options: [
                                                "Use HTML5 attributes and addEventListener for custom validation",
                                                "Disable all form submissions",
                                                "Use only server-side validation",
                                                "Create complex regex patterns"
                                            ],
                                            correct: 0,
                                            explanation: "Client-side validation combines HTML5 attributes like 'required', 'pattern', and 'type' with JavaScript's addEventListener. Use 'invalid' event to create custom error messages, and preventDefault() to stop form submission. Always complement with server-side validation for security."
                                        },
                                        {
                                            question: "What is the difference between 'defer' and 'async' in script loading?",
                                            options: [
                                                "Async loads script without blocking, defer waits for HTML parsing",
                                                "They are the same",
                                                "Defer stops page loading",
                                                "Async only works with external scripts"
                                            ],
                                            correct: 0,
                                            explanation: "Async scripts download in the background and execute as soon as they're available, potentially interrupting page parsing. Defer scripts download in the background but execute only after HTML parsing is complete, maintaining script order and preventing render-blocking."
                                        },
                                        {
                                            question: "How do you implement a file upload progress bar in PHP?",
                                            options: [
                                                "Use AJAX with XMLHttpRequest or FormData API",
                                                "Use CSS animations",
                                                "Disable file uploads",
                                                "Use server-side tracking only"
                                            ],
                                            correct: 0,
                                            explanation: "Implement file upload progress using XMLHttpRequest or the FormData API. Create an event listener for 'progress' event to track upload status. On the client-side, use JavaScript to update a progress bar. Server-side, PHP can track file upload progress using session variables or temporary files."
                                        },
                                        {
                                            question: "What are the security implications of using autocomplete in forms?",
                                            options: [
                                                "Potential privacy risks if sensitive data is saved",
                                                "Completely secure for all data types",
                                                "Only affects password fields",
                                                "No security implications"
                                            ],
                                            correct: 0,
                                            explanation: "Autocomplete can pose privacy risks on shared or public computers. Sensitive information like credit cards or personal details might be saved in browser history. Use autocomplete='off' for sensitive fields, and educate users about clearing browser data on shared devices."
                                        },
                                        {
                                            question: "How do you handle internationalization in web forms?",
                                            options: [
                                                "Use HTML5 attributes and PHP localization techniques",
                                                "Translate everything manually",
                                                "Use only English",
                                                "Disable multi-language support"
                                            ],
                                            correct: 0,
                                            explanation: "Internationalization involves using HTML5's 'lang' attribute, implementing PHP's gettext() for translations, and using Unicode (UTF-8) encoding. Consider right-to-left languages, different date/number formats, and culturally appropriate form designs."
                                        },
                                        {
                                            question: "What is the purpose of the 'datalist' element in HTML5?",
                                            options: [
                                                "Provide autocomplete suggestions for input fields",
                                                "Create dropdown menus",
                                                "Validate form inputs",
                                                "Style form elements"
                                            ],
                                            correct: 0,
                                            explanation: "The 'datalist' element creates an intelligent autocomplete feature. It allows users to choose from predefined options or enter custom values. This provides flexibility beyond traditional select dropdowns, improving user experience while maintaining data consistency."
                                        },
                                        {
                                            question: "How do you prevent double form submissions in PHP?",
                                            options: [
                                                "Use session tokens and POST-REDIRECT-GET pattern",
                                                "Disable form after first submission",
                                                "Use JavaScript to block resubmission",
                                                "Always use AJAX submissions"
                                            ],
                                            correct: 0,
                                            explanation: "Prevent double submissions by generating unique session tokens for each form. After successful submission, use the Post-Redirect-Get pattern to redirect users and clear the token. This approach prevents accidental resubmissions and potential duplicate database entries."
                                        },
                                    
                                
                            
            
                {
                    question: "How do you write inline CSS styles in HTML?",
                    options: [
                        "Using the 'style' attribute inside an HTML tag",
                        "Using &lt;css&gt;",
                        "Using &lt;script&gt;",
                        "CSS cannot be inline"
                    ],
                    correct: 0,
                    explanation: "The 'style' attribute allows you to apply inline CSS styles directly to an HTML element."
                },
                {
                    question: "Where is the recommended place to include JavaScript files?",
                    options: [
                        "At the end of the &lt;body&gt;",
                        "In the &lt;head&gt;",
                        "Inside the &lt;div&gt; tag",
                        "Anywhere in the HTML document"
                    ],
                    correct: 0,
                    explanation: "Including JavaScript at the end of the &lt;body&gt; ensures the page loads fully before scripts are executed."
                },
                {
                    question: "Which input type is used to upload a file?",
                    options: [
                        "file",
                        "upload",
                        "text",
                        "binary"
                    ],
                    correct: 0,
                    explanation: "The input type 'file' allows users to select and upload files."
                },
                {
                    question: "What is the purpose of the 'action' attribute in a form?",
                    options: [
                        "Specifies the URL to send form data to",
                        "Defines the method of submission",
                        "Adds styling to the form",
                        "Creates a table layout"
                    ],
                    correct: 0,
                    explanation: "The 'action' attribute specifies the URL where form data is submitted."
                },
                {
                    question: "What does the 'method' attribute in a form define?",
                    options: [
                        "The way data is submitted (GET or POST)",
                        "The type of input field",
                        "The color of the form",
                        "The style of the form"
                    ],
                    correct: 0,
                    explanation: "The 'method' attribute specifies how data is sent to the server, either as a URL parameter (GET) or in the request body (POST)."
                },
            
            
    
        {
            question: "In 'ftp://files.example.com:21/public/', what protocol is being used?",
            options: [
                "HTTP",
                "HTTPS",
                "FTP",
                "SMTP"
            ],
            correct: 2,
            explanation: "FTP (File Transfer Protocol) is being used, which is a standard protocol for transferring files between computers over a network."
        },
        {
            question: "Which part of 'https://user:password@example.com' represents authentication credentials?",
            options: [
                "https://",
                "user:password@",
                "example.com",
                "None of these"
            ],
            correct: 1,
            explanation: "The 'user:password@' portion represents basic authentication credentials in the URL (though this practice is not recommended for security reasons)."
        },
        {
            question: "What's the maximum recommended length for a URL?",
            options: [
                "2048 characters",
                "1000 characters",
                "500 characters",
                "No limit"
            ],
            correct: 0,
            explanation: "While there's no official limit, most browsers support URLs up to 2048 characters. Longer URLs might cause compatibility issues."
        },
        {
            question: "In 'https://sub1.sub2.example.com', what is 'sub1.sub2'?",
            options: [
                "Multiple subdomains",
                "Path parameters",
                "Domain extensions",
                "Server locations"
            ],
            correct: 0,
            explanation: "sub1.sub2 are multiple subdomains, where sub1 is a subdomain of sub2.example.com, and sub2 is a subdomain of example.com."
        },
        {
            question: "What does the '.co.uk' represent in 'https://example.co.uk'?",
            options: [
                "A single TLD",
                "A country code TLD with second-level domain",
                "A subdomain",
                "A protocol extension"
            ],
            correct: 1,
            explanation: ".co.uk is a combination where .uk is the country code TLD (United Kingdom) and .co is a second-level domain for commercial entities."
        },
        {
            question: "In 'https://example.com/path;param1=value1', what is ';param1=value1'?",
            options: [
                "Query parameters",
                "Matrix parameters",
                "Fragment identifier",
                "Path extension"
            ],
            correct: 1,
            explanation: "These are matrix parameters, an alternative to query parameters that are part of the path segment."
        },
        {
            question: "What's the purpose of '//' in 'https://example.com'?",
            options: [
                "To separate the protocol from the host",
                "To indicate the root directory",
                "To show it's a secure connection",
                "To separate subdomains"
            ],
            correct: 0,
            explanation: "The // separates the protocol (scheme) from the host portion of the URL."
        },
        {
            question: "In 'data:text/html,<h1>Hello</h1>', what type of URL is this?",
            options: [
                "Web URL",
                "Data URL",
                "Resource URL",
                "Local URL"
            ],
            correct: 1,
            explanation: "This is a data URL that contains actual content (in this case, HTML) rather than pointing to a resource location."
        },
        {
            question: "What's the difference in 'example.com/path/' vs 'example.com/path'?",
            options: [
                "They're exactly the same",
                "The first indicates a directory, the second might be a file",
                "The first is invalid",
                "The second is invalid"
            ],
            correct: 1,
            explanation: "The trailing slash typically indicates a directory, while no trailing slash might indicate a file or resource."
        },
        {
            question: "In 'https://example.com/products/?sort=asc&page=2', how many query parameters are there?",
            options: [
                "One",
                "Two",
                "Three",
                "None"
            ],
            correct: 1,
            explanation: "There are two query parameters: 'sort=asc' and 'page=2', separated by the & symbol."
        },
        {
            question: "What does percent-encoding %20 represent in a URL?",
            options: [
                "A space character",
                "A percentage sign",
                "A special character",
                "An encoded slash"
            ],
            correct: 0,
            explanation: "%20 is the percent-encoded representation of a space character in URLs."
        },
        {
            question: "In 'https://example.com:8080/path', why is 8080 used?",
            options: [
                "Version number",
                "Custom port number",
                "Protocol identifier",
                "Server ID"
            ],
            correct: 1,
            explanation: "8080 is a custom port number, commonly used for development servers or when running multiple services on the same host."
        },
        {
            question: "What's wrong with this URL: 'https://example.com/path?name=John Doe'?",
            options: [
                "Nothing wrong",
                "Space should be encoded",
                "Missing protocol",
                "Invalid domain"
            ],
            correct: 1,
            explanation: "The space in 'John Doe' should be percent-encoded as 'John%20Doe' or '+' in query parameters."
        },
        {
            question: "In 'https://example.com/en-US/products', what does 'en-US' typically represent?",
            options: [
                "A product category",
                "Language and region code",
                "Server location",
                "API version"
            ],
            correct: 1,
            explanation: "en-US typically represents language (English) and region (United States) in internationalized URLs."
        },
        {
            question: "What's the purpose of '..' in '../images/logo.png'?",
            options: [
                "File extension",
                "Parent directory reference",
                "Root directory",
                "Current directory"
            ],
            correct: 1,
            explanation: ".. refers to the parent directory, allowing navigation up one level in the directory structure."
        },
        {
            question: "What's the purpose of 'tel:+1-234-567-8900' URL?",
            options: [
                "To validate phone numbers",
                "To store contact information",
                "To initiate phone calls",
                "To send SMS messages"
            ],
            correct: 2,
            explanation: "The tel: protocol is used to initiate phone calls, especially on mobile devices."
        },
        {
            question: "In 'example.com/api/v2/users', what does 'v2' typically indicate?",
            options: [
                "Version 2 of the API",
                "Visual design 2",
                "Validation level 2",
                "Virtual server 2"
            ],
            correct: 0,
            explanation: "v2 typically indicates Version 2 of an API, allowing multiple API versions to coexist."
        },
        {
            question: "What type of URL is 'file:///C:/Users/document.pdf'?",
            options: [
                "Web URL",
                "Local file system URL",
                "Network share URL",
                "Cloud storage URL"
            ],
            correct: 1,
            explanation: "This is a local file system URL using the file:// protocol to access files on the local computer."
        },
        {
            question: "In a URL, what's the maximum recommended length for the hostname portion?",
            options: [
                "255 characters",
                "63 characters per label, 253 total",
                "1000 characters",
                "No limit"
            ],
            correct: 1,
            explanation: "Each label (part between dots) can be up to 63 characters, with a total hostname length up to 253 characters."
        },
            {
                question: "Which payment method is most commonly used for e-commerce in Nepal as of 2024?",
                options: [
                    "Cash on Delivery (COD)",
                    "International Credit Cards",
                    "eSewa",
                    "Bank Transfer"
                ],
                correct: 0,
                explanation: "Cash on Delivery remains the most popular payment method in Nepal due to trust issues and limited digital payment adoption."
            },
            {
                question: "What is 'Daraz Sajilo'?",
                options: [
                    "A payment gateway",
                    "A delivery service for remote areas",
                    "An interest-free EMI service",
                    "A seller training program"
                ],
                correct: 2,
                explanation: "Daraz Sajilo is an EMI (Equated Monthly Installment) service that allows customers to purchase products in installments without interest."
            },
            {
                question: "Which document is mandatory for individual sellers to register on major Nepali e-commerce platforms?",
                options: [
                    "PAN Card",
                    "Citizenship Certificate",
                    "VAT Registration",
                    "Company Registration"
                ],
                correct: 1,
                explanation: "Nepali citizenship certificate is a mandatory document for seller verification on most e-commerce platforms in Nepal."
            },
            {
                question: "What is the maximum amount allowed for digital wallet transactions in Nepal per day?",
                options: [
                    "Rs. 100,000",
                    "Rs. 200,000",
                    "Rs. 500,000",
                    "Rs. 1,000,000"
                ],
                correct: 1,
                explanation: "As per Nepal Rastra Bank regulations, digital wallets have a daily transaction limit of Rs. 200,000."
            },
            {
                question: "Which logistics challenge is most significant for e-commerce in Nepal?",
                options: [
                    "Difficult geographical terrain",
                    "International shipping",
                    "Warehouse capacity",
                    "Package tracking"
                ],
                correct: 0,
                explanation: "Nepal's diverse geographical terrain, from mountains to plains, makes last-mile delivery particularly challenging for e-commerce operations."
            },
            {
                question: "What is 'Hamro bazar'?",
                options: [
                    "A grocery delivery app",
                    "A local product marketplace",
                    "A wholesale platform",
                    "A digital payment system"
                ],
                correct: 1,
                explanation: "Hamro bazar is a marketplace platform focusing on promoting local Nepali products and sellers."
            },
            {
                question: "Which regulation affects online businesses in Nepal regarding return policies?",
                options: [
                    "7-day mandatory return policy",
                    "No mandatory return policy",
                    "30-day mandatory return policy",
                    "15-day mandatory return policy"
                ],
                correct: 1,
                explanation: "Nepal currently doesn't have mandatory return policy regulations for e-commerce, allowing platforms to set their own policies."
            },
            {
                question: "What is typically excluded from Cash on Delivery (COD) in Nepal?",
                options: [
                    "Electronics above Rs. 50,000",
                    "Food items",
                    "Clothing",
                    "Books"
                ],
                correct: 0,
                explanation: "Most e-commerce platforms restrict COD for high-value electronics to reduce return fraud and ensure serious buyers."
            },
            {
                question: "Which festival season sees the highest e-commerce sales in Nepal?",
                options: [
                    "Dashain-Tihar",
                    "New Year",
                    "Holi",
                    "Teej"
                ],
                correct: 0,
                explanation: "The Dashain-Tihar festival season traditionally sees the highest sales volume due to festive shopping and promotional offers."
            },
            {
                question: "What percentage of Nepal's internet users shop online (as of 2024)?",
                options: [
                    "Less than 10%",
                    "10-20%",
                    "20-30%",
                    "More than 30%"
                ],
                correct: 1,
                explanation: "Approximately 10-20% of internet users in Nepal shop online, showing growth potential in the e-commerce sector."
            },
            {
                question: "Which category has the highest online sales volume in Nepal?",
                options: [
                    "Electronics",
                    "Fashion",
                    "Groceries",
                    "Books"
                ],
                correct: 1,
                explanation: "Fashion items, including clothing and accessories, consistently show the highest sales volume in Nepali e-commerce."
            },
            {
                question: "What is 'Connect IPS' commonly used for in Nepali e-commerce?",
                options: [
                    "Social media marketing",
                    "Direct bank payments",
                    "Delivery tracking",
                    "Customer support"
                ],
                correct: 1,
                explanation: "Connect IPS is a popular digital payment system that allows direct bank-to-bank transfers for online purchases."
            },
            {
                question: "Which document is required for businesses to sell food items online in Nepal?",
                options: [
                    "DFTQC certification",
                    "VAT registration only",
                    "PAN card only",
                    "No specific requirement"
                ],
                correct: 0,
                explanation: "Department of Food Technology and Quality Control (DFTQC) certification is required for selling food items online."
            },
            {
                question: "What is the primary challenge for international e-commerce shipments to Nepal?",
                options: [
                    "High customs duties",
                    "Language barrier",
                    "Payment processing",
                    "Internet connectivity"
                ],
                correct: 0,
                explanation: "High customs duties and complex clearance processes are major challenges for international e-commerce shipments to Nepal."
            },
            {
                question: "Which popular international e-commerce platform is NOT officially available in Nepal?",
                options: [
                    "Amazon",
                    "Daraz",
                    "SastoDeal",
                    "Gyapu"
                ],
                correct: 0,
                explanation: "Amazon doesn't have official operations in Nepal, though some sellers offer import services from Amazon."
            },
          
                {
                    question: "What is the fundamental difference between static and dynamic web pages?",
                    options: [
                        "Static pages are faster than dynamic pages",
                        "Static pages have fixed content while dynamic pages generate content on request",
                        "Static pages don't use HTML",
                        "Dynamic pages don't work offline"
                    ],
                    correct: 1,
                    explanation: "Static pages serve the same content to all users, while dynamic pages generate content based on user requests, database queries, or other variables."
                },
                {
                    question: "Which statement about search engine crawlers is true?",
                    options: [
                        "They can always access password-protected content",
                        "They ignore robots.txt files",
                        "They follow links to discover new pages",
                        "They only crawl pages once"
                    ],
                    correct: 2,
                    explanation: "Search engine crawlers discover new content by following links from known pages to new pages, building a web of connections."
                },
                {
                    question: "What is the purpose of a sitemap.xml file?",
                    options: [
                        "To style the website",
                        "To guide users through the site",
                        "To help search engines discover and index pages",
                        "To store user data"
                    ],
                    correct: 2,
                    explanation: "sitemap.xml provides search engines with information about pages, videos, and other files on a site, and the relationships between them."
                },
                {
                    question: "Which technology typically identifies a dynamic web page?",
                    options: [
                        "File extension .html",
                        "File extension .jpg",
                        "URL parameters with ? and &",
                        "CSS styling"
                    ],
                    correct: 2,
                    explanation: "Dynamic pages often use URL parameters (after ? and separated by &) to pass data that determines the content to be displayed."
                },
                {
                    question: "What is 'client-side rendering'?",
                    options: [
                        "When the server creates the page",
                        "When the browser assembles the page using JavaScript",
                        "When images are compressed",
                        "When CSS styles are applied"
                    ],
                    correct: 1,
                    explanation: "Client-side rendering occurs when the browser uses JavaScript to construct the page content after receiving data from the server."
                },
                {
                    question: "What does SEO stand for and what is its main purpose?",
                    options: [
                        "Search Engine Operations - to maintain search engines",
                        "Search Engine Optimization - to improve website visibility in search results",
                        "Search Engine Order - to sort websites",
                        "Search Engine Output - to display search results"
                    ],
                    correct: 1,
                    explanation: "SEO (Search Engine Optimization) involves techniques to improve a website's visibility and ranking in search engine results pages."
                },
                {
                    question: "Which element is crucial for search engine optimization?",
                    options: [
                        "Colorful design",
                        "Social media links",
                        "Meta description",
                        "Large images"
                    ],
                    correct: 2,
                    explanation: "Meta descriptions provide search engines with summaries of web pages and appear in search results, affecting click-through rates."
                },
                {
                    question: "What is the primary advantage of static web pages?",
                    options: [
                        "Better user interaction",
                        "Faster loading and better security",
                        "More features",
                        "Better database integration"
                    ],
                    correct: 1,
                    explanation: "Static pages typically load faster because they don't require server-side processing, and they're generally more secure due to fewer attack vectors."
                },
                {
                    question: "What is a 'crawler trap' in web development?",
                    options: [
                        "A security feature",
                        "An infinite loop of links that traps search engine crawlers",
                        "A type of firewall",
                        "A backup system"
                    ],
                    correct: 1,
                    explanation: "A crawler trap is a situation where endless combinations of URLs or infinite recursion can trap search engine crawlers in an endless crawling loop."
                },
                {
                    question: "What is the fundamental difference between Web 2.0 and Web 3.0?",
                    options: [
                        "Web 3.0 is faster",
                        "Web 3.0 is decentralized and user-owned",
                        "Web 3.0 uses more graphics",
                        "Web 3.0 is cheaper to use"
                    ],
                    correct: 1,
                    explanation: "Web 3.0 emphasizes decentralization, blockchain technology, and user ownership of data and digital assets, unlike Web 2.0's centralized model."
                },
                {
                    question: "What is a blockchain?",
                    options: [
                        "A type of cryptocurrency",
                        "A decentralized, distributed ledger",
                        "An online banking system",
                        "A computer program"
                    ],
                    correct: 1,
                    explanation: "Blockchain is a distributed ledger technology that records transactions across multiple computers in a way that ensures security and transparency."
                },
                {
                    question: "What is a smart contract?",
                    options: [
                        "A legal document",
                        "Self-executing code on blockchain",
                        "A type of cryptocurrency",
                        "A digital signature"
                    ],
                    correct: 1,
                    explanation: "Smart contracts are self-executing contracts with terms directly written into code that automatically execute when predetermined conditions are met."
                },
                {
                    question: "What is a DAO?",
                    options: [
                        "Digital Art Organization",
                        "Decentralized Autonomous Organization",
                        "Data Analysis Operation",
                        "Digital Asset Ownership"
                    ],
                    correct: 1,
                    explanation: "DAOs are organizations represented by rules encoded as computer programs, transparent and controlled by network participants rather than central leadership."
                },
                {
                    question: "What is a non-fungible token (NFT)?",
                    options: [
                        "A type of cryptocurrency",
                        "A unique digital asset with proof of ownership",
                        "A computer file",
                        "A digital payment method"
                    ],
                    correct: 1,
                    explanation: "NFTs are unique digital tokens that represent ownership of specific digital or physical assets, verified on a blockchain."
                },
                {
                    question: "What is 'proof of work'?",
                    options: [
                        "Employment verification",
                        "Consensus mechanism used in blockchain mining",
                        "Digital signature",
                        "Work permit"
                    ],
                    correct: 1,
                    explanation: "Proof of work is a consensus mechanism requiring computational effort to validate transactions and create new blocks in a blockchain."
                },
                {
                    question: "What is a crypto wallet?",
                    options: [
                        "A physical wallet",
                        "Software/hardware for storing cryptocurrency private keys",
                        "An online bank account",
                        "A password manager"
                    ],
                    correct: 1,
                    explanation: "A crypto wallet stores private keys used to access and manage cryptocurrency holdings, not the actual cryptocurrencies themselves."
                },
                {
                    question: "What is DeFi?",
                    options: [
                        "Digital Finance",
                        "Decentralized Finance",
                        "Defined Financial Index",
                        "Digital Financial Institution"
                    ],
                    correct: 1,
                    explanation: "DeFi refers to financial services using smart contracts and blockchain technology, operating without traditional financial intermediaries."
                },
                {
                    question: "What is 'gas' in blockchain transactions?",
                    options: [
                        "Fuel for computers",
                        "Transaction fee paid to process operations",
                        "Energy consumption",
                        "Network speed"
                    ],
                    correct: 1,
                    explanation: "Gas refers to the fee required to successfully conduct a transaction or execute a contract on blockchain networks like Ethereum."
                },
                {
                    question: "What is a dApp?",
                    options: [
                        "Digital Application",
                        "Decentralized Application",
                        "Data Application",
                        "Download Application"
                    ],
                    correct: 1,
                    explanation: "dApps are applications that run on decentralized peer-to-peer networks rather than centralized servers."
                },
                {
                    question: "What is 'mining' in cryptocurrency?",
                    options: [
                        "Digging for digital coins",
                        "Process of validating transactions and adding them to blockchain",
                        "Creating new cryptocurrencies",
                        "Buying cryptocurrencies"
                    ],
                    correct: 1,
                    explanation: "Mining involves using computational power to validate transactions and add new blocks to the blockchain, often rewarded with cryptocurrency."
                },
                {
                    question: "What is a 'hard fork' in blockchain?",
                    options: [
                        "A mining tool",
                        "A major protocol change creating two separate chains",
                        "A type of crypto wallet",
                        "A trading strategy"
                    ],
                    correct: 1,
                    explanation: "A hard fork is a radical change to a network's protocol that makes previously invalid blocks/transactions valid (or vice-versa)."
                },
                {
                    question: "What is the 'metaverse'?",
                    options: [
                        "A social media platform",
                        "A virtual shared space merging physical and digital worlds",
                        "A type of cryptocurrency",
                        "A computer game"
                    ],
                    correct: 1,
                    explanation: "The metaverse is a network of 3D virtual worlds focused on social connection, often incorporating Web 3.0 technologies."
                },
                {
                    question: "What is 'proof of stake'?",
                    options: [
                        "Ownership proof",
                        "Consensus mechanism based on coin ownership",
                        "Mining method",
                        "Trading strategy"
                    ],
                    correct: 1,
                    explanation: "Proof of stake is a consensus mechanism where validators stake cryptocurrency to verify transactions, using less energy than proof of work."
                },
                {
                    question: "What is a 'seed phrase'?",
                    options: [
                        "A password",
                        "A recovery phrase for crypto wallets",
                        "A trading term",
                        "A type of smart contract"
                    ],
                    correct: 1,
                    explanation: "A seed phrase is a series of words that can be used to recover cryptocurrency wallet access if the original access method is lost."
                },
                {
                    question: "What is 'tokenization' in Web 3.0?",
                    options: [
                        "Password creation",
                        "Converting rights to an asset into digital tokens",
                        "Data encryption",
                        "File compression"
                    ],
                    correct: 1,
                    explanation: "Tokenization is the process of converting rights to an asset into a digital token on a blockchain."
                },
               
                    {
                        question: "What is a browser cache?",
                        options: [
                            "A password storage system",
                            "Temporary storage of web page resources",
                            "A browser's settings menu",
                            "An email inbox"
                        ],
                        correct: 1,
                        explanation: "Browser cache temporarily stores web resources (images, HTML, CSS, etc.) to speed up subsequent visits to the same pages."
                    },
                    {
                        question: "What's the purpose of 'Incognito' or 'Private' browsing mode?",
                        options: [
                            "Makes you anonymous online",
                            "Prevents websites from working",
                            "Doesn't save browsing history and cookies for that session",
                            "Makes browsing faster"
                        ],
                        correct: 2,
                        explanation: "Private browsing mode doesn't save history, cookies, or form data from the browsing session, but doesn't make you anonymous online."
                    },
                    {
                        question: "What is a browser's rendering engine responsible for?",
                        options: [
                            "Playing music",
                            "Converting HTML/CSS into visual display",
                            "Managing passwords",
                            "Downloading files"
                        ],
                        correct: 1,
                        explanation: "The rendering engine interprets HTML, CSS, and other resources to display the visual representation of a web page."
                    },
                    {
                        question: "What is WebKit?",
                        options: [
                            "A web development tool",
                            "A browser rendering engine",
                            "A programming language",
                            "An operating system"
                        ],
                        correct: 1,
                        explanation: "WebKit is a browser engine used by Safari and was previously used by Chrome, responsible for rendering web content."
                    },
                    {
                        question: "What are browser extensions?",
                        options: [
                            "Extra hardware components",
                            "Software add-ons that extend browser functionality",
                            "File extensions",
                            "Internet cables"
                        ],
                        correct: 1,
                        explanation: "Browser extensions are software programs that add new features or modify existing browser functionality."
                    },
                    {
                        question: "What is the primary function of a browser's JavaScript engine?",
                        options: [
                            "To display images",
                            "To execute JavaScript code",
                            "To save passwords",
                            "To download files"
                        ],
                        correct: 1,
                        explanation: "The JavaScript engine executes JavaScript code, enabling dynamic content and interactivity on web pages."
                    },
                    {
                        question: "What's the purpose of browser cookies?",
                        options: [
                            "To block ads",
                            "To store user data and preferences",
                            "To speed up downloads",
                            "To protect from viruses"
                        ],
                        correct: 1,
                        explanation: "Cookies store user data, preferences, and login information to enhance the browsing experience and remember user settings."
                    },
                    {
                        question: "What is a browser sandbox?",
                        options: [
                            "A security mechanism isolating web applications",
                            "A development tool",
                            "A children's browser mode",
                            "A download manager"
                        ],
                        correct: 0,
                        explanation: "A sandbox is a security mechanism that isolates running programs to prevent malicious code from affecting the system."
                    },
                    {
                        question: "What is cross-browser compatibility?",
                        options: [
                            "Sharing bookmarks between browsers",
                            "Website working consistently across different browsers",
                            "Installing multiple browsers",
                            "Browser synchronization"
                        ],
                        correct: 1,
                        explanation: "Cross-browser compatibility ensures websites work and look consistent across different web browsers."
                    },
                    {
                        question: "What is a browser's user agent string?",
                        options: [
                            "Username",
                            "Password",
                            "Text identifying the browser to websites",
                            "IP address"
                        ],
                        correct: 2,
                        explanation: "The user agent string identifies the browser, version, and operating system to websites and servers."
                    },
                    {
                        question: "What happens when you clear browser data?",
                        options: [
                            "Computer gets faster",
                            "Removes browsing history, cache, and cookies",
                            "Uninstalls the browser",
                            "Updates the browser"
                        ],
                        correct: 1,
                        explanation: "Clearing browser data removes stored information like history, cache, cookies, and other site data."
                    },
                    {
                        question: "What is the purpose of a browser's address bar?",
                        options: [
                            "Shows current time",
                            "Displays and accepts URLs",
                            "Shows battery status",
                            "Controls volume"
                        ],
                        correct: 1,
                        explanation: "The address bar displays the current URL and allows users to enter URLs or search terms."
                    },
                    {
                        question: "What is a progressive web app (PWA)?",
                        options: [
                            "A mobile app",
                            "A website that can function like a native app",
                            "A browser extension",
                            "A programming language"
                        ],
                        correct: 1,
                        explanation: "PWAs are websites that use modern web capabilities to deliver app-like experiences to users."
                    },
                    {
                        question: "What does SSL/TLS warning in browsers indicate?",
                        options: [
                            "Site is loading slowly",
                            "Potential security risk with the connection",
                            "Browser needs update",
                            "Site is offline"
                        ],
                        correct: 1,
                        explanation: "SSL/TLS warnings indicate potential security issues with the website's security certificate or connection."
                    },
                    {
                        question: "What is browser fingerprinting?",
                        options: [
                            "Security feature",
                            "Technique to identify users based on browser characteristics",
                            "Password manager",
                            "Download method"
                        ],
                        correct: 1,
                        explanation: "Browser fingerprinting collects information about browser configuration and system to create a unique identifier."
                    },
                    {
                        question: "What is a browser's DOM?",
                        options: [
                            "Download Manager",
                            "Document Object Model - representation of page structure",
                            "Digital Output Module",
                            "Display Output Manager"
                        ],
                        correct: 1,
                        explanation: "DOM (Document Object Model) is a programming interface that represents the structure of HTML documents."
                    }
                ,
                {
                    question: "Which HTTP status code should be used for a permanently moved page?",
                    options: [
                        "200",
                        "301",
                        "404",
                        "500"
                    ],
                    correct: 1,
                    explanation: "301 is the HTTP status code for permanent redirects, telling search engines and browsers that a page has permanently moved to a new location."
                },
                {
                    question: "What is the purpose of canonical tags?",
                    options: [
                        "To style web pages",
                        "To indicate the preferred version of duplicate pages",
                        "To compress images",
                        "To encrypt data"
                    ],
                    correct: 1,
                    explanation: "Canonical tags tell search engines which version of similar or duplicate pages should be considered the main version for indexing."
                },
                {
                    question: "What's the difference between 'crawling' and 'indexing'?",
                    options: [
                        "They are the same thing",
                        "Crawling finds pages, indexing analyzes and stores them",
                        "Crawling is faster than indexing",
                        "Indexing happens before crawling"
                    ],
                    correct: 1,
                    explanation: "Crawling is the discovery process of finding pages, while indexing involves analyzing and storing page content for search results."
                },
                {
                    question: "Which factor negatively affects search engine rankings?",
                    options: [
                        "Responsive design",
                        "Duplicate content",
                        "Regular updates",
                        "Valid HTML"
                    ],
                    correct: 1,
                    explanation: "Duplicate content can confuse search engines and dilute ranking signals, potentially leading to lower search rankings."
                },
                {
                    question: "What is 'server-side rendering' (SSR)?",
                    options: [
                        "Loading images on the server",
                        "Generating HTML on the server before sending to client",
                        "Using server-side databases",
                        "Storing files on the server"
                    ],
                    correct: 1,
                    explanation: "SSR involves generating the complete HTML on the server before sending it to the client, improving initial page load and SEO."
                },
                {
                    question: "What is the main purpose of robots.txt?",
                    options: [
                        "To block hackers",
                        "To instruct search engines which pages to crawl",
                        "To improve website speed",
                        "To store robot data"
                    ],
                    correct: 1,
                    explanation: "robots.txt provides instructions to search engine crawlers about which parts of the site should or should not be crawled."
                },
                {
                    question: "What is 'progressive enhancement' in web development?",
                    options: [
                        "Gradually adding new features",
                        "Starting with a basic experience and enhancing for modern browsers",
                        "Using progress bars",
                        "Increasing website speed"
                    ],
                    correct: 1,
                    explanation: "Progressive enhancement is a strategy of building websites that work for everyone at a basic level, then enhancing the experience for users with modern browsers."
                }
            
        
    
];