// TODO: Create a function to generate HTML for team array
function generateHtml(data, title) {
    function createManager(manager) {
        return `
    <div class ="col-4">
        <div class="member-card">
        <div class="card-header">
            <h2>${manager.getName()}</h2>
            <h2>${manager.getRole()}</h2>
        </div>
        <div class="card-body">
            <h4>ID: ${manager.getId()}</h4>
            <h4>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h4>
            <h4>Office Phone: ${manager.getofficeNumber()}</h4>
        </div>
        </div>
    </div>
        `
    }
    function createEngineer(engineer){
        return `
        <div class ="col-4">
        <div class="member-card">
        <div class="card-header">
            <h2>${engineer.getName()}</h2>
            <h2>${engineer.getRole()}</h2>
        </div>
        <div class="card-body">
            <h4>ID: ${engineer.getId()}</h4>
            <h4>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></h4>
            <h4>GitHub Profile <a href="www.github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></h4>
           </div>
        </div>
    </div>
        `

}
function createIntern(intern){
    return `
    <div class ="col-4">
    <div class="member-card">
    <div class="card-header text-center">
        <h2>${intern.getName()}</h2>
        <h2>${intern.getRole()}</h2>
    </div>
    <div class="card-body">
        <h4>ID: ${intern.getId()}</h4>
        <h4>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></h4>
        <h4>School: ${intern.getSchool()}</h4>
       </div>
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="./css/style.css" rel="stylesheet">
    <style>

    </style>
</head>

<body>
    <header class="hero">
        <h1>Team ${title[0]}</h1>
        <div class="card-container">
    </header>

    <div class="container">
        <div class="row">
       ${generateHtml(data)}
            
        </div>
    </div>
</body>

</html>
       
      
      `
  };