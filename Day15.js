// asynchronous Programming

// callback
// console.log("Before");
// getUser(10, function (userName) {
//   console.log("user-->", userName);
//   getRepositories(userName, function (repos) {
//     console.log("repos", repos);
//     getCommits(repos[1], function (commits) {
//       console.log("commits", commits);
//       //   CALLBACK HELL or Christmas Tree Problem
//     });
//   });
// });
// console.log("After");

// // callback functions -> printUser, printRepos, printCommits
// // higher order function -> a function which passes function as a parameter
// // or returns a function (getUser, getRepositories, getCommits)
// function getUser(id, printUser) {
//   setTimeout(function () {
//     console.log(`Reading data from database with ${id}...`);
//     let userName = "vasanth";
//     printUser(userName);
//   }, 1000);
// }

// function getRepositories(userName, printRepos) {
//   setTimeout(function () {
//     console.log(`getting repos of user ${userName}`);
//     let repos = ["calcultor", "portfolio", "a"];
//     printRepos(repos);
//   }, 2000);
// }

// function getCommits(repo, printCommits) {
//   setTimeout(function () {
//     console.log(`getting commits of repo ${repo}`);
//     let commits = ["initial commit", "first commit", "second commit"];
//     printCommits(commits);
//   }, 2000);
// }
// Reading data from database with 10...
// user--> vasanth
/**
 * -----------------------
 * PROMISES
 *-------------------------
 */

// const p = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("sss");
//     reject("error in promise");
//   }, 3000);
// });

// p.then(function (res) {
//   console.log(res);
// }).catch(function (error) {
//   console.log(error);
// });

const p = new Promise(function (userName, reject) {
  setTimeout(function () {
    userName("vasanth");
    reject("error in promise");
  }, 3000);
});

p.then(function (res) {
  console.log(res);
}).catch(function (error) {
  console.log(error);
});
