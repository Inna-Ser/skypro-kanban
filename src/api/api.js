const baseURL = "https://wedev-api.sky.pro/api/kanban";
const authURL = "https://wedev-api.sky.pro/api/user";

export const getTask = async ({
    token
}) => {
    try {
        const response = await fetch(baseURL, {
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error("Ошибка HTTP: " + response.status);
        }
        return await response.json();
    } catch (error) {
        console.error("Ошибка при регистрации пользователя:", error.message);
        throw error;
    }
}

export const signin = async ({
    login,
    password
}) => {
    try {
        const response = await fetch(authURL + "/login", {
            method: "POST",
            body: JSON.stringify({
                login,
                password
            })
        });
        if (!response.ok) {
            throw new Error("Ошибка HTTP: " + response.status);
        }
        return await response.json();
    } catch (error) {
        console.error("Ошибка при регистрации пользователя:", error.message);
        throw error;
    }
}