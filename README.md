# Javascript Mastery

## 1. JS 정의

> -   가벼운 스크립트 언어
> -   인터프리트를 이용하여 런타임 시 한줄 한줄 번역해서 바로 실행하는 프로그래밍 언어이다.
> -   1급 함수를 가지고 있다.
> -   브라우저가 아닌 환경에서도 사용 가능하다. (ex- NodeJs, Apache CouchDB .. 등 자바스크립트 엔진이 돌아가는 모든 곳)
> -   프로토타입을 베이스로 하여 다양한 스타일의 프로그래밍을 작성 가능하다. (절차 지향 & 객체 지향 & 함수형 프로그래밍)
> -   싱글 스레드로 동작하고 동적으로 타입이 결정되는 다이나믹한 언어이다.



## 2. Variables (변수)

#### (1) 컴퓨터 메모리에 저장되는 상태와 종류

> -   Code : 작성한 코드
> -   Data : Application에서 전반적으로 필요한 데이터들
> -   Stack : 함수의 실행 순서
> -   Heap : 객체가 할당되어 담기는 곳

#### (2) 변수가 메모리에 할당 되는 방식
![KakaoTalk_Photo_2023-05-30-19-03-02](https://github.com/anttto/Js_Mastery/assets/57241573/a4a4eaed-dfb1-4874-9afb-79b8ec63c747)

#### (3) null 과 undefinded 타입

> -   undefinded //값이 있는지 없는지 모르는 상태
> -   null //값이 없는 상태 (명확한 상태)

```
console.log(typeof null); //object
console.log(typeof undefinded); //undefinded
```

> 'undefinded'는 메모리 상에 아무것도 들어가 있지 않은 상태라고 볼수 있지만, 'null'은 메모리에 null이라는 object를 할당한다. 고로 메모리 상에 명확하게 '이 값은 비어 있다' 라는 상태(변수의 값)가 정의 된다.

#### (4) 값과 참조의 차이

1. 원시(Primitive)타입 :

> 값 자체가 메모리 셀에 들어가 있음.

```
//원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; //1
b = 2;
console.log(a); //1
console.log(b); //2
```

2. 객체(Object)타입 :

> 객체를 담고 있는 Heap 이라는 특정한 메모리 셀들의 공간의 메모리 주소를 특정한 변수명의 메모리 주소가 참조 하고 있음.

```
//객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
    name:'사과',
}
let orange = apple; //apple이라는 객체가 복사되는것이 아니라 apple이 가지고 있는 메모리의 주소값이 복사됨

orange.name = '오렌지';

console.log(apple); //{name:'오렌지'}
console.log(orange); //{name:'오렌지'}
```

> 결론 : '원시타입'은 메모리에 담겨 있는 변수의 값이 그대로 재할당 되는 반면, '객체타입'은 메모리의 값이 아닌 실제 데이터의 위치 주소만 참조 하기 때문에, 변수를 몇번이고 재할당 하더라도 근본의 데이터 값이 수정됨.
> 작업중 객체를 자주 다룰때 도움이 될 중요한 기초 컨셉

#### (5) let & const

1. 재할당 가능한 변수 : let
2. 재할당 불가능 (상수변수) : const
3. 객체 타입에서는 변경(Mutable)은 두 변수 모두 가능
    > 1. 객체타입은 실제 데이터의 값이 아닌 메모리의 주소를 참조만 할 뿐이기 때문에 객체 내부의 값의 변경이 가능
    > 2. 반면 , 원시데이터의 경우는 불가함. 이유는 값을 메모리에 직접적으로 재할당 하기 때문.

#### (6) Type

1. 동적임 (인터프리터 방식의 언어이기 때문에, 타입의 변환이 생김)
2. 위클리타입 (타입의 정의가 약함)
3. 유연함과 동시에 타입의 정의가 약함으로 오류 발생 여지가 생김
   (그래서 Ts가 나온듯?)
