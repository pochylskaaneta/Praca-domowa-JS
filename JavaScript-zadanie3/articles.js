var user = window.users

window.articles = [
    {
        id: 01,
        body: 'Jedzenie powinno przyciągać wzrok, tak samo jak jego zapach. Nasze pożywienie jest tym lepsze, im bardziej zróżnicowane. Poprzez właściwe dobieranie produktów, dostarczymy organizmowi składniki konieczne do zachowania pełni zdrowia',
        dataAdded: new Date(2020,2,3),
        dataModyfication: new Date (2020,2,4),
        author: user[0],
        title: 'Zdrowa dieta',
        views: 12,
        keyWords: ['dieta','zdrowie'],

    },
    {
        id: 02,
        body: 'Powszechnie przyjęło się powiedzenie, że sport to zdrowie. Jednak podejmowanie wszelkiego rodzaju aktywności fizycznej daje nam o wiele więcej korzyści. Sport wpływa nie tylko na poprawę naszego zdrowia i kondycji, ale też pozytywnie oddziałuje na nasz nastrój',
        dataAdded: new Date(2020,2,6),
        dataModyfication: new Date (2020,2,8),
        author: user[1],
        title: 'Sport to zdrowie',
        views: 50,
        keyWords: ['sport','zdrowie'],  
    }
]


