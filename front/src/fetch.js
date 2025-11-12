import api from "./api";

const FetchProducts = async () => {
    try {
        const response = await api.get("/products")
        console.log(response)
        const { data } = response
        return data
    } catch (error) {
        console.log(error)
        return { error, message: error.message }
    }
}

export default FetchProducts