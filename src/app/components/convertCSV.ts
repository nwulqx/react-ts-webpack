// 给定CSV文件，转换成对象结构（并提供测试用例）
interface Person {
  name: string;
  age: number;
  Parent?: Person[];
  Children?: Person[];
  P?: string;
}

const csv = `
name,age,Parent
Bob,30,David
David,60,
Anna,10,Bob
`;

let root;
const node: Person[] = [];
const convertCSV = (csv: string) => {
  const csvarray = csv.split("\n");
  const len = csvarray.length - 2;
  for (let i = 2; i < csvarray.length - 1; i += 1) {
    const strArr = csvarray[i].split(",");
    const tnode: Person = {
      name: strArr[0],
      age: parseInt(strArr[1]),
      P: strArr[2],
    };
    if (strArr[2] === "") {
      root = i - 2;
    }
    node.push(tnode);
  }
};
convertCSV(csv);

console.log("node:", node);
console.log("root:", root);

const createTree = (root: number, node: Person[]) => {
  const person: Person = {
    name: node[root].name,
    age: node[root].age,
  };
  node.forEach((item, index) => {
    if (item.P === node[root].name) {
      console.log("item.P:", item.P);
      console.log("node[root].name:", node[root].name);
      const child = createTree(index, node);
      console.log("child", child);
      person.Children = [];
      person.Children.push(child);
    }
  });
  return person;
};
console.log("createTree:", JSON.stringify(createTree(root, node)));
