import usersAuthReducer, { exitAuth, setAuth } from "./users-auth.slice";

describe('userAuthSlice', () => {
    test('should auth registred user with "setAuth" action', () => {
        const action = {
            type: setAuth.type,
            payload: {
                login: 'admin',
                password: 'admin123'
            }
        };

        const result = usersAuthReducer({
            users: [
                {
                    login: 'admin',
                    password: 'admin123'
                }
            ],
            authLogin: null,
        }, action)

        expect(result.authLogin).toBe('admin')
    });
    test('should exit registred user with "exitAuth" action', () => {
        const action = {
            type: exitAuth.type,
        }

        const result = usersAuthReducer({
            users: [
                {
                    login: 'admin',
                    password: 'admin123'
                }
            ],
            authLogin: 'admin',
        }, action)
        expect(result.authLogin).toBeNull()
    });
})