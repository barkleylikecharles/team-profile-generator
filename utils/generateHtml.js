// TODO: Create a function to generate HTML for team array
function generateHtml(data) {
    return `
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${teamArr[0]}</title>
    <link href="" rel="stylesheet">
    <style>
     
    </style>
</head>

<body>
    <header class = "hero">
        <h1>${teamArr[0]}</h1>
    <div class="card-container">
    </header>

    <div class="member-card">
        <div class= "card-header">
        <h2>$teamArr[].name}</h2>
        <h2>$teamArr[].role}</h2>
        </div>
        <div class= "card-body">
        <h3>$teamArr[].id}</h3>
        <h3>$teamArr[].email}</h3>
        <h3>$teamArr[].officeNumber}</h3>
        <h3>$teamArr[].github}</h3>
        <h3>$teamArr[].school}</h3>
        </div>


    `
    ;

    
  
  
  }
  
  module.exports = generateHtml;