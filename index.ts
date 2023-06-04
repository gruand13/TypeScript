type Currencies = {
	usa: 'usd';
	china: 'cny';
	ukraine: 'uah';
	kz: 'tenge'
}

type CurrWithoutUSA = Omit<Currencies, 'usa'> // delete selected property
type CurrUSAAndUkraine = Pick<Currencies, 'usa' | 'ukraine'> // filtration by properties
type FadeType = Exclude<MyAnimation, 'swipe'> // delete from union type
type CountiresWithoutUSA = Exclude<keyof Currencies, 'usa'>

type Swipetype = Extract<MyAnimation | Direction, 'swipe'> // select pointed type


type CreateCustomCurr<T> = {
	[P in keyof T as `custom${Capitalize< string & P>}`] :  string
}

type PlayersNames = 'Alex' | 'John';
type GameDataCurr = Record<PlayersNames, CustomCurrencies>  //

const gameData : GameDataCurr = {
	Alex: {
		customChina: 'qqqq',
		customKz: 'ww',
		customUkraine: 'ss',
		customUsa: 'qqq'
	},
	John: {
		customChina: 'qqqq',
		customKz: 'ww',
		customUkraine: 'ss',
		customUsa: 'qqq'
	}
}

type CustomCurrencies = CreateCustomCurr<Currencies>

type MyAnimation = 'fade' | 'swipe';
type Direction = 'in'| 'out';

type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;

