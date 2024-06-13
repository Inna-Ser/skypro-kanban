const baseURL = "https://wedev-api.sky.pro/api/kanban";
const authURL = "https://wedev-api.sky.pro/api/user";


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
        console.error("Ошибка при авторизации пользователя:", error.message);
        throw error;
    }
}

export const registration = async ({
    login,
    name,
    password
}) => {
    try {
        const response = await fetch(authURL, {
            method: "POST",
            body: JSON.stringify({
                login,
                name,
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


export const addTask = async ({
    title,
    topic,
    description,
    status,
    date,
    token
}) => {
    try {
        const response = await fetch(baseURL, {
            method: "POST",
            headers: {
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                title,
                topic,
                description,
                status,
                date
            })
        });
        if (!response.ok) {
            throw new Error("Ошибка при добавления задачи:" + response.status);
        }
        return await response.json();
    } catch (error) {
        console.error("Ошибка при добавлении задачи:", error.message);
        throw error;
    }
}

export const deleteTask = async ({
    id,
    token
}) => {
    try {
        const response = await fetch(baseURL + "/" + id, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error("Ошибка при удалении задачи:" + response.status);
        }
        return await response.json();
    } catch (error) {
        console.error("Ошибка при удалении задачи:", error.message);
        throw error;
    }
}

export const editTask = async ({
    id,
    title,
    topic,
    status,
    description,
    date,
    token
}) => {
    try {
        const response = await fetch(baseURL + "/" + id, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                title,
                topic,
                status,
                description,
                date
            })
        });
        if (!response.ok) {
            throw new Error("Ошибка при редактировании задачи:" + response.status);
        }
        return await response.json();
    } catch (error) {
        console.error("Ошибка при редактировании задачи:", error.message);
        throw error;
    }
}