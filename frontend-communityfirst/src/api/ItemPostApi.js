import Api from "./Api";

class ItemPostApi {

    getPostByCommunityIdAndItemType(communityId, itemType) {
        return Api.post('/items?communityId=' + communityId, itemType);
    }

    saveItemPost(itemData) {
        return Api.post("/items/create", itemData)
    }

    getPostByUserIdAndItemType(userId, itemType) {
        return Api.post('/items?userId=' + userId, itemType);
    }

    deletePost(postId) {
        return Api.delete('/items/' + postId);
    }
    updatePost(post) {
        return Api.put('/items', post);
    }

    getPostById(postId) {
        return Api.get('/items/' + postId);
    }

}

export default new ItemPostApi();
