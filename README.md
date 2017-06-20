# Eval React Client
## About the Eval Project
The Eval Project is just in the beginning stages. There is a lot more to do. Overall, it serves a few purposes for me:
* The base idea stems from my time as a teacher. It also stems from my dislike of the current system for teacher and student evaluation used in many public schools (monolithic standardized tests given once a year or so to determine if a student is meeting an arbitrary standard). As a former teacher, I found that student evaluation, particularly formative evaluation, was better when performed using regular, short, non-threatening quizzes. As such, I could judge a student's progress toward the goal rather than just whether or not they 'passed muster' so to speak. Also, using this system, I could better determine the learning styles and learning deficiencies of individual students, allowing me to meet their individual needs better and move them toward their goal as efficiently as possible. Also, I believe that such a system would be a much better method of evaluating teachers and schools in general. The true evaluation of a teacher is whether or not they help a student progress, not whether they manage to get a prescribed percrentage of students over some arbitrary 'bar'. Anyway - this is a pet project for me that I really don't have a lot of time to work on, but when I can, I do.
* Of course, there is another objective here: I'm using this project to explore and practice with new frameworks, skills, etc. For that reason, this project may seem a little disjointed. Of course, I could and should use the same basic architecture and tools for each section of the project, but i don't want to. I may use Gulp in one section and Webpack in another - just so I have the opportunity to explore those tools. So, the project is broken into several repos (kind of micro-services), and they overlap functionally. Bottom line: I didn't want to do 'yet another todo' app for practice purpose and really wanted to do something that actually meant something to me - hence the eval project.
## Data and Business Layers
At this time, i am not attempting to separate the data and business logic layers of the project. That will come, to be sure. At this time, there are two Data/Business Layer repos: 
* eval-rest-node-jsonserver - This repo serves sample evaluation data (json format) by using node/express as the server and business layer, and jsonserver as a quick and dirty data layer. Eventually, this will be split into two repos.
* eval-dotnetcore-api - This just serves up some static evaluation data using dotnetcore. As you can imagine, the purpose of this repo was just to explore dotnetcore. Eventually, I 'll add a data layer to this and/or mix and match via configuration.
## Presentation Layers
The web client/presentation layers are quite simple at this time. They just serve up some simple questions. 
* eval-angular-client - Not much to this one yet. It was thrown together rather quickly and doesn't even communicate with a business layer. It really needs some refactoring too. Soon, hopefully.
* eval-react-client - This is a simple react client for the evaluation. It does, however, connect with eval-rest-node-jsonserver making that combination the only truly working version at this time. It does not, however, use redux (or flux, or MobX, etc.), because there isn't a need for client side calculations or logic at this time.
## ToDo
Future goals:
* Create some more repos with other tools
    * Add Redux and MobX to React client
    * Add a Vue client
    * Add an Angular (v4) client
    * Add a Polymer client
    * Add a Ruby business layer
    * Add ability to use other data sources including Mongo, MySql, MSSql, whatever
* Refactor the Angular client
* Make the dotnetcore layer use an actual data layer
    * Add a repository that can point to different data stores
* Style the clients
* Add question types (right now, there is just multi-choice)
* Add and/or factor out data repository layers
* Add saving of eval results
* Add reporting and analysis of eval results