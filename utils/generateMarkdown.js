// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
 function renderLicenseBadge(license) {
  switch(license){
      case("MIT"):
        return  `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
      case("IBM"):
        return  `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
        break;
      
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   return(` 
  # ${data.title}
   ${data.description}

  ## Table of Contents
  [Installation](#installation) <br>
  [Usage](#usage) <br>
  [Contributions](#contribution) <br>
  [Tests](#test) <br>
  [License](#license) <br>
  [Questions](#questions) <br>
  

    
  ## <h2 id="installation">Installation Instructions</h2>

  ${data.installation}

  ## <h2 id="usage">Usage</h2>
  ${data.usage}
  ## <h2 id="contribution">Contributions</h2>
  ${data.contribution}
  ## <h2 id="test">Test Instructions</h2>
  ${data.test}
  ## <h2 id="license"> License</h2>
   ${renderLicenseBadge(data.license)}
  ## <h2 id="questions"> Questions </h2>
    Any questions please contact me at
   [Github](https://github.com/Tevvels)
   or at email:chrisbwatkins@gmail.com

`);
   
}

module.exports = generateMarkdown;
