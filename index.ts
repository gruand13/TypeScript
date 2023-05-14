function processingData<T, S>(data:T[], options: S):string { 
	data.length;
	switch (typeof data){
		case 'string':
			return `${data}, speed : ${options}`;
			break;
		case 'number':
			return `${data}, speed: ${options}`;
			break;	
		default: return "Not valid";
	}
	
}
let res1 = processingData([1], 'fast');
const res2 = processingData(['1'], 'slow');
const num=10;
const res3 = processingData<number, string>([10], 'slow');

interface DataSaver {
	processing: <T>(data: T)=> T
}

const saver: DataSaver ={
	// processing(data){
	// 	console.log(data);
	// 	return data;
	// },

	// processing: <T>(data: T)=>{
	// 	return data;
	// }
	processing: (data)=>{
	return data;
	}
	
}