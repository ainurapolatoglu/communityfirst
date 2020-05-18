import Api from "./Api";

class PostApi {

    getPostByCommunityIdAndServiceType(communityId, serviceType) {
        return Api.post('/services?communityId=' + communityId, serviceType);
    }

    saveServicePost(serviceData) {
        return Api.post("/services/create", serviceData)
    }

    getPostByUserIdAndServiceType(userId, serviceType) {
        return Api.post('/services?userId=' + userId, serviceType);
    }

    deletePost(postId) {
        return Api.delete('/services/'+ postId);
    }

    updatePost(post) {
        return Api.put('/services', post);
    }

    getPostById(postId) {
        return Api.get('/services/' + postId);
    }

    getItemPostById(itemPostId) {
        return Api.get('/items/' + itemPostId);
    }
}

export default new PostApi();
