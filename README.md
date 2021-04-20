# React 기본 학습

---

## react 프로젝트 생성

```
 $ npx create-react-app 프로젝트폴더명
```

(npx는 npm 버전 5.2 이상부터 사용이 가능)

```
A template was not provided. This is likely because you're using an outdated version of create-react-app.
Please note that global installs of create-react-app are no longer supported.
(템플릿이 제공되지 않았고 create-react-app는 글로벌 인스톨이 더 이상 지원되지 않습니다)
```

ERROR 가 나는 경우 global 모듈로 설치된 것을 `$ npm uninstall -g create-react-app` 삭제 하고 다시 npx로 생성할것.

프로젝트 생성 후 `yarn start` 또는 `npm start` 해서 실행

---

## HOOK

함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 “연동(hook into)“할 수 있게 해주는 함수

React v16.8 에 새로 추가된 내용으로 Class를 작성할 필요 없이 상태값과 여러 React의 기능을 사용가능

- Hook 을 사용하기 위해서는 React v16.8 이상으로 React DOM 을 포함한 모든 패키지를 업데이트를 해야함
  React Native 는 v0.59 부터 Hook을 지원

### Hook 사용규칙

- 최상위(at the top level)에서만 Hook을 호출해야 한다. 반복문, 조건문, 중첩된 함수 내에서 Hook을 실행 X

- react 함수 컴포넌트 내에서만 Hook을 호출

1. `useState`

- 현재의 state 값과 이 값을 업데이트하는 함수를 쌍으로 제공 ( 이벤트핸들러나 다른곳에서 호출가능)
  cf) class 의 this.setState 와 유사하나 이전의 state 와 새로운 state 를 합치지 않는다는 차이점이 있음 (https://ko.reactjs.org/docs/hooks-state.html 참고)

예시)

```
const [state, setState] = useState(initialState);

//위와 동일함
const numberState = useState(initialState);
const state = numberState[0];
const setState = numberState[1];

```

2. `useRef`

- react 사용할 때 DOM 을 직접 선택해야 하는 상황이 발생할 때 사용
  (특정 엘리먼트의 크기를 가져오기, 스크롤바 위치가져오기, Video.js,JWPlayer 같은 HTML5 Video 관련 라이브러리 등등 ...)
- 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리할 때도 사용
  (`useRef`로 관리하는 변수값이 바뀐다해도 리렌더링되지 않음)
- `useRef()` 사용하여 Ref 객체 만든 후 select 하고싶은 DOm 에 `ref` 값으로 설정하면 Ref 객체의 `.current` 값은 원하는 DOM select 함

3. `useEffect`

- `componentDidMount, componentDidUpdate, componentWillUnmount` 가 합쳐진것으로 생각하기
  컴포넌트가 Mount(처음나타났을 때), unMount(사라질 때), update (특정 props가 바뀔 때)

  - Mount 시 하는 작업
    - props 로 받은 값을 컴포넌트의 로컬 상태로 설정
    - 외부 API 요청 (REST API 등)
    - 라이브러리 사용 (D3, Video.js 등...)
    - setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약
  - unMount시 하는 작업
    - setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
    - 라이브러리 인스턴스 제거

- 첫번째 파라미터에는 함수, 두번째 파라미터에는 deps(의존값)의 배열

  - []를 비우게 되면 컴포넌트가 처음 나타날때에만 useEffect에 등록된 함수 호출
  - deps 를 생략하면, 컴포넌트가 리렌더링 될 때마다 호출됨
  - deps 안에 특정값을 넣어주면 처음 마운트 될 때에도 호출이되고, 지정한 값이 바뀔 때에도 호출이 되는데 만약에 넣지 않으면 함수가 실행될 때 최신 prop / 상태를 가르키지 않음

- useEffect 에서 함수를 return 하는 것을 `celanup 함수` 라고 부름.
  (뒷정리를 해준다고 생각하면 됨) , deps 가 비어있는 경우 컴포넌트가 사라질 때 celanup 함수 호출됨

4. `useMemo`

- "memoized" 를 의미하는데 이는 이전에 계산 한 값을 재사용한다는 의미를 가짐
- `useMemo('연산정의하는함수',deps[])` 배열안에 넣은 내용이 바뀌면 등록한 함수를 호출하여 연산해주고, 내용이 바뀌지 않으면 이전에 연산한 값 재사용

5. `useCallback`

- 특정함수를 새로 만들지 않고 재사용 하고싶을 때 사용
