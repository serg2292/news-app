import { auth, capitalize, compare, dateNow, sortNews, transformDate } from "./helpers";

const users = [
    {
        login: 'admin',
        password: 'admin'
    },
    {
        login: 'usr',
        password: 'usr45'
    },
    {
        login: 'cat',
        password: 'fish007'
    },
]

const admin = {
    login: 'admin',
    password: 'admin'
}

const guest = {
    login: 'guest',
    password: '12345'
}

test('transform date', () => {
    expect(transformDate(22)).toEqual('22');
    expect(transformDate(1)).toEqual('01');
});

test('date now', () => {
    expect(dateNow()).toMatch(/\d{4}-\d{2}-\d{2}/);
});

test('compare', () => {
    expect(compare({ login: 'user', password: 'password' }, { login: 'user', password: 'password' })).toBe(true);
    expect(compare({ login: 'user', password: 'passwords' }, { login: 'user', password: 'password' })).toBe(false);
});


test('auth', () => {
    expect(auth(users, admin)).toEqual(true);
    expect(auth(users, guest)).toEqual(false);
});

test('capitalize', () => {
    expect(capitalize('hello')).toEqual("Hello");
    expect(capitalize('')).toEqual('');
    expect(capitalize('Hello')).toEqual("Hello");
    expect(capitalize('123')).toEqual("123");
});

test('sort news', () => {
    expect(sortNews([{ date: "2020-05-29", name: "Новость" }, { date: "2021-05-29", name: "Следующая новость" }])).toEqual([{ date: "2021-05-29", name: "Следующая новость" }, { date: "2020-05-29", name: "Новость" }]);
});
