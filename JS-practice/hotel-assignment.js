function enteringHotel() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Enter the Hotel");

      resolve("Enter the Hotel");
      // reject("error in user");
    }, 3000);
    // setTimeout(function () {
    //   console.log("go to seat");

    //   resolve("go to seat");
    //   // reject("error in user");
    // }, 2000);
    // setTimeout(function () {
    //   console.log("order food");

    //   resolve("order food");
    //   // reject("error in user");
    // }, 2000);
    // setTimeout(function () {
    //   console.log("prepare food");

    //   resolve("prepare food");
    //   // reject("error in user");
    // }, 3000);
    // setTimeout(function () {
    //   console.log("serve food");

    //   resolve("serve food");
    //   // reject("error in user");
    // }, 2000);
    // setTimeout(function () {
    //   console.log("eat food");

    //   resolve("eat food");
    //   // reject("error in user");
    // }, 2000);
    // setTimeout(function () {
    //   console.log("pay bill");

    //   resolve("pay bill");
    //   // reject("error in user");
    // }, 1000);
    // setTimeout(function () {
    //   console.log("walk away");

    //   resolve("walk away");
    //   // reject("error in user");
    // }, 1000);
  });
}

function goToSeat() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("go to seat");

      resolve("go to seat");
      // reject("error in repos");
    }, 2000);
  });
}

// function getCommits(repo) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(`getting commits of repo ${repo}`);
//       let commits = ["initial commit", "first commit"];
//       resolve(commits);
//     }, 2000);
//   });
// }

// // syntactic sugar of promise

async function hotelSteps() {
  try {
    await enteringHotel();
    // console.log(userName);
    await goToSeat();
    //     console.log(repos);
    //     const commits = await getCommits(repos[0]);
    //     console.log(commits);
  } catch (err) {
    console.log(err);
  }
  //   finally {
  //     console.log("finally");
  //   }
}

hotelSteps();
