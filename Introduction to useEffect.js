import {useEffect} from "react";

const App = () => {
    const sayHello = () => console.log("hello");
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);
    useEffect(sayHello, []);
    //useEffect는
    //componentDidMount, componentWillUpdate, componentWillUnmount 기능을 수행할 수 있음
    //단일인자로 함수를 받으면 componentDidMount
    //두번째 인자로 배열을 받으면 배열의 값이 바뀔때 update(componentWillUpdate)
    //
    return (
        <div className="App">
            <div>Hi</div>
            <button onClick={() => setNumber(number + 1)}/>
            <button onClick={() => setAnumber(aNumber + 1)}/>
        </div>
    );
};