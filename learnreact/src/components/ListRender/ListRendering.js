import React from 'react';
import RecieveList from './RecieveList';
export default function ListRendering() {
    const names = ["sathya","nithya","agneya","dhruv"]
	const emp = [
		{
			emp: 'Sanjay',
			age: '22',
			skill: 'Native'
		},
		{
			emp: 'Shrey',
			age: '23',
			skill: 'React Native'
		},
		{
			emp: 'Sahith',
			age: '32',
			skill: 'Ruby'
		}
	];
    //key is to be passed
    // const result = emp.map(x => <RecieveList key={x.skill} xas={x} />);
    const result = names.map((x,index) => <RecieveList key={index} xas={x}/>)
	return <div>{result}</div>;
}
