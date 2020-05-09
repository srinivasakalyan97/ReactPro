import React from 'react';
import RecieveList from './RecieveList';
export default function ListRendering() {
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

	const result = emp.map(x => <RecieveList xas={x} />);
	return <div>{result}</div>;
}
