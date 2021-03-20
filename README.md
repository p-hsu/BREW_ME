# BREW ME!

****

## Project overview

This application allows users to locate any breweries within a given distance from a user-input address. **"Brew Me!"** should be simple and user friendly; please refer to the following for all project details.

[Project Proposal](./project-proposal.md)

### Project Members:

* Brandon Maxwell: [brandon-maxwell](https://github.com/brandon-maxwell)
* Felicia Wootton: [fdwootton](https://github.com/fdwootton)
* Pamela Hsu: [p-hsu](https://github.com/p-hsu)

### Project Status:

#### Issues to debug:
* unable to searching on mobile when mobile is held in profile mode

#### Improvements to consider:
* rendering info windows for map markers
* storing user data for other functions
    * ...to save favorite breweries
    * ...to pull into googleMap functions ie. directions 

****

## MVP

### Project-build Aspects:

The following components are used to build the code for this project:

1. **HTML**
2. **CSS**:
    * Bulma
    * Fontawesome
    * custom
3. **JavaScript**:
    * Vanilla JavaScript
4. **API**:
    * https://developers.google.com/maps/
    * https://www.openbrewerydb.org/

### Functionality:

The following lists all functions within this project:

* area for user input to enter an address by city name
* area where results will populate and display the following:
    - brewery name
    - address
    - brewery website if available 
    - distance from user input location
    - 

### Process:
#### Tasks

Designated tasts and project member initials: see **Members** section for reference
* [x] wireframe: BM/FW/PH
* [x] `project-proposal.md`: BM/FW/PH
* [x] `index.html`: BM/FW
* [x] `style.css`: BM/FW
* [x] `script.js`: BM/FW/PH
    * for loop to render HTML divs: PH/FW
    * details populated from brewery API: BM/FW
    * call Google Maps JavaScript API to render embedded dynamic map: PH
    * functions to render markers/marker clusters for populated data from brewery API: BM
    * 
* [ ] `README.md`: PH > in progress
* [x] API research: BM/FW/PH

## Installation

1. Clone this repository onto local workspace
2. Open Terminal (MacOS) or Git Bash (Windows) and change location to where you want the cloned directory
3. Type `git clone` and paste copied respository
4. Directory should include the following:
    * assets folder
        * images folder *for `README.md` only*
        * javascript folder: `script.js`
        * css folder: `style.css`
    * `index.html`
    * `README.md`
    * `.gitignore` file

### Wireframe

![Screenshot of wireframe:](./assets/images/brew-me-wireframe.png)

### MVP screenshot

![Animated GIF of project:](./assets/images/brew-me-gif.png)

****

## Deployment

Please use the following link to deploy a live URL of this project:

[Brew Me!](https://p-hsu.github.io/BREW_ME/)

## Credit

* "**Brew Me!** original concept and code collaborators: Brandon Maxwell || Felicia Wootton || Pamela Hsu
* Mim Armand and Kat Poulos provided assistance and mentorship as the program instructor and teaching assistant respectivley
* Full-stack Bootcamp Program @ [Washington University, Saint Louis](https://bootcamp.tlcenter.wustl.edu/) through [© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand](https://www.trilogyed.com/)
* Animated GIF created using [© Screencastify,LLC 2020](https://www.screencastify.com/)






