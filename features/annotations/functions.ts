const add = (a: number, b: number): number => {
  return a + b;
};

function printNumber2(num: number): void {
  console.log(num);
}

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};


// void as return type
const logger = (message: string): void => {
  console.log(message);
};

function returnUndefined(message: string): void {
  return undefined;
}


// never as return type
const throwError = (message: string): never => {
  throw new Error(message);
};

const format = (value: string | number) => {
  if (typeof value === "string") {
    return "str";
  } else if (typeof value === "number") {
    return "num";
  } else {
    return value; // value is type 'never'
  }
};


// Destructuring Function parameters with Type annotations
// obj init
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

// without destructuring and without type annotation
const logWeather1 = (forecast): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// without destructuring and with type annotation
const logWeather2 = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// with destructuring and without type annotation
const logWeather3 = ({ date, weather }): void => {
  console.log(date);
  console.log(weather);
};

// with destructuring and with type annotation
const logWeather4 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
