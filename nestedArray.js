// const scores = [['Bob','45'],['Eric','44'],['Bob','100'],['Charls','34']];
// bobScores = scores.filter(s => s[0] == 'Bob').map(s => parseInt(s[1], 10))
// //console.log(bobScores.reduce((a,b) => Math.floor(a + b)/2, 0))
// console.log(scores.filter(item => item[0] === 'Bob').map(item => Number(item[1])))
// const names = new Set(scores.map(item => item[0]))
// console.log(names);
const scores = [["Bob","45"],["Charls","44"],["Bob","100"],["Eric","34"]];
const buildScoresByName = (scoresByName, scoreWithName) => {
  const name = scoreWithName[0];
  //console.log(name);
  const score =  parseInt(scoreWithName[1]);
  //console.log(score);
  previousScores = (scoresByName.get(name) || []);
  console.log(previousScores)
  previousScores.push(score);
  scoresByName.set(name, previousScores);
  return scoresByName;
}
const avg = (values) => values.reduce((a,b) => a + b, 0) / values.length;

var newArr = Array.from(
  scores.reduce(buildScoresByName, new Map())
).map( (nameWithScores) => [nameWithScores[0], avg(nameWithScores[1])] );

console.log(Math.floor(Math.max(...newArr.map(s => s[1]))))