const transform = (data: string) => {
  const splited = data.split('\n');
  // make chunks from splited array, each chunk is divided by empty string ""

  const chunks = [];
  let chunk = [];
  for (let i = 0; i < splited.length; i++) {
    if (splited[i] === '') {
      chunks.push(chunk);
      chunk = [];
    } else {
      chunk.push(splited[i]);
    }
  }

  // each chunk has correct answer end with "//", find it and mark is as correct: true in the result
  const result = [];
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const question = chunk[0];
    const answers = chunk.slice(1);
    result.push({
      question,
      answers: answers.map((answer) => ({
        answer: answer.replace('//', ''),
        correct: answer.includes('//') ? true : false,
      })),
    });
  }

  console.log(JSON.stringify(result));
  return result;
};

const res = transform(`Co vyjadřuje P-R křivka?
závislost přesnosti (precision) na úplnosti (recall) u Booleovského modelu (11 standardních úrovních recallu) //
závislost úplnosti (recall) na přesnosti (precision) u Booleovského modelu (11 standardních úrovních přenosti)
`);
