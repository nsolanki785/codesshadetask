import React, {useState,useCallback, useMemo} from 'react';
import Button from './Button';
import Title from './Title';
import Count from './Counter';
import Child from './child';

function ParentComponent() {
  console.log('Parent component')
 const [age, setAge] = useState(25);
//  const [salary, setSalary] = useState(25000)
 const [count,setcount] = useState(0);

  
  // const incrementAge = useCallback(()=>{
  //   setAge(age + 1);
  // },[age])
  // console.log('hello')
//   const incrementSalary =useCallback(()=>{
//     setSalary(salary + 1000);
//   },[salary])
 const handleadd = () => {
  console.log('Hello Welcome')
    setAge(age+1)
 }

 useMemo(()=>{
  console.log('Heloooo')
    for(let i = 0; i<1000000; i++) {

    }
 },[count])


  return (
    <div>
       <button onClick={handleadd}>Increment my age : {age}</button>
       <Child count={count}/>
     {/* <Title/>
     <Count text="age" count={age} />
     <Button handleClick={incrementAge}>Increment my age</Button> */}
     <button onClick={()=>setcount(count+1)}>add</button>
     {/* <Count text="salary" count={salary} />
     <Button handleClick={incrementSalary}>Increment my salary</Button> */}
    </div>
  );
}
export default ParentComponent;