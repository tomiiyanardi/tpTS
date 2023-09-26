type Rating = {
    "count" : number;
    "rate" : number;
};

type Product = {
    "category": string;
    "description": string;
    "id": number;
    "image": string;
    "price": number;
    "rating": Rating;  
    "title": string;
};

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((products : Product[]) => {
        let tableHTML: string = '<thead><tr><th>ID</th><th>Tittles</th><th>Description</th><th>Price</th></tr></thead><tbody>';
        products.forEach((p:Product) => {
            tableHTML += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.description}</td><td>${p.price}</td></tr>`
        });
        tableHTML += '</tbody>';
        document.querySelector('#tableElement')!.innerHTML = tableHTML;
        const spinnerElement: HTMLElement = document.querySelector('#spinnerContainer')!;
        spinnerElement.style.display = 'none';
    });