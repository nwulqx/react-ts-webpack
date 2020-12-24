var csv = "\nname,age,Parent\nBob,30,David\nDavid,60,\nAnna,10,Bob\n";
var root;
var convertCSV = function (csv) {
    var csvarray = csv.split("\n");
    var arr = csvarray.slice(1, csvarray.length - 1);
    var result = arr.map(function (element, index) {
        var temp = element.split(",");
        if (temp[2] === "") {
            root = index;
        }
        return temp;
    });
    return result;
};
var node = convertCSV(csv);
// console.log("node:", node);
// console.log("root:", root);
var createTree = function (root, node) {
    var person = {
        name: node[root][0],
        age: parseInt(node[root][1])
    };
    node.forEach(function (item, index) {
        if (node[root][0] === item[2]) {
            // console.log("item.P:", item[2]);
            // console.log("node[root].name:", node[root][0]);
            var child = createTree(index, node);
            // console.log("child", child);
            person.Children = [];
            person.Children.push(child);
        }
    });
    return person;
};
console.log("createTree:", createTree(root, node));
