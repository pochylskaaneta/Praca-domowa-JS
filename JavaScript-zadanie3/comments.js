var user = window.users 

window.comments = [
    {
        id: 'kom001',
        author: user[0],
        body: 'Dobry artykuł',
        dataAdded: new Date (2020,2,15),
        likes: 0,
        dislikes: 0
    },
    {
        id: 'kom002',
        author: user[2],
        body: 'Za bardzo lubię czekoladę',
        dataAdded: new Date (2020,2,16),
        likes: 5,
        dislikes: 0  
    },
    {
        id: 'kom003',
        author: user[1],
        body: 'To jest temat rzeka',
        dataAdded: new Date (2020,2,18),
        likes: 7,
        dislikes: 2  
    }
]

