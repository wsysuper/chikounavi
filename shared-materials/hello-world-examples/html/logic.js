const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
  const name = prompt("あなたの名前は何ですか？");
  alert(`こんにちは、${name}さん、はじめまして！`);
  headingA.textContent = `${name}さん、ようこそ`;
};
