const products = [
    {id: 'p-01', name :'상품1'},
    {id: 'p-02', name :'상품2'},
    {id: 'p-03', name :'상품3'}
]

const productListEl = document.getElementById('product-list');
products.map(product => {
    const newEl = document.createElement('li');
    newEl.id = product.id;
    newEl.innerText = product.name;
    return newEl;
}).forEach(productEl => {
    productListEl.appendChild(productEl);
});
setTimeout(() => {
    const seconEl = document.querySelector('ul li:nth-child(2)');
    seconEl.remove();
}, 1000);
productListEl.after("<div>잘못된사용</div>");
productListEl.insertAdjacentHTML('afterend',"<p>추가된 문단</p>");