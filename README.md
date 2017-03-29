Team Creator Application
Our random team generator... is kinda lame. Its ugly and we do not have the ability to see what teams we have previously created. We would like to have your team create a better solution for us. There is a catch however, the project is time constrained. You will have until exactly 9:15 am tomorrow to finish the project. Additionally, when time is called, you will need to present your solution to the class.

The application should include everyone the class. This information should be stored in a collection on the database. An instructor should be able to load up the application, decide on how many teams they want, then click on a 'generate' button to create that many teams, with individuals assigned to those teams as evenly as possible. Once the teams are generated, this information should be stored in a collection separate from the previously mentioned. Finally, the application should have a feature to look at previous team configurations.

All other details not mentioned above should be discussed and resolved within your team. The exact implementation of the above requests should and will look different for each group working on this project. The application MUST implement Bootstrap features.

Objectives
Build an application from the ground up using technology learned this week,
Work in a group to complete a feature rich application,
Work under an absolute time constraint to more effectively understand what can be reasonably accomplished.
Stretch Goals

[ ] - Names 'animate' as they appear on the DOM, (Hard Mode)

[ ] - Add another feature that allows you to pick team size (instead of number of teams), (Very Hard Mode)

[ ] - Add the ability to move individual members from team to team. This will mean that you will not be able to save the collection when the team is created, but rather include a 'confirm' button that locks in the team. (Pro Mode)

DB
 - 2 collections
 1. Names
  - name: String
 2. Groups
    - project_num: number
    - group_num: number
    - names: array
