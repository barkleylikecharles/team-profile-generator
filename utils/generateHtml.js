// TODO: Create a function to generate HTML for team array
function generateHtml(data, title) {
    function createManager(manager) {
        return `
        <div class="member-card">
        <div class="card-header">
            <h2>${manager.getName()}</h2>
            <h2>${manager.getRole()}</h2>
        </div>
        <div class="card-body">
            <h3>ID: ${manager.getId()}</h3>
            <h3>Email: ${manager.getEmail()}</h3>
            <h3>Office Phone: ${manager.getofficeNumber()}</h3>
           
        </div>
    </div>
        `
    }
    function createEngineer(engineer){
        return `
        <div class="member-card">
        <div class="card-header">
            <h2>${engineer.getName()}</h2>
            <h2>${engineer.getRole()}</h2>
        </div>
        <div class="card-body">
            <h3>ID: ${engineer.getId()}</h3>
            <h3>Email: ${engineer.getEmail()}</h3>
            <h3>Office Phone: ${engineer.getGithub()}</h3>
           
        </div>
    </div>
        `

}
function createIntern(intern){
    return `
    <div class="member-card">
    <div class="card-header">
        <h2>${intern.getName()}</h2>
        <h2>${intern.getRole()}</h2>
    </div>
    <div class="card-body">
        <h3>ID: ${intern.getId()}</h3>
        <h3>Email: ${intern.getEmail()}</h3>
        <h3>Office Phone: ${intern.getSchool()}</h3>
       
    </div>
</div>
    `
}
    const html = [];
    console.log(data)
    html.push(data.filter(employee => employee.getRole()==="Manager").map(manager => createManager(manager)))
    html.push(data.filter(employee => employee.getRole()=== "Engineer").map(engineer => createEngineer(engineer)).join(""))
    html.push(data.filter(employee => employee.getRole()=== "Intern").map(intern => createIntern(intern)).join(""))
    return html.join("");
}

  
  module.exports =(data, title) => {
      return `
      <html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title[0]}</title>
    <link href="" rel="stylesheet">
    <style>

    </style>
</head>

<body>
    <header class="hero">
        <h1>${title[0]}</h1>
        <div class="card-container">
    </header>

    <div class="column">
        <div class="row">
       ${generateHtml(data)}
            
        </div>
    </div>
</body>

</html>
       
      
      `
  };