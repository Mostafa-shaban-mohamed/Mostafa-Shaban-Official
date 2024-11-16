export const articles = [
    {
        imageUrl: 'assets/Images/articles/napkin-selection.png',
        articleTitle: 'Clean Architecture: Benefits and Implementation in .NET Core C#',
        description: 'Clean Architecture is a software design pattern that promotes separation of concerns and improves the maintainability, testability, and scalability of applications. It was introduced by Robert C. Martin (Uncle Bob) and is also known as Onion Architecture or Hexagonal Architecture. This article will explore the benefits of Clean Architecture and provide a step-by-step guide to implementing it in .NET Core C#.',
        url: 'https://b2-school.netlify.app/blogs/clean-architecture',
        isActive: true
    },
    {
        imageUrl: 'assets/Images/articles/DI-blog-image.png',
        articleTitle: 'Understanding Dependency Injection in C#',
        description: 'Dependency Injection (DI) is a design pattern used to implement Inversion of Control (IoC) between classes and their dependencies. Instead of a class creating its dependencies, they are injected from the outside, making the class independent of the creation process. This promotes loose coupling and enhances the modularity of the code.',
        url: 'https://b2-school.netlify.app/blogs/dependency-injection',
        isActive: false
    },
    {
        imageUrl: 'assets/Images/articles/JWT-blog-image.png',
        articleTitle: 'JWT Authentication in C#',
        description: 'Authentication in web applications is the process of verifying the identity of users to ensure they are who they claim to be. This is typically achieved by requiring users to provide credentials such as usernames and passwords. Once verified, the application grants access to protected resources, often using digital tokens or session cookies.',
        url: 'https://b2-school.netlify.app/blogs/jwt-authentication',
        isActive: false
    },
    {
        imageUrl: 'assets/Images/articles/middleware-blog-image.png',
        articleTitle: 'Understanding Middlewares in .NET Core',
        description: 'Middleware is a fundamental concept in ASP.NET Core that allows developers to handle requests and responses in a modular and customizable way. Middleware components are pieces of software that are assembled into an application pipeline to handle requests and responses. Each component in the pipeline can perform operations before and after the next component in the pipeline.',
        url: 'https://b2-school.netlify.app/blogs/middleware',
        isActive: false
    }
]