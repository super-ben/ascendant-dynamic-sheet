"use strict";

// Get element by ID helper function
const numGetById = (id) => Number(document.getElementById(id).value);

const calcMigScore = () => {
  const updateMigScore = numGetById("migScore") * 10;
  calcWeight();
  calcJumpSpeed();
  calcCarrCapacity();
  calcHealthDet(healthDetScoreMap, "migScore", "healthScore");
  calcHealthDetRecovery(
    healthDetRecoveryScoreMap,
    "migScore",
    "healthRecScore"
  );
  return updateMigScore;
};

const calcAgiScore = () => {
  const updateAgiScore = numGetById("agiScore") * 10;
  calcRunSpeed();
  return updateAgiScore;
};

const calcValScore = () => {
  const updateValScore = numGetById("valScore") * 10;
  calcInitiative();
  return updateValScore;
};

const calcResScore = () => {
  const updateResScore = numGetById("resScore") * 10;
  calcPassiveSpotting();
  calcHealthDet(healthDetScoreMap, "resScore", "detScore");
  calcHealthDetRecovery(healthDetRecoveryScoreMap, "resScore", "detRecScore");
  return updateResScore;
};

const calcInsScore = () => {
  return numGetById("insScore") * 10;
};

function calcCharScore() {
  const updateCharScore = numGetById("charScore") * 10;
  calcReputation();
  return updateCharScore;
}

const calcPrimary = () => {
  const totalPrimary =
    calcMigScore() +
    calcAgiScore() +
    calcValScore() +
    calcResScore() +
    calcInsScore() +
    calcCharScore();
  document.getElementById("primAtCost").value = totalPrimary;
};

const calcWeight = () => {
  if (numGetById("migScore") > 3) {
    document.getElementById("weightScore").value = 3;
  } else {
    document.getElementById("weightScore").value =
      document.getElementById("migScore").value;
  }
};

const calcRunSpeed = () => {
  if (numGetById("agiScore") + 3 - numGetById("weightScore") < 5) {
    document.getElementById("runSpeedScore").value =
      numGetById("agiScore") + 3 - numGetById("weightScore");
  } else {
    document.getElementById("runSpeedScore").value = 5;
  }
};

const calcJumpSpeed = () => {
  document.getElementById("jumpSpeedScore").value =
    numGetById("migScore") - numGetById("weightScore");
};

function calcCarrCapacity() {
  document.getElementById("carrCapScore").value = numGetById("migScore") - 3;
}

const calcInitiative = () => {
  document.getElementById("iniScore").value = numGetById("valScore");
};

const calcReputation = () => {
  document.getElementById("repScore").value = numGetById("charScore");
};

const calcPassiveSpotting = () => {
  document.getElementById("pasSpotScore").value = 8;
};

const calcHeroPoints = () => {
  document.getElementById("heroPoints").value =
    2 * (document.getElementById("powerLimit").value - 12);
};

const healthDetScoreMap = new Map([
  ["1", "15"],
  ["2", "20"],
  ["3", "30"],
  ["4", "40"],
  ["5", "60"],
  ["6", "80"],
  ["7", "120"],
  ["8", "160"],
  ["9", "240"],
  ["10", "320"],
  ["11", "480"],
  ["12", "640"],
  ["13", "960"],
  ["14", "1280"],
  ["15", "1920"],
  ["16", "2560"],
  ["17", "3840"],
]);

function calcHealthDet(map, source, dest) {
  const s = document.getElementById(source);
  const d = document.getElementById(dest);
  d.value = map.get(s.value);
}

const healthDetRecoveryScoreMap = new Map([
  ["1", "3"],
  ["2", "4"],
  ["3", "6"],
  ["4", "8"],
  ["5", "12"],
  ["6", "16"],
  ["7", "24"],
  ["8", "32"],
  ["9", "48"],
  ["10", "64"],
  ["11", "96"],
  ["12", "128"],
  ["13", "192"],
  ["14", "256"],
  ["15", "384"],
]);

function calcHealthDetRecovery(map, source, dest) {
  const s = document.getElementById(source);
  const d = document.getElementById(dest);
  d.value = map.get(s.value);
}

const calcPowers = () => {
  calcSP(
    "power1Total",
    "power2Total",
    "power3Total",
    "power4Total",
    "power5Total",
    "power6Total",
    "power7Total",
    "power8Total",
    "power9Total",
    "power10Total",
    "power1VarCost",
    "power2VarCost",
    "power3VarCost",
    "power4VarCost",
    "power5VarCost",
    "power6VarCost",
    "power7VarCost",
    "power8VarCost",
    "power9VarCost",
    "power10VarCost",
    "power1SP",
    "power2SP",
    "power3SP",
    "power4SP",
    "power5SP",
    "power6SP",
    "power7SP",
    "power8SP",
    "power9SP",
    "power10SP",
    "power1BaseScore",
    "power2BaseScore",
    "power3BaseScore",
    "power4BaseScore",
    "power5BaseScore",
    "power6BaseScore",
    "power7BaseScore",
    "power8BaseScore",
    "power9BaseScore",
    "power10BaseScore",
    "power1BaseCost",
    "power2BaseCost",
    "power3BaseCost",
    "power4BaseCost",
    "power5BaseCost",
    "power6BaseCost",
    "power7BaseCost",
    "power8BaseCost",
    "power9BaseCost",
    "power10BaseCost"
  );

  calcAllTotalCPs(
    "allPower",
    "power1Total",
    "power2Total",
    "power3Total",
    "power4Total",
    "power5Total",
    "power6Total",
    "power7Total",
    "power8Total",
    "power9Total",
    "power10Total"
  );
};

const calcSkills = () => {
  calcSP(
    "skill1Total",
    "skill2Total",
    "skill3Total",
    "skill4Total",
    "skill5Total",
    "skill6Total",
    "skill7Total",
    "skill8Total",
    "skill9Total",
    "skill10Total",
    "skill1VarCost",
    "skill2VarCost",
    "skill3VarCost",
    "skill4VarCost",
    "skill5VarCost",
    "skill6VarCost",
    "skill7VarCost",
    "skill8VarCost",
    "skill9VarCost",
    "skill10VarCost",
    "skill1SP",
    "skill2SP",
    "skill3SP",
    "skill4SP",
    "skill5SP",
    "skill6SP",
    "skill7SP",
    "skill8SP",
    "skill9SP",
    "skill10SP",
    "skill1BaseScore",
    "skill2BaseScore",
    "skill3BaseScore",
    "skill4BaseScore",
    "skill5BaseScore",
    "skill6BaseScore",
    "skill7BaseScore",
    "skill8BaseScore",
    "skill9BaseScore",
    "skill10BaseScore",
    "skill1BaseCost",
    "skill2BaseCost",
    "skill3BaseCost",
    "skill4BaseCost",
    "skill5BaseCost",
    "skill6BaseCost",
    "skill7BaseCost",
    "skill8BaseCost",
    "skill9BaseCost",
    "skill10BaseCost"
  );

  calcAllTotalCPs(
    "allSkills",
    "skill1Total",
    "skill2Total",
    "skill3Total",
    "skill4Total",
    "skill5Total",
    "skill6Total",
    "skill7Total",
    "skill8Total",
    "skill9Total",
    "skill10Total"
  );
};

// single function to calculate totals
function calcAllTotalCPs(
  all,
  total1,
  total2,
  total3,
  total4,
  total5,
  total6,
  total7,
  total8,
  total9,
  total10
) {
  document.getElementById(all).value =
    numGetById(total1) +
    numGetById(total2) +
    numGetById(total3) +
    numGetById(total4) +
    numGetById(total5) +
    numGetById(total6) +
    numGetById(total7) +
    numGetById(total8) +
    numGetById(total9) +
    numGetById(total10);
}

function calcSP(
  final1,
  final2,
  final3,
  final4,
  final5,
  final6,
  final7,
  final8,
  final9,
  final10,
  varC1,
  varC2,
  varC3,
  varC4,
  varC5,
  varC6,
  varC7,
  varC8,
  varC9,
  varC10,
  sp1,
  sp2,
  sp3,
  sp4,
  sp5,
  sp6,
  sp7,
  sp8,
  sp9,
  sp10,
  baseS1,
  baseS2,
  baseS3,
  baseS4,
  baseS5,
  baseS6,
  baseS7,
  baseS8,
  baseS9,
  baseS10,
  baseC1,
  baseC2,
  baseC3,
  baseC4,
  baseC5,
  baseC6,
  baseC7,
  baseC8,
  baseC9,
  baseC10
) {
  document.getElementById(final1).value =
    numGetById(varC1) * (numGetById(sp1) - numGetById(baseS1)) +
    numGetById(baseC1);
  document.getElementById(final2).value =
    numGetById(varC2) * (numGetById(sp2) - numGetById(baseS2)) +
    numGetById(baseC2);
  document.getElementById(final3).value =
    numGetById(varC3) * (numGetById(sp3) - numGetById(baseS3)) +
    numGetById(baseC3);
  document.getElementById(final4).value =
    numGetById(varC4) * (numGetById(sp4) - numGetById(baseS4)) +
    numGetById(baseC4);
  document.getElementById(final5).value =
    numGetById(varC5) * (numGetById(sp5) - numGetById(baseS5)) +
    numGetById(baseC5);
  document.getElementById(final6).value =
    numGetById(varC6) * (numGetById(sp6) - numGetById(baseS6)) +
    numGetById(baseC6);
  document.getElementById(final7).value =
    numGetById(varC7) * (numGetById(sp7) - numGetById(baseS7)) +
    numGetById(baseC7);
  document.getElementById(final8).value =
    numGetById(varC8) * (numGetById(sp8) - numGetById(baseS8)) +
    numGetById(baseC8);
  document.getElementById(final9).value =
    numGetById(varC9) * (numGetById(sp9) - numGetById(baseS9)) +
    numGetById(baseC9);
  document.getElementById(final10).value =
    numGetById(varC10) * (numGetById(sp10) - numGetById(baseS10)) +
    numGetById(baseC10);
}

const calcTotalCPs = () => {
  const totalCPs =
    numGetById("primAtCost") +
    numGetById("allPower") +
    numGetById("allSkills") +
    numGetById("allPerks") -
    numGetById("allDrawbacks");
  document.getElementById("allCPs").value = totalCPs;
};
