// src/Questions.js
// Function to shuffle an array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  // Questions with shuffled answer options
  const questions = shuffleArray([
    {
      questionText: 'What was the first miracle Jesus performed?',
      answerOptions: shuffleArray([
        { answerText: 'Turning water into wine', isCorrect: true },
        { answerText: 'Feeding 5000 people', isCorrect: false },
        { answerText: 'Walking on water', isCorrect: false },
        { answerText: 'Raising Lazarus from the dead', isCorrect: false },
      ]),
    },

    {
      questionText: 'Who led the Israelites out of Egypt?',
      answerOptions: shuffleArray([
        { answerText: 'Joshua', isCorrect: false },
        { answerText: 'David', isCorrect: false },
        { answerText: 'Moses', isCorrect: true },
        { answerText: 'Solomon', isCorrect: false },
      ]),
    },
    {
      questionText: 'What is the first book of the Bible?',
      answerOptions:shuffleArray( [
        { answerText: 'Genesis', isCorrect: true },
        { answerText: 'Exodus', isCorrect: false },
        { answerText: 'Psalms', isCorrect: false },
        { answerText: 'Leviticus', isCorrect: false },
      ]),
    },
    {
      questionText: 'How many disciples did Jesus have?',
      answerOptions: shuffleArray([
        { answerText: '10', isCorrect: false },
        { answerText: '11', isCorrect: false },
        { answerText: '12', isCorrect: true },
        { answerText: '13', isCorrect: false },
      ]),
    },
    {
      questionText: 'Who was thrown into the lion\'s den?',
      answerOptions: shuffleArray([
        { answerText: 'Daniel', isCorrect: true },
        { answerText: 'David', isCorrect: false },
        { answerText: 'Moses', isCorrect: false },
        { answerText: 'Joseph', isCorrect: false },
      ]),
    },
    {
      questionText: 'What is the shortest verse in the Bible?',
      answerOptions: shuffleArray([
        { answerText: 'Jesus wept', isCorrect: true },
        { answerText: 'Pray without ceasing', isCorrect: false },
        { answerText: 'The Lord is my shepherd', isCorrect: false },
        { answerText: 'I am the way, the truth, and the life', isCorrect: false },
      ]),
    },
    {
      questionText: 'Who built the ark?',
      answerOptions: shuffleArray([
        { answerText: 'Noah', isCorrect: true },
        { answerText: 'Moses', isCorrect: false },
        { answerText: 'Abraham', isCorrect: false },
        { answerText: 'Jacob', isCorrect: false },
      ]),
    },
    {
      questionText: 'Who was the first man created by God?',
      answerOptions: shuffleArray([
        { answerText: 'Adam', isCorrect: true },
        { answerText: 'Moses', isCorrect: false },
        { answerText: 'Noah', isCorrect: false },
        { answerText: 'Abraham', isCorrect: false },
      ]),
    },
    {
      questionText: 'Which sea did Moses part?',
      answerOptions: shuffleArray([
        { answerText: 'Red Sea', isCorrect: true },
        { answerText: 'Dead Sea', isCorrect: false },
        { answerText: 'Sea of Galilee', isCorrect: false },
        { answerText: 'Mediterranean Sea', isCorrect: false },
      ]),
    },
    {
      questionText: 'Who betrayed Jesus with a kiss?',
      answerOptions: shuffleArray([
        { answerText: 'Judas Iscariot', isCorrect: true },
        { answerText: 'Peter', isCorrect: false },
        { answerText: 'John', isCorrect: false },
        { answerText: 'Andrew', isCorrect: false },
      ]),
    },
  
    // Difficult questions start here
    {
      questionText: 'What is the longest chapter in the Bible?',
      answerOptions: shuffleArray([
        { answerText: 'Psalm 119', isCorrect: true },
        { answerText: 'Psalm 23', isCorrect: false },
        { answerText: 'Genesis 1', isCorrect: false },
        { answerText: 'Exodus 14', isCorrect: false },
      ]),
    },
    {
      questionText: 'Who is the father of the twelve tribes of Israel?',
      answerOptions: shuffleArray([
        { answerText: 'Jacob', isCorrect: true },
        { answerText: 'Abraham', isCorrect: false },
        { answerText: 'Isaac', isCorrect: false },
        { answerText: 'Joseph', isCorrect: false },
      ]),
    },
    {
      questionText: 'Which prophet was taken up to heaven in a whirlwind?',
      answerOptions: shuffleArray([
        { answerText: 'Elijah', isCorrect: true },
        { answerText: 'Elisha', isCorrect: false },
        { answerText: 'Isaiah', isCorrect: false },
        { answerText: 'Jeremiah', isCorrect: false },
      ]),
    },
    {
      questionText: 'In the Book of Revelation, what is the number of the beast?',
      answerOptions: shuffleArray([
        { answerText: '666', isCorrect: true },
        { answerText: '777', isCorrect: false },
        { answerText: '888', isCorrect: false },
        { answerText: '999', isCorrect: false },
      ]),
    },
    {
      questionText: 'Which king had a dream about a statue made of different metals?',
      answerOptions: shuffleArray([
        { answerText: 'Nebuchadnezzar', isCorrect: true },
        { answerText: 'David', isCorrect: false },
        { answerText: 'Solomon', isCorrect: false },
        { answerText: 'Saul', isCorrect: false },
      ]),
    },
    {
      questionText: 'Who was the first king of Israel?',
      answerOptions: shuffleArray([
        { answerText: 'Saul', isCorrect: true },
        { answerText: 'David', isCorrect: false },
        { answerText: 'Solomon', isCorrect: false },
        { answerText: 'Samuel', isCorrect: false },
      ]),
    },
    {
      questionText: 'How many books are in the Bible?',
      answerOptions: shuffleArray([
        { answerText: '66', isCorrect: true },
        { answerText: '72', isCorrect: false },
        { answerText: '39', isCorrect: false },
        { answerText: '27', isCorrect: false },
      ]),
    },
    {
      questionText: 'How many times did Peter deny Jesus?',
      answerOptions: shuffleArray([
        { answerText: '3', isCorrect: true },
        { answerText: '2', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '5', isCorrect: false },
      ]),
    },
    {
      questionText: 'Which book in the Bible has the story of Balaam\'s donkey speaking?',
      answerOptions: shuffleArray([
        { answerText: 'Numbers', isCorrect: true },
        { answerText: 'Genesis', isCorrect: false },
        { answerText: 'Exodus', isCorrect: false },
        { answerText: 'Deuteronomy', isCorrect: false },
      ]),
    },
    {
      questionText: 'Who was the mother of Samuel, the prophet?',
      answerOptions: shuffleArray([
        { answerText: 'Hannah', isCorrect: true },
        { answerText: 'Sarah', isCorrect: false },
        { answerText: 'Rachel', isCorrect: false },
        { answerText: 'Leah', isCorrect: false },
      ]),
    },
    {
      questionText: 'How many days did it take God to create the world?',
      answerOptions: shuffleArray([
        { answerText: '6', isCorrect: true },
        { answerText: '7', isCorrect: false },
        { answerText: '5', isCorrect: false },
        { answerText: '8', isCorrect: false },
      ]),
    },
    {
      questionText: 'Which disciple was a tax collector before following Jesus?',
      answerOptions: shuffleArray([
        { answerText: 'Matthew', isCorrect: true },
        { answerText: 'John', isCorrect: false },
        { answerText: 'Peter', isCorrect: false },
        { answerText: 'Andrew', isCorrect: false },
      ]),
    },
    {
      questionText: 'What is the last book of the Bible?',
      answerOptions: shuffleArray([
        { answerText: 'Revelation', isCorrect: true },
        { answerText: 'Jude', isCorrect: false },
        { answerText: 'Acts', isCorrect: false },
        { answerText: 'John', isCorrect: false },
      ]),
    },
    {
      questionText: 'How many people were saved on Noah\'s ark?',
      answerOptions: shuffleArray([
        { answerText: '8', isCorrect: true },
        { answerText: '12', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '10', isCorrect: false },
      ]),
    },
    {
      questionText: 'Who interpreted King Nebuchadnezzar\'s dream?',
      answerOptions: shuffleArray([
        { answerText: 'Daniel', isCorrect: true },
        {answerText: 'Joseph', isCorrect: false },
        { answerText: 'Moses', isCorrect: false },
        { answerText: 'Joshua', isCorrect: false },
      ]),
    },
    {
      questionText: 'What did God create on the fourth day?',
      answerOptions: shuffleArray([
        { answerText: 'Sun, Moon, and Stars', isCorrect: true },
        { answerText: 'Plants and Trees', isCorrect: false },
        { answerText: 'Animals', isCorrect: false },
        { answerText: 'Man', isCorrect: false },
      ]),
    },
    {
      questionText: 'Which apostle is known for doubting the resurrection of Jesus?',
      answerOptions: shuffleArray([
        { answerText: 'Thomas', isCorrect: true },
        { answerText: 'Peter', isCorrect: false },
        { answerText: 'John', isCorrect: false },
        { answerText: 'James', isCorrect: false },
      ]),
    },
    {
      questionText: 'Who was the high priest who put Jesus on trial?',
      answerOptions: shuffleArray([
        { answerText: 'Caiaphas', isCorrect: true },
        { answerText: 'Pilate', isCorrect: false },
        { answerText: 'Annas', isCorrect: false },
        { answerText: 'Herod', isCorrect: false },
      ]),
    },
    {
      questionText: 'Which angel appeared to Mary to announce the birth of Jesus?',
      answerOptions: shuffleArray([
        { answerText: 'Gabriel', isCorrect: true },
        { answerText: 'Michael', isCorrect: false },
        { answerText: 'Raphael', isCorrect: false },
        { answerText: 'Uriel', isCorrect: false },
      ]),
    },
    {
      questionText: 'Who was swallowed by a great fish or whale?',
      answerOptions: shuffleArray([
        { answerText: 'Jonah', isCorrect: true },
        { answerText: 'Elijah', isCorrect: false },
        { answerText: 'Moses', isCorrect: false },
        { answerText: 'Noah', isCorrect: false },
      ]),
    },
    {
      questionText: 'What was the name of the place where Jesus was crucified?',
      answerOptions: shuffleArray([
        { answerText: 'Golgotha', isCorrect: true },
        { answerText: 'Bethlehem', isCorrect: false },
        { answerText: 'Nazareth', isCorrect: false },
        { answerText: 'Jericho', isCorrect: false },
      ]),
    },
    {
      questionText: 'Which woman in the Bible was turned into a pillar of salt?',
      answerOptions: shuffleArray([
        { answerText: "Lot's wife", isCorrect: true },
        { answerText: 'Sarah', isCorrect: false },
        { answerText: 'Rachel', isCorrect: false },
        { answerText: 'Leah', isCorrect: false },
      ]),
    },
    {
      questionText: 'How many plagues did God send upon Egypt?',
      answerOptions: shuffleArray([
        { answerText: '10', isCorrect: true },
        { answerText: '7', isCorrect: false },
        { answerText: '12', isCorrect: false },
        { answerText: '5', isCorrect: false },
      ]),
    },
  ]);
  
  export { shuffleArray, questions };
  
  