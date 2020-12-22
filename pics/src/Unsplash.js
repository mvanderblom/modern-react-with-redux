import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    params: {
        client_id: 'bO9GgCjH19BVRl_avTFZVjiYMgpqDRSpwmBeLWSwxE8',
    }
});