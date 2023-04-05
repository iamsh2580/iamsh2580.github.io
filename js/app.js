// 4. html에서 form 찾아 끌고오기
// 주의) qeurySelsctor은 앞에 id,class 명시
//const loginForm = document.querySelector(".login-form");

// 5.할일: 인풋,버튼 끌어오기 -> 
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");

//6.간략하게 바꿔주었습니다.
const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector(".login-form button");
//10.클릭이 아닌 submit감지를 위한
const loginForm = document.querySelector("#login-form");

//13.
const link = document.querySelector("a");

const greeting = document.querySelector("#greeting");

const HiDDEN_CLASSNAME ="hidden";
const USERNAME_KEY="username";


//사용자가 button을 클릭하면 감지해야합니다 ->click event


function onLoginSubmit(event){
    //12.브라우저의 기본동작을 실행하지 못하게 막아준다.
    event.preventDefault();
                                                                                                        
    //alert("로그인버튼!");
    //7.이제는 텍스터에표시된 값을 저장.표시해야합니다
//내용을 가져오려면 input의 value값을 찾아라!
    loginForm.classList.add(HiDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);
    greeting.innerText=`안녕하세요 ${userName}님🥳`;
    greeting.classList.remove(HiDDEN_CLASSNAME);

}


//11.submit 는 엔터를 누르거나 클릭시 감지
//loginForm.addEventListener("submit",onLoginSubmit);

//loginButton.addEventListener("click",onLoginClick);

//8. 버튼을 눌렀을때만 입력이 적용되게 해야한다. ->username의 유효성

//link.addEventListener("click",handleLink);

function paintGreetings(userName){
    greeting.innerText =   `Hello ${userName}`;
    greeting.classList.remove(HiDDEN_CLASSNAME);
}

const savedUsername =localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
//폼을 보여준다
loginForm.classList.remove(HiDDEN_CLASSNAME);
loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //인사를 한다
    paintGreetings(savedUsername);


}





