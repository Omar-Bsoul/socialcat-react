import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    min: 4,
    max: 8
  },
  wordsPerSentence: {
    min: 4,
    max: 16
  }
});

export default id => {
  return {
    id,
    user: {
      fullName: 'Omar Bsoul',
      picture: 'https://randomuser.me/api/portraits/med/men/65.jpg'
    },
    createdAt: Date.now(),
    text: lorem.generateParagraphs(parseInt(Math.random() * 10) + 2),
    comments: [
      {
        id: 1,
        text: lorem.generateSentences(parseInt(Math.random() * 20) + 2),
        user: {
          fullName: 'Omar Bsoul',
          picture: 'https://randomuser.me/api/portraits/med/men/65.jpg'
        },
        createdAt: Date.now()
      },
      {
        id: 2,
        text: lorem.generateSentences(parseInt(Math.random() * 15) + 2),
        user: {
          fullName: 'Mossab Alhariri',
          picture: 'https://randomuser.me/api/portraits/med/men/66.jpg'
        },
        createdAt: Date.now()
      },
      {
        id: 3,
        text: lorem.generateSentences(parseInt(Math.random() * 10) + 2),
        user: {
          fullName: 'Omar Bsoul',
          picture: 'https://randomuser.me/api/portraits/med/men/65.jpg'
        },
        createdAt: Date.now()
      }
    ]
  };
};
