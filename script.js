import { sleep } from 'k6';

let counter = 0;

export function setup() {
  let temp = 1;
  console.log('In setup : counter = ' + counter + ' temp =' + temp);	
  temp = 2;
  return { v: counter };
}

export default function (data) {
  let temp = 1;
  counter = counter + 1;
  console.log(JSON.stringify(data)+' in default : counter = ' + counter + ' temp=' + temp);
  temp = 2;  
  //sleep(0.1);
}

export function teardown(data) {
  console.log(JSON.stringify(data)+' in teardown : counter = ' + counter);
  //if (data.v != 1) {
  //  throw new Error('incorrect data: ' + JSON.stringify(data));
  //}
}
