# Resume Driven Development

As software engineers we want to utilize the most effective tools, patterns and methodologies to fulfill our clients needs.

A common mantra in our industry is `"Use the right tool for the job"`.  This idea gained momentum with the microservices hype, leading to a surge in polyglot programming, persistence, and more. This diversification has seen companies adopting a myriad of programming languages, persistence layers, frameworks, and tools in pursuit of the perfect solution, often overlooking the adequacy of existing tools within their stack.

A few years ago, I also fell into the trap of microservices and technology proliferation. Fortunately, the small size of our team and our codebase made the damage reversible and manageable.

This experience made me pause and take time for introspection. Was I genuinely choosing the right tools for the project or was I unconsciously choosing shiny tools that would make my resume more interesting? 
Despite my best intentions, I couldn't completely disregard the personal desire for learning about them.

This realization led me to adopt a more judicious and methodical approach to integrating new technologies into our projects

## Adding a new tech to the stack

Introducing new technology—be it a language, framework, persistence layer, message broker, etc.—requires a learning curve. We love exploring new tools and the novelty of solving use cases and enabling features, needed or not. We tend to underestimate the learning curve of understanding how they fail, when they tend to fail, how the errors are discovered or monitored, and designing how to recover from those errors.

The real test often comes after deployment, challenging us to reassess the need for that new technology after we've already introduced it.

Thus, I urge you to think twice before expanding your tech stack.

## Chosing technology

During the introspection period I stumbled into thought-provoking piece titled [Chose boring technology](https://mcfunley.com/choose-boring-technology), which eloquently argued against the rush to adopt new technologies and embrace the boring ones, understanding `boring` as the ones we know and understand well and, therefore, don't give any surprises.

If your project already has an established tech stack, here are some considerations before introducing new technology:

### Can the existing tech stack address the problem?

Design the solution with the current stack, without adding any new technology. If the design is feasible, it can be the baseline for the decision. 

Some challenges for the design:

- Would it be compliant with the non-functional requirements or SLAs?
- How complex or maintailable is the implementation?

### Future project features

Assess whether the planned features or project direction could benefit from introducing the tech stack.
For example some technologies can act as enablers for future features.


### Team expertise

Consider the team's familiarity with the new technology and the implications of acquiring or hiring expertise.


## Real-World naive Example

Let's consider a hypothetical project with the following tech stack: 

- React in front end
- Nodejs in the backend (with Express)
- Postgres as the main database

Your data is structured and fits well in a relational database. Your application is mostly a CRUD application.

Life is good, and things are working as expected until a couple of new features appear in the backlog.

### Feature 1: Integrating unstructured data

You have a new feature that—for some reason—requires storing unstructured data. When investigating tools, you find Document DBs, one of them being MongoDB.

Although it would look great on your—and your team members'—resumes, you think twice, remember a blog post you read some time ago, and decide carefully. That would be the right tool for the job. But, do you really need it?

#### Can the existing tech stack address the problem?

You create a design with the current stack. After some research, you learn that Postgres supports JSON or JSONB column types that can store unstructured data. Your design includes a JSONB column in the table, and you can query it as you would with a document database.

#### Future project features

After scanning through the product backlog, nothing calls your attention that could break your design.

####  Team expertise

The team has a lot of experience with Postgres and a couple of team members are certified in MongoDB.

#### Decision

Keeping the tech stack and using Postgres' JSONB column type seems the sensible approach.

### Feature 2: Real-time\* notifications

The team is to work on a new feature that requires real-time* notifications. Some actions need to be notified to the affected users.

When investigating about events, real-time notifications, you find out about message brokers like NATS Server, RabbitMQ, or Kafka. You consider adding them to the tech stack. But—of course—you think twice and follow your process to make the right decision.

#### Can the existing tech stack address the problem?

After some research, you find out that PostgreSQL has LISTEN/NOTIFY that supports the Pub/Sub pattern and could be used to subscribe to changes and produce the right notifications. You also read about the outpost pattern that could be used for the feature at hand.

You create two designs, one using LISTEN/NOTIFY and the other using the outpost pattern.

##### LISTEN/NOTIFY

This approach could work and your design seems correct.
One of the drawbacks is the performance of the database. The more subscribers, the more load on the database. That might impact your queries and the performance of the website.

##### Outpost pattern

Agains, this approach could work and seems elegant and simple.
One of the drawbacks is that you would need to add a new table for each subscription type (push notifications, emails, etc).
For the feature at hand you only need one subscription but that limitation is something to consider.

#### What other features are down the line?

Scanning through the backlog you find multiple stories related to notifications, real-time updates, etc.
Your choice will need to consider that shift towards real-time event-driven features.

#### How much expertise about that tool do we have in the team?

The team has a lot of experience with Postgres but not using LISTEN/NOTIFY.
Some of the team members know well RabbitMQ and/or Kafka.

#### Decision

You decide that using Postgres alone is not suitable for these features and the ones to come. Adding a message broker is needed and will enable more features in the future. Based on what you learn from researching PostgreSQL, you decide that a combination of the outpost pattern and a message broker is the way to go.

After some more research, your team decides to go with RabbitMQ. 

## Conclusion

These examples, while simplified, illustrate the essence of deliberate technology selection. We're naturally drawn to the latest innovations, eager to explore their potential and how they might enhance our projects. But it's crucial to choose mindfully.

Adding a new technology to our stack should come after thoughtful consideration. Even if a tool is perfect for the job, the price of adding it to our stack might outweigh the benefits it brings.

[Personal projects](https://github.com/tonitienda/kadai) offer the perfect playground for experimentation, allowing us to satisfy our appetite for learning without risking the integrity of our professional endeavors. By reserving our exploratory impulses for these spaces, we can approach our work projects with a more focused and pragmatic mindset. What we learn in those personal projects can be applied to our work projects, but only after a thorough evaluation of the potential benefits and drawbacks.