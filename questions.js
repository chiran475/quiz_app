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
        question: "Which HTML tag is used for creating links?",
        options: [
            "<link>",
            "<href>",
            "<a>",
            "<url>"
        ],
        correct: 2,
        explanation: "The <a> (anchor) tag is used to create hyperlinks in HTML."
    },
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
    }
];