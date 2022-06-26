export interface Mountain {
  name: string;
  height: number;
};

export const mountains: Mountain[] = [
  {name: 'Kilimanjaro',height: 19341},
  {name: 'Everest', height: 29029},
  {name: 'Denali', height: 20310},
];

export const findNameOfTallestMountain = (mountains: Mountain[]): string => {
  if (mountains.length === 0) {
    return '';
  }
  
  let index = 0;
  for(let i = 0; i < mountains.length - 1; i++) {
    if(mountains[i].height < mountains[i + 1].height) {
      index = i + 1;
    } else {
      index = i;
    }
  }
  return mountains[index].name;
}
const tallestMountain: string = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
