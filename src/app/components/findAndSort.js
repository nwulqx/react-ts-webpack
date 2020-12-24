var data = [
    {
        userId: 8,
        title: "title1"
    },
    {
        userId: 11,
        title: "other"
    },
    {
        userId: 15,
        title: null
    },
    {
        userId: 19,
        title: "title2"
    },
];
var find = function (origin) {
    // TODO begin
    return {
        where: function (regexData) {
            origin = origin.filter(function (item) {
                return regexData.title.test(item.title);
            });
            return {
                orderBy: function (id, order) {
                    var cmp = function (a, b) {
                        if (a["" + id] > b["" + id]) {
                            return order === "desc" ? -1 : 1;
                        }
                        if (a["" + id] < b["" + id]) {
                            return order === "desc" ? 1 : -1;
                        }
                        return 0;
                    };
                    return origin.sort(cmp);
                }
            };
        }
    };
    // TODO above
};
var result = find(data).where({ title: /\d$/ }).orderBy("userId", "desc");
console.log(result); //[{userId: 19,title: "title2"},{userId: 8,title: "title1"}]
