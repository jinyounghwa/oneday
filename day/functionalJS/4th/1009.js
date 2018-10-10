_.go(_.mr(2,3), function (a,b) {
    return a + b;
},
    function (a) {
        return a *a;
    });
var products = [
    {id : 1, name: "후드 집업", discounted_priced:6000, price:10000 },
    {id : 2, name: "코잼 후드티", discounted_priced:8000, price:8000 },
    {id : 3, name: "A1 반팔티", discounted_priced:6000, price:6000 },
    {id : 4, name: "코잼 반팔티", discounted_priced:5000, price:6000 }
];
_.go(products,
    _.filter(function (p) {
        return p.discounted_priced < p.price;
    }),
    _.sort_by('discounted_priced'),
    _.first,_.val('name'));


_.go(products,_.reject(p =>p.discounted_priced < p.price),_.sort_by('discounted_priced'),_.first,_.val('id'), console.log);