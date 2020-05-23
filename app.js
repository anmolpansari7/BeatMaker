const SocialMediaButtons = document.querySelectorAll(".social_media_buttons");
const SwitchButton = document.querySelectorAll(".switch_button");
const BeatButtonLine1 = document.querySelectorAll(".beat_button_line1");
const BeatButtonLine2 = document.querySelectorAll(".beat_button_line2");
const BeatButtonLine3 = document.querySelectorAll(".beat_button_line3");
const BeatButtonLine4 = document.querySelectorAll(".beat_button_line4");
const BeatButtonLine5 = document.querySelectorAll(".beat_button_line5");
const BeatButtonLine6 = document.querySelectorAll(".beat_button_line6");
const BeatButtonLine7 = document.querySelectorAll(".beat_button_line7");
const BeatButtonLine8 = document.querySelectorAll(".beat_button_line8");
const BeatButtonLine9 = document.querySelectorAll(".beat_button_line9");
const BeatButtonLine10 = document.querySelectorAll(".beat_button_line10");
const volumeControl = document.querySelector("#volume_control");
const tempoControl = document.querySelector("#tempo_control");
// even after switching off the switch button the class active_Line is still there.
// you have just applied deactive class to the buttons.

let buttonSwitchLine1 = 1;
let arrayLine1 = [];
let arrayLine2 = [];
let arrayLine3 = [];
let arrayLine4 = [];
let arrayLine5 = [];
let arrayLine6 = [];
let arrayLine7 = [];
let arrayLine8 = [];
let arrayLine9 = [];
let arrayLine10 = [];

//  --------------------------------Switch Button Section----------------------------//

SwitchButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("line" + [index + 1]);
    if ($(".active_line1").hasClass("line1")) {
      buttonSwitchLine1 = 0;
      removeActivityLine1();
    } else {
      buttonSwitchLine1 = 1;
      gainActivityLine1();
    }

    if ($(".active_line2").hasClass("line2")) {
      buttonSwitchLine2 = 0;
      removeActivityLine2();
    } else {
      buttonSwitchLine2 = 1;
      gainActivityLine2();
    }

    if ($(".active_line3").hasClass("line3")) {
      buttonSwitchLine3 = 0;
      removeActivityLine3();
    } else {
      buttonSwitchLine3 = 1;
      gainActivityLine3();
    }

    if ($(".active_line4").hasClass("line4")) {
      buttonSwitchLine4 = 0;
      removeActivityLine4();
    } else {
      buttonSwitchLine4 = 1;
      gainActivityLine4();
    }

    if ($(".active_line5").hasClass("line5")) {
      buttonSwitchLine5 = 0;
      removeActivityLine5();
    } else {
      buttonSwitchLine5 = 1;
      gainActivityLine5();
    }

    if ($(".active_line6").hasClass("line6")) {
      buttonSwitchLine6 = 0;
      removeActivityLine6();
    } else {
      buttonSwitchLine6 = 1;
      gainActivityLine6();
    }

    if ($(".active_line7").hasClass("line7")) {
      buttonSwitchLine7 = 0;
      removeActivityLine7();
    } else {
      buttonSwitchLine7 = 1;
      gainActivityLine7();
    }

    if ($(".active_line8").hasClass("line8")) {
      buttonSwitchLine8 = 0;
      removeActivityLine8();
    } else {
      buttonSwitchLine8 = 1;
      gainActivityLine8();
    }

    if ($(".active_line9").hasClass("line9")) {
      buttonSwitchLine9 = 0;
      removeActivityLine9();
    } else {
      buttonSwitchLine9 = 1;
      gainActivityLine9();
    }

    if ($(".active_line10").hasClass("line10")) {
      buttonSwitchLine10 = 0;
      removeActivityLine10();
    } else {
      buttonSwitchLine10 = 1;
      gainActivityLine10();
    }
  });
});

// -------------Beat Button Section (important!)----------------------//

BeatButtonLine1.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active_line1");

    arrayHandeler(index, arrayLine1);
    console.log(arrayLine1);

    // const OptionLine1 = selectedBeatLine1();
    // playSoundLine1(OptionLine1);
  });
});

BeatButtonLine2.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active_line2");

    arrayHandeler(index, arrayLine2);
    console.log(arrayLine2);

    // const OptionLine2 = selectedBeatLine2();
    // playSoundLine2(OptionLine2);
  });
});

BeatButtonLine3.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active_line3");

    arrayHandeler(index, arrayLine3);
    console.log(arrayLine3);

    // const OptionLine3 = selectedBeatLine3();
    // playSoundLine3(OptionLine3);
  });
});

BeatButtonLine4.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active_line4");

    arrayHandeler(index, arrayLine4);
    console.log(arrayLine4);

    //   const OptionLine4 = selectedBeatLine4();
    //   playSoundLine4(OptionLine4);
  });
});

BeatButtonLine5.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active_line5");

    arrayHandeler(index, arrayLine5);
    console.log(arrayLine5);

    // const OptionLine5 = selectedBeatLine5();
    // playSoundLine5(OptionLine5);
  });
});

BeatButtonLine6.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active_line6");

    arrayHandeler(index, arrayLine6);
    console.log(arrayLine6);

    // const OptionLine6 = selectedBeatLine6();
    // playSoundLine6(OptionLine6);
  });
});

BeatButtonLine7.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active_line7");

    arrayHandeler(index, arrayLine7);
    console.log(arrayLine7);

    // const OptionLine7 = selectedBeatLine7();
    // playSoundLine7(OptionLine7);
  });
});

BeatButtonLine8.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active_line8");

    arrayHandeler(index, arrayLine8);
    console.log(arrayLine8);

    // const OptionLine8 = selectedBeatLine8();
    // playSoundLine8(OptionLine8);
  });
});

BeatButtonLine9.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active_line9");

    arrayHandeler(index, arrayLine9);
    console.log(arrayLine9);

    // const OptionLine9 = selectedBeatLine9();
    // playSoundLine9(OptionLine9);
  });
});

BeatButtonLine10.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active_line10");

    arrayHandeler(index, arrayLine10);
    console.log(arrayLine10);

    // const OptionLine10 = selectedBeatLine10();
    // playSoundLine10(OptionLine10);
  });
});

// --------ArrayFunction that stores the info about the active buttons in all the line----------------

// Idea is to store the buttons that are activated in an array.

function arrayHandeler(index, array) {
  if (array.length == 0) {
    array.push(index);
  } else if (array.includes(index)) {
    let i = array.indexOf(index);
    array.splice(i, 1);
  } else {
    array.push(index);
  }
  array.sort((a, b) => a - b);
}

//------------- Functions for selecting the Beat Options---------------------------//

function selectedBeatLine1() {
  const optionLine1 = document.getElementById("beat_clap_list");
  const selectedIndexLine1 = optionLine1.selectedIndex;
  const selectedOptionLine1 = optionLine1.options[selectedIndexLine1].text;
  return selectedOptionLine1;
}

function selectedBeatLine2() {
  const optionLine2 = document.getElementById("beat_crash_list");
  const selectedIndexLine2 = optionLine2.selectedIndex;
  const selectedOptionLine2 = optionLine2.options[selectedIndexLine2].text;
  return selectedOptionLine2;
}

function selectedBeatLine3() {
  const optionLine3 = document.getElementById("beat_hihat_list");
  const selectedIndexLine3 = optionLine3.selectedIndex;
  const selectedoptionLine3 = optionLine3.options[selectedIndexLine3].text;
  return selectedoptionLine3;
}

function selectedBeatLine4() {
  const optionLine4 = document.getElementById("beat_kick_list");
  const selectedIndexLine4 = optionLine4.selectedIndex;
  const selectedOptionLine4 = optionLine4.options[selectedIndexLine4].text;
  return selectedOptionLine4;
}

function selectedBeatLine5() {
  const optionLine5 = document.getElementById("beat_openhat_list");
  const selectedIndexLine5 = optionLine5.selectedIndex;
  const selectedOptionLine5 = optionLine5.options[selectedIndexLine5].text;
  return selectedOptionLine5;
}

function selectedBeatLine6() {
  const optionLine6 = document.getElementById("beat_perc_list");
  const selectedIndexLine6 = optionLine6.selectedIndex;
  const selectedOptionLine6 = optionLine6.options[selectedIndexLine6].text;
  return selectedOptionLine6;
}

function selectedBeatLine7() {
  const optionLine7 = document.getElementById("beat_ride_list");
  const selectedIndexLine7 = optionLine7.selectedIndex;
  const selectedOptionLine7 = optionLine7.options[selectedIndexLine7].text;
  return selectedOptionLine7;
}

function selectedBeatLine8() {
  const optionLine8 = document.getElementById("beat_shaker_list");
  const selectedIndexLine8 = optionLine8.selectedIndex;
  const selectedOptionLine8 = optionLine8.options[selectedIndexLine8].text;
  return selectedOptionLine8;
}

function selectedBeatLine9() {
  const optionLine9 = document.getElementById("beat_snare_list");
  const selectedIndexLine9 = optionLine9.selectedIndex;
  const selectedOptionLine9 = optionLine9.options[selectedIndexLine9].text;
  return selectedOptionLine9;
}

function selectedBeatLine10() {
  const optionLine10 = document.getElementById("beat_tom_list");
  const selectedIndexLine10 = optionLine10.selectedIndex;
  const selectedOptionLine10 = optionLine10.options[selectedIndexLine10].text;
  return selectedOptionLine10;
}

// -----------------------Functions for Playing the Sound------------------------//

function playSoundLine1(OptionLine1) {
  let BeatFileLine1 = "./media/Samples/" + OptionLine1 + ".wav";
  let audioLine1 = new Audio(BeatFileLine1);
  audioLine1.volume = volumeControl.value / 100;
  audioLine1.play();
}

function playSoundLine2(OptionLine2) {
  let BeatFileLine2 = "./media/Samples/" + OptionLine2 + ".wav";
  let audioLine2 = new Audio(BeatFileLine2);
  audioLine2.volume = volumeControl.value / 100;
  audioLine2.play();
}

function playSoundLine3(OptionLine3) {
  let BeatFileLine3 = "./media/Samples/" + OptionLine3 + ".wav";
  let audioLine3 = new Audio(BeatFileLine3);
  audioLine3.volume = volumeControl.value / 100;
  audioLine3.play();
}

function playSoundLine4(OptionLine4) {
  let BeatFileLine4 = "./media/Samples/" + OptionLine4 + ".wav";
  let audioLine4 = new Audio(BeatFileLine4);
  audioLine4.volume = volumeControl.value / 100;
  audioLine4.play();
}

function playSoundLine5(OptionLine5) {
  let BeatFileLine5 = "./media/Samples/" + OptionLine5 + ".wav";
  let audioLine5 = new Audio(BeatFileLine5);
  audioLine5.volume = volumeControl.value / 100;
  audioLine5.play();
}

function playSoundLine6(OptionLine6) {
  let BeatFileLine6 = "./media/Samples/" + OptionLine6 + ".wav";
  let audioLine6 = new Audio(BeatFileLine6);
  audioLine6.volume = volumeControl.value / 100;
  audioLine6.play();
}

function playSoundLine7(OptionLine7) {
  let BeatFileLine7 = "./media/Samples/" + OptionLine7 + ".wav";
  let audioLine7 = new Audio(BeatFileLine7);
  audioLine7.volume = volumeControl.value / 100;
  audioLine7.play();
}

function playSoundLine8(OptionLine8) {
  let BeatFileLine8 = "./media/Samples/" + OptionLine8 + ".wav";
  let audioLine8 = new Audio(BeatFileLine8);
  audioLine8.volume = volumeControl.value / 100;
  audioLine8.play();
}

function playSoundLine9(OptionLine9) {
  let BeatFileLine9 = "./media/Samples/" + OptionLine9 + ".wav";
  let audioLine9 = new Audio(BeatFileLine9);
  audioLine9.volume = volumeControl.value / 100;
  audioLine9.play();
}

function playSoundLine10(OptionLine10) {
  let BeatFileLine10 = "./media/Samples/" + OptionLine10 + ".wav";
  let audioLine10 = new Audio(BeatFileLine10);
  audioLine10.volume = volumeControl.value / 100;
  audioLine10.play();
}

// ------------functions for switch control buttons to work --------------------//

function removeActivityLine1() {
  BeatButtonLine1.forEach((button) => {
    button.classList.add("deactivate");
  });
}

function gainActivityLine1() {
  BeatButtonLine1.forEach((button) => {
    button.classList.remove("deactivate");
  });
}

function removeActivityLine2() {
  BeatButtonLine2.forEach((button) => {
    button.classList.add("deactivate");
  });
}

function gainActivityLine2() {
  BeatButtonLine2.forEach((button) => {
    button.classList.remove("deactivate");
  });
}

function removeActivityLine3() {
  BeatButtonLine3.forEach((button) => {
    button.classList.add("deactivate");
  });
}

function gainActivityLine3() {
  BeatButtonLine3.forEach((button) => {
    button.classList.remove("deactivate");
  });
}

function removeActivityLine4() {
  BeatButtonLine4.forEach((button) => {
    button.classList.add("deactivate");
  });
}

function gainActivityLine4() {
  BeatButtonLine4.forEach((button) => {
    button.classList.remove("deactivate");
  });
}

function removeActivityLine5() {
  BeatButtonLine5.forEach((button) => {
    button.classList.add("deactivate");
  });
}

function gainActivityLine5() {
  BeatButtonLine5.forEach((button) => {
    button.classList.remove("deactivate");
  });
}

function removeActivityLine6() {
  BeatButtonLine6.forEach((button) => {
    button.classList.add("deactivate");
  });
}

function gainActivityLine6() {
  BeatButtonLine6.forEach((button) => {
    button.classList.remove("deactivate");
  });
}

function removeActivityLine7() {
  BeatButtonLine7.forEach((button) => {
    button.classList.add("deactivate");
  });
}

function gainActivityLine7() {
  BeatButtonLine7.forEach((button) => {
    button.classList.remove("deactivate");
  });
}

function removeActivityLine8() {
  BeatButtonLine8.forEach((button) => {
    button.classList.add("deactivate");
  });
}

function gainActivityLine8() {
  BeatButtonLine8.forEach((button) => {
    button.classList.remove("deactivate");
  });
}

function removeActivityLine9() {
  BeatButtonLine9.forEach((button) => {
    button.classList.add("deactivate");
  });
}

function gainActivityLine9() {
  BeatButtonLine9.forEach((button) => {
    button.classList.remove("deactivate");
  });
}

function removeActivityLine10() {
  BeatButtonLine10.forEach((button) => {
    button.classList.add("deactivate");
  });
}

function gainActivityLine10() {
  BeatButtonLine10.forEach((button) => {
    button.classList.remove("deactivate");
  });
}

let OptionLine1 = selectedBeatLine1();
let OptionLine2 = selectedBeatLine2();
let OptionLine3 = selectedBeatLine3();
let OptionLine4 = selectedBeatLine4();
let OptionLine5 = selectedBeatLine5();
let OptionLine6 = selectedBeatLine6();
let OptionLine7 = selectedBeatLine7();
let OptionLine8 = selectedBeatLine8();
let OptionLine9 = selectedBeatLine9();
let OptionLine10 = selectedBeatLine10();

const audio = document.querySelector("audio");
const actx = Tone.context;
const dest = actx.createMediaStreamDestination();
const recorder = new MediaRecorder(dest.stream);

// !!!!!!!!!!!!! Error !!!!!!!!!!!!!!!!!!//
// See how to update the Tone.Player source as this is not supporting the options that are on the right side of the screen.

let ToneLine1 = new Tone.Player("./media/Samples/" + OptionLine1 + ".wav");
ToneLine1.connect(dest);
ToneLine1.toMaster();

let ToneLine2 = new Tone.Player("./media/Samples/" + OptionLine2 + ".wav");
ToneLine2.connect(dest);
ToneLine2.toMaster();

let ToneLine3 = new Tone.Player("./media/Samples/" + OptionLine3 + ".wav");
ToneLine3.connect(dest);
ToneLine3.toMaster();

let ToneLine4 = new Tone.Player("./media/Samples/" + OptionLine4 + ".wav");
ToneLine4.connect(dest);
ToneLine4.toMaster();

let ToneLine5 = new Tone.Player("./media/Samples/" + OptionLine5 + ".wav");
ToneLine5.connect(dest);
ToneLine5.toMaster();

let ToneLine6 = new Tone.Player("./media/Samples/" + OptionLine6 + ".wav");
ToneLine6.connect(dest);
ToneLine6.toMaster();

let ToneLine7 = new Tone.Player("./media/Samples/" + OptionLine7 + ".wav");
ToneLine7.connect(dest);
ToneLine7.toMaster();

let ToneLine8 = new Tone.Player("./media/Samples/" + OptionLine8 + ".wav");
ToneLine8.connect(dest);
ToneLine8.toMaster();

let ToneLine9 = new Tone.Player("./media/Samples/" + OptionLine9 + ".wav");
ToneLine9.connect(dest);
ToneLine9.toMaster();

let ToneLine10 = new Tone.Player("./media/Samples/" + OptionLine10 + ".wav");
ToneLine10.connect(dest);
ToneLine10.toMaster();

function sequencerAnimation(i, line) {
  line[i].classList.add("forAnimation");
  setTimeout(function () {
    line[i].classList.remove("forAnimation");
  }, 500);
}

let i = 0;
let note = "13n";
let noOfButtons = 13;

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    noOfButtons = 5;
    note = "5n";
  } else {
    noOfButtons = 13;
    note = "13n";
  }
}

var x = window.matchMedia("(max-width: 360px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

Tone.Transport.scheduleRepeat(repeat, note);

function repeat() {
  if (i === 0) {
    recorder.start();
  }
  let step = i % noOfButtons;
  sequencerAnimation(step, BeatButtonLine1);
  sequencerAnimation(step, BeatButtonLine2);
  sequencerAnimation(step, BeatButtonLine3);
  sequencerAnimation(step, BeatButtonLine4);
  sequencerAnimation(step, BeatButtonLine5);
  sequencerAnimation(step, BeatButtonLine6);
  sequencerAnimation(step, BeatButtonLine7);
  sequencerAnimation(step, BeatButtonLine8);
  sequencerAnimation(step, BeatButtonLine9);
  sequencerAnimation(step, BeatButtonLine10);
  if (arrayLine1.includes(step)) {
    ToneLine1.start();
    // OptionLine1 = selectedBeatLine1();
    // playSoundLine1(OptionLine1);
  }
  if (arrayLine2.includes(step)) {
    ToneLine2.start();
    // OptionLine2 = selectedBeatLine2();
    // playSoundLine2(OptionLine2);
  }
  if (arrayLine3.includes(step)) {
    ToneLine3.start();
    // OptionLine3 = selectedBeatLine3();
    // playSoundLine3(OptionLine3);
  }
  if (arrayLine4.includes(step)) {
    ToneLine4.start();
    // OptionLine4 = selectedBeatLine4();
    // playSoundLine4(OptionLine4);
  }
  if (arrayLine5.includes(step)) {
    ToneLine5.start();
    // OptionLine5 = selectedBeatLine5();
    // playSoundLine5(OptionLine5);
  }
  if (arrayLine6.includes(step)) {
    ToneLine6.start();
    // OptionLine6 = selectedBeatLine6();
    // playSoundLine6(OptionLine6);
  }
  if (arrayLine7.includes(step)) {
    ToneLine7.start();
    // OptionLine7 = selectedBeatLine7();
    // playSoundLine7(OptionLine7);
  }
  if (arrayLine8.includes(step)) {
    ToneLine8.start();
    // OptionLine8 = selectedBeatLine8();
    // playSoundLine8(OptionLine8);
  }
  if (arrayLine9.includes(step)) {
    ToneLine9.start();
    // OptionLine9 = selectedBeatLine9();
    // playSoundLine9(OptionLine9);
  }
  if (arrayLine10.includes(step)) {
    ToneLine10.start();
    // OptionLine10 = selectedBeatLine10();
    // playSoundLine10(OptionLine10);
  }
  i++;
}

const PlayButton = document.querySelector(".play_button_img");
const PauseButton = document.querySelector(".pause_button_img");

PlayButton.addEventListener("click", () => {
  Tone.Transport.start();
  if ($(".pause_button_img").hasClass("play_button_active")) {
    PauseButton.classList.remove("play_button_active");
  }
  PlayButton.classList.add("play_button_active");
});

PauseButton.addEventListener("click", () => {
  Tone.Transport.stop();

  if ($(".play_button_img").hasClass("play_button_active")) {
    PlayButton.classList.remove("play_button_active");
  }
  PauseButton.classList.add("play_button_active");
  recorder.stop();
});

function tempoSet() {
  Tone.Transport.bpm.value = tempoControl.value * 2;
  console.log(tempoControl.value);
}

function volSet() {
  console.log(volumeControl.value);
}

//////////////////////////////////////////////////////////////////

// const audio = document.querySelector("audio");
// const actx = Tone.context;
// const dest = actx.createMediaStreamDestination();
// const recorder = new MediaRecorder(dest.stream);

// ToneLine1.connect(dest);
// ToneLine1.toMaster();

const chunks = [];

recorder.ondataavailable = (evt) => chunks.push(evt.data);
recorder.onstop = (evt) => {
  let blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
  audio.src = URL.createObjectURL(blob);
};

$(".social_media_buttons").click(() => {
  NewTab();
});

function NewTab() {
  window.open(audio.src, "_blank");
}
