import React from "react";

function Hello(a){
    return <div style={{color: a.color}}>안녕하세요 {a.name}</div>
}

// Hello 라는 컴포넌트를 내보내겠다는 의미
export default Hello;