const headerUseNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('#name');
const emailElement = document.querySelector('#ename');
const gradeElement = document.querySelector('#gname');

const localUserName = localStorage.getItem('userName');
const localEmailName = localStorage.getItem('user-email');

const setUserNameInnerHtml = (name) => {
  headerUseNameElement.innerHTML = `${name} <span>님</span>`;
  userNameElement.textContent = name;
};

const setEmailNameInnerHtml = (ename) => {
  emailElement.innerHTML = `${ename}`;
};

const setGradeNameInnerHtml = (gname) => {
  gradeElement.innerHTML = `${gname}`;
};

if (localUserName) {
  setUserNameInnerHtml(localUserName);
}

if (localEmailName) {
  setEmailNameInnerHtml(localEmailName);
}

if (gradeElement) {
  setGradeNameInnerHtml(gradeElement);
}

userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세요.');
  localStorage.setItem('userName', userName);

  setUserNameInnerHtml(userName);
};

emailElement.onclick = () => {
  const emailName = prompt('이메일을 입력해 주세요.');
  localStorage.setItem('emailName', emailName);

  setEmailNameInnerHtml(emailName);
};

gradeElement.onclick = () => {
  const gradeName = prompt('학번을 입력해 주세요.');
  localStorage.setItem('gradeName', gradeName);

  setGradeNameInnerHtml(gradeName);
};
