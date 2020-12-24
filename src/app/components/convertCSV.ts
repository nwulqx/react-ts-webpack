/**
 * 给定CSV文件，转换成对象结构（并提供测试用例）
 * 考点：
 * 1. 递归生成树结构
 */
interface Person {
  name: string;
  age: number;
  Parent?: Person[];
  Children?: Person[];
}

const csv = `
name,age,Parent
Bob,30,David
David,60,
Anna,10,Bob
`;

let root;

const convertCSV = (csv: string) => {
  const csvarray = csv.split("\n");
  const arr = csvarray.slice(1, csvarray.length - 1);
  const result = arr.map((element, index) => {
    const temp = element.split(",");
    if (temp[2] === "") {
      root = index;
    }
    return temp;
  });
  return result;
};
const node = convertCSV(csv);

// console.log("node:", node);
// console.log("root:", root);

const createTree = (root: number, node: Array<string>[]) => {
  const person: Person = {
    name: node[root][0],
    age: parseInt(node[root][1]),
  };
  node.forEach((item, index) => {
    if (node[root][0] === item[2]) {
      // console.log("item.P:", item[2]);
      // console.log("node[root].name:", node[root][0]);
      const child = createTree(index, node);
      // console.log("child", child);
      person.Children = [];
      person.Children.push(child);
    }
  });
  return person;
};
console.log("createTree:", JSON.stringify(createTree(root, node)));
