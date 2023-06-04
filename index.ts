type Currencies = {
	usa: 'usd';
	china?: 'cny';
	ukraine: 'uah';
	readonly kz: 'tenge'
}

type CreateCustomCurr<T> = {
	-readonly[P in keyof T] -?:  string
}

type CustomCurrencies = CreateCustomCurr<Currencies>

type ROnlyCurr = Readonly<Currencies>;

// type CustomCurrwncies = {
// 	usa: string;
// 	china: string;
// 	ukraine: string;
// 	kz: string;
// }

// type сопоставимый тип = {
// 	[randomIdentifier in Mnojestvo]: RandomType
// }


type Keys = 'name'| 'age'| 'role';

type User = {
[K in Keys] : string
}

const alex: User = {
	name: 'alex',
	age: '25',
	role: 'admin'
}