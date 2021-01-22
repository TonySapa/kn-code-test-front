## Steps explained

### 1 Initiating project
Initiated new project with NPM and installed the dependencies that I initially though I was going to use for strategic reasons: 
- React. Obviously.
- Axios which I consider the best tool for REST APIs with React, to achieve a cleaner code.
- Redux for state management. Optional, since this is a very tiny project, but I would proceed like this in real life scenarios.
- jsonwebtoken as required for the token authentication capabilities on the last exercises.
- eslint. Not only because is a requirement, in fact I always work with eslint. (I understand prettifier was an alternative)

1.1 I created a new Project and Cluster with MongoDB to accomplish the CRUD functionalities of the last exercises. Then I conveniently stored the mongodb connection 
string as an environmental variable, and specified a conditional statement to use different databases if in "production", "development" or "testing".

1.2 Configured eslint with the following parameters:
√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No
√ Where does your code run? · browser
√ How would you like to define a style for your project? · prompt
√ What format do you want your config file to be in? · JavaScript
√ What style of indentation do you use? · tab
√ What quotes do you use for strings? · single
√ What line endings do you use? · windows
√ Do you require semicolons? · No