
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-37-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<p align="center" style="margin-bottom: 20px">
  <a href="https://github.com/ageddesi/Mocked-API">
    <img
      src="./mocked-api-logo.png"
      alt="Mocked-API"
      width="35%">
  </a>
</p>


## About

Welcome to Mocked-API, this is a live API that can be accessed by anyone who needs data to test out their website, app, components etc.

## Hacktoberfest Contributors

If you would like to contribute during Hacktoberfest please following our contribution guidelines (Which we are still working on) but here is a quick summary of what we expect in the process of dev to raising your PR.

1. Find a ticket and ask to be assigned, once assigned start work. :) This is so we don't get multiple PR's for the same issue.
1. Please branch from our active next release *dev*
2. Please make sure your new endpoints all have OpenAPI Comments as they will be used to generate our swagger documentation.
3. Please make sure you have added unit tests for end points and util functions.
4. MOST importantly, have fun.

If you need help, please leave a comment on the ticket you are assigned to our join our discord by clicking the link below.

## Getting Started

First you should head over to https://api.mocked-api.dev and read our live api docs than start calling the api endpoints for the data you need.

## Join our discord

<p align="center" style="margin-bottom: 20px">
  <a href="https://discord.gg/yxqrkjDR87">
    <img
      src="./discord-join.png"
      alt="Join Our Discord"
      width="35%">
  </a>
</p>

## How to run Mocked-API
Once you've cloned this repository, running Mocked-API is quite easy, there are just 2 steps you have to follow:
1. Install the dependencies
```bash
npm install
```
2. Configure the application
An example configuration file `.env.example` is provided.
```bash
npm run config
```
3. Serve the application
```bash
npm run serve
```
This will show you where the application is running
```
Mock API is running on port 3000.
```

## Getting Started (Docker)

1. Ensure you have Docker installed
1. Open your terminal/command line tool
1. Run `docker-compose up`
1. Open your browser to [http://localhost:3000/](http://localhost:3000/)

Now you should be able to make any request to that port, and get a response back!

💡 If you browse to that port, you'll see our swagger documentation.


## Testing

### How to write tests
For each module you create you will also need to create a tests folder, Inside this folder there should be a `api` and `utils`
(if you create any utils) folder.

The utils tests are fairly simple jests tests, the `api` routes tests are slightly different where you will need to add
```javascript
import request from 'supertest';
import app from 'path/to/app';
```
to your tests and make a request in your test instead of calling a normal function.

### How to run tests
run `npm test`
run `npm run test:watch` to run the tests in watch mode.

## FAQ

**Q:** Are you planning to add more end points? <br />
**A:** I plan to add as many as I can, if there is a specific endpoint of data you would like to see feel free to add a Issue Request.

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

I encourage you to contribute to ***Mocked-API***! Feel free to fork the codebase and make a pull request for your changes.

Our contributing guide is currently WIP and available here [CONTRIBUTING GUIDE](CONTRIBUTING.md)

## Sponsor

Do you like this project? Support it by donating.

<a href="https://www.buymeacoffee.com/aaronrackley">
  Buy Me A Coffee
</a>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/ahmedsilat44"><img src="https://avatars.githubusercontent.com/u/105588821?v=4?s=100" width="100px;" alt="Ahmed Silat"/><br /><sub><b>Ahmed Silat</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=ahmedsilat44" title="Code">💻</a></td>
      <td align="center"><a href="http://yasio.dev"><img src="https://avatars.githubusercontent.com/u/3300701?v=4?s=100" width="100px;" alt="Yasio"/><br /><sub><b>Yasio</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=YasiOnFire" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/alberturria"><img src="https://avatars.githubusercontent.com/u/32776999?v=4?s=100" width="100px;" alt="Alberto Herrera Vargas"/><br /><sub><b>Alberto Herrera Vargas</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=alberturria" title="Documentation">📖</a></td>
      <td align="center"><a href="https://github.com/Coskntkk"><img src="https://avatars.githubusercontent.com/u/53823825?v=4?s=100" width="100px;" alt="Coşkun Atak"/><br /><sub><b>Coşkun Atak</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=Coskntkk" title="Code">💻</a></td>
      <td align="center"><a href="https://website-portofolio-ian.vercel.app/"><img src="https://avatars.githubusercontent.com/u/58666218?v=4?s=100" width="100px;" alt="Rizky ian indiarto"/><br /><sub><b>Rizky ian indiarto</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=rizkyian78" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/Eroxl"><img src="https://avatars.githubusercontent.com/u/77178777?v=4?s=100" width="100px;" alt="Evan"/><br /><sub><b>Evan</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=Eroxl" title="Code">💻</a></td>
      <td align="center"><a href="http://steamcommunity.com/id/Trigstur"><img src="https://avatars.githubusercontent.com/u/11588132?v=4?s=100" width="100px;" alt="Trigstur"/><br /><sub><b>Trigstur</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=Trigstur" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/fadkeabhi"><img src="https://avatars.githubusercontent.com/u/31249309?v=4?s=100" width="100px;" alt="fadkeabhi"/><br /><sub><b>fadkeabhi</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=fadkeabhi" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/Sir-Martin-Esq-III"><img src="https://avatars.githubusercontent.com/u/11279843?v=4?s=100" width="100px;" alt="Thomas Martin"/><br /><sub><b>Thomas Martin</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=Sir-Martin-Esq-III" title="Code">💻</a> <a href="https://github.com/ageddesi/Mocked-API/commits?author=Sir-Martin-Esq-III" title="Tests">⚠️</a></td>
      <td align="center"><a href="http://tuanvu.dev"><img src="https://avatars.githubusercontent.com/u/61374202?v=4?s=100" width="100px;" alt="Vu"/><br /><sub><b>Vu</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=tzii" title="Code">💻</a> <a href="https://github.com/ageddesi/Mocked-API/commits?author=tzii" title="Documentation">📖</a></td>
      <td align="center"><a href="http://kalwabed.xyz"><img src="https://avatars.githubusercontent.com/u/49640654?v=4?s=100" width="100px;" alt="Kalwabed Rizki"/><br /><sub><b>Kalwabed Rizki</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=kalwabed" title="Tests">⚠️</a></td>
      <td align="center"><a href="https://github.com/talis-fb"><img src="https://avatars.githubusercontent.com/u/54823205?v=4?s=100" width="100px;" alt="Talison Fabio"/><br /><sub><b>Talison Fabio</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=talis-fb" title="Code">💻</a></td>
      <td align="center"><a href="https://c-j.tech"><img src="https://avatars.githubusercontent.com/u/3969086?v=4?s=100" width="100px;" alt="Chris Jones"/><br /><sub><b>Chris Jones</b></sub></a><br /><a href="#tool-cmjchrisjones" title="Tools">🔧</a></td>
      <td align="center"><a href="https://johnkolcun.com/"><img src="https://avatars.githubusercontent.com/u/104634518?v=4?s=100" width="100px;" alt="jkol7"/><br /><sub><b>jkol7</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=jkol7" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center"><a href="https://siddharth1729.github.io/sid.github.io/"><img src="https://avatars.githubusercontent.com/u/46781764?v=4?s=100" width="100px;" alt="Siddharth Pandey"/><br /><sub><b>Siddharth Pandey</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=siddharth1729" title="Code">💻</a></td>
      <td align="center"><a href="https://aharrison.xyz"><img src="https://avatars.githubusercontent.com/u/8920897?v=4?s=100" width="100px;" alt="Alex Harrison"/><br /><sub><b>Alex Harrison</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=alexjharrison" title="Code">💻</a></td>
      <td align="center"><a href="https://derzan.dev/"><img src="https://avatars.githubusercontent.com/u/76019114?v=4?s=100" width="100px;" alt="Derzan Chiang"/><br /><sub><b>Derzan Chiang</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=MiTo0o" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/ATH42"><img src="https://avatars.githubusercontent.com/u/80352300?v=4?s=100" width="100px;" alt="ATH"/><br /><sub><b>ATH</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=ATH42" title="Documentation">📖</a></td>
      <td align="center"><a href="http://suraj-bhandarkar-s.github.io/web/"><img src="https://avatars.githubusercontent.com/u/42907076?v=4?s=100" width="100px;" alt="Suraj Bhandarkar S"/><br /><sub><b>Suraj Bhandarkar S</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=Suraj-Bhandarkar-S" title="Tests">⚠️</a></td>
      <td align="center"><a href="https://github.com/devrrior"><img src="https://avatars.githubusercontent.com/u/69869135?v=4?s=100" width="100px;" alt="Fernando Guerrero"/><br /><sub><b>Fernando Guerrero</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=devrrior" title="Documentation">📖</a> <a href="https://github.com/ageddesi/Mocked-API/commits?author=devrrior" title="Tests">⚠️</a></td>
      <td align="center"><a href="https://anishde.dev/"><img src="https://avatars.githubusercontent.com/u/63192115?v=4?s=100" width="100px;" alt="Anish De"/><br /><sub><b>Anish De</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=AnishDe12020" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/vaibhavg20comp"><img src="https://avatars.githubusercontent.com/u/96220995?v=4?s=100" width="100px;" alt="Vaibhav Garje"/><br /><sub><b>Vaibhav Garje</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=vaibhavg20comp" title="Code">💻</a> <a href="https://github.com/ageddesi/Mocked-API/commits?author=vaibhavg20comp" title="Tests">⚠️</a></td>
      <td align="center"><a href="https://github.com/fms12"><img src="https://avatars.githubusercontent.com/u/68012074?v=4?s=100" width="100px;" alt="Mayank Singh"/><br /><sub><b>Mayank Singh</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=fms12" title="Documentation">📖</a></td>
      <td align="center"><a href="https://github.com/computamike"><img src="https://avatars.githubusercontent.com/u/464876?v=4?s=100" width="100px;" alt="Mike Hingley"/><br /><sub><b>Mike Hingley</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=computamike" title="Code">💻</a></td>
      <td align="center"><a href="https://www.krishnasingh.co.in/"><img src="https://avatars.githubusercontent.com/u/3418713?v=4?s=100" width="100px;" alt="krishna"/><br /><sub><b>krishna</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=kk5190" title="Code">💻</a></td>
      <td align="center"><a href="https://vadimdez.github.io/"><img src="https://avatars.githubusercontent.com/u/3748453?v=4?s=100" width="100px;" alt="Vadym Yatsyuk"/><br /><sub><b>Vadym Yatsyuk</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=VadimDez" title="Documentation">📖</a></td>
      <td align="center"><a href="https://github.com/nibih"><img src="https://avatars.githubusercontent.com/u/42928462?v=4?s=100" width="100px;" alt="Nicholas Robert Beckham"/><br /><sub><b>Nicholas Robert Beckham</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=nibih" title="Tests">⚠️</a></td>
      <td align="center"><a href="https://devvspace.webflow.io/"><img src="https://avatars.githubusercontent.com/u/77179231?v=4?s=100" width="100px;" alt="Ayanwola Ayomide"/><br /><sub><b>Ayanwola Ayomide</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=devvspaces" title="Code">💻</a> <a href="https://github.com/ageddesi/Mocked-API/commits?author=devvspaces" title="Tests">⚠️</a> <a href="https://github.com/ageddesi/Mocked-API/commits?author=devvspaces" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center"><a href="https://preciouslife837753359.wordpress.com/"><img src="https://avatars.githubusercontent.com/u/34958019?v=4?s=100" width="100px;" alt="Zuhaib Shah"/><br /><sub><b>Zuhaib Shah</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=zaibugemi" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/GuilhermeFernandes01"><img src="https://avatars.githubusercontent.com/u/26780625?v=4?s=100" width="100px;" alt="Guilherme Fernandes"/><br /><sub><b>Guilherme Fernandes</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=GuilhermeFernandes01" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/benhalverson"><img src="https://avatars.githubusercontent.com/u/7907232?v=4?s=100" width="100px;" alt="Ben Halverson"/><br /><sub><b>Ben Halverson</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=benhalverson" title="Code">💻</a> <a href="https://github.com/ageddesi/Mocked-API/commits?author=benhalverson" title="Tests">⚠️</a></td>
      <td align="center"><a href="https://github.com/darkl1ght"><img src="https://avatars.githubusercontent.com/u/19537472?v=4?s=100" width="100px;" alt="Ayush Chauhan"/><br /><sub><b>Ayush Chauhan</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=darkl1ght" title="Tests">⚠️</a> <a href="https://github.com/ageddesi/Mocked-API/commits?author=darkl1ght" title="Code">💻</a></td>
      <td align="center"><a href="https://edwardsmoses.com/"><img src="https://avatars.githubusercontent.com/u/19548998?v=4?s=100" width="100px;" alt="Edwards Moses"/><br /><sub><b>Edwards Moses</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=edwardsmoses" title="Documentation">📖</a> <a href="https://github.com/ageddesi/Mocked-API/commits?author=edwardsmoses" title="Tests">⚠️</a></td>
      <td align="center"><a href="https://rizkyrajitha.github.io/"><img src="https://avatars.githubusercontent.com/u/38534289?v=4?s=100" width="100px;" alt="Rajitha Gunathilake"/><br /><sub><b>Rajitha Gunathilake</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=RizkyRajitha" title="Code">💻</a></td>
      <td align="center"><a href="https://bmusuko.tech/"><img src="https://avatars.githubusercontent.com/u/32943475?v=4?s=100" width="100px;" alt="Bram Musuko Panjaitan"/><br /><sub><b>Bram Musuko Panjaitan</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=bmusuko" title="Tests">⚠️</a></td>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/filipkujawa"><img src="https://avatars.githubusercontent.com/u/44206832?v=4?s=100" width="100px;" alt="filip"/><br /><sub><b>filip</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=filipkujawa" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/mdfarhaan"><img src="https://avatars.githubusercontent.com/u/60516398?v=4?s=100" width="100px;" alt="Farhaan"/><br /><sub><b>Farhaan</b></sub></a><br /><a href="https://github.com/ageddesi/Mocked-API/commits?author=mdfarhaan" title="Code">💻</a></td>
    </tr>
  </tbody>
  <tfoot>
    
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
