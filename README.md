# AccountancyApp

About:

My Project is designed to manage invoices and customers. I created it using ASP.NET Core and Angular 2, MS SQL.
For now it is only available in polish.
Angular part is in ClientApp folder. I made Angular code using VS Code, there are some //#region and
//#endregion tags to make some parts of code collapsible and more convenient to read.

Setup:

If you would like to use this application on your computer, you should change connection string,
and update database with migrations that are in this project.
Next very importatnt step is to configure DefaultEmailConfig class in DefaultSettings folder, it is
used as default settings for all users and it is also used as target address to check if configuration is ok
when user is configuring SMTP settings.
Last thing which is not necessary is to configure message footer. It is located in MessageConfiguration 
class in DefaultSettings folder. This text will be displayed only if user is using default email settings.
Before you start program, go to project folder and in conole write ng build to make sure that Angular is
complied.
