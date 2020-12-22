var csv = "\nname,age,Parent\nBob,30,David\nDavid,60,\nAnna,10,Bob\n";
var root;
var node = [];
var convertCSV = function (csv) {
    var csvarray = csv.split("\n");
    var len = csvarray.length - 2;
    for (var i = 2; i < csvarray.length - 1; i += 1) {
        var strArr = csvarray[i].split(",");
        var tnode = {
            name: strArr[0],
            age: parseInt(strArr[1]),
            P: strArr[2]
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
var createTree = function (root, node) {
    var person = {
        name: node[root].name,
        age: node[root].age
    };
    node.forEach(function (item, index) {
        if (item.P === node[root].name) {
            console.log("item.P:", item.P);
            console.log("node[root].name:", node[root].name);
            var child = createTree(index, node);
            console.log("child", child);
            person.Children = [];
            person.Children.push(child);
        }
    });
    return person;
};
console.log("createTree:", JSON.stringify(createTree(root, node)));
