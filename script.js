"use strict";
const calcMigScore = () => {
  const updateMigScore = Number(document.getElementById("migScore").value) * 10;
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
  const updateAgiScore = Number(document.getElementById("agiScore").value) * 10;
  calcRunSpeed();
  return updateAgiScore;
};

const calcValScore = () => {
  const updateValScore = Number(document.getElementById("valScore").value) * 10;
  calcInitiative();
  return updateValScore;
};

const calcResScore = () => {
  const updateResScore = Number(document.getElementById("resScore").value) * 10;
  calcPassiveSpotting();
  calcHealthDet(healthDetScoreMap, "resScore", "detScore");
  calcHealthDetRecovery(healthDetRecoveryScoreMap, "resScore", "detRecScore");
  return updateResScore;
};

const calcInsScore = () => {
  return Number(document.getElementById("insScore").value) * 10;
};

function calcCharScore() {
  const updateCharScore =
    Number(document.getElementById("charScore").value) * 10;
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
  if (Number(document.getElementById("migScore").value) > 3) {
    document.getElementById("weightScore").value = 3;
  } else {
    document.getElementById("weightScore").value =
      document.getElementById("migScore").value;
  }
};

const calcRunSpeed = () => {
  if (
    Number(document.getElementById("agiScore").value) +
      3 -
      Number(document.getElementById("weightScore").value) <
    5
  ) {
    document.getElementById("runSpeedScore").value =
      Number(document.getElementById("agiScore").value) +
      3 -
      Number(document.getElementById("weightScore").value);
  } else {
    document.getElementById("runSpeedScore").value = 5;
  }
};

const calcJumpSpeed = () => {
  document.getElementById("jumpSpeedScore").value =
    Number(document.getElementById("migScore").value) -
    Number(document.getElementById("weightScore").value);
};

function calcCarrCapacity() {
  document.getElementById("carrCapScore").value =
    Number(document.getElementById("migScore").value) - 3;
}

const calcInitiative = () => {
  document.getElementById("iniScore").value = Number(
    document.getElementById("valScore").value
  );
};

const calcReputation = () => {
  document.getElementById("repScore").value = Number(
    document.getElementById("charScore").value
  );
};

const calcPassiveSpotting = () => {
  document.getElementById("pasSpotScore").value = 8;
};

const calcHeroPoints = () => {
  document.getElementById("heroPoints").value =
    2 * (document.getElementById("powerLevel").value - 12);
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
    Number(document.getElementById(total1).value) +
    Number(document.getElementById(total2).value) +
    Number(document.getElementById(total3).value) +
    Number(document.getElementById(total4).value) +
    Number(document.getElementById(total5).value) +
    Number(document.getElementById(total6).value) +
    Number(document.getElementById(total7).value) +
    Number(document.getElementById(total8).value) +
    Number(document.getElementById(total9).value) +
    Number(document.getElementById(total10).value);
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
    Number(document.getElementById(varC1).value) *
      (Number(document.getElementById(sp1).value) -
        Number(document.getElementById(baseS1).value)) +
    Number(document.getElementById(baseC1).value);
  document.getElementById(final2).value =
    Number(document.getElementById(varC2).value) *
      (Number(document.getElementById(sp2).value) -
        Number(document.getElementById(baseS2).value)) +
    Number(document.getElementById(baseC2).value);
  document.getElementById(final3).value =
    Number(document.getElementById(varC3).value) *
      (Number(document.getElementById(sp3).value) -
        Number(document.getElementById(baseS3).value)) +
    Number(document.getElementById(baseC3).value);
  document.getElementById(final4).value =
    Number(document.getElementById(varC4).value) *
      (Number(document.getElementById(sp4).value) -
        Number(document.getElementById(baseS4).value)) +
    Number(document.getElementById(baseC4).value);
  document.getElementById(final5).value =
    Number(document.getElementById(varC5).value) *
      (Number(document.getElementById(sp5).value) -
        Number(document.getElementById(baseS5).value)) +
    Number(document.getElementById(baseC5).value);
  document.getElementById(final6).value =
    Number(document.getElementById(varC6).value) *
      (Number(document.getElementById(sp6).value) -
        Number(document.getElementById(baseS6).value)) +
    Number(document.getElementById(baseC6).value);
  document.getElementById(final7).value =
    Number(document.getElementById(varC7).value) *
      (Number(document.getElementById(sp7).value) -
        Number(document.getElementById(baseS7).value)) +
    Number(document.getElementById(baseC7).value);
  document.getElementById(final8).value =
    Number(document.getElementById(varC8).value) *
      (Number(document.getElementById(sp8).value) -
        Number(document.getElementById(baseS8).value)) +
    Number(document.getElementById(baseC8).value);
  document.getElementById(final9).value =
    Number(document.getElementById(varC9).value) *
      (Number(document.getElementById(sp9).value) -
        Number(document.getElementById(baseS9).value)) +
    Number(document.getElementById(baseC9).value);
  document.getElementById(final10).value =
    Number(document.getElementById(varC10).value) *
      (Number(document.getElementById(sp10).value) -
        Number(document.getElementById(baseS10).value)) +
    Number(document.getElementById(baseC10).value);
}

const calcTotalCPs = () => {
  const totalCPs =
    Number(document.getElementById("primAtCost").value) +
    Number(document.getElementById("allPower").value) +
    Number(document.getElementById("allSkills").value) +
    Number(document.getElementById("allPerks").value) -
    Number(document.getElementById("allDrawbacks").value);
  document.getElementById("allCPs").value = totalCPs;
};
