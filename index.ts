interface ICompany {
	name: string;
	debts: number;
	departments: Department[];
	management: {
		owner: string;
	}
}

interface Department {
	[key: string]: string;
}

const debts = 'debts';
// let debts: 'debts'= 'debts';
// let debts = 'debts' as 'debts';
type CompanyDebtsType = ICompany[typeof debts];


// type CompanyDebtsType = ICompany['debts'];
type CompanyOwnerType = ICompany['management']['owner'];
type CompanyDepartmentsType = ICompany['departments'][number];
type CompanyDepartmentsTypes = ICompany['departments'];

type Test = ICompany[keyof ICompany];

type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = 'name';

function printDebts<T,K extends keyof T, S extends keyof T>( 
	company: T,
	name: K,
	debts: S){
	console.log(`Company ${company[name]}, debts: ${company[debts]}`)
};

const google: ICompany = {
	name: "google",
	debts: 500000,
	departments: {
		sales: 'sales',
		developer: 'dev'
	},
	management: 'John',
}

printDebts(google, 'name', 'debts');



type GoogleKeys = keyof typeof google;
const keys2: GoogleKeys = 'name';