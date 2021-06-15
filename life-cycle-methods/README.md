
## Life Cycle Methods

### 🌹 Mounting!

: Component 가 DOM 에 놓이는 단계

즉, 컴포넌트에 작성한 요소들을 DOM에 놓고 확인


### Mounting Step

(1) constructor()
: 컴포넌트 실행 될 때 가장 먼저 호출 함수.

: state를 정의하거나 초기값을 넣고싶을 때 constructor() 안에 넣으면 됩니당.


(2) getDerivedStateFromProps()
: DOM 에 컴포넌트에서 작성한 요소들을 렌더링하기 직전에 호출되는 함수로, props 에서 state값을 가져오는 함수

: 컴포넌트 내부에 있는 state 와props를 참조하기 위해 파라미터로 props 와 state를 받음.
  
: state값을 변경하는 함수이기 때문에 return 값에다가 state를 props값으로 준다고 생각.

  
(3) render()
: render 함수 내부에서 작성된 JSX 안의 HTML 태그들로 DOM을 형성함. (실제로 HTML 처럼 보이지만 HTML이 아닌 JSX (javascript형식의 파일))

  
(4) componentDidMount()
: 컴포넌트가 render 후에 실행되는 함수

  
### 🌹 Updating!
 
(1) shouldComponentUpdate()
: 성능 최적화를 위해 사용, return 타입은 boolean

: 매개변수 nexpPrps,nextState로 각 속성값과 상태값으로 컴포넌트가 업데이트 할지가 결정되며 'true'를 return 하면 render 메서드가 호출되고 false하면 업데이트 단계는 중단!
  
-> true를 반환하면 가상 돔 수준에서 변경된 내용 비교

  
(2) componentDidUpdate()
: 컴포넌트가 render 된 후 호출되며 최초 렌더링에서는 호출되지 않음

: componentDidUpdate 가 호출되는 시점은 tree에 붙은 상태로 setState를 호출하게되면 다시 리렌더링 됩니당. 즉 user 는 setState 후의 렌더링된 모습을 봅니당.

  
### 🌹 Unmounting!
  
(1) componentWillUnmount()
: 컴포넌트가 unmounted 나 destroyed 된 후 실행.
 
: componentWillUnmount() 후에 리렌더링 되지 않아 setState를 사용하지 못하고 컴포넌트가 unmounted 되면 다시 mounted 될 수 없습니당.





 (https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
