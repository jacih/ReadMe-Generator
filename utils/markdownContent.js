// list of licenses for user to choose from;
const licenses = [
    'Apache 2.0 License',
    'Boost Software License 1.0',
    'BSD 3-Clause License',
    'BSD 2-2lause License',
    'Creative Commons Zero 1.0 Universal',
    'Creative Commons Attribution 4.0 International',
    'Creative Commons Attribution-ShareAlike 4.0 International',
    'Creative Commons Attribution-NonCommercial 4.0 International',
    'Creative Commons Attribution-NoDerivates 4.0 International',
    'Creative Commons Attribution-NonCommmercial-ShareAlike 4.0 International',
    'Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International',
    'Eclipse Public License 1.0',
    'GNU General Public License v3.0',
    'GNU General Public License v2.0',
    'GNU Affero General Public License v3.0',
    'GNU Lesser General Public License v3.0',
    'GNU Free Documentation License v1.3',
    'The Hippocratic License 3.0',
    'The Hippocratic License 2.1',
    'IBM Public License Version 1.0',
    'ISC License',
    'MIT',
    'Mozilla Public License 2.0',
    'Open Data Commons Attribution License',
    'Open Data Commons Open Database License',
    'Open Data Commons Public Domain Dedication and License',
    'Perl The Artistic License 2.0',
    'SIL Open Font License 1.1',
    'The Unlicense',
    'ZLib The zilb/libpng License'];

// function to fetch a license badge based on user choice;
function renderBadge(license) {
    if (license === licenses[0]) {
        return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    } else if (license === licenses[1]) {
        return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
    } else if (license === licenses[2]) {
        return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
    } else if (license === licenses[3]) {
        return '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';
    } else if (license === licenses[4]) {
        return '![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)';
    } else if (license === licenses[5]) {
        return '![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)';
    } else if (license === licenses[6]) {
        return '![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)';
    } else if (license === licenses[7]) {
        return '![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)';
    } else if (license === licenses[8]) {
        return '![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)';
    } else if (license === licenses[9]) {
        return '![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)';
    } else if (license === licenses[10]) {
        return '![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)';
    } else if (license === licenses[11]) {
        return '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)';
    } else if (license === licenses[12]) {
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    } else if (license === licenses[13]) {
        return '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
    } else if (license === licenses[14]) {
        return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
    } else if (license === licenses[15]) {
        return '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)';
    } else if (license === licenses[16]) {
        return '![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)';
    } else if (license === licenses[17]) {
        return '![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)';
    } else if (license === licenses[18]) {
        return '![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)';
    } else if (license === licenses[19]) {
        return '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)';
    } else if (license === licenses[20]) {
        return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
    } else if (license === licenses[21]) {
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    } else if (license === licenses[22]) {
        return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
    } else if (license === licenses[23]) {
        return '![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)';
    } else if (license === licenses[24]) {
        return '![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)';
    } else if (license === licenses[25]) {
        return '![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)';
    } else if (license === licenses[26]) {
        return '![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)';
    } else if (license === licenses[27]) {
        return '![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)';
    } else if (license === licenses[28]) {
        return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
    } else if (license === licenses[29]) {
        return '![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)';
    } else {
        return '';
    }
}

// function to fetch a license link based on user choice;
function renderLinks(license) {
    if (license === licenses[0]) {
        return `[${licenses[0]}](https://www.apache.org/licenses/LICENSE-2.0)`;
    } else if (license === licenses[1]) {
        return `[${licenses[1]}](https://www.boost.org/LICENSE_1_0.txt)`;
    } else if (license === licenses[2]) {
        return `[${licenses[2]}](https://opensource.org/licenses/BSD-3-Clause)`;
    } else if (license === licenses[3]) {
        return `[${licenses[3]}](https://opensource.org/licenses/BSD-2-Clause)`;
    } else if (license === licenses[4]) {
        return `[${licenses[4]}](https://creativecommons.org/publicdomain/zero/1.0/)`;
    } else if (license === licenses[5]) {
        return `[${licenses[5]}](https://creativecommons.org/licenses/by/4.0/)`;
    } else if (license === licenses[6]) {
        return `[${licenses[6]}](https://creativecommons.org/licenses/by-sa/4.0/)`;
    } else if (license === licenses[7]) {
        return `[${licenses[7]}](https://creativecommons.org/licenses/by-nc/4.0/)`;
    } else if (license === licenses[8]) {
        return `[${licenses[8]}](https://creativecommons.org/licenses/by-nd/4.0/)`;
    } else if (license === licenses[9]) {
        return `[${licenses[9]}](https://creativecommons.org/licenses/by-nc-sa/4.0/)`;
    } else if (license === licenses[10]) {
        return `[${licenses[10]}](https://creativecommons.org/licenses/by-nc-nd/4.0/)`;
    } else if (license === licenses[11]) {
        return `[${licenses[11]}](https://opensource.org/licenses/EPL-1.0)`;
    } else if (license === licenses[12]) {
        return `[${licenses[12]}](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license === licenses[13]) {
        return `[${licenses[13]}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    } else if (license === licenses[14]) {
        return `[${licenses[14]}](https://www.gnu.org/licenses/agpl-3.0)`;
    } else if (license === licenses[15]) {
        return `[${licenses[15]}](https://www.gnu.org/licenses/lgpl-3.0)`;
    } else if (license === licenses[16]) {
        return `[${licenses[16]}](https://www.gnu.org/licenses/fdl-1.3)`;
    } else if (license === licenses[17]) {
        return `[${licenses[17]}](https://firstdonoharm.dev/)`;
    } else if (license === licenses[18]) {
        return `[${licenses[18]}](https://firstdonoharm.dev/)`;
    } else if (license === licenses[19]) {
        return `[${licenses[19]}](https://opensource.org/licenses/IPL-1.0)`;
    } else if (license === licenses[20]) {
        return `[${licenses[20]}](https://opensource.org/licenses/ISC)`;
    } else if (license === licenses[21]) {
        return `[${licenses[21]}](https://opensource.org/licenses/MIT)`;
    } else if (license === licenses[22]) {
        return `[${licenses[22]}](https://opensource.org/licenses/MPL-2.0)`;
    } else if (license === licenses[23]) {
        return `[${licenses[23]}](https://opendatacommons.org/licenses/by/)`;
    } else if (license === licenses[24]) {
        return `[${licenses[24]}](https://opendatacommons.org/licenses/odbl/)`;
    } else if (license === licenses[25]) {
        return `[${licenses[25]}](https://opendatacommons.org/licenses/pddl/)`;
    } else if (license === licenses[26]) {
        return `[${licenses[26]}](https://opensource.org/licenses/Artistic-2.0)`;
    } else if (license === licenses[27]) {
        return `[${licenses[27]}](https://opensource.org/licenses/OFL-1.1)`;
    } else if (license === licenses[28]) {
        return `[${licenses[28]}](https://unlicense.org/)`;
    } else if (license === licenses[29]) {
        return `[${licenses[30]}](https://opensource.org/licenses/Zlib)`;
    } else {
        return '';
    }
}

function mdContent(data) {

  return `
    # ${data.title}
    ## ${renderBadge(data.license)} 
    
    ## Table of Contents
    - [Description](#description)
    - [Mock-Up](#mock-up)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contribution Guidelines](#contribution-guidelines)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## [Description](#table-of-contents)
    ${data.description}

    ##[Mock-Up](#table-of-contents)

    ## [Installation](#table-of-contents)
    ${data.install}

    ## [Usage](#table-of-contents)
    ${data.usage}

    ## [License](#table-of-contents)
    ${renderBadge(data.license)}
    ${renderLinks(data.license)}

    ## [Contribution Guidelines](#table-of-contents)
    ${data.contribution}

    ## [Tests](#table-of-contents)
    ${data.test}

    ## [Questions](#table-of-contents)
    Contact me through [GitHub](https://github.com/${data.github})
    Contact me through email at: [${data.email}](mailto:${data.email})
    `;
}

// allows mdContent to be exported and used in index.js;
module.exports = mdContent;