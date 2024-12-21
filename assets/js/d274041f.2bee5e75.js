"use strict";(self.webpackChunkplaybook=self.webpackChunkplaybook||[]).push([[993],{5840:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"introduction/snigdha-os-coding-standard","title":"Coding Standard","description":"\u2728 Coding Standards for Snigdha OS Development","source":"@site/docs/introduction/snigdha-os-coding-standard.md","sourceDirName":"introduction","slug":"/introduction/snigdha-os-coding-standard","permalink":"/playbook/introduction/snigdha-os-coding-standard","draft":false,"unlisted":false,"editUrl":"https://github.com/Snigdha-OS/playbook/tree/master/docs/introduction/snigdha-os-coding-standard.md","tags":[],"version":"current","lastUpdatedAt":1734742351000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Code of Conduct","permalink":"/playbook/introduction/snigdha-os-code-of-conduct"},"next":{"title":"Contribution Guidelines","permalink":"/playbook/introduction/contribution-guidelines-for-snigdha-os"}}');var r=i(6070),t=i(6599);const o={sidebar_position:5},a="Coding Standard",d={},l=[{value:"\u2728 <strong>Coding Standards for Snigdha OS Development</strong>",id:"-coding-standards-for-snigdha-os-development",level:3},{value:"1\ufe0f\u20e3 <strong>Consistent Naming Conventions</strong>",id:"1\ufe0f\u20e3-consistent-naming-conventions",level:3},{value:"2\ufe0f\u20e3 <strong>Indentation and Formatting</strong>",id:"2\ufe0f\u20e3-indentation-and-formatting",level:3},{value:"3\ufe0f\u20e3 <strong>Comments</strong>",id:"3\ufe0f\u20e3-comments",level:3},{value:"4\ufe0f\u20e3 <strong>Modularity and Code Reusability</strong>",id:"4\ufe0f\u20e3-modularity-and-code-reusability",level:3},{value:"5\ufe0f\u20e3 <strong>Error Handling</strong>",id:"5\ufe0f\u20e3-error-handling",level:3},{value:"6\ufe0f\u20e3 <strong>Code Readability</strong>",id:"6\ufe0f\u20e3-code-readability",level:3},{value:"7\ufe0f\u20e3 <strong>Consistent Code Style</strong>",id:"7\ufe0f\u20e3-consistent-code-style",level:3},{value:"8\ufe0f\u20e3 <strong>Documentation</strong>",id:"8\ufe0f\u20e3-documentation",level:3},{value:"9\ufe0f\u20e3 <strong>Testing</strong>",id:"9\ufe0f\u20e3-testing",level:3},{value:"\ud83d\udd1f <strong>Version Control</strong>",id:"-version-control",level:3},{value:"1\ufe0f\u20e31\ufe0f\u20e3 <strong>Performance Considerations</strong>",id:"1\ufe0f\u20e31\ufe0f\u20e3-performance-considerations",level:3},{value:"1\ufe0f\u20e32\ufe0f\u20e3 <strong>Security</strong>",id:"1\ufe0f\u20e32\ufe0f\u20e3-security",level:3},{value:"1\ufe0f\u20e33\ufe0f\u20e3 <strong>Dependencies and Third-party Libraries</strong>",id:"1\ufe0f\u20e33\ufe0f\u20e3-dependencies-and-third-party-libraries",level:3},{value:"1\ufe0f\u20e34\ufe0f\u20e3 <strong>Internationalization (i18n) and Localization (l10n)</strong>",id:"1\ufe0f\u20e34\ufe0f\u20e3-internationalization-i18n-and-localization-l10n",level:3},{value:"1\ufe0f\u20e35\ufe0f\u20e3 <strong>Accessibility</strong>",id:"1\ufe0f\u20e35\ufe0f\u20e3-accessibility",level:3},{value:"1\ufe0f\u20e36\ufe0f\u20e3 <strong>Concurrency and Thread Safety</strong>",id:"1\ufe0f\u20e36\ufe0f\u20e3-concurrency-and-thread-safety",level:3},{value:"\ud83d\udd11 <strong>Key Principles</strong>",id:"-key-principles",level:3}];function c(n){const e={a:"a",br:"br",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"coding-standard",children:"Coding Standard"})}),"\n",(0,r.jsxs)(e.h3,{id:"-coding-standards-for-snigdha-os-development",children:["\u2728 ",(0,r.jsx)(e.strong,{children:"Coding Standards for Snigdha OS Development"})]}),"\n",(0,r.jsx)(e.p,{children:"To ensure that Snigdha OS maintains a high-quality codebase, it\u2019s essential to follow these coding standards. These guidelines promote readability, maintainability, and collaboration while ensuring the code remains efficient and secure. \ud83d\ude80"}),"\n",(0,r.jsxs)(e.h3,{id:"1\ufe0f\u20e3-consistent-naming-conventions",children:["1\ufe0f\u20e3 ",(0,r.jsx)(e.strong,{children:"Consistent Naming Conventions"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 Use meaningful and descriptive names for variables, functions, and classes.",(0,r.jsx)(e.br,{}),"\n","\u2705 Stick to a consistent naming convention across the codebase:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"camelCase"})," for variables and functions."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"PascalCase"})," for classes and constructors."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"snake_case"})," for constants and configuration keys."]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"2\ufe0f\u20e3-indentation-and-formatting",children:["2\ufe0f\u20e3 ",(0,r.jsx)(e.strong,{children:"Indentation and Formatting"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 Use consistent indentation (2 or 4 spaces preferred). Avoid using tabs.",(0,r.jsx)(e.br,{}),"\n","\u2705 Follow a consistent formatting style (e.g., braces alignment, spacing).",(0,r.jsx)(e.br,{}),"\n","\u2705 Limit line length to 80-100 characters for better readability.",(0,r.jsx)(e.br,{}),"\n","\u2705 Remove unnecessary whitespaces and trailing spaces."]}),"\n",(0,r.jsxs)(e.h3,{id:"3\ufe0f\u20e3-comments",children:["3\ufe0f\u20e3 ",(0,r.jsx)(e.strong,{children:"Comments"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 Add comments to explain complex logic, algorithms, or unusual decisions.",(0,r.jsx)(e.br,{}),"\n","\u2705 Keep comments concise, relevant, and synchronized with code changes.",(0,r.jsx)(e.br,{}),"\n","\u2705 Avoid obvious comments like ",(0,r.jsx)(e.code,{children:"// Incrementing i by 1"}),"."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"// Good Example:\nfunction calculateTax(income) {\n  // Calculates tax based on progressive slabs.\n  ...\n}\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"4\ufe0f\u20e3-modularity-and-code-reusability",children:["4\ufe0f\u20e3 ",(0,r.jsx)(e.strong,{children:"Modularity and Code Reusability"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 Break down code into small, reusable functions or modules.",(0,r.jsx)(e.br,{}),"\n","\u2705 Group related functionalities into classes or namespaces for better organization."]}),"\n",(0,r.jsxs)(e.h3,{id:"5\ufe0f\u20e3-error-handling",children:["5\ufe0f\u20e3 ",(0,r.jsx)(e.strong,{children:"Error Handling"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 Use proper error-handling mechanisms like ",(0,r.jsx)(e.code,{children:"try-catch"})," blocks or error codes.",(0,r.jsx)(e.br,{}),"\n","\u2705 Avoid exposing internal logic in error messages."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'try:\n    result = perform_operation()\nexcept ValueError as e:\n    print("Invalid input. Please try again.")  # Avoid exposing "ValueError: details"\n'})}),"\n",(0,r.jsxs)(e.h3,{id:"6\ufe0f\u20e3-code-readability",children:["6\ufe0f\u20e3 ",(0,r.jsx)(e.strong,{children:"Code Readability"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 Write simple and clear code. Avoid unnecessary complexity.",(0,r.jsx)(e.br,{}),"\n","\u2705 Use descriptive variable and function names instead of single-letter identifiers.",(0,r.jsx)(e.br,{}),"\n","\u2705 Favor clarity over cleverness."]}),"\n",(0,r.jsxs)(e.h3,{id:"7\ufe0f\u20e3-consistent-code-style",children:["7\ufe0f\u20e3 ",(0,r.jsx)(e.strong,{children:"Consistent Code Style"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 Follow the style guide for the programming language used (e.g., PEP 8 for Python, ESLint for JavaScript).",(0,r.jsx)(e.br,{}),"\n","\u2705 Adopt consistent practices for spacing, indentation, and braces placement."]}),"\n",(0,r.jsxs)(e.h3,{id:"8\ufe0f\u20e3-documentation",children:["8\ufe0f\u20e3 ",(0,r.jsx)(e.strong,{children:"Documentation"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 Document every function, class, and module with clear descriptions.",(0,r.jsx)(e.br,{}),"\n","\u2705 Include parameter details, return values, and potential exceptions in documentation."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'def calculate_area(radius):\n    """\n    Calculates the area of a circle.\n\n    Args:\n        radius (float): The radius of the circle.\n\n    Returns:\n        float: The area of the circle.\n    """\n    return 3.14 * radius ** 2\n'})}),"\n",(0,r.jsxs)(e.h3,{id:"9\ufe0f\u20e3-testing",children:["9\ufe0f\u20e3 ",(0,r.jsx)(e.strong,{children:"Testing"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 Write unit tests for all critical functionality.",(0,r.jsx)(e.br,{}),"\n","\u2705 Aim for at least 80% code coverage.",(0,r.jsx)(e.br,{}),"\n","\u2705 Automate tests where possible with frameworks like ",(0,r.jsx)(e.code,{children:"pytest"}),", ",(0,r.jsx)(e.code,{children:"Jest"}),", or ",(0,r.jsx)(e.code,{children:"JUnit"}),"."]}),"\n",(0,r.jsxs)(e.h3,{id:"-version-control",children:["\ud83d\udd1f ",(0,r.jsx)(e.strong,{children:"Version Control"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 Use Git for version control. Follow branching strategies like ",(0,r.jsx)(e.strong,{children:"Git Flow"}),".",(0,r.jsx)(e.br,{}),"\n","\u2705 Write clear, descriptive commit messages in the ",(0,r.jsx)(e.a,{href:"https://www.conventionalcommits.org",children:"Conventional Commits"})," format:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"feat: add feature for user authentication  \nfix: resolve bug in payment gateway integration  \ndocs: update README with installation steps  \n"})}),"\n",(0,r.jsxs)(e.h3,{id:"1\ufe0f\u20e31\ufe0f\u20e3-performance-considerations",children:["1\ufe0f\u20e31\ufe0f\u20e3 ",(0,r.jsx)(e.strong,{children:"Performance Considerations"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 Write efficient algorithms with optimal time and space complexity.",(0,r.jsx)(e.br,{}),"\n","\u2705 Avoid unnecessary loops, nested loops, or redundant operations.",(0,r.jsx)(e.br,{}),"\n","\u2705 Use lazy loading or caching for heavy computations or data fetching."]}),"\n",(0,r.jsxs)(e.h3,{id:"1\ufe0f\u20e32\ufe0f\u20e3-security",children:["1\ufe0f\u20e32\ufe0f\u20e3 ",(0,r.jsx)(e.strong,{children:"Security"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 Sanitize and validate all user inputs.",(0,r.jsx)(e.br,{}),"\n","\u2705 Use parameterized queries for database operations to avoid SQL injection.",(0,r.jsx)(e.br,{}),"\n","\u2705 Regularly audit code for vulnerabilities like XSS, CSRF, or buffer overflows."]}),"\n",(0,r.jsxs)(e.h3,{id:"1\ufe0f\u20e33\ufe0f\u20e3-dependencies-and-third-party-libraries",children:["1\ufe0f\u20e33\ufe0f\u20e3 ",(0,r.jsx)(e.strong,{children:"Dependencies and Third-party Libraries"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 Use only necessary and trusted libraries.",(0,r.jsx)(e.br,{}),"\n","\u2705 Keep dependencies updated to ensure compatibility and fix vulnerabilities."]}),"\n",(0,r.jsxs)(e.h3,{id:"1\ufe0f\u20e34\ufe0f\u20e3-internationalization-i18n-and-localization-l10n",children:["1\ufe0f\u20e34\ufe0f\u20e3 ",(0,r.jsx)(e.strong,{children:"Internationalization (i18n) and Localization (l10n)"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 Design code to support multiple languages and locales.",(0,r.jsx)(e.br,{}),"\n","\u2705 Externalize strings into resource files for easy translation."]}),"\n",(0,r.jsxs)(e.h3,{id:"1\ufe0f\u20e35\ufe0f\u20e3-accessibility",children:["1\ufe0f\u20e35\ufe0f\u20e3 ",(0,r.jsx)(e.strong,{children:"Accessibility"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 Ensure UI components follow accessibility standards (e.g., WCAG).",(0,r.jsx)(e.br,{}),"\n","\u2705 Provide alternative text for images and ensure keyboard navigation."]}),"\n",(0,r.jsxs)(e.h3,{id:"1\ufe0f\u20e36\ufe0f\u20e3-concurrency-and-thread-safety",children:["1\ufe0f\u20e36\ufe0f\u20e3 ",(0,r.jsx)(e.strong,{children:"Concurrency and Thread Safety"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 For concurrent operations, write thread-safe code to avoid race conditions.",(0,r.jsx)(e.br,{}),"\n","\u2705 Use synchronization mechanisms like locks or semaphores."]}),"\n",(0,r.jsxs)(e.h3,{id:"-key-principles",children:["\ud83d\udd11 ",(0,r.jsx)(e.strong,{children:"Key Principles"})]}),"\n",(0,r.jsxs)(e.p,{children:["1\ufe0f\u20e3 ",(0,r.jsx)(e.strong,{children:"Readability"}),": Write code as if the next person maintaining it is you in six months.",(0,r.jsx)(e.br,{}),"\n","2\ufe0f\u20e3 ",(0,r.jsx)(e.strong,{children:"Modularity"}),": Make changes easier by keeping code decoupled and modular.",(0,r.jsx)(e.br,{}),"\n","3\ufe0f\u20e3 ",(0,r.jsx)(e.strong,{children:"Consistency"}),": Adopt a uniform style to avoid confusion and ensure maintainability."]}),"\n",(0,r.jsx)(e.p,{children:"Following these standards will not only improve code quality but also foster a collaborative and professional environment. Happy coding! \ud83c\udf89\ud83d\udc69\u200d\ud83d\udcbb\ud83d\udc68\u200d\ud83d\udcbb"})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},6599:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>a});var s=i(758);const r={},t=s.createContext(r);function o(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);