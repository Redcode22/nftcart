class StrapiApi {
  baseUrl: string;
  mediaUrl: string;

  constructor() {
    this.baseUrl = "http://localhost:1337/api";
    this.mediaUrl = "http://localhost:1337/uploads";
  }

  getAllProducts = async () => {
    const response = await fetch(this.baseUrl + "/products")
    const data = await response.json();
    data.data.forEach((product: any) => {
      product.attributes.imageUrl = this.mediaUrl + "/" + product.attributes.image;
    })
    return data;
  }

  getProductByID = async (id: string) => {
    const response = await fetch(this.baseUrl + "/products/" + id)
    const data = await response.json();
    data.data.attributes.imageUrl = this.mediaUrl + "/" + data.data.attributes.image;
    return data;
  }

  provideBaseUrl = () => {
    return this.baseUrl;
  }

  addOrder = async (order: any) => {
    console.log(order)
    const response = await fetch(this.baseUrl + "/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: {
          address: order.walletAddress,
          name: order.name,
          serialId: order.serialId,
          hash: order.nftData.hash
        }
      })
    })
    return await response.json();
  }

  getAllOrders = async () => {
    const response = await fetch(this.baseUrl + "/orders")
    const data = await response.json();
    data.data.forEach((product: any) => {
      product.attributes.imageUrl = this.mediaUrl + "/" + product.attributes.image;
    })
    return await data;
  }
}

export default StrapiApi;