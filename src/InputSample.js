import React, {useState,useRef} from 'react';

function InputSample(){

    const [inputs,setInputs] = useState({
        name : '',
        nickname : ''
    });

    const nameInput = useRef();

    const { name,nickname}=inputs;

    const onChange = (e)  =>{
        const {name,value} = e.target;
        
        //객체상태를 업데이트할 때는 특정객체를 복제하여 특정 값을 덮어씌우기를 하여 상태를 업데이트를 해줘야함 -->  불변성을 지켜주어야 컴포넌트에서 상태가 업데이트된것을 감지하여 렌더링 할 수 있습니다.

        setInputs({
            ...inputs,
            [name]:value

        });
    }

    const onReset = () => {
        setInputs({
            name:'',
            nickname:''
        })
        nameInput.current.focus();
    }

    return(
        <div>
            <input name="name" onChange={onChange}placeholder="Name" value={name} ref={nameInput} />
            <input name="nickname" onChange={onChange} placeholder="NickName" value={nickname}/>
            <button onClick={onReset} >초기화</button>
            <div>
                <b>값 : </b>
                {name} ( {nickname} )
            </div>
        </div>
    );
}

export default InputSample;