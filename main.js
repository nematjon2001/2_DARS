// ================= 1-masala ==================
// ==============================================
// Shoxrux kosmosdagi parolini tekshirmoqchi 🚀
// Uning paroli "space" bilan boshlanadi va "2023" bilan tugaydimi? 😎
// Input: const password = "spaceadventure2023";
// startsWith va endsWith metodlaridan foydalaning.
// Output: true
// ============================================= yechim ==================================================
// const password = "spaceadventure2023";

// function checkSpacePassword(password) {
//   res = console.log(password.startsWith("space") && password.endsWith("2023"));
//   return res;
// }

// checkSpacePassword(password);

// ===============================================================================================

// ================= 2-masala ==================
// ==============================================
// Zafarjon sirli xabarni ochmoqchi 🔍
// Xabarda "code" so'zi borligini tekshirib, uni katta harflarga aylantiring! 😜
// Input: const message = "secret code revealed";
// includes va toUpperCase metodlaridan foydalaning.
// Output: "SECRET CODE REVEALED"

// ===========================================yechim====================================================

// const message = "secret code revealed";

// function decodeMessage(message) {
//   if (message.includes("code") === true) {
//     console.log(message.toUpperCase());
//   } else {
//     console.log("cod aniqlanmadi !");
//   }
// }

// decodeMessage(message);

// ===============================================================================================

// ================= 3-masala ==================
// ==============================================
// Ne'matjon super qahramon kostyumini tayyorlamoqda 💪
// Uning ismini katta harflarga aylantirib, oxiriga "MAN" qo'shing! 😂🦸‍♂️
// Input: const hero = "spider";
// toUpperCase va concat metodlaridan foydalaning.
// Output: "SPIDERMAN"
// const hero = "spider";

// ==============================================yechim=================================================
// const hero = "spider";

// function makeSuperHero(hero) {
//   res = hero.toUpperCase();
//   reset = res.concat("man".toUpperCase());
//   return reset;
// }

// console.log(makeSuperHero(hero));
// ===============================================================================================

// ================= 4-masala ==================
// ==============================================
// Doniyor ninja kodini yashirmoqchi 🙈
// Uning kodini kichik harflarga aylantirib, boshidagi bo'shliqlarni olib tashlang! 🥷
// Input: const ninjaCode = "   STEALTH MODE";
// toLowerCase va trimStart metodlaridan foydalaning.
// Output: "stealth mode"

// ========================================yechim=======================================================

// const ninjaCode = "   STEALTH MODE";

// function hideNinjaCode(ninjaCode) {
//   res = ninjaCode.toLowerCase();
//   resat = res.trimStart();
//   return console.log(resat);
// }

// hideNinjaCode(ninjaCode);

// ===============================================================================================

// ================= 5-masala ==================
// ==============================================
// Hamidulloh pitsa buyurtmasini tozalamoqchi 🍕
// Pitsa nomidagi barcha bo'shliqlarni olib tashlab, oxiriga "pizza" qo'shing! 😅
// Input: const pizza = "  spicy  pepperoni  ";
// trim va concat metodlaridan foydalaning.
// Output: "spicypepperonipizza"

// ========================================yechim=======================================================

// const pizza = "  spicy  pepperoni  ";
// // console.log(pizza);

// function cleanPizzaOrder(pizza) {
//   res = pizza.trim().concat("pizza").split(" ").join("");
//   console.log(res);
// }

// cleanPizzaOrder(pizza);

// ====================================================================================================
// ================= 6-masala ==================
// ==============================================
// Hayitali o'z qo'shig'ini 3 marta takrorlab, katta harflarga aylantirmoqchi 🎶
// Qo'shiqni takrorlang va katta harflarga o'zgartiring! 😄
// Input: const song = "la la la";
// repeat va toUpperCase metodlaridan foydalaning.
// Output: "LA LA LALA LA LALA LA LA"

// ===============================================yechim=====================================================

// const song = "la la la";

// function amplifySong(song) {
//   res = console.log(song.toUpperCase().repeat(3));
//   return res;
// }

// amplifySong(song);

// ===================================================================================================
// ================= 7-masala ==================
// ==============================================
// Azizbek jamoasiga ikkita yangi o'yinchi qo'shmoqchi ⚽
// Ikkita o'yinchini ro'yxat oxiriga qo'shib, ro'yxatni teskari qiling! 😎
// Input: const team = ["Messi", "Ronaldo"];
// push va reverse metodlaridan foydalaning.
// Output: ["Mbappe", "Neymar", "Ronaldo", "Messi"]

// ===============================================yechim=====================================================

// const team = ["Messi", "Ronaldo"];

// function updateTeam(team) {
//   team.push("Mbappe", "Neymar");
//   return console.log(team.reverse());
// }

// updateTeam(team);

// =========================================================================================================
// ================= 8-masala ==================
// ==============================================
// Asilbek jamoasidan oxirgi o'yinchini olib tashlab, ro'yxatni qatorga aylantirmoqchi 😢
// Oxirgi o'yinchini olib tashlang va ro'yxatni vergul bilan birlashtiring! 😣
// Input: const team = ["Messi", "Ronaldo", "Neymar"];
// pop va join metodlaridan foydalaning.
// Output: "Messi,Ronaldo"

// ===============================================yechim=====================================================

// const team = ["Messi", "Ronaldo", "Neymar"];

// function shrinkTeam(team) {
//   team.pop();
//   res = team.join(",");
//   return console.log(res);
// }

// shrinkTeam(team);

// ===========================================================================================================
// ================= 9-masala ==================
// ==============================================
// Fayzullo ranglar ro'yxatini teskari qilib, ularni bo'shliq bilan birlashtirmoqchi 🌈
// Ro'yxatni teskari qilib, stringga aylantiring! 😄
// Input: const colors = ["red", "blue", "green"];
// reverse va join metodlaridan foydalaning.
// Output: "green blue red"

// ===============================================yechim=====================================================

// const colors = ["red", "blue", "green"];

// function mixColors(colors) {
//   colors.reverse();
//   res = console.log(colors.join(" "));
//   return res;
// }

// mixColors(colors);

// ==========================================================================================================
// ================= 10-masala ==================
// ==============================================
// Shoxrux o'z jamoasini tekshirib, agar "Messi" bo'lsa, ro'yxatni qatorga aylantirmoqchi 📋
// "Messi" borligini tekshirib, ro'yxatni vergul bilan birlashtiring! 😎
// Input: const team = ["Messi", "Ronaldo", "Neymar"];
// includes va join metodlaridan foydalaning.
// Output: "Messi,Ronaldo,Neymar"

// ===============================================yechim=====================================================

const team = ["Messi", "Ronaldo", "Neymar"];

function checkTeam(team) {
  if (team.includes("Messi") === true) {
    return console.log(team.join(""));
  }
}

// ==============================================
// ================= 11-masala ==================
// ==============================================
// Zafarjon o'z ismini boshqa ism bilan birlashtirib, katta harflarga aylantirmoqchi 🤝
// Ikkita ismni birlashtirib, katta harflarga o'zgartiring! 😄
// Input: const name1 = "Zafar"; const name2 = "jon";
// concat va toUpperCase metodlaridan foydalaning.
// Output: "ZAFARJON"

function combineAndUpper(name1, name2) {
  // logika yozing
}

// ==============================================
// ================= 12-masala ==================
// ==============================================
// Ne'matjon parolida "secret" so'zi borligini tekshirib, uni teskari qilmoqchi 🔐
// Parolni tekshirib, agar "secret" bo'lsa, katta harflarga aylantiring! 😎
// Input: const password = "mysecretpassword";
// includes va toUpperCase metodlaridan foydalaning.
// Output: "MYSECRETPASSWORD"

function reversePassword(password) {
  // logika yozing
}

// ==============================================
// ================= 13-masala ==================
// ==============================================
// Doniyor jamoasiga yangi o'yinchi qo'shib, ro'yxatni teskari qilmoqchi ⚽
// Boshiga o'yinchi qo'shib, ro'yxatni teskari qiling! 😄
// Input: const team = ["Messi", "Ronaldo"];
// unshift va reverse metodlaridan foydalaning.
// Output: ["Ronaldo", "Messi", "Mbappe"]

function starTeam(team) {
  // logika yozing
}

// ==============================================
// ================= 14-masala ==================
// ==============================================
// Hamidulloh jamoasining birinchi o'yinchisini olib tashlab, qatorga aylantirmoqchi 😢
// Birinchi o'yinchini olib tashlab, ro'yxatni bo'shliq bilan birlashtiring! 😣
// Input: const team = ["Messi", "Ronaldo", "Neymar"];
// shift va join metodlaridan foydalaning.
// Output: "Ronaldo Neymar"

function updateRoster(team) {
  // logika yozing
}

// ==============================================
// ================= 15-masala ==================
// ==============================================
// Hayitali kodida "error" so'zini topib, uni katta harflarga aylantirmoqchi 🐞
// "error" so'zini topib, butun kodni katta harflarga o'zgartiring! 😄
// Input: const code = "debug this error now";
// search va toUpperCase metodlaridan foydalaning.
// Output: "DEBUG THIS ERROR NOW"

function fixCode(code) {
  // logika yozing
}

// ==============================================
// ================= 16-masala ==================
// ==============================================
// Azizbek kodini tozalab, oxiriga "done" qo'shmoqchi 📝
// Boshidagi bo'shliqlarni olib tashlab, oxiriga "done" qo'shing! 😎
// Input: const code = "   write code";
// trimStart va concat metodlaridan foydalaning.
// Output: "write codedone"

function finishCode(code) {
  // logika yozing
}

// ==============================================
// ================= 17-masala ==================
// ==============================================
// Asilbek kodini tozalab, boshiga "start" qo'shmoqchi 📝
// Oxiridagi bo'shliqlarni olib tashlab, boshiga "start" qo'shing! 😎
// Input: const code = "code now   ";
// trimEnd va concat metodlaridan foydalaning.
// Output: "startcode now"

function startCode(code) {
  // logika yozing
}

// ==============================================
// ================= 18-masala ==================
// ==============================================
// Fayzullo o'z ismi "bek" bilan tugasa, uni katta harflarga aylantirmoqchi 😄
// Ismni tekshirib, agar "bek" bilan tugasa, katta harflarga o'zgartiring! 😎
// Input: const name = "Fayzullobek";
// endsWith va toUpperCase metodlaridan foydalaning.
// Output: "FAYZULLOBEK"

function checkAndUpperName(name) {
  // logika yozing
}

// ==============================================
// ================= 19-masala ==================
// ==============================================
// Shoxrux ro'yxatida "pizza" borligini tekshirib, ro'yxatni qatorga aylantirmoqchi 🍕
// Agar "pizza" bo'lsa, ro'yxatni teskari qilib, bo'shliq bilan birlashtiring! 😄
// Input: const foods = ["burger", "pizza", "sushi"];
// includes, reverse va join metodlaridan foydalaning.
// Output: "sushi pizza burger"

function checkAndJoinFoods(foods) {
  // logika yozing
}

// ==============================================
// ================= 20-masala ==================
// ==============================================
// Zafarjon o'z ismini katta harflarga aylantirib, "code" so'zini qidirmoqchi 😎
// Ismni katta harflarga aylantirib, unda "CODE" so'zi borligini tekshiring! 😂
// Input: const name = "zafarcodejon";
// toUpperCase va includes metodlaridan foydalaning.
// Output: true

function checkCodeInName(name) {
  // logika yozing
}
