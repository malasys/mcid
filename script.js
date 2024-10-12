const inputBox = document.getElementById("inputBox");
const profileLink1 = document.getElementById("profileLink1");
const profileLink2 = document.getElementById("profileLink2");
const profileLink3 = document.getElementById("profileLink3");
const profileLink4 = document.getElementById("profileLink4");
const profileLink5 = document.getElementById("profileLink5");

inputBox.addEventListener("input", function () {
  const inputValue1 = inputBox.value;

  if (inputValue1.trim() !== "") {
    const profileURL1 = `https://ja.namemc.com/profile/${inputValue1}`;
    profileLink1.href = profileURL1;
    profileLink1.textContent = profileURL1;
  } else {
    profileLink1.href = "#";
    profileLink1.textContent = "";

  }
  const inputValue2 = inputBox.value;

  if (inputValue2.trim() !== "") {
    const profileURL2 = `https://plancke.io/hypixel/player/stats/${inputValue2}`;
    profileLink2.href = profileURL2;
    profileLink2.textContent = profileURL2;
  } else { 
    profileLink2.href = "#";
    profileLink2.textContent = "";

  }
  const inputValue3 = inputBox.value;
  if (inputValue3.trim() !== "") {
    const profileURL3 = `https://www.syuu.net/user/${inputValue3}`;
    profileLink3.href = profileURL3;
    profileLink3.textContent = profileURL3;
  } else {
    profileLink3.href = "#";
    profileLink3.textContent = "";

  }
  const inputValue4 = inputBox.value;
  if (inputValue4.trim() !== "") {
    const profileURL4 = `https://minemen.club/player/${inputValue4}`;
    profileLink4.href = profileURL4;
    profileLink4.textContent = profileURL4;
  } else {
    profileLink4.href = "#";
    profileLink4.textContent = "";

  }
  const inputValue5 = inputBox.value;
  if (inputValue5.trim() !== "") {
    const profileURL5 = `https://laby.net/@${inputValue5}`;
    profileLink5.href = profileURL5;
    profileLink5.textContent = profileURL5;
  } else {
    profileLink5.href = "#";
    profileLink5.textContent = "";

  }

}
)
