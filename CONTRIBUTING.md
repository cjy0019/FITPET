# FITPET FrontEnd Team



## - Coding Convention

### 1. 컴포넌트 네이밍

- pascal case
- .jsx 사용

```code
// ex) ItemList.jsx , LoginId.jsx
```



### 2. 컴포넌트내 함수

- function 키워드 사용(호이스팅 사용)

```jsx
// example code
import React from 'react';

const Example = ()=>{
    const [id, setId] = useState('');
    return (
    	<button onClick={onClick}>
        	Hello Kurlabo!
        </button>
    )
    
    function onClick(){
        //...
    }
}

export default Example;
```



### 3. 변수명

- camel case 사용

```jsx
// example code
const [camelCase, setCamel] = useState();

const example = 'Hello React';
let marketKurly = 'Hello Kurly'
```

- props는 카멜케이스로 작성한다.

```jsx
// example code
// bad
<Foo
  UserName="hello"
  phone_number={12345678}
/>

// good
<Foo
  userName="hello"
  phoneNumber={12345678}
  Component={SomeComponent}
/>
```

- props의 truthy 값을 전달할 때는 생략한다.

```jsx
// example code
// bad
<Foo
  hidden={true}
/>

// good
<Foo
  hidden
/>

// good
<Foo hidden />
```



### 4. tailwind.config.js

- 기준 `font-size: 10px`
- **rem 단위를 사용하도록 한다.**
- percent 단위 customizing 할 떈 `per` prefix를 사용한다

```js
// spacing
spacing : {
    'r-1.1': '1.1rem',
    'r- 10' : '10rem',
}
// border-radius
borderRadius : {
	'per-50' : '50%',
}
```



### 5. img 태그

- img 태그의 alt 어트리뷰트의 값은 꼭 포함시킨다.
- 웹 접근성을 준수하여 꼭 작성한다.

```html
// example code

// bad
<img src="hello.jpg" />

// good
<img src="hello.jpg" alt="Me waving hello" />

// bad
<img src="hello.jpg" alt="" />

// good
<img src="hello.jpg" role="presentation" />
```



### 6. map 함수

- map 함수를 사용할 때 `key`값에 index값은 사용불가한다.
- 반드시 key값으로는 id 값을 할당한다.

```jsx
// example code
// bad
{todos.map((todo, index) =>
  <Todo
    {...todo}
    key={index}
  />
)}

// good
{todos.map(todo => (
  <Todo
    {...todo}
    key={todo.id}
  />
))}
```



### 7.  컴포넌트 return

- 컴포넌트내에서 return 키워드를 사용할 때 소괄호를 반드시 사용한다.

```jsx
// example code

const React = () =>{
    return (
    	<div>
        	Hello FITPET!
       </div>
    )
}
```



### 8. self closing tag

- chidren이 없으면 항상 닫힌(self-closing tag)태그를 사용한다.

```jsx
// bad
<Foo variant="stuff"></Foo>

// good
<Foo variant="stuff" />
```

- 컴포넌트의 props가 여러개라면 닫힘 태그는 새로운 줄에 작성한다.

```jsx
// bad
<Foo
  bar="bar"
  baz="baz" />

// good
<Foo
  bar="bar"
  baz="baz"
/>
```



### 9, 리덕스 네임스페이스

- 리덕스의 액션을 작성할 때 type값으로 네임스페이스를 꼭 작성한다.
- snake case와 대문자로 작성한다.

```javascript
// exmaple code

const SET_CAROUSEL = ‘main/SET_INCREASE’;
const SET_CAROUSEL_MIN = ‘main/SET_CAROUSEL_MIN’;
const SET_CAROUSEL_MAX = ‘main/SET_CAROUSEL_MAX’;
```



## - git convention

```graphql
commit message 작성 규칙

type: 내용 [#이슈번호]

- 기능은 영어 소문자로 작성
- 내용은 한글로 작성
- 제일 끝에 이슈 번호와 함께 작성
- 이해하기 쉽도록 작성하기!

ex)
feat: 회원가입 팝업 창 구현 [#99]
- 검색창은 input 태그 사용.

fix: 리스트 안보여지는 버그 해결 [#123]
- 무엇을 이용하여 해결.

branch 명
- 영어 대문자로 작성후 마지막 #이슈번호
ex) HEADER#2

<types>
config: 설정 파일 변경
feat: 새로운 기능 추가
fix: 버그 수정
build: 빌드 관련 파일 수정
refactor: 리팩토링
docs: 문서 작성 및 수정
style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
```



### 2. resolved

- 본인 이슈가 끝났을 때 마지막 커밋에 사용한다.
- 내용 끝날 때 반드시 마침표를 사용한다.

```code
// example

feat : main 페이지 UI 구현 [#11]

resolved : #6
회원가입 form 태그 구성 및 디자인 완료.
id, email validation regex 체크.
```