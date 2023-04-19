Chapter-1: Inception

Q1:What is Emmet?
Ans:Emmet is a set of plugins for text editors and IDEs that allow for faster and more efficient HTML, XML, and CSS coding. Emmet is based on abbreviations, or shortcuts, that expand into complete HTML or CSS code. This means that instead of typing out long lines of code, developers can use Emmet to quickly generate HTML and CSS code with minimal keystrokes.

Q2:Difference between Library and Franework?
Ans:A library and a framework are both software components used in software development, but there are some key differences between the two:

Inversion of Control: A framework typically provides a pre-defined architecture and a set of rules and constraints that the developer must follow, whereas a library typically provides a set of tools and functions that the developer can use as needed.

Code Control: In a framework, the developer generally writes code that "plugs into" the framework, whereas with a library, the developer writes code that calls the library's functions or methods.

Flexibility: Libraries are typically more flexible and provide more control to the developer than frameworks, which are generally more rigid and have a higher learning curve.

Q3:What is CDN? Why do we use it?
Ans:CDN stands for Content Delivery Network. It is a distributed network of servers that are geographically dispersed around the world to provide faster and more reliable delivery of web content to end-users.

When a user requests content from a website, such as images, videos, or other static files, the request is routed to the nearest server on the CDN. This server then delivers the content to the user from the server location closest to them, reducing the distance the data has to travel and therefore improving the speed and performance of the website.
There are several benefits of using a CDN, including:

Improved website performance: By serving content from a server closer to the user, a CDN can reduce the latency and improve the load times of a website.

Q4:Why is React known as React?
Ans:React is called "React" because of its core feature, which is its ability to "react" or respond dynamically to changes in data. React was originally created by Facebook in 2011 for use in their own web applications, and it was released as an open-source project in 2013.

React's primary goal is to simplify the creation of complex, interactive user interfaces by breaking them down into smaller, reusable components. These components are built using a declarative syntax that allows developers to describe what the interface should look like at any given moment, and React takes care of efficiently updating the DOM (Document Object Model) as needed when the data changes.

The name "React" also reflects the fact that the library is built around the concept of a unidirectional data flow, where changes in data flow down through the component hierarchy, triggering updates and re-renders as necessary. This approach helps to avoid common issues with two-way data binding, such as performance problems and hard-to-debug code.

Q5:What is crossorigin in script tag?
Ans:The crossorigin attribute in the <script> tag is used to specify whether or not a script loaded from a different domain should be allowed to access the resources of the current document.

When a script is loaded from a different domain, the browser may restrict its access to certain resources, such as cookies or local storage, as a security measure to prevent cross-site scripting attacks. The crossorigin attribute allows you to specify whether or not the script should be allowed to bypass these restrictions.

The crossorigin attribute can take one of three values:

anonymous: The script is loaded without any credentials, such as cookies or authentication tokens, and therefore cannot access resources that require authentication.
    use-credentials: The script is loaded with credentials and can access resources that require authentication. However, the server hosting the script must also allow credentials to be passed in order for this to work.

null: The script is loaded without any CORS validation, which is equivalent to not including the attribute at all. This value is only used for same-origin scripts and should not be used for scripts loaded from a different domain.

Q6:What is difference between React and ReactDOM?
 Ans:React is a JavaScript library for building user interfaces. It provides a way to create reusable UI components and manage their state and props. React allows you to create dynamic, high-performance web applications with a declarative and component-based approach. React provides the core functionality for building React applications, including the virtual DOM, component lifecycle methods, and JSX syntax.

ReactDOM, on the other hand, is a library that provides the DOM-specific methods that React needs to interact with the browser DOM. ReactDOM is responsible for rendering React components into the browser DOM and updating them when changes occur. It provides methods like ,ReactDOM.render(), which takes a React component and mounts it to a DOM element,andReactDOM.unmountComponentAtNode(), which unmounts a React component from the DOM.

In short, React is the core library for building user interfaces in a declarative and component-based way, while ReactDOM is the library responsible for rendering React components into the browser DOM and managing their lifecycle.

It's important to note that while React and ReactDOM are separate libraries, they are often used together and are both included when you install React. When you create a React app, you typically import both React and ReactDOM to use them in your code.

Q7:What is difference between react.development.js and react.production.js files via CDN?
    Ans:React provides two versions of its JavaScript library that can be used via CDN:
react.development.jsand react.production.js.

The react.development.js file is an uncompressed, development version of the React library. It is intended for use during development and debugging, as it contains additional error checking and warning messages that are helpful for troubleshooting issues in your React code. This version is larger in size than the production version and is not optimized for performance.

The react.production.js file, on the other hand, is a compressed, production-ready version of the React library. It is intended for use in production environments, as it is smaller in size and optimized for performance. This version does not include the additional error checking and warning messages found in the development version, as they can negatively impact performance.

In summary, the main difference between react.development.js and react.production.js is that the former is larger in size and contains additional error checking and warning messages that are useful during development and debugging, while the latter is smaller in size and optimized for performance, making it suitable for use in production environments.

When developing a React application, it's recommended to use the development version of the React library to take advantage of the additional error checking and warning messages. However, when deploying your application to a production environment, you should switch to the production version of the library for optimal performance.

Q8: What is async and defer?
Ans:async and defer are attributes that can be added to the script tag in HTML to control the way in which a script is loaded and executed.

async is an attribute that tells the browser to load the script asynchronously while the page continues to load. The script is executed as soon as it is downloaded, without waiting for other scripts or resources to finish loading. This can improve page load times and improve the user experience. However, because the script is executed immediately after it is downloaded, the order in which scripts are executed is not guaranteed. This means that scripts that rely on other scripts or resources may not work correctly.

Syntax:<script src="demo_async.js" async></script>

<script src="demo_async.js" async></script>
defer is an attribute that tells the browser to load the script in the background while the page is being parsed, and execute it after the page has finished parsing. This allows the script to be executed in the order in which it appears in the HTML document, without blocking the loading of other resources on the page. This is especially useful for scripts that need to be executed after the page has finished loading, such as scripts that manipulate the DOM or interact with other page elements.

Syntax:<script src="demo_defer.js" defer></script>

<script src="demo_defer.js" defer></script>
In summary, async and defer are attributes that control how a script is loaded and executed in the browser. async loads and executes the script asynchronously while the page continues to load, while defer loads the script in the background and executes it after the page has finished parsing. Choosing the appropriate attribute depends on the script's dependencies and the desired loading behavior.
