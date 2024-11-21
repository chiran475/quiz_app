const questions = [
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
            }
        
        
        
];
