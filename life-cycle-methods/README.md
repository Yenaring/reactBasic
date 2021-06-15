
## Life Cycle Methods

### Mounting!

: Component 가 DOM 에 놓이는 단계

즉, 컴포넌트에 작성한 요소들을 DOM에 놓고 확인


### Mounting Step

(1) constructor();

: 컴포넌트 실행 될 때 가장 먼저 호출 함수.

: state를 정의하거나 초기값을 넣고싶을 때 constructor() 안에 넣으면 됩니당.

  

(2)static getDerivedStateFromProps()
: DOM 에 컴포넌트에서 작성한 요소들을 렌더링하기 직전에 호출되는 함수로, props 에서 state값을 가져오는 함수

: 컴포넌트 내부에 있는 state 와props를 참조하기 위해 파라미터로 props 와 state를 받음.

: state값을 변경하는 함수이기 때문에 return 값에다가 state를 props값으로 준다고 생각.
 

(3) render()
: render 함수 내부에서 작성된 JSX 안의 HTML 태그들로 DOM을 형성함. (실제로 HTML 처럼 보이지만 HTML이 아닌 JSX (javascript형식의 파일))

 
(4) componentDidMount()
: 컴포넌트가 render 후에 실행되는 함수.
Life Cycle Methods
Mounting!
: Component 가 DOM 에 놓이는 단계

즉, 컴포넌트에 작성한 요소들을 DOM에 놓고 확인

Mounting Step
(1) constructor();
컴포넌트 실행 될 때 가장 먼저 호출 함수.

state를 정의하거나 초기값을 넣고싶을 때 constructor() 안에 넣으면 됩니당.

(2) getDerivedStateFromProps()
DOM 에 컴포넌트에서 작성한 요소들을 렌더링하기 직전에 호출되는 함수로 state를 갱신하기 위한 객체를 반환하거나 null을 반환하여 아무것도 갱신 하지 않을 수 있음

컴포넌트 내부에 있는 state 와props를 참조하기 위해 파라미터로 props 와 state를 받음.

state값을 변경하는 함수이기 때문에 return 값에다가 state를 props값으로 준다고 생각.
##### ( 이유와 상관없이 렌더링 때마다 매번 실행되므로 주의 )

(3) render()
render 함수 내부에서 작성된 JSX 안의 HTML 태그들로 DOM을 형성함. (실제로 HTML 처럼 보이지만 HTML이 아닌 JSX (javascript형식의 파일))

(4) componentDidMount()
컴포넌트가 render 후에 실행되는 함수.

Markdown 615 bytes 115 words 34 lines Ln 17, Col 0HTML 463 characters 105 words 16 paragraphs