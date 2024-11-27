const questions = [
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
                            }
                        
                    
                
            
                
];
