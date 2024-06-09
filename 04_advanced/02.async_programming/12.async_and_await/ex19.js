/**
 * jsonplaceholder 에서 사용자의 아이템 가져오기
 */

class UserItem {
    static BASE_URL = 'https://jsonplaceholder.typicode.com';
    async items(userId) {
        throw new Error('UserItem을 상속하여 items를 구현해 주세요');
    }
}

class Todo extends UserItem {
    async #json(userId) {
        const response = await fetch(`${UserItem.BASE_URL}/users/${userId}/todos`);
        return response.json();
    }

    #extractItems(json) {
        return json.map(item => `[TODO] ${item.title}`);
    }

    async items(userId) {
        const json = await this.#json(userId);
        return this.#extractItems(json);
    }
}

class Post extends UserItem {
    async #json(userId) {
        const response = await fetch(`${UserItem.BASE_URL}/users/${userId}/posts`);
        return response.json();
    }

    #extractItems(json) {
        return json.map(item => `[POST] ${item.title}`);
    }

    async items(userId) {
        const json = await this.#json(userId);
        return this.#extractItems(json);
    }
}

class Album extends UserItem {
    async #json(userId) {
        const response = await fetch(`${UserItem.BASE_URL}/users/${userId}/albums`);
        return response.json();
    }

    #extractItems(json) {
        return json.map(item => `[ALBUM] ${item.title}`);
    }

    async items(userId) {
        const json = await this.#json(userId);
        return this.#extractItems(json);
    }
}

(async () => {
    const promises = [
        new Todo().items(1),
        new Post().items(1),
        new Album().items(1),
    ]

    try {
        const userItems = await Promise.all(promises);
        console.log(userItems);
    } catch (error) {
        console.log('오류가 발생했습니다');
        console.log(error);
    }
})();
