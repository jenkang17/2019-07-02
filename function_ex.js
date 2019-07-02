// "hi hello" 를 console 에 출력하는 hello function 을 만들고 호출하세요
function hello() {
 console.log("hi hello");
}

hello();

//  10 + 20 결과값을 돌려주는 add function 을 만들고 해당 함수를 호출한 결과를 add_result 라는 변수에 저장한 후 출력하세요
function add(){
 return 10 + 20;
}
const add_result = add();    // 함수의 호출 '결과'를 저장하고 싶을땐 함수이름()!! 네 맞아요!!
console.log(add_result);  // 아까께 맞았어요! OK

//  숫자 num 을 전달받으면 5를 곱해줘서 console 에 출력하는 five_times function 을 만들고 호출하세요
function five_times(bb){
 return bb * 5;
}
const a = 5;
const ddd = five_times(a);
console.log(ddd);
// 넵 천천히!! 잘 생각하면서 하세요

//  키 height 와 몸무게 weight 를 전달받으면 bmi 지수를 계산해서 돌려주는 bmi 함수를 만들고 bmi_result 라는 변수에 저장한 후 출력하세요 
// 비만 계산 방법은 신체질량지수인 BMI(Body Mass Index)에 근거한 방식으로 BMI지수= 몸무게(kg) ÷ (신장(m) × 신장(m))이다.
function bmi(a,b){
  return b ÷ a * a;
}
const height = a;
const weight = b;
const bmi_result = bmi();
// 넵!!

// 이제 실제 계산할 값을 전달해주세요!!
// 함수에서 a, b 가 될 값이요~~
// ㅎㅎ 변수 값 전달이 약간 익숙하지가 않은데
// 제가 먼저 보여드릴께요
// 지운다음에 다시 고대로 할꺼니까 잘 보세요!!

function my_bmi(weight,height){
 const v = weight / height * height;
 return v
}
const bmi_result = my_bmi(45,160);
console.log("my bmi" + bmi_result);
//  키 height 와 몸무게 weight 를 전달받으면 bmi 지수를 계산해서 돌려주는 bmi 함수를 만들고 bmi_result 라는 변수에 저장한 후 출력하세요