const arr: Array<number> = [1,2,3];
const arr1: number[] = [1,2,3];

const roarr:ReadonlyArray<string> = ["safg"];
roarr[0]= 'wrret';

interface IState {
	data: {
		name: string
	},
	tag?: string
}
const state: Partial<IState> = {
	data: {
		name: 'John'
	}
}

const strictState: Required<IState>={
	data: {
		name: "Alex"
	},
	tag: "safdgfh"
}

function action(state:Readonly<IState>){
	state.data.name = 'abc'
}

