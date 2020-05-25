import Api from "./Api";

class FileUploadApi {

    getPostByCommunityIdAndServiceType(communityId, serviceType, searchText) {
        return Api.post('/photos=' + communityId + '&searchText=' + searchText, serviceType);
    }

    saveServicePost(serviceData) {
        return Api.post("/photos/create", serviceData)
    }

    getPostByUserIdAndServiceType(userId, serviceType, searchText) {
        return Api.post('/photos?userId=' + userId + '&searchText=' + searchText, serviceType);
    }

    deletePost(postId) {
        return Api.delete('/services/' + postId);
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

export default new FileUploadApi();
