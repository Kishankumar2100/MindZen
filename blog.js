document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:5000/api/data')
        .then(response => response.json())
        .then(data => {
            console.log("data",data);
            const blogArea = document.querySelector('.blog-area');
            data.forEach(item => {
                const card = `
                    <div class="card">
                        <img class="card-img-top" src="${item.image}" alt="${item.title}">
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.description}</p>
                            <a href="${item.url}" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                `;
                blogArea.innerHTML += card;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
