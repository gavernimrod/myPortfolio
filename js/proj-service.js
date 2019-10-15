'use strict';


// Projects 

var gProjs = [
    {
        id: getRandId(4),
        name: 'Pacman',
        title: 'Same old Pacman, written in simple JS/html/css',
        desc: 'The old arcade game in vanialla JS',
        labels: ['pacman', 'js'],
        imgCover: 'img/portfolio/pacman.png',
        publishedAt: '2019-10-15',
        link : 'https://gavernimrod.github.io/pacman/'
    },
    {
        id: getRandId(4),
        name: 'Beat Rick The Almighty',
        title: 'Beat Rick The Almighty at the Guess Me Game ',
        desc: 'A binary tree task in the form of a \'Guess Me game\', featuring Rick',
        labels: ['guess', 'me', 'rick', 'binary', 'tree', 'game'],
        imgCover: 'img/portfolio/rick.png',
        publishedAt: '2019-10-15',
        link : 'https://gavernimrod.github.io/guess-me/'
    },
    {
        id: getRandId(4),
        name: 'Mine Sweeper',
        title: 'The classic Mine Sweeper game',
        desc: 'My version of the classic mine-finding game. Search tiles to uncover clues and figure out where all the mines are',
        labels: ['minesweeper', 'mine', 'sweeper', 'js', 'classic', 'windows', 'game'],
        imgCover: 'img/portfolio/minesweeper.png',
        publishedAt: '2019-10-15',
        link : 'https://gavernimrod.github.io/minesweeper/'
    },
    {
        id: getRandId(4),
        name: 'Live Page',
        title: 'Pixel Perfect into a live page',
        desc: 'Pixel Perfect using Flex Box',
        labels: ['pixelperfect', 'live', 'page', 'js', 'css', 'flex', 'box'],
        imgCover: 'img/portfolio/livepage.png',
        publishedAt: '2019-10-15',
        link : 'https://gavernimrod.github.io/live-page/'
    }
    ]
    
    
    function getProjsForDisplay() {
      return gProjs;
    }
    
    function getProjById(projId){
      return gProjs.find(function(proj){
        return proj.id === projId;
      })
    }
    